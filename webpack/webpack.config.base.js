// This is the base Webpack configuration file
import path from 'path';
import webpack from 'webpack';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// project folder
const rootFolder = process.cwd();

const fonts = [
  [/\.woff(\?v=\d+\.\d+\.\d+)?$/],
  [/\.woff2(\?v=\d+\.\d+\.\d+)?$/],
  [/\.(ttf|eot|svg|png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/],
].map((font) => {

  const rule = {
    test: font[0],
    use: [
      IS_PRODUCTION ? {
        loader: 'file-loader',
        options: {
          limit: 8192,
        },
      } : 'url-loader?limit=100000',
    ],
  };

  return rule;

});

const assetsPath = path.resolve(rootFolder, 'dist', 'client');

const config = {
  // resolve all relative paths from the project root folder
  context: path.resolve(rootFolder, 'src'),

  // https://webpack.github.io/docs/multiple-entry-points.html
  entry: {
    main: './client.js',
  },

  output: {
    // filesystem path for static files
    path: assetsPath,

    // network path for static files
    publicPath: '/',

    // file name pattern for entry scripts
    filename: '[name].[hash].js',

    // file name pattern for chunk scripts
    chunkFilename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(rootFolder, 'src')],
        // exclude: path.resolve(rootFolder, 'node_modules'),
        // exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss?$/,
        include: [
          path.resolve(rootFolder, 'src'),
          /node_modules/,
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve('postcss.config.js'),
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css?$/,
        include: [
          path.resolve(rootFolder, 'src'),
          /node_modules/,
        ],
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      ...fonts,
    ],
  },

  resolve: {
    modules: ['node_modules', 'src'],
  },

  plugins: [
    // environment variables
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      BUILD_TIME: new Date().toString(),
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION,
      IS_DEVELOPMENT: !IS_PRODUCTION,
    }),
  ],

  stats: {
    chunks: false,
  },
};

export default config;
