/*
 *
 * Weather reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TERM,
  LOAD_WEATHER_LIST_SUCCESS,
} from './constants';

const initialState = fromJS({
  city: '',
  weatherList: [],
});

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TERM:
      return state.set('city', action.term);
    case LOAD_WEATHER_LIST_SUCCESS:
      return state
        .set('weatherList', action.weatherList);
    default:
      return state;
  }
}

export default weatherReducer;
