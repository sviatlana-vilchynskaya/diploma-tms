import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favouriteReducer from './favouriteReducer';
import loadReducer from './loadReducer';
import beersReducer from './beersReducer';
import appReducers from './appReducers';


const reducers = persistReducer({
  key: 'root',
  storage,
  whitelist: [
    'favourite',
    'beers',
  ],

},
combineReducers({
  ...favouriteReducer,
  ...loadReducer,
  ...beersReducer,
  ...appReducers,
}));

export default reducers;
