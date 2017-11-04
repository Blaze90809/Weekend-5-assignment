var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./public/routes/listings.router.js')
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/viewlistings', listings);
app.use('/viewrentals', listings);

var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function(){
    console.log('mongoose is connected')
});

mongoose.connection.on('error', function(){
    console.log('mongoose connection failed')
});
mongoose.connect(databaseUrl);

app.listen(port, function(){
    console.log('Listening on port: ', port)
});