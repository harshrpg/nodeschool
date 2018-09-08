const bl = require("bl");
const http = require("http");
http
  .get(process.argv[2], function(res) {
    res.pipe(
      bl(function(err, data) {
        var data_text = data.toString();
        console.log(data_text.length);
        console.log(data_text);
      })
    );
  })
  .on("error", function(e) {
    console.log(e);
  });
