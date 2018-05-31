/*
 *
 * Signin actions
 *
 */

import {
  SIGNIN_USER,
} from './constants';

export function signinUser({ email, password, isLoggedIn }) {
  return {
    type: SIGNIN_USER,
    payload: {
      email,
      password,
      isLoggedIn,
    },
  };
}
