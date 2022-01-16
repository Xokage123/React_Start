const { DefinePlugin } = require('webpack')
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_SCSS_REGEXP = /\.global\.scss$/;
const IS_DEV = NODE_ENV == 'development';

module.exports = {
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx','scss','.json']
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }, { test: /\.scss$/,
      use: [ {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]'
          },
          onlyLocals: true,
        }
      },
      'sass-loader' 
    ],
    exclude: GLOBAL_SCSS_REGEXP
    },
    { test: GLOBAL_SCSS_REGEXP,
      use: ['css-loader', 'sass-loader']
    }
  ]
  },
  optimization: {
    minimize: false,
  },
  devtool: IS_DEV ? 'eval' : false,
  plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
};