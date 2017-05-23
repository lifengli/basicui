import gulp from 'gulp';
import coverageT from 'gulp-jsx-coverage';

var args = require('yargs')
           .usage('Usage: $0 -c [num]')
           .demandOption(['c'])
           .argv;

const coverageTask = coverageT.createTask({
    src: [
        'test/**/*+(.js|.jsx)',
        'src/**/*.js'
    ],
    isparta: false,
    istanbul: {
        preserveComments: false,
        coverageVariable: '__MY_TEST_COVERAGE__',
        exclude: /node_modules|test/
    },

    threshold: [
      {
        type: 'lines',
        min: args.c
      }
    ],

    transpile: {
        babel: {
            include: /\.jsx?$/,
            exclude: /node_modules/,
            omitExt: ['.jsx']
        }
    },

    coverage: {
        reporters: ['text-summary', 'json', 'lcov', 'cobertura'],
        directory: 'coverage'
    },

    babel: {
        plugins: ['babel-polyfill']
    },

    cleanup: () => {
      // todo
    }
});

gulp.task('coverage', coverageTask);
