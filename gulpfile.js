const gulp = require('gulp'),
	less = require('gulp-less'),
	babel = require('gulp-babel'),
	autoprefixer_css = require('gulp-autoprefixer');
// csso = require('gulp-csso'),
// minify = require('gulp-minify');

const src = {
	less: 'src/smacss/styles.less',
	css: 'src/styles',
	withBabel: 'src/scripts/withBabel',
	withoutBabel: 'src/scripts/withoutBabel'
}




const less_compile = done => {
	gulp.src(src.less)
		.pipe(less())
		.pipe(autoprefixer_css({
			overrideBrowserslist: ['last 20 versions', 'ie 8', 'ie 9'],
			cascade: true
		}))
		.pipe(gulp.dest(src.css))
	done();
}

const babel_compile = done => {
	gulp.src(src.withoutBabel + '/**/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.on('error', err => console.log(err.message))
		.pipe(gulp.dest(src.withBabel))
	done();
}



gulp.task('less', less_compile);
gulp.task('babel', babel_compile);


const watchFiles = {
	less: 'src/smacss/**/*.less',
	js: 'src/scripts/withoutBabel/**/*.js'
}

gulp.task('watch', () => {
	gulp.watch(watchFiles.less, gulp.parallel('less'));
	gulp.watch(watchFiles.js, gulp.parallel('babel'));
});


