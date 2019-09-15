const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");

async function Sass() {
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
}

async function scripts() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("./build/js"));
}

gulp.task("del", function() {
  return del(["build/*"]);
});

gulp.task("sass", Sass);
gulp.task("scripts", scripts);

gulp.task("watch-sass", function() {
  gulp.watch("./src/style/**/*.scss", Sass);
});

gulp.task("watch-scripts", function() {
  gulp.watch("./src/js/**/*.js", scripts);
});
