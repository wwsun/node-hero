'use strict';

const express = require('express');
const pg = require('pg');
const conString = 'postgres://username:password@localhost/node_hero';

const app = express();

// pg.connect(conString, (err, client, done) => {
//   if (err) {
//     return console.error('error fetching client from pool', err);
//   }
//  
//   client.query('SELECT 41::varchar AS my_first_query', ['node hero'], (err, result) => {
//    
//     done();
//    
//     if (err) {
//       return console.error('error happened during query', err);
//     }
//    
//     console.log(result.rows[0]);
//     process.exit(0);
//   });
//  
// });

app.post('/users', (req, res, next) => {
  const user = req.body;
  
  pg.connect(conString, (err, client, done) => {
    if (err) {
      // pass the error to the express error handler
      return next(err);
    }
    
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age],(err, result) => {
      
      // this done callback signals the pg driver that the connection can be closed or returned to the connection pool
      done();
      
      if (err) {
        // pass the error to the express error handler
        return next(err);
      }
      
      res.send(200);
      
    });
  });
});

app.get('/users', (req, res, next) => {
  
  pg.connect(conString, (err, client, done) => {
    if (err) {
      // pass the error to the express error handler
      return next(err);
    }
    
    client.query('SELECT name, age FROM users;', [], (err, result) => {
      
      done();
      
      if (err) {
        // pass the error to the express error handler
        return next(err);
      }
      
      res.json(result.rows);
    });
    
  });
});