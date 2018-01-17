import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from '../webpack/webpack.config.base';

export default options => (
  client(baseConfig, settings, options)
);
