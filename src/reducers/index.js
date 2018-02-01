import { combineReducers } from 'redux';

import counter from './counter';
import counterStatus from './counterStatus';

const reducers = combineReducers({
  counter,
  counterStatus
});

export default reducers;

