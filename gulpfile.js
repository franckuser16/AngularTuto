var gulp   = require('gulp'),
    notify = require('gulp-notify'),
    gutil  = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat');

gulp.task('js', function () {
  gulp.src(['', './js/*.js', '!./js/*test.js'])
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(uglify())
    .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', function () {
  gulp.watch('./js/*', ['js']);
});

gulp.task('default', ['js', 'watch']);

