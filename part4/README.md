## Webpack

### 安装 Webpack 和 ts-loade

```
npm install webpack --save-dev
npm install ts-loader --save-dev
$(npm bin)/webpack -v
```

### 创建 webpack.config.js 配置文件

```
var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};
```

###  运行 webpack

```
$(npm bin)/webpack --progress
```

此时打开 index.html 会有一个报错：app.bundle.js:18366 Uncaught reflect-metadata shim is required when using class decorators

### 在 main.ts 中导入 core-js、reflect-metadata和zone.js

导入这些模块后，我们需要对 main.ts 做一下修改，让它能够启动整个项目：

```
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
})
export class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
```

### 修改 `package.json` 中的编译脚本

```
{
    "name": "angular2-starter",
    "version": "0.1.0",
    "scripts": {
        "build": "webpack --grogress",
        "postinstall": "typings install"
    },
    "dependencies": {},
    "devDependencies": {}
}
```

运行 `npm run build`，打开 `index.html` 大功告成！






