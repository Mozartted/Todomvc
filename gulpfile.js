var gulp=require("gulp"),
    browser_sync=require("browser-sync"),
    concat=require("gulp-concat"),
    uglify=require("gulp-uglify");



gulp.task('styles', function(){
    return gulp.src(
        [
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ]
    ).
    pipe(gulp.dest('app/styles'));
});

gulp.task('scripts', function(){
    return gulp.src(
        [
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js'
        ]
    ).
    pipe(gulp.dest('app/scripts'));
});

gulp.task('angular-stuff', function(){
    return gulp.src(
        [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-route/angular-route.js'
        ]
    ).pipe(uglify())
    .pipe(concat('angular-stuff.js'))
    .pipe(gulp.dest('app/angular-stuff/angular'));
});

gulp.task('default',['scripts','angular-stuff','styles']);
