module.exports = function config(api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env'],
    ['@babel/preset-typescript']
  ]
  const plugins = ['add-module-exports', 'lodash']

  return {
    presets,
    plugins,
  }
}
