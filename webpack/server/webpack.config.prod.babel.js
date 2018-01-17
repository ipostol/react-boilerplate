import webpack from 'webpack';

// base config with ssr
import baseConfig from '../../ssr/webpack.config.server.babel';

const config = { ...baseConfig };

config.devtool = 'source-map';

config.plugins.push(
  // environment variables
  new webpack.DefinePlugin({
    IS_CLIENT: false,
    IS_SERVER: true,
  }),
);

export default config;
