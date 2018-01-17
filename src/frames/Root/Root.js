import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import getRoutes from 'routes';
import StoreProvider from 'frames/StoreProvider';
import AsyncConnect from 'frames/AsyncConnect';

const Root = ({ store, history }) => (
  <StoreProvider store={store}>
    <Router
      render={AsyncConnect}
      routes={getRoutes(store)}
      history={history}
    />
  </StoreProvider>
);

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Root;
