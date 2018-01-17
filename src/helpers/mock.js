import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { loadingBarMiddleware } from 'react-redux-loading-bar';
import ApiClient from 'helpers/ApiClient';
import promiseMiddleware from 'store/middleware/redux-promise-act';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const api = new MockAdapter(axios);
const client = new ApiClient();

const middlewares = [
  thunk,
  promiseMiddleware(client),
  // loadingBarMiddleware,
];

const createStore = configureStore(middlewares);

export {
  api,
  createStore,
};
