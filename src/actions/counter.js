import ActionTypes from './ActionTypes';

export const increment = () => {
  return {
    type: ActionTypes.COUNTER_INCREMENT
  };
};

export const decrement = () => {
  return {
    type: ActionsTypes.COUNTER_DECREMENT
  };
};
