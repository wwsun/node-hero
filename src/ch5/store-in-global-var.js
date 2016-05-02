const express = require('express');
const app = express();

const users = [];

app.post('/users', (req, res) => {
  
  const user = req.body;
  users.push({
    name: user.name,
    age: user.age
  });
  
  res.send('successfully registered');
  
});