const mymodule = require("./module");
mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    return console.log("There was an: ",err);
  }
  data.forEach(function(file) {
    console.log(file);
  });
});
