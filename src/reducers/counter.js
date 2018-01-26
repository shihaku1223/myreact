import ActionTypes from 'constants/ActionTypes';

export default (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.COUNTER_INCREMENT:
      return state + 1
    case ActionTypes.COUNTER_DECREMENT:
      return state - 1
    default:
      return state
  }
};
