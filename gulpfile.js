const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//compile sass

gulp.task('sass',function(){
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
})

// watch & serve
gulp.task("serve", gulp.series(["sass"], function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(["src/scss/*.scss"], gulp.series(["sass"]));
    gulp.watch(["*src/*.html"]).on("change", browserSync.reload);
}));

// default task
gulp.task("default", gulp.series(["serve"]));
