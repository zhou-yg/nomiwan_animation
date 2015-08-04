
module.exports = function (grunt) {
    var auto = require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy:{
            move: {
                expand: true,
                flatten: true,
                src: ['bower_components/*/*.js','bower_components/*/dist/*.js','bower_components/*/*.min.js', 'bower_components/*/*-min.js'],
                dest: 'public/js/libs/',
                filter: 'isFile'
            }
        },
        clean: {
            css: [ 'public/styles/**'],
            assets:['public/js/**/*.js','assets/**/*.js','!public/js/libs/*.js'],
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
            },
            router:{
                expand: true,
                cwd: 'precompile/routes/',
                src: ['**/*.coffee'],
                dest: 'routes/',
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

    grunt.registerTask('default', ['copy','clean','less','coffee','watch']);
};