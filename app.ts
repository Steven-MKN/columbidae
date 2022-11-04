'use strict';

const {some_helper_func} = require("./src/some_helper_func");

const express = require('express');

const hostname: string = '127.0.0.1';
const port: number = 8080;

const app = express();

app.get('/', (req: any, res:any) => {
    res.send('Hello World' + some_helper_func(1,1));
})

type resp = {

}

app.listen(port,() => {
    console.log(`Server running at http://${hostname}:${port}`)
});
