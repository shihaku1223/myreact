import 'rxjs';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import ActionTypes from 'actions/ActionTypes';

export const vmCreationEpics = (action$) => {
  return action$
        .ofType(ActionTypes.VM_CREATION)
        .delay(3000)
        .mapTo({ type: ActionTypes.VM_CHECK_STATUS });
};

export default combineEpics(
    vmCreationEpics,
);
