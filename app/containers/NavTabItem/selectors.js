import { createSelector } from 'reselect';

/**
 * Direct selector to the navTabItem state domain
 */
const selectNavTabItemDomain = (state) => state.get('navTabItem');
const selectRouteDomain = (state) => state.get('route');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavTabItem
 */

const makeSelectNavTabItem = () => createSelector(
  selectNavTabItemDomain,
  (substate) => substate.toJS()
);


const makeSelectLocation = () => createSelector(
  selectRouteDomain,
  (substate) => substate.get('location').get('pathname')
);

export default makeSelectNavTabItem;
export {
  selectNavTabItemDomain,
  selectRouteDomain,
  makeSelectLocation,
};
