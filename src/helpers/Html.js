import React from 'react';
import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

const Html = ({ assets, component, store }) => {

  const content = component ? renderToString(component) : '';
  const head = Helmet.renderStatic();
  const data = store ? `window.__data=${serialize(store.getState())}` : '';

  return (
    <html lang="en-US">
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        <link type="text/css" rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,600" />
        {/* styles (will be present only in production with webpack extract text plugin) */}
        {Object.keys(assets.styles).map((style, key) => (
          <link href={assets.styles[style]} key={key} rel="stylesheet" />
        ))}
      </head>
      <body>
        <div id="react-root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: data }} />
        <script src={assets.javascript.main} />
      </body>
    </html>
  );

};

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object,
};

export default Html;
