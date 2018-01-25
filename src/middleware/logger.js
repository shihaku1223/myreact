//import Qconsole from 'utils/Qconsole';
//import ActionTypes from 'constants/ActionTypes';

/**
 * Logs all actions and states after they are dispatched.
 */

const logger = store => next => action => {
  console.log('will dispatch', action);
  let result = next(action);

  console.log('state after dispatch', store.getState());

  return result;
  /*
    let result,
        title = action.type,
        ignoreList = [ActionTypes.UPDATE_VM_SCREENSHOT, ActionTypes.UPDATE_VM_CPU_USAGE];
    if (process.env.QVS_DEBUG && ignoreList.indexOf(title) === -1) {
        if (action.hasOwnProperty('debug')) {
            title += (' : ' + action.debug);
        }
        Qconsole.group(title);
        Qconsole.info('dispatching', action);
        result = next(action);
        Qconsole.log('next state', store.getState());
        Qconsole.groupEnd(title);
    } else {
        result = next(action);
    }
    return result;
  */
};

export default logger;
