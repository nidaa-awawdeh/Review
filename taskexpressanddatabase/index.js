const express = require('express'),
    http = require('http');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const app = express();


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});