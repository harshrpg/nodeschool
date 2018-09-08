// ## HTTP CLIENT(Exercise 7 of 13)

// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command - line argument.Write the String contents of each
// "data" event from the response to a new line on the console(stdout).

const http = require("http");
http
  .get(process.argv[2], function(res) {
    res.setEncoding("utf-8").on("data", function(data) {
      console.log(data);
    });
  })
  .on("error", function(e) {
    console.log("Error: " + e.message);
  });
