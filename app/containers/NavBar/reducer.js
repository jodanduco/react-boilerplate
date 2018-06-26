/*
 *
 * NavBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_TAB,
} from './constants';

const initialState = fromJS({
  selectedTab: '/',
});

function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return state.set('selectedTab', action.payload);
    default:
      return state;
  }
}

export default navBarReducer;
