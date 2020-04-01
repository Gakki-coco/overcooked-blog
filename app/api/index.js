/**
 * api server
 */

module.exports = (url)=> {
    let apiMap = {
        '/list.action': ['吉他', '三只松鼠', 'MongoDB'],
        '/user.action': ['Gakki', '女性', '日本']
    }
    return Promise.resolve(apiMap[url])
}