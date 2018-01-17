import path from 'path';
import webpack from 'webpack';
import ShellPlugin from 'webpack-shell-plugin';

import baseConfig from './webpack.config.base';

const config = {
  ...baseConfig,
  // context: path.resolve('ssr'),
  entry: {
    start: './server/start.js',
  },
  output: {
    // filesystem path for static files
    path: path.resolve('dist', 'server'),

    // network path for static files
    publicPath: '/',

    // file name pattern for entry scripts
    filename: '[name].js',

    // file name pattern for chunk scripts
    chunkFilename: '[name].js',
  },
  target: 'node',
  externals: [
    (context, request, callback) => {
      if (/server$/.test(request)) {
        callback(null, `commonjs ${request}`);
      } else {
        callback();
      }
    },
  ],
  module: {
    rules: [
      baseConfig.module.rules[0],
    ],
  },
};

config.plugins.push(
  new webpack.BannerPlugin({
    banner: '#!/usr/bin/env node',
    raw: true,
    entryOnly: true,
    include: /start\.js$/,
  }),
  new ShellPlugin({
    onBuildExit: [`chmod +x ${path.resolve(config.output.path, 'start.js')}`],
  }),
);

config.devtool = 'source-map';

// console.log(`
// =============================
// ${JSON.stringify(config, null, ' ')}
// =============================
// `);

export default config;
