import { createActions } from 'redux-actions';

export const {
  sortAsc,
  sortDesc,
} = createActions(
  'SORT_ASC',
  'SORT_DESC',
);
