import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import PureButton from 'components/Button/PureButton';
import AppHeader from 'components/AppHeader';

import * as counterActions from 'actions/counter';

const styles = {
  root: {
    width: '100%',
  },
};

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
    const { classes, dispatch, actions } = this.props;
    return (
      <div className={classes.root}>
        <AppHeader title='Title' />
        <PureButton
          text='Counter'
          onClick={actions.increment}/>
      </div>
    );
  }
}

export default
  connect(mapStateToProps, mapDispatchToProps)
    (withStyles(styles)(App));
