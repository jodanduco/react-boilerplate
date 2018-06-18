/*
 *
 * PostsListPage actions
 *
 */

import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
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

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  };
}
export function deletePostSuccess() {
  return {
    type: DELETE_POST_SUCCESS,
  };
}
export function deletePostError(error) {
  return {
    type: DELETE_POST_ERROR,
    payload: error,
  };
}
