'use strict';

const express = require('express');

const hostname = '127.0.0.1';
const port = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port,() => {
    console.log(`Server running at http://${hostname}:${port}`)
});
