/*
 *
 * PostNewModal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  SHOW_NEW_POST_MODAL,
  HIDE_NEW_POST_MODAL,
} from './constants';

const initialState = fromJS({});

function postNewModalReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return state
        .set('loading', true);
    case CREATE_POST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case CREATE_POST_ERROR:
      return state
        .set('loading', false)
        .set('error', true);
    case SHOW_NEW_POST_MODAL:
      return state
        .set('opened', true);
    case HIDE_NEW_POST_MODAL:
      return state
        .set('opened', false);
    default:
      return state;
  }
}

export default postNewModalReducer;
