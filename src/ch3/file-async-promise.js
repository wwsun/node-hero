'use strict';

const fs = require('fs');

function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}

Promise.all([
  stats('src/ch3/file1.txt'),
  stats('src/ch3/file2.txt'),
  stats('src/ch3/file3.txt')
]).then(data => console.log(data))
  .catch(err => console.log(err));
