/**
 * api server
 */

module.exports = (request) => {
    let { url, method, context } = request
    // request.context = {
    //     body: '',
    //     query: {},
    //     method: 'get'
    // }
    let apiMap = {
        '/list.action': ['吉他', '三只松鼠', 'MongoDB'],
        '/user.action': ['Gakki', '女性', '日本']
    }
    method = method.toLowerCase()
    if (method === 'get') {
        return Promise.resolve(apiMap[url])
    } else {
        let { body } = context
        return Promise.resolve(body)
    }
}