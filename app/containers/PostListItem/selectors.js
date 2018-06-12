import { createSelector } from 'reselect';

/**
 * Direct selector to the postListItem state domain
 */
const selectPostListItemDomain = (state) => state.get('postListItem');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostListItem
 */

const makeSelectPostListItem = () => createSelector(
  selectPostListItemDomain,
  (substate) => substate.toJS()
);

export default makeSelectPostListItem;
export {
  selectPostListItemDomain,
};
