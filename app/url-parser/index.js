/**
 * url-parser
 * 处理客户端数据
 * 在 request.context 下面挂载东西
 */

//  request: query、body、method

module.exports = (request) => {
    let { url, method, context } = request
    method = method.toLowerCase()
    return Promise.resolve({
        then: (resolve, reject) => {
            // request 原型链上有 readable、stream、eventEmitter
            context.method = method
            context.query = {}
            if (method === 'post') {
                let data = ''
                // stream 分为 paused 和 flow 两种状态
                request.on('data', (chunk) => {
                    data += chunk
                }).on('end', () => {
                    context.body = JSON.parse(data)
                    resolve()
                })
            }else {
                resolve()
            }
        }
    })
}