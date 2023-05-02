const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to out homepage');
  }
  if (req.url === '/about') {
    res.end('Here is about section');
  }
});

server.listen(5000);
