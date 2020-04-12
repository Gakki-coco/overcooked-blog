/**
 * 主要核心逻辑入口
 */

const staticServer = require('./static-server')
const apiServer = require('./api')
const urlParser = require('./url-parser')

class App {
    constructor() {

    }
    initServer() {
        // 初始化工作

        // 核心逻辑，高阶函数
        return (request, response) => {
            // 所有以 action 结尾的 url，都认为它是 ajax
            // 返回一个字符串或者 buffer
            // 每个请求逻辑根据 url 进行代码分发
            // DRY
            request.context = {
                body: '',
                query: {},
                method: 'get'
            }
            urlParser(request).then(()=> {
                return apiServer(request)
            }).then(value => {
                if (!value) {
                    return staticServer(request)
                } else {
                    return value
                }
            }).then(value => {
                let base = { 'X-powered-by': 'Node.js' }
                let body = ''
                if (value instanceof Buffer) {
                    body = value
                } else {
                    body = JSON.stringify(value)
                    let finalHeader = Object.assign(base, { 'Content-Type': 'application/json' })
                    response.writeHead(200, 'Resolve OK', finalHeader)
                }
                response.end(body)
            })
        }
    }
}

module.exports = App