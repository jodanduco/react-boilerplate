/*
 *
 * Weather actions
 *
 */

import {
  DEFAULT_ACTION,
  DELETE_WEATHER_LIST,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function deleteWeatherList() {
  return {
    type: DELETE_WEATHER_LIST,
  };
}
