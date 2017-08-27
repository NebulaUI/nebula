```javascript
gulp.task('build:css', () =>
  gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
)
```