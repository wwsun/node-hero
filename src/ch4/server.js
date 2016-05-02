'use strict';

const http = require('http');
const port = 3000;

// it will be invoked every time a request hits the server
// two log message: one for '/' and one for 'favicon.ico'
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello node.js server');
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  
  console.log(`server is listening on ${port}`);
});

