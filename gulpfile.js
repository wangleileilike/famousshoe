const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
//配置首页
gulp.task("index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

//配置HTML文件夹
gulp.task("html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});


//配置css文件夹
gulp.task("sass",function(){
	gulp.src("sass/**.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});

//配置图片
gulp.task("img",function(){
	gulp.src("images/**")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
});

//配置json数据文件
gulp.task("data",function(){
	return gulp.src("json/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
});




//将合并js文件进行压缩gulp-uglify
gulp.task("scripts",function(){
	return gulp.src(["js/**.js"])
	.pipe(concat("main.js"))
	.pipe(babel({"presets":["es2015"]}))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("main.min.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
});

//将合并plugin文件
gulp.task("plugin",function(){
	return gulp.src("plugin/**")
	.pipe(gulp.dest("dist/plugin"))
	.pipe(connect.reload());
});


//侦测文件变化watch
gulp.task("watch",function(){
	gulp.watch("index.html",["index"]);
	gulp.watch("*.html",["html"]);
	gulp.watch("images/**",["img"]);
	gulp.watch("sass/**.scss",["sass"]);
	gulp.watch("js/**.js",["scripts"]);
	gulp.watch("plugin/**",["plugin"]);
	gulp.watch("json/**.json",["data"]);
});

//对图片进行压缩
gulp.task("images",function(){
	gulp.src("images/**")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/images"))
});


//gulp-connect插件搭建本地服务,修改页面后自动更新
gulp.task("sever",function(){
	connect.server({
		root:"dist",
		livereload:true
	});
});

gulp.task("default",["sever","watch"]);





