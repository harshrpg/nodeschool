// Filtered LS
const fs = require("fs");
const data = fs.readdir(process.argv[2], function(err, data) {
  if (err) throw err;
  var terminator = "." + process.argv[3];
  data.forEach(function(item, index) {
    if (item.includes(terminator)) console.log(item);
  });
});

// A much better way
// var path = require("path");

// var folder = process.argv[2];
// var ext = "." + process.argv[3];

// fs.readdir(folder, function(err, files) {
//   if (err) return console.error(err);
//   files.forEach(function(file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   });
// });
