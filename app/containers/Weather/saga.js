import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_WEATHER_LIST } from 'containers/App/constants';
import { makeSelectTerm } from 'containers/Weather/selectors';
import { weatherListLoaded, weatherListLoadingError } from 'containers/App/actions';
import request from 'utils/request';

const API_KEY = '294abe85c7d46fee00896b8bd9dbe4a6';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function* getWeatherList() {
  const term = yield select(makeSelectTerm());
  const countryCode = 'us';
  const query = `q=${term},${countryCode}`;
  const requestURL = `${ROOT_URL}&${query}`;
  try {
    const response = yield call(request, requestURL);
    const weatherList = response.list;
    const city = response.city;
    yield put(weatherListLoaded(weatherList, city));
  } catch (err) {
    yield put(weatherListLoadingError(err));
  }
}


export default function* weatherSaga() {
  yield takeLatest(LOAD_WEATHER_LIST, getWeatherList);
}
