const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
//  lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })
    greet();

    res.setHeader('Content-type', 'text/html');

    // determine path user visits using switch statement
    let path = './views/';
    switch(req.url) {
        case'/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //status code
    //describes type of response sent to the browser
    // 200 - ok, 301 - resource moved, 404- not found, 

    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err) //keeps request hanging
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
    

})
server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000')
})

//local host & port numbers 127.0.0.1
//port number - like doors into a computer - browser connecting to internet
// 3000 - common for development localhost:3000 