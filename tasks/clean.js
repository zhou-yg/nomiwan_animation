/**
 * Created by zyg on 15/9/1.
 */
var path = require('path');
var gulpClean = require('gulp-clean');


module.exports = function(gulp,dirname){

    var clean = {
        css: ['!public/style/libs/*.css','public/styles/**/*.css'],
        assets:['public/js/**/*.js','assets/**/*.js','!public/js/libs/*.js'],
        components:['components/**/*.js']
    };

    var finalClean = [];

    for(var name in clean){
        finalClean = finalClean.concat(clean[name]);
    }

    finalClean = finalClean.map(function(file){
       return path.resolve(dirname,file);
    });

    gulp.task('clean',function(){
        return gulp.src(finalClean).pipe(gulpClean());
    });
};