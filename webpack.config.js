const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const UIPATH = process.env.UI_PATH;
const TARGET = process.env.npm_lifecycle_event;
const BUILD_TYPE = process.env.BUILD_TYPE || 'dev';

const PATHS = {
  app: path.join(__dirname, './src/Application.jsx'),
  build: path.join(__dirname, '../uiserver/public/javascripts')
};

const devHost = process.env.MY_DEV_HOST || '0.0.0.0';
const devPort = process.env.MY_DEV_PORT || 8080;
const serverEndpoint = process.env.MY_SERVER_ENDPOINT || 'http://0.0.0.0:3000';

const common = {
  entry: ['babel-polyfill', PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  cache: true,
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
  }
};

if (BUILD_TYPE !== 'dev') {
  common.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        sequences: true,
        properties: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        loops: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_debugger: true
      },
      comments: false
    })
  );
}
else {
  common.devtool = 'source-map';
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
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
        '/favicon.ico': {
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
        },
        '/stylesheets/*': {
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
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
