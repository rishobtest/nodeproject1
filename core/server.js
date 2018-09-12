var http = require("http");
var emp = require("../controllers/chats");
var settings = require("../settings");
var fs = require('fs');


fs.readFile('site/index.html', function (err, html) {
    if (err) throw err;

http.createServer(function (req, resp) {

    if (req.url === "/") {
        resp.writeHeader(200, { "Content-Type": "text/html" });
        resp.write(html);
    }
    
        switch (req.method) {
            case "GET":
                if (req.url === "/") {
                    resp.end();
                }
                else if (req.url === "/chats") {
                    emp.getList(req, resp);
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
    }).listen(process.env.PORT || 5000, function () {
        console.log("Started listening at: " + process.env.PORT);
    })
});