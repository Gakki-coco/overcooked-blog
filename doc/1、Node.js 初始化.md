## 常用命令
```
npm --help
npm init
npm ls
npm run xxx
npm instal xxx --save-dev --verbose
lsof -i :7000
curl -i localhost:7000
```

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