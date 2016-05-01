'use strict';

const fs = require('fs');

// pay attention to the output sequence!

console.log('start reading a file...'); // 1

// using error-first callbacks
fs.readFile('src/ch3/file.md', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file');
    return console.log(err);
  }
  
  console.log(content); // 3
});

console.log('end of the file'); // 2