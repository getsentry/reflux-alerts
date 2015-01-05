"use strict";

var gulp = require("gulp"),
    gp_react = require("gulp-react");

gulp.task('build', function () {
    return gulp.src(['src/**/*.jsx', 'src/**/*.js', '!*/__tests__/*'])
      .pipe(gp_react({harmony: true}))
      .pipe(gulp.dest('dist'));
});
