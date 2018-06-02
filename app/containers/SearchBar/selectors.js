import { createSelector } from 'reselect';

/**
 * Direct selector to the searchBar state domain
 */
const selectSearchBarDomain = (state) => state.get('searchBar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchBar
 */

const makeSelectSearchBar = () => createSelector(
  selectSearchBarDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchBar;
export {
  selectSearchBarDomain,
};
