const gulp = require('gulp')

function funcaoPadrao(callback) {
  console.log('Executando via gulp:')
  callback()
}

function dizOI(callback) {
  console.log('Olá Gulp')
  dizTchau()
  callback()
}

function dizTchau() {
  console.log('Tchau Gulp')
}

exports.default = gulp.series(funcaoPadrao, dizOI)
exports.dizOI = dizOI
