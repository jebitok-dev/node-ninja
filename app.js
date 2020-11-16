const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
     //content type

     res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>'); //content type
    res.sendFile('./views/about.html', {root: __dirname});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 -- every request not url (at the bottom positioning)
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname})
})