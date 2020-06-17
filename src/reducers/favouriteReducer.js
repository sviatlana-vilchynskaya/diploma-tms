import { handleActions } from 'redux-actions';
// actions
import { addToFavourite, removeFromFavourite } from '../actions/favouriteAction';
// constants
import { favouriteState } from '../constants/defaultState';

const defaultPayload = { beerID: '' };

export default {
  favourite: handleActions({
    [addToFavourite]: (state, { payload = defaultPayload }) => {
      const newState = { ...state, beersID: [...state.beersID] };

      newState.beersID.push(payload.beerID);

      return newState;
    },
    [removeFromFavourite]: (state, { payload = defaultPayload }) => {
      const newState = { ...state, beersID: [...state.beersID] };

      newState.beersID = newState.beersID.filter(
        (beerID) => beerID !== payload.beerID,
      );

      return newState;
    },
  }, favouriteState),
};
