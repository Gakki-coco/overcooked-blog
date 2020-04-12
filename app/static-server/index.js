/**
 * created by Gakki
 * 静态资源服务
 */
const fs = require('fs')
const path = require('path')
// express 框架 app.use(static('public')) 绝对路径
// 读文件相对于 node 的启动目录 process.cwd()
let getPath = (url) => {
    return path.resolve(process.cwd(), `public/${url}`)
}

let staticFunc = (request) => {
    let { url } = request
    let map = {
        '/': 'index.html',
        '/about': 'about.html',
        '/list': 'list.html'
    }
    url = map[url] || url

    return new Promise((resolve, reject) => {
        let _path = getPath(url)
        let body = fs.readFile(_path, (error, data) => {
            if (error) {
                resolve(`NOT FOUND ${error.stack}`)
            }
            resolve(data)
        })
    })
}

module.exports = staticFunc