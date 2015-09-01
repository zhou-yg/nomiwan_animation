/**
 * Created by zyg on 15/9/1.
 */
var path = require('path');
var fs = require('fs');
// 引入 gulp
var gulp = require('gulp');

var tasksPath = path.resolve(__dirname,'./tasks/');
var taskList = fs.readdirSync(tasksPath).forEach(function(taskName){
    var taskFn = require(path.resolve(tasksPath,taskName));
    taskFn(gulp,__dirname);
});

//默认任务
gulp.task('development', function(){
    //gulp.start('webpack');
    gulp.watch([
        'clean',
        'cleanAssets',
        'less',
        'components'
    ]);
    gulp.start('webpackDevServer');
});

gulp.task('product',function(){
    gulp.start('webpack');
});

module.exports = gulp;