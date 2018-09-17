var http = require("http");
var emp = require("../controllers/chats");
var settings = require("../settings");
var fs = require('fs');
var url = require('url');
var preq;


fs.readFile('site/index.html', function (err, html) {
    if (err) throw err;

http.createServer(function (req, resp) {
    preq = req;
    if (req.url === "/") {
        resp.writeHeader(200, { "Content-Type": "text/html" });
        resp.write(html);
    }
    
        switch (req.method) {
            case "GET":
                if (req.url === "/") {
                    resp.end();
                }
                else if(req.url.toString().includes("/auth")) {
                    emp.auth(req, resp, (url.parse(req.url, true)).query.username, (url.parse(req.url, true)).query.passcode);
                }
                break;
            case "POST":
                break;
            case "PUT":
                break;
            case "DELETE":
                break;
            default:
                break;
        }
    }).listen(5000, function () {
        console.log("Started listening at: " + 5000);
    })
});