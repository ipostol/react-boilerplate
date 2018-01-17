import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';

import modal from 'modules/modal';
import notify from 'modules/notify';

export default combineReducers({
  reduxAsyncConnect,
  form,
  modal,
  notify,
  loadingBar: loadingBarReducer,
});
