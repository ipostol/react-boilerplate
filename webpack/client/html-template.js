import React from 'react';
import { renderToString } from 'react-dom/server';
import Html from 'helpers/Html';

export default ({ htmlWebpackPlugin }) => {
  const chunks = Object.keys(htmlWebpackPlugin.files.chunks).reduce((acc, name) => {
    const chunk = htmlWebpackPlugin.files.chunks[name];
    const res = acc;
    res.javascript[name] = chunk.entry;
    return res;
  }, { javascript: {}, styles: {} });
  return `<!doctype html>\n${renderToString(React.createElement(Html, { assets: chunks }, null))}`;
};
