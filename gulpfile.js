// Description

// Variables
var server = {
    host: 'localhost',
    port: '8001'
}

// Global packages
var gulp = require('gulp');
var webserver = require('gulp-webserver');

// Stylesheet packages
var sass = require('gulp-sass');

// Stylesheet tasks
gulp.task('sass-dev', function () {
  return gulp.src([
      './src/scss/**/*.scss',
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/css'));
});

gulp.task('sass-prd', function () {
  return gulp.src([
      './src/scss/**/*.scss',
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./prd/_catalogs/masterpage/vbo/css'));
});

// Webserver tasks
gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

// Watch, development & production
gulp.task('dev', ['sass-dev']);
gulp.task('prd', ['sass-prd']); 
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*', ['sass-dev']); 
});
gulp.task('default', ['dev','webserver', 'watch']);