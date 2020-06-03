import { createActions } from 'redux-actions';

export const {
  addCurrency,
  changeCurrency,
} = createActions(
  'ADD_CURRENCY',
  'CHANGE_CURRENCY',
);
