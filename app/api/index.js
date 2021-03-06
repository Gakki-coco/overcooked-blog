/**
 * api server
 */

module.exports = (context) => {
    let { pathname, method } = context.reqCtx
    let { reqCtx, resCtx } = context
    let { res } = context

    let apiMap = {
        '/list.action': ['吉他', '三只松鼠', 'MongoDB'],
        '/user.action': ['Gakki', '女性', '日本']
    }
    
    return Promise.resolve({
        then: (resolve, reject) => {
            if (pathname.match('action')) {
                if (method === 'get') {
                    resCtx.body = JSON.stringify(apiMap[pathname])
                } else {
                    let { body } = reqCtx
                    resCtx.body = JSON.stringify(body)
                }
                resCtx.headers = Object.assign(resCtx.headers, { 'Content-Type': 'application/json' })
            }
            resolve()
        }
    })
}