'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    watch = require('gulp-watch'),
    fs = require('fs-extra'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


let sassOptions = {
      outputStyle: 'compressed'
};

let postcssPlugins = [
      cssnano()
];


gulp.task('default', ['watch:all', 'browser-sync'],function() {
  gulp.start('styles', 'pug');
});

gulp.task('watch:all', ['watch']);

gulp.task('watch', function() {
  gulp.watch('./dist/scss/**/*.scss', ['styles']);
  gulp.watch('./dist/js/**/*.js', ['scripts']);
  gulp.watch('./dist/pug/**/*.pug', ['pug']);
  gulp.watch('./src/**.html').on('change', reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('pug', function() {
  return gulp.src('dist/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./src'))
    .pipe(notify({ message: 'PUG - task completed'}));
});

gulp.task('styles', ['cleanCSSfs'], function() {
  gulp.src('./dist/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: 'last 2 versions'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cleanCSS())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(notify({ message: 'CSS - task completed'}))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  gulp.src('./dist/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./src/assets/js'))
    .pipe(notify({ message: 'JS - task completed'}))
});

gulp.task('cleanCSSfs', function() {
  fs.removeSync('./dist/css/');
});
