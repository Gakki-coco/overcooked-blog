
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
    $.ajax({
        url: '/list.action',
        method: 'get',
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