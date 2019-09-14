const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");

gulp.task("sass", function() {
  return gulp
    .src("./src/style/**/*.scss")
    .pipe(concat("styles.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./build/css"));
});

gulp.task("scripts", function() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("./build/js"));
});

gulp.task("img", () =>
  gulp
    .src("src/picture/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"))
);
