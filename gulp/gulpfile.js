// 获取gulp
var gulp = require('gulp');
// 获取gulp-uglify 组件（用于压缩JS）
var uglify = require('gulp-uglify');

// 压缩js 文件
// 在命令行使用 gulp script 启动任务
gulp.task('script', function() {
    // 找到文件
    gulp.src('js/*.js')
        // 压缩文件
        .pipe(uglify())
        //另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})