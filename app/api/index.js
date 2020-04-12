/**
 * api server
 */

module.exports = (request) => {
    let { url, method } = request
    let apiMap = {
        '/list.action': ['吉他', '三只松鼠', 'MongoDB'],
        '/user.action': ['Gakki', '女性', '日本']
    }
    method = method.toLowerCase()
    if (method === 'get') {
        return Promise.resolve(apiMap[url])
    } else {
        // 处理 POST，BS 模型
        return new Promise((resolve, reject) => {
            // request 原型链上有 readable、stream、eventEmitter
            let data = ''
            // stream 分为 paused 和 flow 两种状态
            setTimeout(() => {
                request.on('data', (chunk) => {
                    data += chunk
                }).on('end', () => {
                    resolve(JSON.parse(data))
                })
            }, 1000)

        })
    }
}