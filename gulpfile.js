var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

gulp.task('default', ['start', 'watch']);

gulp.task('start', function() {
  nodemon({
   script: 'app.js',
   ext: 'js html',
   env: { 'NODE_ENV': 'development' } 
  });
});

gulp.task('compile-css', function() {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/scss/**/*.scss', ['compile-css']);
});