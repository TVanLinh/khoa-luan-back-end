const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const clean = require('gulp-clean');
const folders = require('gulp-folders');
const sourceMap = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');

const runSequence = require('run-sequence');
var exec = require('child_process').exec;

const BROWSER_SYNC_RELOAD_DELAY = 1500;
const FRONTEND_PATH = 'static/front-end';
const DB_PATH = 'C:/data/db/';

/*
    function runCommand(command) {
    return function (cb) {
        exec(command, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
        });
    }
    }

    gulp.task('start-mongo', runCommand('mongod --dbpath ' + DB_PATH));
    gulp.task('stop-mongo', runCommand('mongo --eval "use admin; db.shutdownServer();"'));
*/

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: 'server.js',
        watch: ['api/**/*.js', 'controllers/**/*.js', 'server.js', 'security.js', 'setRoutes.js'],
        env: { 'NODE_ENV': 'development' }
    }).on('start', function onStart() {
        // ensure start only got called once
        if (!called) { cb(); }
        called = true;
    }).on('restart', function onRestart() {
        // reload connected browsers after a slight delay
        setTimeout(function () {
            browserSync.reload({
                stream: false
            });
        }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {
    setTimeout(function () {
        browserSync({
            proxy: 'http://localhost:3000',
            port: 4000
        });
    }, 1500);
});

gulp.task('syncCSS', function () {
    return gulp.src('static/**/*.css')
        .pipe(browserSync.reload({ stream: true }));
});



//for setting up development environment
gulp.task('default', function () {
    runSequence('browser-sync', 'syncCSS');
});


