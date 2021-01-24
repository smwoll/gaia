import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
const PRODUCTION = yargs.argv.prod;

// sass processing
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';

// image minimization
import imagemin from 'gulp-imagemin';

// delete dist when in dev mode
import del from 'del';

// add webpack
import webpack from 'webpack-stream';

// add browsersync
import browserSync from 'browser-sync';

// styles task
export const styles = () => {
  return src(['src/scss/bundle.scss'])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('dist/css'))
    .pipe(server.stream());
};

// image task
export const images = () => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('dist/images'));
};

// copy files in src to dist
export const copy = () => {
  return src([
    'src/**/*',
    '!src/{images,js,scss}',
    '!src/{images,js,scss}/**/*',
  ]).pipe(dest('dist'));
};

// clean dist using del
export const clean = () => del(['dist']);

// scripts task
export const scripts = () => {
  return src('src/js/bundle.js')
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? 'production' : 'development',
        devtool: !PRODUCTION ? 'inline-source-map' : false,
        output: {
          filename: 'bundle.js',
        },
      }),
    )
    .pipe(dest('dist/js'));
};

// watch for changes
export const watchForChanges = () => {
  watch('src/scss/**/*.scss', styles);
  watch(
    'src/images/**/*.{jpg,jpeg,png,svg,gif}',
    series(images, reload),
  );
  watch(
    [
      'src/**/*',
      '!src/{images,js,scss}',
      '!src/{images,js,scss}/**/*',
    ],
    series(copy, reload),
  );
  watch('src/js/**/*.js', series(scripts, reload));
  watch('**/*.php', reload);
};

// browsersync tasks
const server = browserSync.create();
export const serve = (done) => {
  server.init({
    proxy: 'http://themedev.lndo.site', // put your local website link here
  });
  done();
};
export const reload = (done) => {
  server.reload();
  done();
};

export const dev = series(
  clean,
  parallel(styles, images, copy, scripts),
  serve,
  watchForChanges,
);
export const build = series(
  clean,
  parallel(styles, images, copy, scripts),
);
export default dev;
