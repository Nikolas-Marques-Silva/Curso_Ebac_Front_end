const gulp = require('gulp')

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
