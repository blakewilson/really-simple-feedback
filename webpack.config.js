const path = require('path')

module.exports = env => {
  return {
    mode: env || 'production',
    entry: './src/js/really-simple-feedback.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'really-simple-feedback.js',
      library: 'reallySimpleFeedback',
      libraryTarget: 'var',
      libraryExport: 'default'
    },
    devtool: 'none',
    module: {
      rules: [
        {
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          test: /\.js$/
        }
      ]
    },
    plugins: []
  }
}
