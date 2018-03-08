const webpack = require('webpack');
const express = require('express');
const http = require('http');
const path = require('path');
const url = require('url');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev.js');
const WebSocket = require('ws');

const app = express();
const compiler = webpack(config);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(middleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));

wss.on('connection', (ws, req) => {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

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
