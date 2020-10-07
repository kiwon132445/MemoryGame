const http = require('http');
const dt = require('./myModule');
let url = require('url');

http.createServer(function (req, res) {
    let username = url.parse(req.url, true);
    console.log("The server received a request ");
    res.writeHead(200, { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" });
    res.write("Hello " + username.query.name + ", the current server time is " + dt.myDateTime());
    res.end();
}).listen(8080);

console.log('Server is running and listening ...');