## NPM Scripts

当然我们在编译过程中不会一直输入同样的命令，此时 NPM 给我们提供了很多脚本命令功能

### 创建编译脚本

```
{
    "name": "angular2-starter",
    "version": "0.1.0",
    "scripts": {
        "build": "tsc --rootDir src --outDir dist"
    },
    "dependencies": {
    },
    "devDependencies": {
    }
}
```

运行以下命令即可完成编译

```
npm run build
```

### 创建 postinstall 

我们可以通过 `postinstall` 来完成 typing 的自动安装。

```
{
    "name": "angular2-starter",
    "version": "0.1.0",
    "scripts": {
        "build": "tsc --rootDir src --outDir dist",
        "postinstall": "typings install"
    },
    "dependencies": {
    },
    "devDependencies": {
    }
}
```

这样一来，我们通过 `npm install` 就可以安装项目的所有依赖，包括 typings 模块。