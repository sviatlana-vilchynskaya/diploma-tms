import { createActions } from 'redux-actions';

export const {
  setBeers,
  searchBeers,
  getBeers,
  showMoreBeers,
} = createActions(
  'SET_BEERS',
  'SEARCH_BEERS',
  'GET_BEERS',
  'SHOW_MORE_BEERS',
);
