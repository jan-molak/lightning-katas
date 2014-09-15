module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-mocha-istanbul'

  grunt.registerTask 'test',      [ 'jshint', 'mocha_istanbul:spec' ]

  grunt.registerTask 'default',   [ 'test' ]

  grunt.initConfig
    src:
      js:       [ 'src/**/*.js'    ]
      spec:     [ 'spec/*.spec.js' ]

      jshint:   [
        '<%= src.js %>', '<%= src.spec %>',
        '<%= src.features.js %>'
      ]

    clean: [ 'target' ]

    jshint:
      src:      [ '<%= src.js %>' ]
      options:
        jshintrc:       true

    mocha_istanbul:
      options:
        root:     '.'
        reportFormats: [ 'text-summary', 'html' ]

      spec:
        src: 'spec'
        options:
          recursive:      true
          mask:           '**/*.spec.js'
          coverageFolder: 'target/coverage'