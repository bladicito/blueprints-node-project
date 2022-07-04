const path = require('path');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const frontendRoot = path.join(__dirname);

const getTask = (task) => {
  return require(`${frontendRoot}/tasks/${task}`)(gulp, plugins);
};
const getEmptyStream = () => {
  return gulp.src([]);
};
const each = (configs, fn) => {
  if (configs.length) {
    configs.forEach((cfg) => {
      fn(cfg);
    });
  } else {
    fn(configs);
  }
};

module.exports = {
  each,
  getTask,
  getEmptyStream,
};
