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

gulp.task('copy:templates', () => {
  gulp
  .src('./src/commands/generate/templates/**')
  .pipe(gulp.dest('./lib/commands/generate/templates/'));

  gulp
  .src('./src/commands/make/templates/**')
  .pipe(gulp.dest('./lib/commands/make/templates/'));
});

gulp.task('copy:config', () => {
  gulp
  .src('./src/*.json')
  .pipe(gulp.dest('./lib/'))
})

gulp.task('copy:images', () => {
  gulp
  .src('./src/img/**')
  .pipe(gulp.dest('./lib/img/'));
});

gulp.task('copy:files', [
  'copy:templates',
  'copy:images',
  'copy:config'
]);
