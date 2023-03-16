const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("./users.json", (error, data) => {
      if (error) {
        console.error(`Error reading file: ${error.message}`);
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("Internal Server Error");
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(data);
      }
    });
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hello, World!</h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Error: Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
