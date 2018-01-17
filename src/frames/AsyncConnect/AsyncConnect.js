import React from 'react';
import { ReduxAsyncConnect } from 'redux-connect';
import { applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

const clientProps = {};

if (!IS_SERVER) {

  clientProps.render = applyRouterMiddleware(useScroll());

}

const AsyncConnect = props => (
  <ReduxAsyncConnect
    {...props}
    {...clientProps}
  />
);

export default AsyncConnect;
