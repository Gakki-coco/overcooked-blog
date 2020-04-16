/**
 * api server
 */

module.exports = (context) => {
    let { url, method } = context.req
    let { reqCtx, resCtx } = context
    let { res } = context

    let apiMap = {
        '/list.action': ['吉他', '三只松鼠', 'MongoDB'],
        '/user.action': ['Gakki', '女性', '日本']
    }
    method = method.toLowerCase()
    return Promise.resolve({
        then: (resolve, reject) => {
            if (url.match('action')) {
                if (method === 'get') {
                    resCtx.body = JSON.stringify(apiMap[url])
                } else {
                    let { body } = reqCtx
                    resCtx.body = JSON.stringify(body)
                }
                res.setHeader('Content-Type', 'application/json')
            }
            resolve()
        }
    })
}