'use strict';
const express = require('express');
const app = express();

// define all endpoints here
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});

// exercise 1
app.get('/math/circle/:r', function (req, res) {
    let radius = req.params['r'];
    let area = Math.PI * Math.pow(radius, 2);
    let circumference = 2 * Math.PI * radius;
    res.type('json');
    res.json({'area': area, 'circumference': circumference});
});

// exercise 2
app.get('/hello/name', function (req, res) {
    if (req.query['first'] && req.query['last']) {
        let firstName = req.query['first'];
        let lastName = req.query['last'];
        res.type('text');
        res.send('Hello ' + firstName + ' ' + lastName);
    }
    else {
        res.type('text').status(400).send('error, usage:/hello/name?first=firstnamehere&last=lastnamehere');
    }
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
