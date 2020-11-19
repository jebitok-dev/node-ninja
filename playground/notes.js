//middleware is the code which runs (on the server) between getting a request and sending a response
// app.use(func)/ app.get('/',func)
//request to route'/' 
//response

const { request } = require("express")

// middleware examples
// logger middleware to log details of everuy request
// authentication protected middleware for protected routes
// middleware to parse JSON data from requests
// return 404 pages