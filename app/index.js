/**
 * 主要核心逻辑入口
 */

const staticServer = require('./static-server')

class App {
    constructor() {

    }
    initServer() {
        // 初始化工作

        // 核心逻辑，高阶函数
        return (request, response) => {
            // 每个请求逻辑根据 url 进行代码分发
            let { url } = request
            let body = staticServer(url)
            response.writeHead(200, 'Resolve OK', {'X-powered-by': 'Node.js'})
            response.end(body)
        }
    }
}

module.exports = App