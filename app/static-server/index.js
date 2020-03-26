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

let staticFunc = (url) => {
    let map = {
        '/': 'index.html',
        '/about': 'about.html',
        '/list': 'list.html'
    }
    url = map[url] || url
    let body = ''
    try {
        body = fs.readFileSync(getPath(url))
    }catch(error) {
        body = `NOT FOUND ${error.stack}`
    }
    return body
}

module.exports = staticFunc