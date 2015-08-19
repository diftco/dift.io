var gulp = require('gulp');
var responsive = require('gulp-responsive');


gulp.task('build:img-features', function() {

  return gulp
    .src([
      'img/features/reports.jpg',
      'img/features/share.jpg',
      'img/features/realtime.jpg'
    ])
    .pipe(responsive({

      'reports.jpg': [
        {
          width: 100,
          rename: 'reports-low.jpg'
        }
      ],

      'share.jpg': [
        {
          width: 100,
          rename: 'reports-low.jpg'
        },
      ],

      'realtime.jpg': [
        {
          width: 100,
          rename: 'reports-low.jpg'
        }
      ]

    }));

});

gulp.task('build:img-main', function() {

  return gulp
    .src([
      'img/main/1.jpg',
      'img/main/2.jpg',
      'img/main/3.jpg'
    ])
    .pipe(responsive({

      '1.jpg': [
        {
          width: 100,
          rename: '1-low.jpg'
        }
      ],

      '2.jpg': [
        {
          width: 100,
          rename: '2-low.jpg'
        },
      ],

      '3.jpg': [
        {
          width: 100,
          rename: '3-low.jpg'
        }
      ]

    }));

});
