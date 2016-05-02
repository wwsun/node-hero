'use strict';

const express = require('express');
const app = express();
const port = 3000;

// define middleware
app.use((request, response, next) => {
  console.log(request.headers);
  next(); // calling next signals Express that it can jump to the next middleware or router handler
});

// define middleware
app.use((request, response, next) => {
  request.chance = Math.random(); // add am extra property to request object
  next();
});


app.get('/', (request, response) => {
  // response.send('hello from express');
  response.json({
    chance: request.chance
  });
});

app.get('/test', (request, response) => {
  response.send('test page')
});


app.get('/404', (request, response) => {
  throw new Error('oops');
});

// Error handler middleware,
//  it should be the last middleware
//  it has a 'next' callback - it can be used to chain multiple error handlers

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err);
  response.status(500).send('Something broke!');
});

app.listen(port, err => {
  
  if (err) {
    return console.log('something bad happened', err);
  }
  
  console.log(`server is listening on ${port}`);
  
});