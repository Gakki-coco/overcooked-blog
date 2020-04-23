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
                let data = []
                // stream 分为 paused 和 flow 两种状态
                // 汉字会占用 3 位 Buffer，所以不能直接 data += chunk
                context.req.on('data', (chunk) => {
                    data.push(chunk)
                }).on('end', () => {
                    let endData = Buffer.concat(data).toString()
                    reqCtx.body = JSON.parse(endData)
                    resolve()
                })
            } else {
                resolve()
            }
        }
    })
}