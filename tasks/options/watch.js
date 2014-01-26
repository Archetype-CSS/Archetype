module.exports = {
  watch: {
    scripts: {
      files: '**/*.js',
      tasks: ['jshint'],
      options: {
        interrupt: true,
        livereload: true,
      },
    },
    compass: {
      files: ['app/sass/**/*.scss'],
      tasks: ['compass:server']
    }
  }
};
