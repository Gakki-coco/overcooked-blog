/**
 * created by Gakki
 * 处理路由映射表
 * ejs 动态渲染
 */

const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
module.exports = (context) => {
    let { req, resCtx } = context
    let { url } = req
    return Promise.resolve({
        then: (resolve, reject) => {
            let urlMap = {
                '/': {
                    viewName: 'index.html'
                },
                '/about': {
                    viewName: 'about.html'
                }
            }
            let viewPath = path.resolve(process.cwd(), 'public')
            if (urlMap[url]) {
                let { viewName } = urlMap[url]
                let htmlPath = path.resolve(viewPath, viewName)

                resCtx.headers = Object.assign(resCtx.headers, {
                    'Content-Type': mime.getType(htmlPath)
                })

                let render = ejs.compile(fs.readFileSync(htmlPath, 'utf-8'), {
                    compileDebug: true
                })
                resCtx.body = render()
            }
            resolve()
        }
    })
}