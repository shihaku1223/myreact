import Express from 'express';
import path from 'path';
import http from 'http';
import url from 'url';
import bodyParser from 'body-parser';

import { createVMRouter } from './api/vm.js';

const app = Express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = Express.Router();
router.get('/', (req, res) => {
  res.json({ message: "Hello" });
});

router = createVMRouter(router);
app.use('/api', router);

const port = process.env.PORT || 8998;
server.listen(port, () => {
    console.log("Listening on ", server.address());
});
