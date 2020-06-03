import { createActions } from 'redux-actions';

export const {
  addProducts,
  searchProducts,
  currencyProducts,
  changePrice,
  getData,
} = createActions(
  'ADD_PRODUCTS',
  'SEARCH_PRODUCTS',
  'CURRENCY_PRODUCTS',
  'CHANGE_PRICE',
  'GET_DATA',
);
