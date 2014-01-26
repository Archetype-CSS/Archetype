module.exports = {
  uglify: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'src/js',
        src: '**/*.js',
        dest: 'dest/js'
      }]
    }
  }
};
