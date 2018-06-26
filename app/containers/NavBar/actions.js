/*
 *
 * NavBar actions
 *
 */

import {
  SELECT_TAB,
} from './constants';

export function selectTab(selectedTab) {
  return {
    type: SELECT_TAB,
    payload: selectedTab,
  };
}
