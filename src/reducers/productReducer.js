import { handleActions } from 'redux-actions';
import cloneDeep from 'lodash.clonedeep';
// action
import {
  addProducts,
  sortDesc,
  sortAsc,
  searchProducts,
  currencyProducts,
  changePrice,
} from '../actions';
// state
import { productsState } from '../constants/defaultState';


export default {
  products: handleActions({
    [addProducts]: (state, { payload = [] }) => ({ current: payload, origin: payload }),
    [searchProducts]: (state, { payload = '' }) => {
      const reg = new RegExp(payload.searchString, 'i');

      return { ...state, current: state.origin.filter((product) => reg.test(product.title)) };
    },
  }, productsState),
};
