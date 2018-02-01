import 'rxjs';
import { Observable } from 'rxjs/Observable';

import ActionTypes from 'actions/ActionTypes';

export const startCountdown = (action$) => {
  return action$
        .ofType(ActionTypes.START_COUNTDOWN)
        .delay(3000)
        .mapTo({ type: ActionTypes.STOP_COUNTDOWN });
};
