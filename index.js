// Import Express Module
const express = require('express');

// Import Path module
const path = require('path');

// Initialize a new instance of Express
const app = new express();

// EJS: Template Engine
const ejs = require('ejs');

// We are telling Express to use EJS as our template engine
app.set('view engine', 'ejs');

// Public Folder for sharing all static files
app.use(express.static('public'));

// Assign port for the project
app.listen(4000, () => {
    console.log('App listening on port 4000');
});

//
// Routing: Where we map requests to specific handlers depending on their URL.
// 
app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'public/index.html'));
    res.render('index');
});

app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'public/about.html'));
    res.render('about');
});

app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'public/post.html'));
    res.render('post');
});

app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'public/contact.html'));
    res.render('contact');
});