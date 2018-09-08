const http = require("http");
const url = require("url");
const PORT = process.argv[2];
const server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  var apiPath = parsedUrl.pathname;
  var isoTime = new Date(parsedUrl.query.iso);
  if (isoTime) var conv_time = parseTime(isoTime, apiPath);
  if (conv_time) {
      res.writeHead(200,{'Content-Type':'application/json'})
      res.end(JSON.stringify(conv_time))
  } else {
      res.writeHead(404);
      res.end();
  };
});

function parseTime(time, path) {
  var time;
  if (path.includes("parsetime")) {
    return (time = {
      hour: time.getHours(),
        minute: time.getMinutes(),
      second: time.getSeconds()
    });
  } else if (path.includes("unixtime")) {
    return (time = {
      unixtime: time.getTime()
    });
  }
}

server.listen(PORT);
