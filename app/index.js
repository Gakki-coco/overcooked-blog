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
            let context = {
                req: request,
                reqCtx: {
                    body: '', // post 请求的数据
                    query: {} // 处理客户端 get 请求
                },
                res: response,
                resCtx: {
                    headers: {}, // response 返回报文
                    body: '' // 返回给前端的内容区
                }
            }
            urlParser(context).then(() => {
                return apiServer(context)
            }).then(() => {
                return staticServer(context)
            }).then(() => {
                let base = { 'X-powered-by': 'Node.js' }
                let { body } = context.resCtx
                response.writeHead(200, 'Resolve OK', base)
                response.end(body)
            })
        }
    }
}

module.exports = App