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
  (postsListPageState) => postsListPageState.get('posts')
);

const makeSelectPostToDelete= () => createSelector(
  selectPostsListPageDomain,
  (postsListPageState) => postsListPageState.get('postToDelete')
);

export default makeSelectPostsListPage;
export {
  selectPostsListPageDomain,
  makeSelectPostToDelete,
};
