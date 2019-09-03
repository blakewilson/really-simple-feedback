const {src, dest, series } = require ('gulp')
var sass = require('gulp-sass')
var minify = require('gulp-minify')
var babel = require('gulp-babel')

function css() {
    return src('src/sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('dist'))
}

function js() {
    return src('src/js/**/*.js')
    .pipe(babel({
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
    }))
    .pipe(minify({
        ext: {
            min: '.js'
        },
        noSource: true,
    }))
    .pipe(dest('dist'))
}

exports.css = css
exports.js = js
exports.default = series(css, js)