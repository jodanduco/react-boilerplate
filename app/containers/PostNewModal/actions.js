/*
 *
 * PostNewModal actions
 *
 */

import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
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
