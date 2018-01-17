import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

StoreProvider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.node,
};

export default StoreProvider;
