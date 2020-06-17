import { all, fork } from 'redux-saga/effects';

import beers from './beersSaga';

export default function* rootSaga() {
  yield all([
    fork(beers),
  ]);
}
