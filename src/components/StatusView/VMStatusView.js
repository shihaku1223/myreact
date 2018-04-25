import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

import TabViewContent from 'components/common/TabView/TabViewContent';
import BootstrapButton from 'components/Button/BootstrapButton';

import withSocketIOChannel from 'decorators/withSocketIOChannel';
import { connect } from 'react-redux';

import makeCancelable from 'decorators/makeCancelablePromise';

class VMStatusView extends React.Component {

  static propTypes = {
    createDAMain: PropTypes.func.isRequired,
  }

  static defaultProps = {
      defaultText: 'Loading...'
  }

  static styles = {
    group: {
      marginTop: '10px',
      width: '500px',
    },
    openShellBtn: {
      marginTop: '10px',
    },
    main: {
      display: 'flex'
    },
    content: {
      marginLeft: '10px',
      width: '100%',
    },
    panel: {
      marginLeft: '10px',
      minWidth: '200px',
    },
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

  handleCreateDAMain = () => {
    const { createDAMain } = this.props;
    console.log(createDAMain);
  }

  render() {
    const uuidText = this.state.uuidText;
    const ipText = this.state.ipText;
    const vncAddress = '';
    return(
      <TabViewContent>
        <div style={VMStatusView.styles.main} >

          <div id='content' style={VMStatusView.styles.content} >
            <div style={VMStatusView.styles.group}>
              <label htmlFor="uuid">UUID</label>
              <input id="uuid" className="form-control" type='text' placeholder={uuidText} readOnly/>
            </div>

            <div style={VMStatusView.styles.group}>
              <label htmlFor="ip">IP Address</label>
              <input id="ip" className="form-control" type='text' placeholder={ipText} readOnly/>
            </div>
            <BootstrapButton style={VMStatusView.styles.openShellBtn}
              text='Open Shell' className='btn-info' onClick={this.handleOpenShell}/>
          </div>

          <div id='panel' style={VMStatusView.styles.panel} >
            <div className='btn-group-vertical'>
            <BootstrapButton style={VMStatusView.styles.openShellBtn}
              text='Create DAMain' className='btn-info' onClick={this.handleCreateDAMain}/>
            <BootstrapButton style={VMStatusView.styles.openShellBtn}
              text='Destory DAMain' className='btn-danger' onClick={this.handleOpenShell}/>
            <BootstrapButton style={VMStatusView.styles.openShellBtn}
              text='Start' className='btn-primary' onClick={this.handleOpenShell}/>
            <BootstrapButton style={VMStatusView.styles.openShellBtn}
              text='Stop' className='btn-primary' onClick={this.handleOpenShell}/>
            </div>
          </div>

        </div>
      </TabViewContent>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDAMain: (params) => {
      dispatch({type: VM_CREATION, params });
    }
  }
}

export default connect(null, mapDispatchToProps)(
  withSocketIOChannel('vmstatus')(VMStatusView)
);
