import Express from 'express';
import path from 'path';
import http from 'http';
import url from 'url';

import SubProcess from './server/process';

const app = Express();

const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a channel connected');

  const interval = setInterval(function ping() {
    socket.emit('test', 'Test');
  }, 3000);

  socket.on('disconnect', () => {
    console.log('a channel disconnected');
  });
})

io.of('channels/main').on('connection', (socket) => {
  console.log('main connected');

  const interval = setInterval(function ping() {
    socket.emit('test', 'Test');
  }, 3000);

  socket.on('disconnect', () => {
    console.log('main channel disconnected');
  });
})

io.of('channels/vmstatus').on('connection', (socket) => {
  console.log('vmstatus connected');

  const interval = setInterval(function ping() {

    let args = [
        '--cmd', 'find',
        '--category', 'vm',
        '--name', 'DAMain'
    ];

    try {
      let getUUID = new SubProcess('/damain/virm/client', args);
      let result = getUUID.runSync();

      let uuid = result.stdout.trim();
      let ip = undefined;
      args = [
        '--cmd', 'agent',
        '--uuid', uuid,
        '--agent', 'guest-network-get-interfaces'
      ]

      let getIP = new SubProcess('/damain/virm/client', args);
      result = getIP.runSync();

      try {
        let obj = JSON.parse(result.stdout);
        obj.forEach((item) => {
          if(item.name == 'eth0') {
            if(item['ip-addresses'] !== undefined) {
              item['ip-addresses'].forEach((addr) => {
                if(addr['ip-address'] !== undefined && addr['ip-address-type'] === 'ipv4') {
                  ip = addr['ip-address'] + '/' + addr['prefix'].toString();
                }
              });
            }
          }
        });

        socket.emit('status', { 'uuid': uuid, 'ip': ip });
      } catch(err) {
        console.log(err);
      }

    } catch(err) {
      console.log(err);
    }

  }, 3000);

  socket.on('disconnect', () => {
    console.log('vmstatus channel disconnected');
  });
})

/* serves main page */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

/* serves all the static files */
app.get(/^(.+)$/, (req, res) => {
    console.log('static file request : ' + req.params[0]);
    res.sendFile(path.join(__dirname, req.params[0]));
});

const port = process.env.PORT || 8999;
server.listen(port, () => {
    console.log("Listening on ", server.address());
});
