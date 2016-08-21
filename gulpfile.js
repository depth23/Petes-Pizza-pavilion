var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
 
gulp.task('img-min', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('default', ['img-min']);