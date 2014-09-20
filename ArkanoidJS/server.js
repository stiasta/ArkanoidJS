var http = require('http');
var fs = require('fs');

var port = process.env.port || 1337;
http.createServer(function (req, res) {
    fs.readFile("client/index.html", function (error, contents) {
        if (error) {
            res.writeHead(500);
            res.end();
        }

        res.setHeader("Contet-Length", contents.length);
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(contents);
    });
}).listen(port);