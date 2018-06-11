/*
 *
 * ActionsBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DELETE_WEATHER_LIST,
} from './constants';

const initialState = fromJS({});

function actionsBarReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_WEATHER_LIST:
      return state;
    default:
      return state;
  }
}

export default actionsBarReducer;
