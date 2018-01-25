import { INCREMENT, DECREMENT } from '../constants.js';

export default (state = 0, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
};
