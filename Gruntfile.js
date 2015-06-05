module.exports = function(grunt){
    grunt.initConfig({
        coffee: {
            files: {
                expand: true,
                cwd: 'precompile/coffee/',
                src: ['**/*.coffee'],
                dest: 'public/js/',
                ext: '.js'
            }
        },
        less:{
            files:{
                expand:true,
                cwd:'precompile/less/',
                src: ['**/*.less'],
                dest: 'public/styles/',
                ext: '.css'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['coffee','less']);
};