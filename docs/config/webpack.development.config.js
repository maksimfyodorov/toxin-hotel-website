const { merge } = require('webpack-merge')
const base = require('./webpack.base.config.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')


module.exports = merge(base, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: []
      // cleanAfterEveryBuildPatterns: ['dist']
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../dist/*')]

    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
  }

});