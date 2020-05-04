/**
 * 网站路由
 */

// 内容排布
// / 首页：博客列表 + 个人展示
// /list：博客列表 + 博客分类
// /write: 写博客（Markdown + 预览区）
// /about: 关于
// url 重定向

const urlRewriteMap = {
    '/': 'index',
    '/list': 'list',
    '/write': 'write',
    '/about': 'about'
}

module.exports = urlRewriteMap