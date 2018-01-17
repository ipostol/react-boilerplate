process.env.BABEL_ENV = 'test';
process.env.TZ = 'utc';

module.exports = wallaby => ({
  files: [
    { pattern: 'src/**/*.js', load: true, instrument: true },
    { pattern: 'src/**/*.scss', load: false, instrument: true },
    { pattern: 'src/**/*.css', load: false, instrument: true },
    { pattern: 'src/**/*.json', load: false, instrument: true },
    { pattern: 'src/**/*.png', load: false, instrument: true },
    { pattern: 'src/**/*.svg', load: false, instrument: true },

    '!src/**/*test.js',
    '!src/**/*docs.js',
  ],

  filesWithNoCoverageCalculated: [
  ],

  tests: [
    { pattern: 'src/**/*.test.js', load: true },
  ],

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },
  testFramework: 'jest',
  setup(w) {

    w.testFramework.configure(require(process.env.NODE_PATH + '/../jest.json')); // eslint-disable-line

  },
  debug: false,
  env: {
    type: 'node',
    params: {
      runner: '',
    },
  },
  workers: {
    initial: 4,
    regular: 2,
  },
  // delays: {
  //   run: 500
  // },
  hints: {
    ignoreCoverage: /ignore coverage/, /* ignore coverage: use for disable code coverage */
  },
});
