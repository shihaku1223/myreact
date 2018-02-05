import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainFrame from 'components/MainFrame';
import PureButton from 'components/Button/PureButton';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import * as counterActions from 'actions/counter';

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, counterActions), dispatch)
  }
}

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = { count: 0 };
  }

  render() {
    const { dispatch, actions } = this.props;
    return (
      <MainFrame>
        <PureButton
          text='Counter'
          onClick={actions.increment}/>
      </MainFrame>
    );
  }
}

export default
  connect(mapStateToProps, mapDispatchToProps)(App);
