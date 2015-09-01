/**
 * Created by zyg on 15/9/1.
 */
var path = require('path');
var exec = require('child_process').exec;

module.exports = function (gulp, dirname) {

    gulp.task('app', function () {
        exec('node bin/www',function(){
            console.log.apply(console,arguments);
        });
    });
};