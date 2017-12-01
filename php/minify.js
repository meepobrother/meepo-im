const gulp = require('gulp');
const phpMinify = require('@aquafadas/gulp-php-minify');

gulp.task('minify:php', () => gulp.src('path/to/lib/**/*.php', { read: false })
    .pipe(phpMinify())
    .pipe(gulp.dest('path/to/out'))
);