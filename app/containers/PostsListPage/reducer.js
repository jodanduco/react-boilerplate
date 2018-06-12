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

const initialState = fromJS({});

function postsListPageReducer(state = initialState, action) {
  debugger
  switch (action.type) {
    case LOAD_POSTS_SUCCESS: {
      const postsList = action.payload.posts;
      const postsListAsObj = _.mapKeys(postsList, 'id');
      debugger;
      return state.set('posts', postsListAsObj);
    }
    case LOAD_POSTS:
    debugger
      return state
        .set('loading', true)
        .set('error', false);
    default:
      return state;
  }
}

export default postsListPageReducer;
