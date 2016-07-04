/* Grunt Tasks  */
module.exports = function(grunt){
    grunt.initConfig({
        // basic setting
        pkg: grunt.file.readJSON('package.json'),

        // check JS code
        jshint: {
            files: ['Gruntfile.js', 'www/js/*.js'],
            options: {
                globals: {
                jQuery: true,
            },
            },
        },
              
        // minify css files
        cssmin:{
            combine: {
                files: {
                  'www/css/index.min.css': ['www/css/index.css']
          },
            },
        },
        // minify js
        uglify:{
            options: {
                banner: '\/\*\! \<\%\= pkg.name \%\> \<\%\= grunt.template.today\(\"dd-mm-yyyy\"\) \%\> \*\/',
                report: 'min',
                mangle: false
            },
            combine: {
                files: {
                    'www/js/index.min.js': ['www/js/index.js'],
                    'www/js/chains_service.min.js': ['www/js/chains_service.js']
                },
            },
        },
        // minify html
        minifyHtml: {
          options: {
            cdata: true
          },
          dist: {
            files: {
              'www/index.html': 'www/index.htm'
            }
          }
        }
    });

    // load the plugin
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-minify-html');

    // register tasks
    grunt.registerTask('default', ['jshint', 'cssmin', 'uglify', 'minifyHtml']);
};