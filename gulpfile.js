const gulp = require('gulp');
const sass = require('gulp-sass')

gulp.task('sass',function(){
    return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
gulp.task('watch',function(){
    gulp.watch("scss/style.scss",gulp.series('sass'));
});