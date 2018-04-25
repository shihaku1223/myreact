import SubProcess from '../server/process';

import isUUID from 'is-uuid';

const runVirm = (args) => {
  console.log(args);
  const proc = new SubProcess('/damain/virm/client', args);
  return proc.runSync();
}

const createVMRouter = (router) => {

  router.route('/vms')
    .get((req, res) => {
      res.json({ message: "Hello vms" });
    })
    /* create vm */
    .post((req, res) => {
      let args = [
        '--cmd', 'create',
      ];

      args.push('--category');
      if(req.body.category !== undefined) {
        args.push(req.body.category);
      } else {
        args.push('vm');
      }

      if(req.body.addresses !== undefined) {
        args.push('--addresses');
        args.push(req.body.addresses);
      }

      let ret = runVirm(args);
      let obj = JSON.parse(ret.stdout);
      res.json({ uuid: obj.uuid });
    });

  router.route('/vms/:uuid')
    .get((req, res) => {

      if(req.params.uuid !== undefined) {
        let args = [
          '--cmd', 'find',
        ];
        if(isUUID.anyNonNil(req.params.uuid)) {
          args.push('--uuid');
          args.push(req.params.uuid);
        } else {
          args.push('--name');
          args.push(req.params.uuid);
        }

        let ret = runVirm(args);
        res.json({ uuid: ret.stdout.trim().split('"')[1] });
      }
      else {
        res.json({ uuid: undefined });
      }
    });


  return router;
}

export { createVMRouter };
