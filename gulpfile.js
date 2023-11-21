const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')


function compilaSass() {
  return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function funcaoPadrao(callback) {
  setTimeout(() => {
    console.log('Executando via gulp:')
    callback()
  }, 1000);
}

function dizOI(callback) {
  setTimeout(() => {
    console.log('Olá Gulp')
    dizTchau()
    callback()
  }, 2000);
}

function dizTchau() {
  console.log('Tchau Gulp')
}

exports.default = gulp.parallel(funcaoPadrao, dizOI)
exports.dizOI = dizOI
exports.sass = compilaSass
exports.watch = function() {
  gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}
