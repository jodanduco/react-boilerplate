/*
 *
 * SearchBar actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_TERM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeTerm(term) {
  return {
    type: CHANGE_TERM,
    term,
  };
}
