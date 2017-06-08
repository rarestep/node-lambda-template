var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var shell = require('gulp-shell');

// Compiles CoffeeScript files in /src to JS files in the root dir.
// All logic should be stored in index.coffee which gets compiled
// to index.js.
gulp.task('compile', function() {
  gulp.src('./src/**/*.coffee')
    .pipe(coffee({
      bare: true
    }).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.coffee'], ['compile']);
});

gulp.task('run', ['compile'], shell.task('node-lambda run -f deploy.env'));
gulp.task('deploy', ['compile'], shell.task('node-lambda deploy -f deploy.env'));

gulp.task('default', ['compile']);
