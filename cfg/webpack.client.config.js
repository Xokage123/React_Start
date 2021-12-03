
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';

function setupDevtool() {
  if(IS_DEV) return 'eval';
  if(IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js','.json']
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
    ]
    }  
  ]
  },
  devtool: setupDevtool()
};