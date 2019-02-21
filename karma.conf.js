// const polyfill = require('babel-polyfill');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'es6-shim'],

    // list of files / patterns to load in the browser
    files: [

      // Load config stuff for the environment
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js',
      'test/mocks/angular-mocks.js',

      'js/config.js',
      'js/marketplace/controllers/MarketplaceController.js',
      'js/marketplace/factories/marketplaceAux.js',
      'js/helpers/utils.js',


      // application tests
      'test/**/*.spec.js',
    ],

    // preprocessors: {
    //   'test/**/*.spec.js': ['babel']
    // },

    proxies: {

    },

    // list of files to exclude
    exclude: [],

    // possible values: 'spec', 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'junit'],

    junitReporter: {
      outputDir: 'test', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'karma-result.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      useBrowserName: false // add browser name to report and classes names
    },

    // web server port
    // port: 9876,
    port: 9876,
    // port: 3500,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],

    browserNoActivityTimeout: 5000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
    // concurrency: 3
  })
};