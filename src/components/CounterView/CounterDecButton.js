import React from 'react'

import ActionTypes from 'actions/ActionTypes';

import PureButton from 'components/Button/PureButton';
import BootstrapButton from 'components/Button/BootstrapButton';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import withCounterAction from 'components/CounterView/withCounterAction';

const CounterDecButton =
  withCounterAction('DEC', ActionTypes.COUNTER_DECREMENT)(BootstrapButton);

export default CounterDecButton;
