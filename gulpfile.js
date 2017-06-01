var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('task', function(){
// 	//do something
// 	console.log('Hey there! Gulp is here now B-)');
// });

// gulp.task('task2', function(){
// 	//do something
// 	console.log('Ohh yeah now we are talking');
// });

gulp.task('sass', function(){
	return gulp.src('app/scss/styles.scss').pipe(sass())
		.pipe(gulp.dest('app/css'));
});