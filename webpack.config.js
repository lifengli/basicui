const webpack = require('webpack');
const path = require('path');

const serverEndpoint = process.env.MY_SERVER_ENDPOINT || 'http://0.0.0.0:3000';
const devHost = process.env.MY_DEV_HOST || '0.0.0.0';
const devPort = process.env.MY_DEV_PORT || 8080;

module.exports = {
  entry: ['babel-polyfill', './src/Application.jsx'],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  cache: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js?$|\.jsx?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['env', 'react', 'stage-0']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'raw-loader'],
        include: __dirname
      }
    ]
  },
  devServer: {
    contentBase: './dev',
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: devHost,
    port: devPort,
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: serverEndpoint,
        secure: false
      },
      '/stylesheets/*': {
        target: serverEndpoint,
        secure: false
      },
      '/fonts/*': {
        target: serverEndpoint,
        secure: false
      },
      '/images/*': {
        target: serverEndpoint,
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
