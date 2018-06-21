import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { CREATE_POST } from './constants';
// Actions
import { showAlert } from 'containers/Alert/actions';
import { createPostSuccess, hideCreatePostModal } from './actions';
import { loadPosts } from '../PostsListPage/actions';


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
    yield call(request, requestURL, requestParams);
    yield put(createPostSuccess());
    yield put(loadPosts());
    yield put(hideCreatePostModal());
    const alertConfig = {
      type: 'success',
      strongText: 'Post',
      text: 'successfully created.',
    };
    yield put((showAlert(alertConfig)));
  } catch (error) {
    const alertConfig = {
      type: 'error',
      strongText: 'Error',
      text: 'on create post.',
    };
    yield put((showAlert(alertConfig)));
  }
}

export default function* postNewModalSaga() {
  yield takeLatest(CREATE_POST, createPost);
}
