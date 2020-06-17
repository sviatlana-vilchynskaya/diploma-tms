import {
  put, call, all, takeLatest, select, delay,
} from 'redux-saga/effects';
// action
import {
  startLoader,
  setBeers,
  endLoader,
  getBeers,
  searchBeers,
} from '../actions';

// constants
import { beersUrl, beersSearchUrl } from '../constants/urls';
// helpers
import { serverGet } from '../helpers/requests';


export function* getBeersSaga() {
  try {
    const currentBeers = yield select((state) => state.beers);

    if (!currentBeers.length) {
      yield put(startLoader());
      yield delay(1000);

      const beers = yield call(serverGet, beersUrl());

      yield put(setBeers(beers));
      yield put(endLoader());
    }
  } catch (err) {
    console.error(err.message);
    yield put(endLoader());
  }
}

export function* searchBeersSaga({ payload }) {
  try {
    yield put(startLoader());

    if (!payload.length) {
      const beers = yield call(serverGet, beersUrl());
      yield put(setBeers(beers));
    } else if (payload.length) {
      const foundBeers = yield call(serverGet, beersSearchUrl(payload));
      yield put(setBeers(foundBeers));
    }

    yield put(endLoader());
  } catch (err) {
    console.error(err.message);
    yield put(endLoader());
  }
}

export default function* beers() {
  yield all([
    takeLatest(getBeers.toString(), getBeersSaga),
    takeLatest(searchBeers.toString(), searchBeersSaga),
  ]);
}
