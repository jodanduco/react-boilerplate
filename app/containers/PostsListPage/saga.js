/**
 * Gets the repositories of the user from Github
 */

import request from 'utils/request';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOAD_POSTS, DELETE_POST } from './constants';
// Actions
import {
  postsLoaded,
  deletePostSuccess,
  deletePostError,
  loadPosts,
} from './actions';
import { showAlert } from 'containers/Alert/actions';
import { hideModal } from 'containers/ConfirmModal/actions';
// Selectors
import { makeSelectPostToDelete } from './selectors';

// import { makeSelectUsername } from 'containers/HomePage/selectors';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jodanduco123';

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  const requestURL = `${ROOT_URL}/posts${API_KEY}`;
  try {
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

export function* deletePostSaga() {
  const postToDelete = yield select(makeSelectPostToDelete());
  const requestURL = `${ROOT_URL}/posts/${postToDelete}/${API_KEY}`;
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const requestParams = {
      method: 'delete',
      headers,
    };
    yield call(request, requestURL, requestParams);
    yield put(deletePostSuccess());
    // Hide confirm  modal
    yield put(hideModal());
    const alertConfig = {
      type: 'success',
      strongText: 'Post',
      text: 'successfully delated',
    };
    yield put((showAlert(alertConfig)));
    // Refresh posts list
    yield put(loadPosts());
  } catch (err) {
    yield put(deletePostError(err));
  }
}



/**
 * Root saga manages watcher lifecycle
 */
export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getPosts);
  yield takeLatest(DELETE_POST, deletePostSaga);
}
