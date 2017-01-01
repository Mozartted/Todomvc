var gulp=require("gulp"),
    browserSync=require("browser-sync"),
    concat=require("gulp-concat"),
    uglify=require("gulp-uglify");

gulp.task('config',function(){
  return gulp.src([
    '.env.example'
  ])
  .pipe(gulp.dest('.env'));
});

gulp.task('styles', function(){
    return gulp.src(
        [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'styles.css',
            'node_modules/todomvc-common/base.css',
            'node_modules/todomvc-app-css/index.css'
        ]
    ).
    pipe(gulp.dest('app/styles'));
});

gulp.task('serve',function(){
    browserSync.init({
        server:"app"
    });

    gulp.watch([
        '*.css',
    ],['styles','fonts']);

    gulp.watch([
        '*.js',
    ],['scripts']);

    gulp.watch("app/*.html").on('change',browserSync.reload);
});


gulp.task('scripts', function(){
    return gulp.src(
        [
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/todomvc-common/base.js'
        ]
    ).
    pipe(gulp.dest('app/scripts'));
});

gulp.task('fonts',function(){
    return gulp.src([
        'node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot',
        'node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg',
        'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf',
        'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
        'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2'
    ]).pipe(gulp.dest('app/fonts'));
});

gulp.task('angular-stuff', function(){
    return gulp.src(
        [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-route/angular-route.js'
        ]
    )
    .pipe(gulp.dest('app/angular-stuff/angular'));
});

gulp.task('default',['scripts','angular-stuff','styles','fonts','config','serve']);
