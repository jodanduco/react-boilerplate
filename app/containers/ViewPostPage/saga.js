import request from 'utils/request';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  SHOW_POST,
} from './constants';
// Selectors
import { selectPostId } from './selectors';
// Actions 
import {
  showPostSuccess,
  showPostError,
} from './actions';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jodanduco123';

export function* getPost() {
  const id = yield select(selectPostId());
  const requestURL = `${ROOT_URL}/posts/${id}/${API_KEY}`;
  try {   
    const response = yield call(request, requestURL);
    yield put(showPostSuccess(response));
  } catch (error) {
    yield put(showPostError(error));
  }
}

export default function* showPostSaga() {
  yield takeLatest(SHOW_POST, getPost);
}
