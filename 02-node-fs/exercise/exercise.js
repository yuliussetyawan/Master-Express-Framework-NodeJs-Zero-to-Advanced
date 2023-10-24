/*

Node File System and HTTP Module Exercise

In this exercise you will leverage both the file system
and http requests and responses to spin up node and reads
an html file and returns its content!

1. From the terminal create an html file demofile1.html which includes
in the body a header with the first header tag 'My header' 
and a paragraph tag which contains 'my paragraph' within. 
Nice and simple :) 

2. Create a javascript file exercise.js which will serve as our node
server. 

3. Create a server pointed at the port 4000 which reads the demofile1.html
and returns its content.

Good luck brave Javascript warlock! 

*/

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(4000);
