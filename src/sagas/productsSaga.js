import {
  put, call, all, takeLatest, select,
} from 'redux-saga/effects';
// action
import {
  startLoader,
  endLoader,
  addProducts,
  addCurrency,
  getData,
  changeCurrency,
  changePrice,
  changeAmount,
} from '../actions';

import { serverGet } from '../helpers/requests';
import { productsUrl, rateUrl } from '../constants/urls';
// helpers
import sortArray from '../helpers/sortArray';
import { delay } from '../helpers';

const cloneDeep = require('lodash.clonedeep');

export function* getDataSaga() {
  try {
    yield put(startLoader());
    yield delay(1000);
    // eslint-disable-next-line no-shadow
    const [beers, rate] = yield all([
      call(serverGet, productsUrl),
      call(serverGet, rateUrl),
    ]);
    yield put(addProducts(beers));
    yield put(addCurrency({ BYN: rate.Cur_OfficialRate }));
    yield put(endLoader());
  } catch (err) {
    console.log(err);
    yield put(startLoader());
  }
}

export function* changeCurrencySaga(value) {
  // eslint-disable-next-line no-shadow
  const { products, basket, currency } = yield select((state) => state);


  if (value.payload in currency) {
    const productCurrency = cloneDeep(products.origin);
    productCurrency.forEach((product) => {
      product.price.value *= currency[value.payload];
      product.price.currency = 'value.payload';
    });
    const amount = productCurrency.reduce((acc, product) => {
      if (basket.productsID.includes(product.id)) {
        acc += product.price.value;
      }
      return acc;
    }, 0);
    yield put(changeAmount(amount));
    yield put(changePrice({ ...products, current: productCurrency }));
  } else {
    const productCurrency = cloneDeep(products.origin);
    const amount = productCurrency.reduce((acc, product) => {
      if (basket.productsID.includes(product.id)) {
        acc += product.price.value;
      }
      return acc;
    }, 0);
    yield put(changeAmount(amount));
    yield put(changePrice({ ...products, current: productCurrency }));
  }
}

export default function* products() {
  yield all([
    takeLatest(getData.toString(), getDataSaga),
    takeLatest(changeCurrency.toString(), changeCurrencySaga),
  ]);
}
