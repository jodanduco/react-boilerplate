import { createSelector } from 'reselect';

/**
 * Direct selector to the weather state domain
 */
const selectWeatherDomain = (state) => state.get('weather');
const selectSearchBarDomain = (state) => state.get('searchBar');

/**
 * Other specific selectors
 */


const makeSelectTerm = () => createSelector(
  selectSearchBarDomain,
  (searchBarState) => searchBarState.get('term')
);

const makeSelectWeatherList = () => createSelector(
  selectWeatherDomain,
  (weatherState) => weatherState.get('weatherData')
);

export {
  selectWeatherDomain,
  makeSelectTerm,
  makeSelectWeatherList,
};
