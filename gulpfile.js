var gulp		= require('gulp'),
	sass		= require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(browserSync.reload({stream: true}))
	.pipe(gulp.dest('app/css'))
});

gulp.task('brsync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['sass', 'brsync'], function () {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});