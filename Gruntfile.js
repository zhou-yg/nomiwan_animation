
module.exports = function (grunt) {
    var auto = require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            cssFiles: [ 'public/styles/**'],
            jsFiles:['public/js/**.js'],
            components:['components/**.js','components/**.coffee']
        },
        coffee: {
            public: {
                expand: true,
                cwd: 'precompile/assets/',
                src: ['**/*.coffee'],
                dest: 'assets/js/',
                ext: '.js'
            },
            components: {
                expand: true,
                cwd: 'precompile/components/',
                src: ['**/*.coffee'],
                dest: 'components/',
                ext: '.js'
            }
        },
        less: {
            files: {
                expand: true,
                cwd: 'precompile/less/',
                //带下划线的都是分支，会自动import到总的中，不用额外编译了
                src: ['**/*.less','!**/*_*.less'],
                dest: 'public/styles/',
                ext: '.css'
            }
        },
        watch: {
            options: {
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }
            },
            lessTask:{
                files:['precompile/**/*.less','precompile/**/*.coffee'],
                tasks:[
                    'clean:cssFiles',
                    'clean:jsFiles',
                    'clean:components',
                    'less',
                    'coffee:public',
                    'coffee:components'
                ]
            }
        }
    });

    grunt.registerTask('default', ['coffee','watch']);
};