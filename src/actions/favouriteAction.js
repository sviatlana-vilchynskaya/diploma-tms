import { createActions } from 'redux-actions';

export const {
  addToFavourite,
  removeFromFavourite,
} = createActions(
  'ADD_TO_FAVOURITE',
  'REMOVE_FROM_FAVOURITE',
);
