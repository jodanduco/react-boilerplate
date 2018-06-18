/*
 *
 * PostNewModal actions
 *
 */

import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  SHOW_NEW_POST_MODAL,
  HIDE_NEW_POST_MODAL,
} from './constants';

export function createPost(postData) {
  return {
    type: CREATE_POST,
    payload: postData,
  };
}

export function createPostSuccess() {
  return {
    type: CREATE_POST_SUCCESS,
  };
}

export function createPostError() {
  return {
    type: CREATE_POST_ERROR,
  };
}

export function showCreatePostModal(params) {
  return {
    type: SHOW_NEW_POST_MODAL,
    payload: params,
  };
}
export function hideCreatePostModal() {
  return {
    type: HIDE_NEW_POST_MODAL,
  };
}
