
const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const errorify = require('errorify');
const del = require('del');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');

gulp.task('clean', () => {
    return del('./built/**/*')
});

gulp.task('prod', () => {
    browserify({
        basedir: '.',
        debug: true,
        entries: ['src'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('built'));
});

gulp.task('dev', () => {
    browserify({
        basedir: '.',
        debug: true,
        entries: ['src'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .plugin(watchify)
    .plugin(errorify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('built'));
});

gulp.task('default', (done) => {
    runSequence('clean', 'dev', () => {
            console.log('Watching...')
            gulp.watch(['src/**/*.ts'],
                       ['dev']);
    });
});

gulp.task('package', (done) => {
    runSequence('clean', 'prod', () => {
            console.log('Watching...')
            gulp.watch(['src/**/*.ts'],
                       ['prod']);
    });
});
