/*
 *
 * Alert actions
 *
 */

import {
  SHOW_ALERT,
  HIDE_ALERT,
} from './constants';

export function showAlert(alert) {
  return {
    type: SHOW_ALERT,
    payload: alert,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
