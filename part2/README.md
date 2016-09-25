## 编译 TypeScript 和 Typing

### 安装 TypeScript

```
npm install typescript --save-dev
```

### 创建 tsconfig.json 配置文件

```
{
    "compilerOptions": {
        "target": "es5",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

此时之前的 app.component.ts 中的错误就解决了。

### 编译 TypeScript

```
$(npm bin)/tsc -v
$(npm bin)/tsc --rootDir src --outDir dist
```

此时会在项目中出现一个 dist 文件夹，并且里面的文件都是经过编译后的 js。但是你会在命令行中看到一些错误信息例如：`Cannot find name 'Map'`、`Cannot find name 'Set'` 等等，不要担心接下来我们将解决这些问题。

### 安装 Typings 以及 core-js

```
npm install typings --save-dev

$(npm bin)/typings -v
$(npm bin)/typings search core-js
$(npm bin)/typings install --global --save dt~core-js
```

注意：core-js 需要安装在全局

此时再编译 TypeScript 时就不会有错误了

```
$(npm bin)/tsc --rootDir src --outDir dist
```

