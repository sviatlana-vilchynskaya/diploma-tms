import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';
import middleware, { sagaMiddleware } from './middleware';
import rootSagas from '../sagas';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  reducers,
  composeEnhancers(middleware),
);

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
