var gulp      =    require('gulp');
    // concat    =    require('gulp-concat'),
    // uglify    =    require('gulp-uglify');


gulp.task('todoscripts',function(){
    return gulp.src(
             [
                 'node_modules/todomvc-common/base.css',
                 'node_modules/todomvc-app-css/index.css'
             ]
           )
           .pipe(gulp.dest('client/src'));
});

gulp.task('default',['todoscripts']);  