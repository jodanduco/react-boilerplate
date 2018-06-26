import { createSelector } from 'reselect';

/**
 * Direct selector to the navBar state domain
 */
const selectNavBarDomain = (state) => state.get('navBar');
const selectRouteDomain = (state) => state.get('route');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavBar
 */

const makeSelectLocation = () => createSelector(
  selectRouteDomain,
  (substate) => substate.get('location').get('pathname')
);

export default makeSelectLocation;
export {
  selectNavBarDomain,
};
