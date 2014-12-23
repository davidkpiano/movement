var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({
            style: 'expanded'
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

gulp.task('default', ['sass'/*, 'autoprefixer'*/], function() {
    gulp.watch('css/*.css', function() {
        gulp.run('autoprefixer');
    });

    gulp.watch('scss/*.scss', function() {
        gulp.run('sass');
    });
});