/*
 *
 * Signin reducer
 *
 */

import { fromJS } from 'immutable';
import { SIGNIN_USER } from './constants';

const initialState = fromJS({});

function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, auth: action.payload };
  }
  return state;
}

export default signinReducer;
