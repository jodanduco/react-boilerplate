import { createSelector } from 'reselect';

/**
 * Direct selector to the weather state domain
 */
const selectWeatherDomain = (state) => state.get('weather');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Weather
 */

const makeSelectWeather = () => createSelector(
  selectWeatherDomain,
  (substate) => substate.toJS()
);

export default makeSelectWeather;
export {
  selectWeatherDomain,
};
