# gulp-ts2gas

This is a handy tool for transpile latest TS codes to the last Google Apps Script Environment

```js
const through = require("through2");
const gulpts2gas = require("gulp-ts2gas"); // I'm using local paths
const ts2gas = require("ts2gas"); // ts2gas in a dev-mode. For example I set up target: ts.ScriptTarget.ES2015

gulp.task("ts2gas", _ =>
  gulp
    .src("./src/**/*") // <== You van pass any file. Only *.ts files are modified
    .pipe(gulpts2gas(through, ts2gas)) // <== Yes, it's a mixer
    .pipe(gulp.dest("./build"))
);
```
