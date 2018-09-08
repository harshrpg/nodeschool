// JUGGLING ASYNC
const fs = require("fs");
const bl = require("bl");
const http = require("http");
var respData = [];
let count = 0;
/**
 * bl stands for buffer list
 * it is used to buffer up the result of the reques
 */
function printData() {
  for (let i = 0; i < 3; i++) {
    console.log(respData[i]);
  }
}

function httpGet(i) {
  http
    .get(process.argv[2 + i], function(res) {
      res.pipe(
        bl(function(err, data) {
          if (err) return err;
          respData[i] = data.toString();
          count++;
          if (count == 3) printData();
        })
      );
    })
    .on("error", function(e) {
      console.log("Error occured: " + e);
    });
}

for (let index = 0; index < 3; index++) {
  httpGet(index);
}
