/*
 *
 * Weather reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TERM,
  LOAD_WEATHER_LIST_SUCCESS,
  DELETE_WEATHER_LIST,
} from './constants';

const initialState = fromJS({
  city: '',
  weatherData: false,
});

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TERM:
      return state.set('city', action.term);
    case LOAD_WEATHER_LIST_SUCCESS:
      const weatherData = [action.weatherData, ...state.get('weatherData')];
      return state
        .set('error', false)
        .set('weatherData', weatherData);
    case DELETE_WEATHER_LIST:
      return state.set('weatherData', []);
    default:
      return state;
  }
}

export default weatherReducer;
