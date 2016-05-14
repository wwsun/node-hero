'use strict';

const path = require('path');
const express = require('express');
const rp = require('request-promise');
const exphbs = require('express-handlebars');

const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layout')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(___dirname, 'views'));

app.get('/:city', (req, res) => {
    rp({
        uri: '',
        qs: {
            q: req.params.city,
            // Use your accuweather API key here:
            // http://developer.accuweather.com/
            apiKey: 'api-key'
        },
        json: true
    })
})
    .then(data => {
        res.render('home', data);
    })
    .catch(err => {
        console.error(err);
        res.render('error');
    });
    
app.listen(3000);