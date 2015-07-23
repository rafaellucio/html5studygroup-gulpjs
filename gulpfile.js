var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('minify-css', function () {
	return gulp.src('./app/*.css')
			.pipe(minifyCss({
				compatibility: 'ie8'
			}))
			.pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: './app'
		}
	});
});

gulp.task('default', ['minify-css','browser-sync'], function () {

	gulp.watch('./app/*.html').on('change', browserSync.reload);
	gulp.watch('./app/*.css').on('change', browserSync.reload);
	console.log('It\'s working my default task');
});
