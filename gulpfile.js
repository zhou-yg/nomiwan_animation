/**
 * Created by zyg on 15/9/1.
 */

var path = require('path');
var fs = require('fs');
// 引入 gulp
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var tasksPath = path.resolve(__dirname,'./tasks/');
var taskList = fs.readdirSync(tasksPath).forEach(function(taskName){
    var taskFn = require(path.resolve(tasksPath,taskName));
    taskFn(gulp,__dirname);
});
//默认任务
gulp.task('default',
    gulpSequence(
        'clean',
        ['copyBower',
        'less',
        'components',
        'assets'],
        'webpackDevServer'
    )
);
//开发环境下的任务
gulp.task('development', function(){
    exec('node bin/www',function(){
        console.log.apply(console,arguments);
    });
});

module.exports = gulp;