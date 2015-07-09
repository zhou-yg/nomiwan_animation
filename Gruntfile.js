
module.exports = function (grunt) {
    var auto = require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            cssFiles: [ 'public/styles/**'],
            jsFiles:['public/js/**']
        },
        coffee: {
            public: {
                expand: true,
                cwd: 'precompile/public/',
                src: ['**/*.coffee'],
                dest: 'public/js/',
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
                files:['**/*.less'],
                tasks:['clean:less','less','coffee']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};