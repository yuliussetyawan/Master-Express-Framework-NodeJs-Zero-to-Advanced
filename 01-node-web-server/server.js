var http = require("http"); // Import node.js core module

// http is a protocol for fetching resources such as HTML documents
// http is essentially the foundation of any data exchange on the web

// creating server

// request and response both are callback function parameters
// that are used to node.js - queries, params, body, headers, and even cookies
var server = http.createServer(function (req, res) {
  // handle incoming resource here
  if (req.url == "/") {
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });
    // set response content
    res.write("<html><body><p>This is the home page</p></body></html>");
    res.end();
  } else if (req.url == "/contact") {
    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });
    // set response content
    res.write("<html><body><p>This is the contact page</p></body></html>");
    res.end();
  } else res.end("Invalid request");
});

server.listen(5000);
console.log("Node.js web server at port 5000 is running");
