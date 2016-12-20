const webpack = require('webpack')
const loaders = require('./loaders')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    `${__dirname}/../index.js`,
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    path: `${__dirname}/../lib`,
    filename: 'bundle.js',
    sourceMapFilename: 'debugging/[file].map',
    publicPath: 'http://localhost:8080/lib/',
    crossOriginLoading: 'use-credentials',
  },
  target: 'web',
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  module: {
    loaders,
  },
  devtool: 'inline-source-map',
}
