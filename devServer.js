const webpack = require('webpack');
const express = require('express');
const http = require('http');
const path = require('path');
const url = require('url');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev.js');
const SubProcess = require('./server/process');

const app = express();
const compiler = webpack(config);

const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(middleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));

const wsHandleError = (error) => {
  if(error === undefined)
    return;
  console.log(error);
};

const noop = () => {};

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

    let args = [
        '--cmd', 'find',
        '--category', 'vm',
        '--name', 'DAMain'
    ];

    let getUUID = new SubProcess('/damain/virm/client', args);
    let result = getUUID.runSync();
    console.log(result);


    socket.emit('test', 'Test');
  }, 3000);

  socket.on('disconnect', () => {
    console.log('main channel disconnected');
  });
})

io.of('channels/vmstatus').on('connection', (socket) => {
  console.log('vmstatus connected');

  const interval = setInterval(function ping() {
    socket.emit('test', 'Test');
  }, 3000);

  socket.on('disconnect', () => {
    console.log('vmstatus channel disconnected');
  });
})

app.use(hotMiddleware(compiler));
//app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));

/* serves main page */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

/* serves all the static files */
/*
app.get(/^(.+)$/, (req, res) => {
    console.log('static file request : ' + req.params[0]);
    res.sendFile(path.join(__dirname, req.params[0]));
});
*/

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log("Listening on ", server.address());
});
