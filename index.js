
const http = require('http')
const PORT = 7000

http.createServer((request, response) => {
    let string = JSON.stringify(require('./package.json'))
    response.write('123')
    response.end(string)
}).listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)
})