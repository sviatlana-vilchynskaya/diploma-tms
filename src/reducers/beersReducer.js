import { handleActions } from 'redux-actions';

// action
import {
  setBeers,
} from '../actions/beersAction';
// state
import { beersState } from '../constants/defaultState';


export default {
  beers: handleActions({
    [setBeers]: (state, { payload = [] }) => (payload),
  }, beersState),
};
