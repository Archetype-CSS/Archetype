'use strict';

module.exports = function(grunt) {

  // display task completion times output as cli bar chart
  require('time-grunt')(grunt);
 
  // ------------ 
  // grunt config
  // ------------ 

  grunt.initConfig ({
    // read npm dev-dependencies from package.json
    pkg: grunt.file.readJSON('package.json'),

    // ------------ 
    // grunt tasks
    // ------------ 

    stylestats: {
      options: {
        "size": true,
        "gzippedSize": true,
        "simplicity": true,
        "rules": true,
        "selectors": true,
        "lowestCohesion": true,
        "lowestCohesionSelector": true,
        "totalUniqueFontSizes": true,
        "uniqueFontSize": true,
        "totalUniqueColors": true,
        "uniqueColor": true,
        "idSelectors": true,
        "universalSelectors": true,
        "importantKeywords": true,
        "mediaQueries": true,
        "propertiesCount": 10
       },
      docs: {
        src: [
          'public/css/doc.css',
          'public/css/github.css'
        ]
      },
      archetype: {
        src: ['style-guide/static/css/main.css']
      },
      components: {
        src: ['style-guide/static/css/components.css']
      }
    },
    phantomas: {
      archetype : {
        options : {
          indexPath : './phantomas-archetype/',
          options   : {},
          url       : 'file:///Users/sashley/Sites/Open-Source/Archetype/Archetype/style-guide/index.html',
          buildUi   : true,
          numberOfRuns: 10,
          timeout: 30
          }
        }
      },
    shell: {
     phantomas: {
        command: 'phantomas --config phantomas-config.json --format tap --verbos'
          //'sudo phantomas --url /Users/sashley/Sites/Open-Source/Archetype/Archetype/style-guide/index.html --verbose'
      },
      hologram: {
        command: 'hologram hologram-config.yml'
      },
      scsslint: {
        command: 'scss-lint sass/**/*.scss'
      },
      scsslintStyleGuide: {
        command: 'scss-lint style-guide/assets/sass/**/*.scss'
      },
    },
    clean: {
      // rm /public dir to avoid residual files from previous builds
      styleguide: ["public/"],
    },
    // update docs, pull most recent from bower_components/
    copy: {
       updateStyleGuide: {
        src: ['sass/**/*', 'bower_components/**/*.scss', 'style-guide/**/*'],
        dest: 'build/',
      }
    },
    // display file size and gzip size of compiled assets 
    bytesize: {
      stylesheets: {
        src: ['public/css/**/*']
      },
      javascripts: {
        src: ['public/javascripts/**/*'] 
      }
    },
    // compile all .scss files with compass, 
    // dump into public/css/
    // read config.rb from stylesheet root
    // minfy all css files in production mode
    compass: {
      dev: {
        options: {
          sassDir: 'sass/',
          cssDir: 'css/'
        }
      },
      prod: {
        options: {
          sassDir: 'sass/',
          cssDir: 'css/',
          config: 'config.rb',
          environment: 'production'
        }
      },
      styleguide: {
        options: {
          config: 'config.rb',
          sassDir: 'style-guide/assets/sass/',
          cssDir: 'style-guide/assets/css/',
          environment: 'production'
        } 
      },
      test: {
        options: {
          config: 'config.rb',
          sassDir: 'tests/sass/',
          cssDir: 'tests/css/'
        } 
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      styleguide: {
        src: 'public/css/**/*.css'  // overridding src files here bc no dest given
      },
    },
    // lint the compiled .css files in public/assets/css/
    // read config from .csslintrc in project root
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      styleguide: {
        src: ['style-guide/assets/css/*.css']
      }
    },
    // gzip assets 1-to-1 for production
    // generate .gz files within same directory
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        src: ['public/{,/**}/*', '!*.map'],
      }
    },
    // concat generated js in tmp/assets/javascripts/ 
    // generate main.js within public/assets/javascripts/
    concat: {
      options: {
        stripBanners: true,
        banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */'          
      },
      dev: {
        src: [
        // Vendor
        //'bower_components/jquery-1.10.4/index.js',
        // Polyfills
        // Application
        'style-guide/assets/javascripts/main.js'
        ],
        dest: 'public/javascripts/main.js',  
      }
    },
    // uglify main.js
    uglify: {
      options: {
        report: 'gzip',
        sourceMap: 'true',
        preserveComments: 'false',
        banner: '/* Built w\/ \<3 on: <%= grunt.template.today("yyyy-mm-dd") %> */'          
      },
      main: {
        files: {
          'public/javascripts/main.min.js': ['public/javascripts/main.js']
        }
      },
      modernizr: {
        files: {
          'public/javascripts/modernizr.full.min.js': ['bower_components/modernizr/modernizr.js']
        }
      }
    },
    concurrent: {
      target: {
        tasks: ['connect', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001, // 35729,
          base: './public/',
          keepalive: true,
          open: {
            target: '0.0.0.0:9001/'// target url to open
          }
        }
      }
    },
    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
           grunt.log.writeln('Waiting for more changes...');
        },
        livereload: true,
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      compass: {
        files: ['style-guide/assets/sass/{,*/}*.scss', 'sass/{,*/}*.scss' ],
        tasks: ['newer:compass:dev', 'newer:compass:style-guide']
      },
    },

});

  // ------------ 
  // Load Grunt Plugins
  // ------------ 

  grunt.loadNpmTasks('grunt-stylestats');
//  grunt.loadNpmTasks('grunt-phantomas');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  //grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // ------------ 
  // Register Grunt Tasks
  // ------------ 

  // grunt - run only default grunt tasks
  grunt.registerTask('default', [
    'style-guide', // regnerate style guide
    'concurrent'
  ]);

/*  grunt.registerTask('phantomas', [
    'phantomas'
  ]);*/
  
/*  grunt.registerTask('phantomas-shell', [
    'shell:phantomas'
  ]);*/

  grunt.registerTask('style-guide', [
    'clean:styleguide',
    'compass:styleguide',
    //'autoprefixer:styleguide',
    //'csslint:styleguide',
    'copy:updateStyleGuide',
    'shell:hologram',
    'compress',
    'concat',
    'uglify:main',
    'uglify:modernizr'
  ]);

  grunt.registerTask('serve', [
    'connect',
    'open'
  ]);

  grunt.registerTask('test', [
    'compass:test'
  ]);

};
