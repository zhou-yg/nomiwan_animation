module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            cssFiles: [ 'public/styles/**'],
            jsFiles:['public/js/**']
        },
        coffee: {
            files: {
                expand: true,
                cwd: 'precompile/coffee/',
                src: ['**/*.coffee'],
                dest: 'public/js/',
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
                tasks:['clean:cssFiles','less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['watch']);
};