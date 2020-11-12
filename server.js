const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method) //run localhost:3000 on browser

    res.setHeader('Content-type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err) //keeps request hanging
        } else {
            res.write(data);
            res.end();
        }
    })
    

})
server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000')
})

//local host & port numbers 127.0.0.1
//port number - like doors into a computer - browser connecting to internet
// 3000 - common for development localhost:3000 