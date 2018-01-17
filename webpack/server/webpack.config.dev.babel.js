import webpack from 'webpack';

// base config with ssr
import baseConfig from '../../ssr/webpack.config.server.babel';

import appConfig from '../../src/config';

const config = { ...baseConfig };

config.devtool = 'eval-source-map';

config.plugins.push(
  // environment variables
  new webpack.DefinePlugin({
    IS_CLIENT: false,
    IS_SERVER: true,
  }),
  new webpack.NamedModulesPlugin(),
);

const { protocol, host, port } = appConfig.webpack.server;

// network path for static files: fetch all statics from webpack development server
config.output.publicPath = `${protocol}${host}:${port}${config.output.publicPath}`; // change host to ip if will test by phone or others...

config.stats = false;

export default config;
