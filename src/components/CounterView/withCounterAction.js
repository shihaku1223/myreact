import React from 'react';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionTypes from 'actions/ActionTypes';
import * as counterActions from 'actions/counter';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, counterActions), dispatch)
  }
}

const withCounterAction = (text, action) => (Component) => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log('Create');
    }

    componentDidMount() {
      console.log('mounted');
    }

    componentWillUnmount() {
      console.log('will unmount');
    }

    handleButtonClick = () => {
      const { actions } = this.props;
      switch(action) {
        case ActionTypes.COUNTER_INCREMENT:
          actions.increment();
          break;
        case ActionTypes.COUNTER_DECREMENT:
          actions.decrement();
          break;
        default:
          actions.increment();
      }
    }

    render() {
      return(
        <Component
          {...this.props}
          text={text}
          onClick={this.handleButtonClick}/>
      );
    }
  }
}

const wrapper = (text, action) => {
  return(
    compose(
      connect(null, mapDispatchToProps),
      withCounterAction(text, action)
    ) 
  );
}

export default wrapper;
