## 常用命令
```
npm install -g
npm --help
npm init
npm ls
npm run xxx
npm instal xxx --save-dev --verbose
lsof -i :7000
curl -i localhost:7000

// current work directory
process.cwd()
```

## npm
### package.json 有什么用
1. 配合 npm 使用，用来定义模块包
2. 定义包的依赖管理[devDependencies/dependencies]
3. 定义包的基本描述信息[description、name、version]
4. 定义包的使用方式[npm scripts]
5. 定义包的主程序入口模块标识[main]
6. 定义包的可执行文件地址[bin]
7. 定义包的 bug、people、issue、license 等其它信息

## --save 和 --save-dev 的区别
相同点：
- 都会在 node_modules 目录下安装 app

不同点：
- 安装写入依赖时，分别会在 dependencies 和 devDependencies，添加版本号
- `npm install` will install both "dependencies" and "devDependencies"
- `npm install --production` will only install "dependencies"
- `npm install --dev` will only install "devDependencies"

## CommonJS
### 含义
1. 愿景是 JS 能够在任何地方运行
2. 规范了模块、二进制、buffer、I/O、网关等
3. Node.js 借鉴 CommonJS 实现了一套简易的模块系统

### 模块规范
1. 模块引用
   - 核心模块
   - 文件模块
   - 内建模块
    ```
    // require 默认会查找核心模块 node_modules .js .json .node
    var path = require('path')
    ```
2. 定义
   ```
    exports.hello = function() {
        console.log('world')
    }
    // 等价于
    module.exports = {
        hello: 'world'
    }
   ``` 
3. 标识
   
    小驼峰命名的字符串或`.`或`..`路径