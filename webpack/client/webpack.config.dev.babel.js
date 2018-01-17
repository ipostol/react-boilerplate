import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';

// base config with ssr
import baseConfig from '../../ssr/webpack.config.client.babel';

import appConfig from '../../src/config';

const rootFolder = process.cwd();

const config = baseConfig({
  development: true,
  css_bundle: false,
});

config.devtool = 'inline-source-map';

config.plugins.push(
  // environment variables
  new webpack.DefinePlugin({
    IS_CLIENT: true,
    IS_SERVER: false,
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlPlugin({
    inject: false,
    template: path.resolve(__dirname, './html-template.js'),
    filename: 'index.html',
  }),
);

// enable webpack development server
config.entry.main = [
  'react-hot-loader/patch',
  config.entry.main,
];

const { proxy } = appConfig.server;

config.devServer = {
  contentBase: ['dist'],
  host: '0.0.0.0',
  port: 3020,
  historyApiFallback: true,
  stats: config.stats,
  proxy,
};

config.module.rules.unshift(
  {
    enforce: 'pre',
    test: /\.js$/,
    include: [path.resolve(rootFolder, 'src')],
    use: [
      {
        loader: 'eslint-loader',
        options: {
          quiet: true,
        },
      },
    ],
  },
);

export default config;
