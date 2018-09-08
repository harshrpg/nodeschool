/**
 * Create an http server
 */
const http = require("http");
const map = require("through2-map");
const PORT = process.argv[2];
// http allows us to create an http server (to create a tcp use "net")
const server = http.createServer((req, res) => {
  req
    .pipe(
      map(function(chunk) {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});

server.listen(PORT);
