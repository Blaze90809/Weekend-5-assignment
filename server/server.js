var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var listings = require('./public/routes/listings.router.js')
var rentals = require('./public/routes/rentals.router.js');
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/viewlistings', listings);
app.use('/viewrentals', rentals);

var mongoose = require('mongoose');

var dbPath = '';

if(process.env.blaze1 != undefined) {
    // use the string value of the environment variable
   dbPath = process.env.blaze1;
} else {
    // use the local database server
    dbPath = 'mongodb://localhost:27017/realestate';
}

mongoose.connection.on('connected', function(){
    console.log('mongoose is connected')
});

mongoose.connection.on('error', function(){
    console.log('mongoose connection failed')
});
mongoose.connect(dbPath);

app.listen(port, function(){
    console.log('Listening on port: ', port)
});