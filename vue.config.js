module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue2-typescript-admin/'
    : '/',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(options => {
        options[0].terserOptions.compress.drop_console = true
        return options
      })
    }
  }
}
