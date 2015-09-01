/**
 * Created by zyg on 15/9/1.
 */
var path = require('path');
var babel = require('gulp-babel');


module.exports = function (gulp, dirname) {

    gulp.task('components', function () {
        return gulp.src(path.resolve(dirname, 'precompile/components/**/*.jsx'))
            .pipe(babel())
            .pipe(gulp.dest(path.resolve(dirname, 'components/')));
    });
    gulp.task('assets', function () {
        return gulp.src(['precompile/assets/**/*.jsx',
            'precompile/assets/**/*.js'].map(function (file) {
            return path.resolve(dirname,file);
        })).pipe(babel())
            .pipe(gulp.dest(path.resolve(dirname, 'assets/')))
            .pipe(gulp.dest(path.resolve(dirname, 'public/js/')));
    });
};