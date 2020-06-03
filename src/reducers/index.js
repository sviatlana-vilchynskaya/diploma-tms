import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import basketReducer from './basketReducer';
import loadReducer from './loadReducer';
import productsReducer from './productReducer';
import currencyReducer from './currencyReducer';
import appReducers from './appReducers';

const reducers = persistReducer({
  key: 'root',
  storage,
  whitelist: [
    'basket',
  ],

},
combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
  ...currencyReducer,
  ...appReducers,
}));

export default reducers;
