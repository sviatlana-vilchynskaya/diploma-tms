import { handleActions } from 'redux-actions';
// Actions
import { switchTheme } from '../actions';
// Constants
import { appState } from '../constants/defaultState';

export default {
  app: handleActions({
    [switchTheme]: (state) => ({
      ...state,
      lightTheme: !state.lightTheme,
      checked: !state.checked,
    }),
  }, appState),
};
