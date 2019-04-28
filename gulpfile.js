const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

/* Browser Sync */
gulp.task('browser-sync', function () {
    browserSync.init({
        files: './dist/*',
        server: './dist'
    });
});

/* .SCSS to .CSS */
gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist'))
});

/* Image Minify */
gulp.task('imagemin', function () {
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist'))
});


/* Task Runner - DEFAULT TASK */
gulp.task('default', ['sass', 'imagemin', 'browser-sync'], function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/img/*', ['imagemin']);
});