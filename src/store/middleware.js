import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger');
  // eslint-disable-next-line global-require
  const invariant = require('redux-immutable-state-invariant').default();
  middleware.push(invariant);
  middleware.push(createLogger({ collapsed: true }));
}

export default applyMiddleware(...middleware);
