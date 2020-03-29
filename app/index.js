/**
 * 主要核心逻辑入口
 */

const staticServer = require('./static-server')
const apiServer = require('./api')

class App {
    constructor() {

    }
    initServer() {
        // 初始化工作

        // 核心逻辑，高阶函数
        return (request, response) => {
            let { url } = request
            // 所有以 action 结尾的 url，都认为它是 ajax
            // 返回一个字符串或者 buffer
            let body = ''
            let headers = {}
            if (url.match('action')) {
                body = JSON.stringify(apiServer(url))
                headers = {
                    'Content-Type': 'application/json'
                }
            } else {
                // 每个请求逻辑根据 url 进行代码分发
                body = staticServer(url)
            }
            let finalHeader = Object.assign(headers, { 'X-powered-by': 'Node.js' })
            response.writeHead(200, 'Resolve OK', finalHeader)
            response.end(body)
        }
    }
}

module.exports = App