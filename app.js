const express = require('express');

//express app
const app = express();

//register view engine
app.set("view engine", 'ejs');

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');

    //  res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>'); //content type
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
})

//404 -- every request not url (at the bottom positioning)
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})