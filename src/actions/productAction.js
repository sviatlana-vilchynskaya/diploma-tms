import { createActions } from 'redux-actions';

export const {
  addProducts,
  searchProducts,
  getData,
} = createActions(
  'ADD_PRODUCTS',
  'SEARCH_PRODUCTS',
  'GET_DATA',
);
