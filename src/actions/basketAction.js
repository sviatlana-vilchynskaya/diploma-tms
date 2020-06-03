import { createActions } from 'redux-actions';

export const {
  addToBasket,
  removeFromBasket,
  changeAmount,
} = createActions(
  'ADD_TO_BASKET',
  'REMOVE_FROM_BASKET',
  'CHANGE_AMOUNT',
);
