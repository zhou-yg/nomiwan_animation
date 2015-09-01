/**
 * Created by zyg on 15/9/1.
 */
var path = require('path');
var gulpCopy = require('gulp-copy');

module.exports = function(gulp,dirname){

    gulp.task('cleanAssets',function(){

        gulp.src([
            'bower_components/*/*.js',
            'bower_components/*/dist/*.js',
            'bower_components/*/*.min.js',
            'bower_components/*/*-min.js'
        ].map(function(file){
                return path.resolve(dirname,file);
            })).pipe(gulpCopy('public/js/libs/'));
    });
};