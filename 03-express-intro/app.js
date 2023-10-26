var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// body parser is a npm library used to process data sent through HTTP request body
// Middleware - it's a function that holds the request object,
// the response object - respond to the server before the request

// define routes

// refers to how application's endpoints (URI) respond to clien requests
// All URLs are URIs but not all URIs are URLs

// the app object includes get() post() put() and delete()

app.get("/", function (req, res) {
  // res.send("<html><body><h1>Hello World</h1></body></html>");
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit-contact-data", function (req, res) {
  var name = `${req.body.firstName} ${req.body.lastName}`;
  res.send(`${name} submitted successfully`);
});

app.put("/update-data", function (req, res) {
  res.send("PUT request");
});

app.delete("/delete-data", function (req, res) {
  res.send("DELETE request");
});

var server = app.listen(3000, function () {
  console.log("Node server is running");
});
