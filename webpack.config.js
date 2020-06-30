const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
        exclude: /node_modules/,
      },
      {
        test: /\.jpg/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
        exclude: /node_modules/,
      },
    ],
  },
};