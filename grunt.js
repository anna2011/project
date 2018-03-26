module.exports = function(grunt) {
    //configuration
    grunt.initConfig({
        //pass in options to plugins, reference to files
        concat: {
            jsLibs: {
                src: ['js/jquery.min.js', 'bootstrap.min.js'],
                dest: 'dist/js/library.js'
            },
            jscutom: {
                src: ['js/custom.js'],
                dest: 'dist/js/custom.js'
            },
            cssLibs: {
                src: ['css/bootstrap.min.css'],
                dest: 'dist/css/library.css'
            },
        },


    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');

    //RegisterTasks
    grunt.registerTask('concat-jsLibs', ['concat-jsLibs']);
    grunt.registerTask('concat-jscustom', ['concat-jscustom']);



};