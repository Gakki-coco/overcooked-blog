/**
 * url-parser
 * 处理客户端数据
 * 在 request.context 下面挂载东西
 */

//  request: query、body、method

module.exports = (context) => {
    let { url, method } = context.req
    let { reqCtx } = context
    method = method.toLowerCase()
    return Promise.resolve({
        then: (resolve, reject) => {
            // request 原型链上有 readable、stream、eventEmitter
            if (method === 'post') {
                let data = ''
                // stream 分为 paused 和 flow 两种状态
                context.req.on('data', (chunk) => {
                    data += chunk
                }).on('end', () => {
                    reqCtx.body = JSON.parse(data)
                    resolve()
                })
            } else {
                resolve()
            }
        }
    })
}