const http = require('http');
const fs = require('fs');
const url = require('url')
const path = require('path')
const EventEmitter = require('events')

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let fileToSend = '';
    if (req.url === '/') fileToSend = './index.html';
    else if (req.url === '/about' || req.url === '/contact-me') fileToSend = '.' + req.url + '.html';
    else fileToSend = './404.html'
    fs.readFile(fileToSend, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(err);
        }
        console.log(req.url)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })

})

server.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})