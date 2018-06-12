/*
 *
 * PostsListPage reducer
 *
 */

import { fromJS } from 'immutable';
import _ from 'lodash';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  posts: [],
});

function postsListPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS: {
      const postsList = action.payload;
      const postsListAsObj = _.mapKeys(postsList, 'id');
      return state
        .set('posts', postsListAsObj)
        .set('loading', false)
        .set('error', false);
    }
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false);
    default:
      return state;
  }
}

export default postsListPageReducer;
