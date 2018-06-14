import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_POST } from './constants';
import request from 'utils/request';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jodanduco123';

export function* createPost(action) {
  const requestURL = `${ROOT_URL}/posts${API_KEY}`;
  const params = action.payload;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const requestParams = {
    method: 'post',
    body: JSON.stringify(params),
    headers,

  };
  try {
    const response = yield call(request, requestURL, requestParams);
  } catch (error) {
    console.log('error', error);
  }
}

export default function* postNewModalSaga() {
  yield takeLatest(CREATE_POST, createPost);
}
