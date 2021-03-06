/**
 * Author: Umayr Shahid <umayrr@hotmail.com>,
 * Created: 15:35, 06/06/15.
 */

'use strict';

module.exports = function (grunt) {
  require('grunt-timer').init(grunt, {
    deferLogs: true,
    friendlyTime: true,
    color: 'blue'
  });
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [
          'node_modules/**/*.js'
        ],
        reporter: require('jshint-stylish')
      },
      files: [
        'Gruntfile.js',
        'bin/**/*.js',
        'lib/**/*.js',
        'src/**/*.js'
      ]
    },
    jscs: {
      options: {
        config: '.jscsrc',
        esnext: true,
        verbose: true,
        excludeFiles: [
          'node_modules/**/*.js'
        ],
        reporter: 'console'
      },
      files: {
        src: [
          'Gruntfile.js',
          'bin/**/*.js',
          'lib/**/*.js',
          'src/**/*.js'
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('verify', [
    'jshint',
    'jscs'
  ]);
};
