const fs = require('fs');
const express = require('express');

const app = express();

app.post('/users', (req, res) => {
  const user = req.body;

  fs.appendFile('users.txt', JSON.stringify({ name: user.name, age: user.age}), err => {
    res.send('successfully registered');
  });
});