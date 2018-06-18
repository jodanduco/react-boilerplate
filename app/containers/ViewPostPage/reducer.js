/*
 *
 * ViewPostPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SHOW_POST,
  SHOW_POST_SUCCESS,
  SHOW_POST_ERROR,
} from './constants';

const initialState = fromJS({
  postId: null,
  post: {
    title: '',
    categories: '',
    content: '',
  },
});

function viewPostPageReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_POST:
      return state
        .set('loading', true)
        .set('postId', action.payload);
    case SHOW_POST_SUCCESS:
      return state
        .set('post', action.payload)
        .set('loading', false)
        .set('error', false);
    case SHOW_POST_ERROR:
      return state
        .set('loading', false)
        .set('error', action.payload);
    default:
      return state;
  }
}

export default viewPostPageReducer;
