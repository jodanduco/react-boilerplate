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
  opened: false,
  config: {
    type: 'warning',
    strongText: 'Strong test',
    text: 'Hello wordl',
  }
});

function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return state
        .set('alert', action.payload);
    case HIDE_ALERT:
      return initialState;
    default:
      return state;
  }
}

export default alertReducer;
