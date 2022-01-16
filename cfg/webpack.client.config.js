const { DefinePlugin } = require('webpack')
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const GLOBAL_SCSS_REGEXP = /\.global\.scss$/;
const COMMON_PLUGINS = [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]


function setupDevtool() {
  if(IS_DEV) return 'eval';
  if(IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', 'scss', '.json']
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js'
  },
  module: {
    rules: [{
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    },
    { test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }

        }
      }, 
       'sass-loader',
      ], 
      exclude: GLOBAL_SCSS_REGEXP
    },
    { test: GLOBAL_SCSS_REGEXP,
      use: ['style-loader','css-loader', 'sass-loader']
    }
  ]
  },
  devtool: setupDevtool(),
  plugins: COMMON_PLUGINS
};