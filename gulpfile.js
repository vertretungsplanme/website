var gulp = require('gulp');
var browserSync = require('browser-sync');
var cp = require('child_process');
var del = require('del');
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
var imageResize = require('gulp-image-resize');
var changed = require("gulp-changed");

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

var getEmptyFolders = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getEmptyFolders(file));
            if (getFileCount(file) == 0) {
                results.push(file);
            }
        }
    });
    return results;
};

var getFileCount = function(dir) {
    var filesCount = 0;
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) filesCount += getFileCount(file);
        else filesCount ++;
    });
    return filesCount;
};

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var jekyllBuild = function(dir, done) {
    browserSync.notify(messages.jekyllBuild);
    gulp.src('shared/**/*')
        .pipe(gulp.dest(dir)).on('end', function () {
        cp.spawn(jekyll, ['build'], {stdio: 'inherit', cwd: dir})
            .on('close', function () {
                var files_shared = walk('shared');
                for (var i = 0; i < files_shared.length; i++) {
                    files_shared[i] = dir + files_shared[i].substring('shared'.length)
                }
                del(files_shared).then(function (paths) {
                    var empty_folders = getEmptyFolders(dir);
                    //del(empty_folders).then(function (paths) {
                        done();
                    //});
                });
            });
    });
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build-ls', ['less-ls', 'blog-thumbnails-ls'], function (done) {
    jekyllBuild('ls_vertretungsplan_me', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild-ls', ['jekyll-build-ls'], function () {
    browserSync.reload();
});


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build-main', ['less-main', 'blog-thumbnails-main'], function (done) {
    jekyllBuild('vertretungsplan_me', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild-main', ['jekyll-build-main'], function () {
    browserSync.reload();
});

var blogThumbnails = function(dir) {
    return gulp.src(dir + '/img/blog/**/*.{jpg,png}')
        //.pipe(changed(dir + '/img/blog-thumbs'))
        .pipe(imageResize({width: 200, imageMagick: true}))
        .pipe(gulp.dest(dir + '/img/blog-thumbs'))
};

gulp.task('blog-thumbnails-ls', function() {
    return blogThumbnails('ls_vertretungsplan_me')
});

gulp.task('blog-thumbnails-main', function() {
    return blogThumbnails('vertretungsplan_me')
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync-ls', ['jekyll-build-ls'], function () {
    browserSync({
        server: {
            baseDir: '_site/ls_vertretungsplan_me'
        },
        online: false
    });
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync-main', ['jekyll-build-main'], function () {
    browserSync({
        server: {
            baseDir: '_site/vertretungsplan_me'
        },
        online: false
    });
});

var buildLess = function(dir) {
    return gulp.src('./shared/less/flat-ui.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'mixins'), path.join(__dirname, 'less', 'modules') ],
            plugins: [autoprefix]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('_site/' + dir + '/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('shared/css'));
};

gulp.task('less-ls', function () {
    return buildLess('ls_vertretungsplan_me')
});

gulp.task('less-main', function () {
    return buildLess('vertretungsplan_me')
});

/**
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch-ls', function () {
    gulp.watch(['./shared/less/**/*.less'], ['less-ls']);
    gulp.watch(['./shared/*.html', './shared/*.md',
        './ls_vertretungsplan_me/*.html', './ls_vertretungsplan_me/*.md', './ls_vertretungsplan_me/_layouts/*.html', './ls_vertretungsplan_me/_posts/*.md',
        './ls_vertretungsplan_me/css/custom.css',
        './shared/_layouts/*.html', '_posts/*', './shared/_includes/*.html', './ls_vertretungsplan_me/_includes/*.html',
        '_config.yml', 'shared/css/main.css'], ['jekyll-rebuild-ls']);
});

/**
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch-main', function () {
    gulp.watch(['./shared/less/**/*.less'], ['less-main']);
    gulp.watch(['./shared/*.html', './shared/*.md',
        './vertretungsplan_me/*.html', './vertretungsplan_me/*.md', './vertretungsplan_me/_layouts/*.html', './vertretungsplan_me/_posts/*.md',
        './vertretungsplan_me/css/custom.css', './vertretungsplan_me/js/schools.js',
        './shared/_layouts/*.html', '_posts/*', './shared/_includes/*.html', './vertretungsplan_me/_includes/*.html',
        '_config.yml', 'shared/css/main.css'], ['jekyll-rebuild-main']);
});

/**
 * Default task, running just `gulp` will compile the
 * jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default-main', ['browser-sync-main', 'watch-main']);
gulp.task('default-ls', ['browser-sync-ls', 'watch-ls']);

gulp.task('build-main', ['jekyll-build-main']);
gulp.task('build-ls', ['jekyll-build-ls']);