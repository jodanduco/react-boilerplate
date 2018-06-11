/*
 *
 * SearchBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TERM,
} from './constants';

const initialState = fromJS({});

function searchBarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TERM:
      return state.set('term', action.term);
    default:
      return state;
  }
}

export default searchBarReducer;
