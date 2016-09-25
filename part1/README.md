## 安装 NPM 依赖
首先我们创建前端项目应该有的内容：

### 创建 src/index.html 文件:

```
<!DOCTYPE html>
<html>
    <head>
        <meta chartset="utf8">
        <title>Angular 2 Starter</title>
    </head>
    <body>
        <my-app>Loading...</my-app>
    </body>
</html>
```

### 创建 app/app.component.ts 文件：

```
import { Component } from '@angular/core';

```

### 创建 package.json 文件，并安装依赖项目

```
{
    "name": "angular2-starter",
    "version": "0.1.0",
    "dependencies": {
        "@angular/common": "2.0.0",
        "@angular/compiler": "2.0.0",
        "@angular/core": "2.0.0",
        "@angular/forms": "2.0.0",
        "@angular/http": "2.0.0",
        "@angular/platform-browser": "2.0.0",
        "@angular/platform-browser-dynamic": "2.0.0",
        "@angular/router": "3.0.0",
        "core-js": "^2.4.1",
        "reflect-metadata": "^0.1.3",
        "rxjs": "5.0.0-beta.12",
        "zone.js": "^0.6.23"
    }
}
```

用如下命令安装 npm 依赖：

```
npm install
```

### 在 app/app.component.ts 中创建组建

```
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My App</h1>'
})
export class AppComponent { }
```

此时会出现一些错误，不用担心，是我们的相关依赖没有安装完成，我们会在后面解决这个问题。

### 创建启动文件 main.ts

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component.ts';

platformBrowserDynamic().bootstrapModule(AppComponent);
```

现在这个项目雏形已经 OK ，但是这些代码都是基于 TypeScript 的，浏览器中无法运行，接下来我们会学习到如何编译 TypeScript。