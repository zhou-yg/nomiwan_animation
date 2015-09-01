/**
 * Created by zyg on 15/9/1.
 */
var gulpLess = require('gulp-less');
var path = require('path');

module.exports = function(gulp,dirname){

    gulp.task('less', function () {
        return gulp.src(['precompile/less/**/*.less','!precompile/less/**/*_*.less'].map(function(file){
            return path.resolve(dirname,file);
        }))
        .pipe(gulpLess({
                paths: [ path.join(dirname, 'less', 'includes') ]
            }))
        .pipe(gulp.dest(path.resolve(dirname,'public/styles/')));
    });
};