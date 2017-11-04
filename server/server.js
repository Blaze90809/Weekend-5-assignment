var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./public/routes/realestate.router.js')
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/listings', listings);
app.use('/view', rentals);

var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/listings';
var databaseUrl = 'mongodb://localhost:27017/rentals';

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