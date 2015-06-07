module.exports = function(grunt){
    grunt.initConfig({
        clean:{
            files:['public/js/**','public/styles/**']
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean','coffee','less']);
};