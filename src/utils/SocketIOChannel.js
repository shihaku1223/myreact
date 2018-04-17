import client from 'socket.io-client';

let instance = null

class SocketIOChannel {

  static ChannelState = {
    CONNECTED: 0,
    CLOSED: 1,
  }

  static getInstance() {
    if(!instance) {
      instance = new SocketIOChannel();
    }
    return instance;
  }

  constructor(context) {
    this.urlPrefix = 'http://10.8.12.150:8999/channels';
  }

  connect(channelName) {
    const url = this.urlPrefix + '/' + channelName;
    console.log(url);
    this.socket = client(url);
  }

  disconnect() {
    this.socket.disconnect();
  }

  listen(ev, callback) {
    this.socket.on(ev, callback);
  }

  remove(ev) {
    this.socket.removeListener(ev);
  }

  handleOpen() {
    console.log('connection open');
  }

  handleMessage(e) {
    console.log(e);
    let obj = JSON.parse(e.data);
  }

  handleError(e) {
    console.log('connection error', e);
  }

  handleClose() {
    console.log('connection close');
  }
}

export default SocketIOChannel;
