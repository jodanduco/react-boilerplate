/*
 *
 * Alert reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SHOW_ALERT,
  HIDE_ALERT,
} from './constants';

const initialState = fromJS({
  isOpened: false,
  config: {
    type: '',
    strongText: '',
    text: '',
  }
});

function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return state
        .set('config', action.payload)
        .set('isOpened', true);
    case HIDE_ALERT:
      return initialState;
    default:
      return state;
  }
}

export default alertReducer;
