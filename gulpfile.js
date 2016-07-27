var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var replace = require('gulp-replace');
var gutil = require('gulp-util');
var print = require('gulp-print');
var fs = require('fs');

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    gutil.log(list)
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) results = results.concat(walk(file));
        else results.push(file)
    });
    return results
};

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    gulp.src('shared/*')
        .pipe(gulp.dest('ls_vertretungsplan_me')).on('end', function() {
        cp.spawn( jekyll , ['build', '--config', 'ls_vertretungsplan_me/_config_ls.yml'], {stdio: 'inherit'})
            .on('close', function() {
                gutil.log('close');
                gutil.log(walk('shared'));
                /* gulp.src('shared/*')
                    .pipe(replace(/shared/g, 'ls_vertretungsplan_me'))
                    .pipe(print())
                   // .pipe(vinylPaths(del))
                    .on('finish', done)*/
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
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


/**
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*.html', '*.md', '_config_ls.yml'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the
 * jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);