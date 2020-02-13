# gulp-ts2gas

```js
const gulp = require("gulp");
const myTransform = require("./myTransform");
const ts2gas = require(".");

gulp.task("foobar", function() {
  return gulp
    .src("index.js")
    .pipe(myTransform(ts2gas))
    .pipe(gulp.dest("./res"));
});
```
