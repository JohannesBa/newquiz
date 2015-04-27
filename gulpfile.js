var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'dist/';
var autoprefixerBrowsers = [                 
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 25',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglifyjs() : $.util.noop())
    .pipe($.size({ title : 'js' }))
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

gulp.task('styles',function(cb) {

  // convert stylus to css
  return gulp.src(app + 'stylus/main.styl')
    .pipe($.stylus({
      // only compress if we are in production
      compress: isProduction,
      // include 'normal' css into main.css
      'include css' : true
    }))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
    .pipe(gulp.dest(dist + 'css/'))
    // .pipe($.rename('style.css'))
    // .pipe(gulp.dest('documentation/public'))
    .pipe($.size({ title : 'css' }))
    .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    }
  });
});

// copy images
gulp.task('images', function(cb) {
  return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif}')
    .pipe($.size({ title : 'images' }))
    .pipe(gulp.dest(dist + 'images/'));
});

// copy fonts
gulp.task('fonts', function(cb) {
  return gulp.src(app + 'fonts/**/*.{eot,svg,ttf,woff}')
    .pipe($.size({ title : 'fonts' }))
    .pipe(gulp.dest(dist + 'fonts/'));
});

// create dynamic styleguide
gulp.task('styleguide', function(cb) {

  del([app + 'documentation'], cb);

  // convert stylus to css
  gulp.src(app + 'stylus/main.styl')
    .pipe($.stylus({
      // only compress if we are in production
      compress: false,
      // include 'normal' css into main.css
      'include css' : true
    }))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
    .pipe($.rename('style.css'))
    .pipe(gulp.dest('documentation/public'))

  return gulp.src([app + 'stylus/**/*.styl', '!' + app + 'stylus/main.styl'])
    .pipe($.kss({
      overview: __dirname + '/README.md'
    }))
    .pipe(gulp.dest('documentation/'));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'stylus/**/*.styl', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  del([dist], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['images', 'fonts', 'html','scripts','styles']);
});
