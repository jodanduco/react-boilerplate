/*
 *
 * PostsListPage actions
 *
 */

import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
} from './constants';

export function loadPosts() {
  debugger
  return {
    type: LOAD_POSTS,
  };
}
export function postsLoaded(posts) {
  debugger
  return {
    type: LOAD_POSTS_SUCCESS,
    payload: posts,
  };
}
