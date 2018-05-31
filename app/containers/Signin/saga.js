import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { signinUser } from './actions';
import { SIGNIN_USER } from 'containers/App/constants';

export function* signin() {
  // Select username from store
  //const username = yield select(makeSelectUsername());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    //const repos = yield call(request, requestURL);
    //yield put(reposLoaded(repos, username));
  } catch (err) {
    //yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNIN_USER ,signin);
}
