const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello Sohel, you have completed you Lab by self made CICD Pipeline");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
