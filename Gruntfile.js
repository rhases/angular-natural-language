module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsSrcFiles: [ 'src/*.js' ],
        lessSrcFiles: [ 'src/*.less' ],
        concat: {
            prod: {
                src: ['<%= jsSrcFiles %>'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        copy: {
            prod: {
                src: ['<%= lessSrcFiles %>'],
                dest: 'build/<%= pkg.name %>.less'
            }
        },
        less: {
            prod: {
                src: ['<%= lessSrcFiles %>'],
                dest: 'build/<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['less:prod', 'copy:prod', 'concat:prod']);

};
