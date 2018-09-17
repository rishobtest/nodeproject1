var db = require("../core/db");
var express = require("express");

exports.auth = function (req, resp, username, passcode) {
    db.executeSql("select * from dbo.User_Table where Username = '"+username+"' and Passcode = '"+passcode+"'", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal Error occurred", { "Content-Type": "text/html" });
            resp.write("<html><head><title>500</title></head><body>500: Internal Error. Details: " + err + "</body></html>");
        }
        else {
            resp.writeHead(200, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
};

exports.add = function (req, resp, reqBody) {
};

exports.update = function (req, resp, reqBody) {
};

exports.delete = function (req, resp, reqBody) {
};