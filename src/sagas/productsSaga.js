import {
  put, call, all, takeLatest
} from 'redux-saga/effects';
// action
import {
  startLoader,
  endLoader,
  addProducts,
  addCurrency,
  getData,
} from '../actions';

import { serverGet } from '../helpers/requests';
import { productsUrl, rateUrl } from '../constants/urls';

import { delay } from '../helpers';

export function* getDataSaga() {
  try {
    yield put(startLoader());
    yield delay(1000);

    const [beers] = yield all([
      call(serverGet, productsUrl),
      call(serverGet, rateUrl),
    ]);

    yield put(addProducts(beers));
    yield put(endLoader());
  } catch (err) {
    console.log(err);
    yield put(startLoader());
  }
}

export default function* products() {
  yield all([
    takeLatest(getData.toString(), getDataSaga),
  ]);
}
