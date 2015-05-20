'use strict'

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var auto = require('gulp-autoprefixer');

var paths = {
  sass: {
    in: 'scss/movement.scss',
    out: 'css/',
    watch: 'scss/*.scss'
  }
};

gulp.task('build', function(){
  return sass('scss/', {style: 'expanded'})
    .pipe(auto())
    .pipe(gulp.dest(paths.sass.out));
});

gulp.task('watch', function(){
  gulp.watch(paths.sass.watch, ['build']);
});

gulp.task('default', ['watch']);
