import { combineEpics } from 'redux-observable';

import { startCountdown } from './startCountdown';
import vmEpics from './vm';

export default combineEpics(
    startCountdown,
    vmEpics
);
