/**
 * 主要核心逻辑入口
 */

const fs = require('fs')

class App {
    constructor() {

    }
    initServer() {
        // 初始化工作
        
        // 核心逻辑，高阶函数
        return (request, response)=> {
            // 读文件相对于 node 的启动目录 process.cwd()
            fs.readFile('./public/index.html', 'utf8', (error, data) => {
                response.end(data)
            })
        }
    }
}

module.exports = App