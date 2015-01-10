var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ['test'], function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({
            style: 'expanded',
            trace: true
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('autoprefixer', function() {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'], 
            cascde: false
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('test', function() {
    return gulp.src('scss/tests/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/tests'));
});

gulp.task('default', ['sass', 'autoprefixer'], function() {
    gulp.watch('css/*.css', function() {
        gulp.run('autoprefixer');
    });

    gulp.watch('scss/tests/*.scss', ['test']);

    gulp.watch('scss/**/*.scss', ['sass']);
});