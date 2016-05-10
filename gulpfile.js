var gulp = require('gulp'),
    sass = require('gulp-sass'),
    data = require('gulp-data'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch')
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    gulpif = require('gulp-if'),
    del = require('del'),
    fs = require('fs'),
    zip = require('gulp-zip');

var isBuild = false;

gulp.task('generate-html', function() {
  return gulp.src('src/index.html')
    .pipe( browserSync.reload( {stream:true} ) )
    // .pipe( notify( { message: 'Html task complete' } ) );
});

gulp.task('sass', function(){
  return gulp.src('./src/sass/{,*/}*.{scss,sass}')
    .pipe( gulpif( isBuild, sourcemaps.init() ) )
    .pipe( sass() )
    .pipe( autoprefixer( {
      browsers: ['last 4 Chrome versions', 'iOS > 5'],
      cascade: true
    }))
    .pipe( gulpif( isBuild, sourcemaps.write() ) )
    .pipe( gulp.dest('src/css') )
    .pipe( browserSync.reload( {stream:true} ) )
    // .pipe(notify({ message: 'Sass task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src([
      'src/js/lib/jquery-2.1.3.js',
      'src/js/lib/fastclick.js',
      'src/js/lib/owl.carousel.js',
      'src/js/lib/swipeme.js',
      'src/js/global.js',
      'src/js/owl-init.js',
      'src/js/side-nav.js',
      'src/js/form.js'
    ])
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    // .pipe(gulp.dest('www/js'))
    //.pipe(rename({ suffix: '.min' }))
    // .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe( browserSync.reload( {stream:true} ) )
    // .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('www/img'))
    .pipe( browserSync.reload( {stream:true} ) )
    .pipe(notify({ message: 'Images task complete' }));
});

// Clear cache
gulp.task('clearCache', function() {
  // Or, just call this for everything
  cache.clearAll();
});

// Clean
//gulp.task('clean', function(cb) {
//    del(['www/styles', 'www/js', 'www/img'], cb)
//});

gulp.task('zip', ['copy'], function () {
  return gulp.src('dist/**/*')
      .pipe(zip('dist.zhtml'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy', ['sass', 'scripts'], function() {
  del.sync(['dist/**'], function (err, paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
  return gulp.src(['src/**', '!src/sass{,/**}'], {base: './src/'})
    .pipe(gulp.dest('dist/'));
  });


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./src/"
    },
    open: false,
    ghostMode: false
  });
});

gulp.task('default', ['sass', 'scripts', 'browser-sync'], function () {
  gulp.watch("src/sass/**/*.scss", ['sass']);
  gulp.watch("src/js/**/*.js", ['scripts']);
  gulp.watch("src/**/*.html", browserSync.reload);
});

gulp.task('dist', ['sass', 'scripts', 'copy', 'zip'], function(){});
