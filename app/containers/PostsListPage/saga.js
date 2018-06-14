/**
 * Gets the repositories of the user from Github
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS } from './constants';
import { postsLoaded } from './actions';

// import { makeSelectUsername } from 'containers/HomePage/selectors';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jodanduco123';

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  const requestURL = `${ROOT_URL}/posts${API_KEY}`;
  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postsData() {
  yield takeLatest(LOAD_POSTS, getPosts);
}
