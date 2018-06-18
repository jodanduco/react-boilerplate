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
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from './constants';

const initialState = fromJS({
  posts: false,
});

function postsListPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS: {
      const postsList = action.payload;
      // const postsListAsObj = _.mapKeys(postsList, 'id');
      return state
        .set('posts', postsList)
        .set('loading', false)
        .set('error', false);
    }
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false);
    case DELETE_POST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('postToDelete', action.payload);
    case DELETE_POST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case DELETE_POST_ERROR:
      const error = {
        code: action.payload.response.status,
        message: action.payload.response.statusText,
      };
      return state
        .set('loading', false)
        .set('error', error);
    default:
      return state;
  }
}

export default postsListPageReducer;
