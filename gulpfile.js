var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var processors = [
    autoprefixer,
    cssnext,
    precss
]
gulp.task('css', function() {
    return gulp.src('postcssStu/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('postcssStu/build/'))
})