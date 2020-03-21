/**
 * 主要核心逻辑入口
 */

const fs = require('fs')
const path = require('path')

class App {
    constructor() {

    }
    initServer() {
        // 初始化工作

        // 核心逻辑，高阶函数
        return (request, response) => {
            // 读文件相对于 node 的启动目录 process.cwd()
            let { url } = request
            // 每个请求逻辑根据 url 进行代码分发
            let getPath = (url) => {
                return path.resolve(process.cwd(), `public/${url}`)
            }
            let staticFunc = (url) => {
                if (url === '/') {
                    url = '/index.html'
                }
                fs.readFile(getPath(url), 'utf-8', (error, data) => {
                    response.end(data)
                })
            }
            staticFunc(url)
        }
    }
}

module.exports = App