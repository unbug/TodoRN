var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();//http://www.browsersync.io/docs/gulp/

//browser-sync serve
gulp.task('serve', function () {
  browserSync.init({
    open: false,
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', function (cb) {
  runSequence('serve', cb);
});
