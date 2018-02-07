import React from 'react'

import ActionTypes from 'actions/ActionTypes';

import PureButton from 'components/Button/PureButton';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import withCounterAction from 'components/CounterView/withCounterAction';

const CounterIncButton =
  withCounterAction('INC', ActionTypes.COUNTER_INCREMENT)(PureButton);

export default CounterIncButton;
