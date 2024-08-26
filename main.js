const express = require('express')
const app = express()
const mongoose = require('mongoose');

conn = mongoose.connect('mongodb://127.0.0.1:27017');
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
    res.render('index', { foo: 'FOO' });
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}: http://localhost:3000`)
})