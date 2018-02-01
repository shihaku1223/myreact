import { combineEpics } from 'redux-observable';

import { startCountdown } from './startCountdown';

export default combineEpics(
    startCountdown
);
