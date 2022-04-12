var express = require("express");
var http = require("http");
var fs = require("fs");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 7733;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var server = http.createServer(reservations)
function reservations (req, res){
    res.end("Table Reserved")
}
server.listen(PORT, () =>{
console.log("server is listening on port" + PORT);
});

fs.readFile(__dirname + "/home.html", 
function (err, data){
    if (err) throw err;
    res.writeHead(200, {"content-Type": "text/html"})
});
