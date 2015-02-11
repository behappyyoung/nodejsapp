module.exports = function( grunt ) {
  'use strict';

  grunt.loadNpmTasks('grunt-wiredep');

  /**
    Node package info
  */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      app: {
        src: 'index.html'
      }
    }
  });

  /**
    Start the web server on port 8080
  */
  grunt.registerTask('server', 'Start express server', function() {
    require('./server.js').listen(8080, function () {
      grunt.log.writeln('Web server running at http://localhost:8080.');
    }).on('close', this.async());
  });

  /**
    Set the server task as our default.
  */
  grunt.registerTask('default', ['server']);
};
