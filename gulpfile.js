"use strict";

var gulp = require("gulp"),
    gp_react = require("gulp-react");

gulp.task('build', function () {
    return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
        .pipe(gp_react())
        .pipe(gulp.dest('dist'));
});
