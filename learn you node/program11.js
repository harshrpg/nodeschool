const http = require("http");
const fs = require("fs");
const PORT = process.argv[2];
const src = fs.createReadStream(process.argv[3]);
const server = http.createServer((req, res) => {
  src.pipe(res);
});

server.listen(PORT);
