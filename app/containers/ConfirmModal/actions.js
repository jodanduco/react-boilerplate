/*
 *
 * ConfirmModal actions
 *
 */

import {
  SHOW_MODAL,
  HIDE_MODAL,
} from './constants';

export function showModal(params) {
  return {
    type: SHOW_MODAL,
    payload: params,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
