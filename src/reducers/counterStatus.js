import ActionTypes from 'actions/ActionTypes';

export default (state = false, action) => {
  switch(action.type) {
    case ActionTypes.START_COUNTDOWN:
      return true;
    case ActionTypes.STOP_COUNTDOWN:
      return false;
    default:
      return state;
  }
}
