## Webpack 开发插件

为了在开发过程中更加的方便，我们通过 Webpack 插件来方便开发

### html-webpack-plugin
这个插件，可以将 html 拷贝到 output 中对应的文件夹。

#### 安装
```
npm install html-webpack-plugin --save-dev
```

#### 在 webpack.config.js 中导入

```
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
```

此时在 index.html 中不需要引用 `<script src="../dist/app.bundle.js"></script>` 这段脚本，这个插件会自动引用。

### 压缩 JavaScript

运行如下命令 Webpack 可以将最终的 js 进行压缩

```
$(npm bin)/webpack -p --progress
```

修改 package.json 脚本命令，增加 build:prod 脚本命令：

```
{
    "name": "angular2-starter",
    "version": "0.1.0",
    "scripts": {
        "build": "webpack --progress",
        "build:prod": "webpack -p --progress",
        "postinstall": "typings install"
    },
    "dependencies": {},
    "devDependencies": {}
}
```

### webpack-dev-server
它是一个创建本地服务器的 Webpack 插件，并且支持 liverelod 功能
#### 安装

```
npm install webpack-dev-server --save-dev
```

#### 修改 package.json，增加 serve 脚本命令：

```
{
    "name": "angular2-starter",
    "version": "0.1.0",
    "scripts": {
        "build": "webpack --progress",
        "build:prod": "webpack -p --progress",
        "postinstall": "typings install",
        "serve": "webpack-dev-server --inline --progress"
    },
    "dependencies": {},
    "devDependencies": {}
}
```

#### 运行

```
npm run serve
```

这样一来，你写的代码很快就能即时的反应到浏览器中了。





