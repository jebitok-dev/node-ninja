const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made')
})
server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000')
})

//local host & port numbers 127.0.0.1
//port number - like doors into a computer - browser connecting to internet
// 3000 - common for development localhost:3000 