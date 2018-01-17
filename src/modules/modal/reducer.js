import { createReducer } from 'redux-act';
import {
  open,
  close,
} from './actions';

// default state
export const defaultState = {};

const handlerOpen = (state, { name = `default${new Date().getTime()}`, ...settings }) => ({
  ...state,
  [name]: settings,
});

const handlerClose = (state, payload) => {

  let name = payload;

  if (typeof payload !== 'string') {

    name = 'default';

  }

  const newState = { ...state };

  delete newState[name];

  return newState;

};

// reducer
export default createReducer({
  [open]: handlerOpen,
  [close]: handlerClose,
}, defaultState);
