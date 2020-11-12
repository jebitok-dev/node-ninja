const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method) //run localhost:3000 on browser

    res.setHeader('Content-type', 'text/plain');

    res.write('<p>hello ninjas</p>');
    res.end();
})
server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000')
})

//local host & port numbers 127.0.0.1
//port number - like doors into a computer - browser connecting to internet
// 3000 - common for development localhost:3000 