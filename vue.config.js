const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  devServer: {
    host: '172.20.144.142'
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  }
}
