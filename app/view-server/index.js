/**
 * created by Gakki
 * 处理路由映射表
 * ejs 动态渲染
 */

const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const urlRewriteMap = require('./urlrewrite')
module.exports = (context) => {
    let { req, resCtx } = context
    let { url } = req
    return Promise.resolve({
        then: (resolve, reject) => {
            // 过滤 ajax 和静态资源，只保留路由请求
            if (url.match('action') || url.match(/\./)) {
                resolve()
            } else {
                const viewPath = path.resolve(__dirname, 'ejs')
                let ejsName = urlRewriteMap[url]
                if (ejsName) {
                    let htmlPath = path.resolve(viewPath, ejsName + '.ejs')
                    let html = fs.readFileSync(htmlPath, 'utf-8')
                    resCtx.headers = Object.assign(resCtx.headers, {
                        'Content-Type': 'text/html'
                    })
                    resCtx.body = html
                    resolve()
                } else {
                    // 重定向
                    resCtx.headers = Object.assign(resCtx.headers, {
                        'Content-Type': 'text/html',
                        'Location': '/'
                    })
                    resCtx.statusCode = 302
                    resCtx.statusMessage = 'redirect'
                    resCtx.body = ''

                    resolve()
                }
            }



            // if (urlMap[url]) {
            //     let render = ejs.compile(fs.readFileSync(htmlPath, 'utf-8'), {
            //         compileDebug: true
            //     })
            //     resCtx.body = render()
            // }
        }
    })
}