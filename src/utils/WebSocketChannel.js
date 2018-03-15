
let instance = null

class WebSocketChannel {

  static ChannelState = {
    CONNECTED: 0,
    CLOSED: 1,
  }

  static getInstance() {
    if(!instance) {
      instance = new WebSocketChannel();
    }
    return instance;
  }

  constructor(context) {
    this.urlPrerix = 'channels';
  }

  connect() {
    this.ws = new WebSocket('ws://localhost:9000/' + this.urlPrerix);
    this.ws.onopen = this.handleOpen;
    this.ws.onmessage = this.handleMessage;
    this.ws.onerror = this.handleError;
    this.ws.onclose = this.handleClose;
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

export default WebSocketChannel;
