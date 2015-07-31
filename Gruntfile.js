
module.exports = function (grunt) {
    var auto = require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            css: [ 'public/styles/**'],
            assets:['public/js/**/*.js','assets/**/*.js'],
            components:['components/**.js']
        },
        coffee: {
            public: {
                expand: true,
                cwd: 'precompile/assets/',
                src: ['**/*.coffee'],
                dest: 'assets/',
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
                },
                spawn:false
            },
            lessTask:{
                files:['precompile/**/*.less','precompile/**/*.coffee'],
                tasks:[
                    'clean',
                    'less',
                    'coffee:public',
                    'coffee:components'
                ]
            }
        }
    });

    grunt.registerTask('default', ['clean','less','coffee','watch']);
};