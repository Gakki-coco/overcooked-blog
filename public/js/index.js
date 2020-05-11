
require('../css/index.scss')
require('highlight.js').initHighlightingOnLoad()

setTimeout(function() {
    $.ajax({
        url: '/user.action',
        method: 'get',
        success: function(array) {
            var liStr = array.map(function(element) {
                return '<li>' + element + '</li>'
            }).join('')
            $('#root').html(liStr)
        },
        error: function(error) {
            console.log(error)
        }
    })
    // 模拟 POST
    $.ajax({
        url: '/list.action',
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(['Gakki', 'Node.js']),
        success: function (array) {
            var liStr = array.map(function (element) {
                return '<li>' + element + '</li>'
            }).join('')
            $('#shop').html(liStr)
        },
        error: function (error) {
            console.log(error)
        }
    })
}, 1000)