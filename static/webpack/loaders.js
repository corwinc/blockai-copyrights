module.exports = [
  {
    test: /\.js$|\.jsx$/,
    loaders: ['babel'],
    exclude: /node_modules/,
  },
  {
    test: /\.scss$/,
    // TODO: extract text plugin?
    loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
  },
  {
    test: /\.svg$/,
    loader: 'svg-url-loader',
  },
]
