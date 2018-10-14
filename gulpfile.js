// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'lib/'
  }
;

gulp.task('copy:templates', function () {
  gulp.src('./src/commands/generate/templates/**')
      .pipe(gulp.dest('./lib/commands/generate/templates/'));
  gulp.src('./src/commands/make/templates/**')
  .pipe(gulp.dest('./lib/commands/make/templates/'));
});