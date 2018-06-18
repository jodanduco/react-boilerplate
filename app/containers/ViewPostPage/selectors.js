import { createSelector } from 'reselect';

/**
 * Direct selector to the viewPostPage state domain
 */
const selectViewPostPageDomain = (state) => state.get('viewPostPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewPostPage
 */

const makeSelectViewPostPage = () => createSelector(
  selectViewPostPageDomain,
  (substate) => substate.toJS()
);


const selectPostId = () => createSelector(
  selectViewPostPageDomain,
  (substate) => substate.get('postId')
);

const selectPost = () => createSelector(
  selectViewPostPageDomain,
  (substate) => substate.get('post')
);

const selectLoading = () => createSelector(
  selectViewPostPageDomain,
  (substate) => substate.get('loading')
);

export default makeSelectViewPostPage;
export {
  selectViewPostPageDomain,
  selectPostId,
  selectPost,
  selectLoading,
};
