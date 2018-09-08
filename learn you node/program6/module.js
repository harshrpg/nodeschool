const fs = require("fs");
const path = require("path");


module.exports = function filteredLS(directory, extension, callback) {
  fs.readdir(directory, function(err, data) {
    if (err) return callback(err);
    files = data.filter(function(file) {
      return path.extname(file) === "." + extension;
    });
    callback(null, files);
  });
};
