import React from 'react';
import SocketIOChannel from 'utils/SocketIOChannel';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const withSocketIOChannel = (channelName) => (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.getSocketChannel().connect(channelName);
    }

    componentWillUnmount() {
      this.getSocketChannel().disconnect();
    }

    getSocketChannel() {
      return SocketIOChannel.getInstance();
    }

    render() {
      return (<Component {...this.props}
          wsChannel={this.getSocketChannel()}/>);
    }
  }
}

export default withSocketIOChannel;
