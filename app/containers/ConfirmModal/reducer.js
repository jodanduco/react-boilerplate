/*
 *
 * ConfirmModal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SHOW_MODAL,
  HIDE_MODAL,
} from './constants';

const initialState = fromJS({
  opened: false,
  message: '',
  callbaks: {
    ok: {},
    cancel: {},
  },
});

function confirmModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return state
        .set('message', action.payload.message)
        .set('callbacks', action.payload.callbaks)
        .set('opened', true);
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default confirmModalReducer;
