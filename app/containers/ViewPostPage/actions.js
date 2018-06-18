/*
 *
 * ViewPostPage actions
 *
 */

import {
  SHOW_POST,
  SHOW_POST_SUCCESS,
  SHOW_POST_ERROR,
} from './constants';

export function showPost(id) {
  return {
    type: SHOW_POST,
    payload: id,
  };
}
export function showPostSuccess(post) {
  return {
    type: SHOW_POST_SUCCESS,
    payload: post,
  };
}
export function showPostError(error) {
  return {
    type: SHOW_POST_ERROR,
    payload: error,
  };
}
