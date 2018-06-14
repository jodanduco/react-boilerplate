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
    default:
      return state;
  }
}

export default postNewModalReducer;
