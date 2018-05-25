/*
 *
 * Signin actions
 *
 */

import {
  SIGNIN_USER,
} from './constants';

export function signinUser({ email, password }) {
  return {
    type: SIGNIN_USER,
  };
}
