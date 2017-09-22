#gulp-manager
gulp自动化环境

code: [https://coding.net/u/benjiaoxz/p/gulp-manager/git](https://coding.net/u/benjiaoxz/p/gulp-manager/git)

pages: [http://benjiaoxz.coding.me/gulp-manager/examples/index.html](http://benjiaoxz.coding.me/gulp-manager/examples/index.html)

## 使用

	npm install
	npm start

## 命令

    gulp js 				js优化
    gulp less 				less优化
    gulp sprite 			        雪碧图
    gulp image 				图片优化
    gulp watch 				监控静态资源
    gulp browsersync 		        监控文件变化，并自动注入浏览器，无需刷新
    gulp help 				gulp帮助

## 建议目录结构

    root
        dist
            javascripts
            stylesheets
            images
        examples
            index.html
        src
            js
            less
            images

## 文件

    .browsersyncdef     默认配置
    .browsersynclrc     自定义配置
    
## 配置

    var BRANCH = __dirname;
    
    globalOption.res = {
    	src: {
    		    jssrc: path.join(BRANCH, 'src/js'),
    		  lesssrc: path.join(BRANCH, 'src/less'),
    		 imagesrc: path.join(BRANCH, 'src/images')
    	},
    	dest: {
    		   jsdest: path.join(BRANCH, 'dist/javascripts'),
    		 lessdest: path.join(BRANCH, 'dist/stylesheets'),
    		imagedest: path.join(BRANCH, 'dist/images')
    	},
    	filter: [
            path.join(BRANCH, 'src/less/base')
    	]
    };
    
    备注：监听文件变化，然后对相应的文件进行处理，src表示源路径，dest表示目标路径，filter表示过滤路径

## License

[MIT](http://opensource.org/licenses/MIT)