import { createSelector } from 'reselect';

/**
 * Direct selector to the postsListPage state domain
 */
const selectPostsListPageDomain = (state) => state.get('postsListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PostsListPage
 */

const makeSelectPostsListPage = () => createSelector(
  selectPostsListPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectPostsListPage;
export {
  selectPostsListPageDomain,
};
