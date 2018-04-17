import React from 'react';
import PropTypes from 'prop-types';

import TabViewContent from 'components/common/TabView/TabViewContent';
import BootstrapButton from 'components/Button/BootstrapButton';

import withSocketIOChannel from 'decorators/withSocketIOChannel';
import { connect } from 'react-redux';

import makeCancelable from 'decorators/makeCancelablePromise';

const withStatusText = (Component) => {
  return class extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return connect(mapStateToProps)((<Component {...this.props} />));
    }
  }
}

class VMStatusView extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
      defaultText: 'Loading...'
  }

  static styles = {
    group: {
      marginTop: '10px',
    },
    openShellBtn: {
      marginTop: '10px',
    }
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      uuidText: this.props.defaultText,
      ipText: this.props.defaultText
    };
  }

  componentDidMount() {
    const { wsChannel } = this.props;

    let cb = (data) => {
      const promise = new Promise(r => {
        this.setState({
          uuidText: data.uuid,
          ipText: data.ip
        });
      });

      this.cancelablePromise = makeCancelable(promise);

      this.cancelablePromise
        .promise
        .then(() => { console.log('resolve') })
        .catch(() => { console.log('canceled') });
    }

    wsChannel.listen('status', cb);
  }

  componentWillUnmount() {
    if(this.cancelablePromise !== undefined)
      this.cancelablePromise.cancel();

    const { wsChannel } = this.props;
    wsChannel.remove('status');
  }

  handleOpenShell = () => {
    console.log('refresh');
  }

  render() {
    const uuidText = this.state.uuidText;
    const ipText = this.state.ipText;
    const vncAddress = '';
    return(
      <TabViewContent>
        <div style={VMStatusView.styles.group}>
          <label htmlFor="uuid">UUID</label>
          <input id="uuid" className="form-control" type='text' placeholder={uuidText} readOnly/>
        </div>

        <div style={VMStatusView.styles.group}>
          <label htmlFor="ip">IP Address</label>
          <input id="ip" className="form-control" type='text' placeholder={ipText} readOnly/>
        </div>

        <BootstrapButton style={VMStatusView.styles.openShellBtn} text='Open Shell' className='btn-info' onClick={this.handleOpenShell}/>
      </TabViewContent>
    );
  }
}

export default withSocketIOChannel('vmstatus')(VMStatusView);
