var gulp = require('gulp');
var browserSync = require('browser-sync');
var cp = require('child_process');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var replace = require('gulp-replace');
var gutil = require('gulp-util');
var print = require('gulp-print');
var fs = require('fs');
var less = require('gulp-less');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: [
    'Android >= 4',
    'Chrome >= 20',
    'Firefox >= 24', // Firefox 24 is the latest ESR
    'Explorer >= 9',
    'iOS >= 6',
    'Opera >= 16',
    'Safari >= 6'
] });
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var walk = function (dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) results = results.concat(walk(file));
        else results.push(file)
    });
    return results
};

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    gulp.src('shared/**/*')
        .pipe(gulp.dest('ls_vertretungsplan_me')).on('end', function () {
        cp.spawn(jekyll, ['build'], {stdio: 'inherit', cwd: 'ls_vertretungsplan_me'})
            .on('close', function () {
                files_shared = walk('shared');
                for (var i = 0; i < files_shared.length; i++) {
                    files_shared[i] = 'ls_vertretungsplan_me' + files_shared[i].substring('shared'.length)
                }
                del(files_shared).then(function (paths) {
                    done()
                });
            });
    });
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['less', 'jekyll-build'], function () {
    browserSync({
        server: {
            baseDir: '_site/ls_vertretungsplan_me'
        },
        logLevel: "debug",
        online: false
    });
});

gulp.task('less', function () {
    return gulp.src('./shared/less/flat-ui.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'mixins'), path.join(__dirname, 'less', 'modules') ],
            plugins: [autoprefix]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('_site/ls_vertretungsplan_me/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('shared/css'));
});

/**
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['shared/less/**/*.less'], ['less']);
    gulp.watch(['./shared/*.html', './shared/*.md',
        './ls_vertretungsplan_me/*.html', './ls_vertretungsplan_me/*.md',
        './ls_vertretungsplan_me/css/custom.css',
        './shared/_layouts/*.html', '_posts/*', './shared/_includes/*.html',
        '_config.yml', 'shared/css/*.css'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the
 * jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);