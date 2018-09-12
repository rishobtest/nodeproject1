var http = require("http");
var emp = require("../controllers/chats");
var settings = require("../settings");

fs = require('fs');
fs.readFile('index.html');

http.createServer(function (req, resp) {
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
}).listen(process.env.PORT || 5000, function() {
    console.log("Started listening at: " + process.env.PORT);
});