import { createReducer } from 'redux-act';
import {
  show,
} from './actions';

// default state
export const defaultState = {
  text: null,
  id: null,
};

const handlerShow = (state, text) => ({
  text,
  id: new Date().getTime(),
});

// reducer
export default createReducer({
  [show]: handlerShow,
}, defaultState);
