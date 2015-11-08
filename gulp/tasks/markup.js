var gulp = require('gulp');
var path = require('../config').markup;

 gulp.task('markup', function(){
  return gulp.src(path.src)
   .pipe(gulp.dest(path.dest));
 });
