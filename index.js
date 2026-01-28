// const http = require("node:http");

// const server = http.createServer((req, res) => {
//     // console.log(req.headers);
//     // console.log(req.method);
//     // console.log(req.url);
//     if(req.method == 'GET' && req.url == '/home'){ 
//      res.writeHead( 200, {"Content-Type" : "text/html"});
//      res.end('<h1>siraj<h1/>')
//     }
// })

// server.listen(5000, 'localhost', () => {
//     console.log("Server running......");
// })

const express = require('express');
const app = express();

app.use('/home', (req, res) => {
    res.send('<h1>Hellow world-2</h1>');
});

app.listen(5000, () => {
    console.log('Server is running.........');
});







