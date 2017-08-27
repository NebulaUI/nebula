```javascript
gulp.task('build:css', () => {
  const includePaths = ['./node_modules/nebula-css/']
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({ includePaths }))
    .pipe(gulp.dest('dist'))
})
```