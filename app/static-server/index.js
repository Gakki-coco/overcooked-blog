/**
 * created by Gakki
 * 静态资源服务
 * 图片、js、css、font
 */
const fs = require('fs')
const path = require('path')
// express 框架 app.use(static('public')) 绝对路径
// 读文件相对于 node 的启动目录 process.cwd()
let getPath = (url) => {
    return path.resolve(process.cwd(), `public/${url}`)
}

let staticFunc = (context) => {
    let { url } = context.req
    let { resCtx } = context

    return new Promise((resolve, reject) => {
        if (!url.match('action') && url.match(/\./)) {
            let _path = getPath(url)
            fs.readFile(_path, (error, data) => {
                if (error) {
                    resCtx.body = `NOT FOUND ${error.stack}`
                }
                resCtx.body = data
                resolve()
            })
        }else {
            resolve()
        }
    })
}

module.exports = staticFunc