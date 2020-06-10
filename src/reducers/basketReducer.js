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
      return newState;
    },
    [removeFromBasket]: (state, { payload = defaultPayload }) => {
      const newState = { ...state, productsID: [...state.productsID] };
      newState.productsID = newState.productsID.filter(
        (productsID) => productsID !== payload.productsID,
      );
      newState.count -= 1;
      return newState;
    },
  }, basketState),
};
