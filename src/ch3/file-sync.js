'use strict';

const fs = require('fs');

let content;
try {
  content = fs.readFileSync('src/ch3/file.md', 'utf-8');
} catch (err) {
  console.log(err);
}

console.log(content);