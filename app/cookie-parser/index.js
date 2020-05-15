/**
 * 处理 cookie
 */
const cookie_parser = require('cookie')
// 设置白名单
const whiteNameList = ['/name_Gakki']
module.exports = (context) => {
    let { url } = context.req
    let { cookie } = context.req.headers
    let { res, resCtx } = context
    let cookieObj = cookie ? cookie_parser.parse(cookie) : {}

    return Promise.resolve({
        then: (resolve, reject) => {
            if (cookieObj['auth']) {
                resCtx.hasUser = true
                res.setHeader('Set-Cookie', cookieStr(100000))
            }
            // 设置白名单
            let cookieStr = time => `auth=true;Max-Age=${time}`

            // 登录
            if (whiteNameList.indexOf(url) > -1) {
                res.setHeader('Set-Cookie', cookieStr(100000))
            }
            // 登出
            if (url === '/logout') {
                res.setHeader('Set-Cookie', cookieStr(0))
            }
            resolve()
        }
    })
}