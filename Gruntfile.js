module.exports = function (grunt) {

  grunt.initConfig({

    csslint: {
      all: ['css/main.css']
    },

    cssmin: {
      dist: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },

    autoprefixer: {
      all: {
        src: 'css/style.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'csslint',
    'cssmin',
    'autoprefixer'
  ]);

};

