/**
 * 主要核心逻辑入口
 */

class App {
    constructor() {
        this.middlewareArr = []
        // 设计一个空的 Promise
        this.middlewareChain = Promise.resolve()
    }
    use(middleware) {
        this.middlewareArr.push(middleware)
    }
    // 根据中间件数组，创建 Promise 链条
    composeMiddleware(context) {
        let { middlewareArr } = this
        for (let middleware of middlewareArr) {
            this.middlewareChain = this.middlewareChain.then(() => {
                return middleware(context)
            })
        }
        return this.middlewareChain
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
                    hasUser: false, // 标识用户
                    statusCode: 200,
                    statusMessage: 'Resolve OK',
                    headers: {}, // response 返回报文
                    body: '' // 返回给前端的内容区
                }
            }
            // 1. 每一块中间件只需关注修改 context 对象即可，彼此独立
            // 2. 设计了 use 和 composeMiddleware 这两个 API，用来创建 Promise 链条
            // 3. 开发者可以专注于中间件开发，而不需要关注具体逻辑
            // 4. 函数体可以百年不变
            this.composeMiddleware(context).then(() => {
                let base = { 'X-powered-by': 'Node.js' }
                let { body, headers, statusCode, statusMessage } = context.resCtx
                response.writeHead(statusCode, statusMessage, Object.assign(base, headers))
                response.end(body)
            })
        }
    }
}

module.exports = App