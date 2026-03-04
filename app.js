const http = require('http');

const server = http.createServer((req, res) => {
  res.write("I Love you Saniya");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
