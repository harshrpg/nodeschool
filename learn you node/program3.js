// Node I/O
var fs = require("fs");
// fs is node's file system package
var count = fs.readFileSync(process.argv[2]).toString().split("\n").length-1;
console.log(count);
