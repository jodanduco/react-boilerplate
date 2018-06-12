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
  return {
    type: LOAD_POSTS,
  };
}
export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    payload: posts,
  };
}
