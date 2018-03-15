import React from 'react';
import WebSocketChannel from 'utils/WebSocketChannel';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const withWebSocketChannel = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.getWebSocketChannel().connect();
    }

    componentWillUnmount() {
      this.getWebSocketChannel().close();
    }

    getWebSocketChannel() {
      return WebSocketChannel.getInstance();
    }

    render() {
      return (<Component {...this.props}
          wsChannel={this.getWebSocketChannel()}/>);
    }
  }
}

export default withWebSocketChannel;
