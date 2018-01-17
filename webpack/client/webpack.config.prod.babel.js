import path from 'path';
import webpack from 'webpack';
import WebpackCleanPlugin from 'clean-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

// base config with ssr
import baseConfig from '../../ssr/webpack.config.client.babel';

const config = baseConfig({
  development: false,
});

// config.devtool = 'source-map';

config.plugins.push(
  // clears the output folder
  new WebpackCleanPlugin(
    [
      path.relative(process.cwd(), config.output.path),
    ],
    { root: process.cwd() },
  ),
  // environment variables
  new webpack.DefinePlugin({
    IS_CLIENT: true,
    IS_SERVER: false,
  }),

  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'), // eslint-disable-line
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true,
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
);

config.stats = false;

export default config;
