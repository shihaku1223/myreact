import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logProps from 'components/decorators/logProps';

import MainContentView from 'components/MainContentView';
import CommonText from 'components/common/CommonText';
import PureButton from 'components/Button/PureButton';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import CounterIncButton from 'components/CounterView/CounterIncButton';
import CounterDecButton from 'components/CounterView/CounterDecButton';

import * as counterActions from 'actions/counter';

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.reducers.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, counterActions), dispatch)
  }
}

class CounterView extends React.Component {

  static propTypes = {
    action: PropTypes.oneOf(['inc', 'dec']).isRequired,
  }

  static defaultProps = {
    action: 'inc',
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, actions, count } = this.props;
    const { children, actionButton } = this.props;
    return(
      <MainContentView>
        <CommonText text={String(count)}/>
        {children}
      </MainContentView>
    );
  }
}

export default
  connect(mapStateToProps, mapDispatchToProps)(logProps(CounterView));
