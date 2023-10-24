var fs = require("fs");

// how to append files in node
/*
fs.appendFile("test.rtf", " Hello universe!", function (err) {
  if (err) console.log(err);
  else console.log("append operation complete");
});
*/

// how to delete files in node
fs.unlink("test.rtf", function () {
  console.log("delete operation complete");
});

// how to read files in node
var data = fs.readFile("TestFile.rtf", function (err, data) {
  if (err) throw err;
  // convert bytes into string
  console.log(data.toString());
});

// how to write files in node
/*
fs.writeFile("test.rtf",'Hello World!', function (err) {
  if (err) console.log(err);
  else console.log("write operation complete");
});
*/
