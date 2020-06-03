import { handleActions } from 'redux-actions';
// action
import { addCurrency } from '../actions/currencyAction';
// state
import { currencyState } from '../constants/defaultState';

export default {
  currency: handleActions({
    [addCurrency]: (state, { payload = {} }) => ({ ...state, ...payload }),
  }, currencyState),
};
