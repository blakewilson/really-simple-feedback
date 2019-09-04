const {src, dest, series } = require ('gulp')
const path = require('path')
const sass = require('gulp-sass')
const minify = require('gulp-minify')
const babel = require('gulp-babel')
const webpack = require('webpack')
const gulpWebpack = require('webpack-stream')
const autoprefixer = require('gulp-autoprefixer')

let webpackConfig = {
  mode: 'production',
  entry: {
      'really-simple-feedback': './src/js/really-simple-feedback.js',
      'really-simple-feedback-admin': './src/js/really-simple-feedback-admin.js'
  },
  output: {
      filename: '[name].js',
      path: __dirname + '/dist'
  },
  devtool: 'none',
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        test: /\.js$/
      }
    ]
  },
  plugins: []
}

let webpackDevConfig = {...webpackConfig, mode: 'development', watch: true, devtool: 'source-map'}

function css() {
    return src('src/sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(dest('dist'))
}

function js() {
    return src('src/js/**/*.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(dest('dist'))
}


exports.css = css
exports.js = js
exports.default = series(css, js)