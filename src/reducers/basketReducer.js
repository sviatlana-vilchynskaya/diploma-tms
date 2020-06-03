import { handleActions } from 'redux-actions';
import { addToBasket, removeFromBasket, changeAmount } from '../actions/basketAction';
import { basketState } from '../constants/defaultState';

const defaultPayload = { productsID: '', priceValue: 0, priceCurrency: '' };

export default {
  basket: handleActions({
    [addToBasket]: (state, { payload = defaultPayload }) => {
      const newState = { ...state, productsID: [...state.productsID] };
      newState.productsID.push(payload.productsID);
      newState.count += 1;
      newState.amount += payload.priceValue;
      return newState;
    },
    [removeFromBasket]: (state, { payload = defaultPayload }) => {
      const newState = { ...state, productsID: [...state.productsID] };
      newState.productsID = newState.productsID.filter(
        (productsID) => productsID !== payload.productsID,
      );
      newState.count -= 1;
      newState.amount -= payload.priceValue;
      return newState;
    },
    [changeAmount]: (state, { payload = 0 }) => ({ ...state, amount: payload }),
  }, basketState),
};
