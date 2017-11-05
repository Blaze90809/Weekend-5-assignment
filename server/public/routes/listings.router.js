var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingsSchema = new Schema({
    cost: Number,
    sqft: Number,
    city: String
});


var Listing = mongoose.model('Listing', ListingsSchema, 'listings');

router.get('/', function(req, res){
    Listing.find({}, function(err, foundListings){
        if(err){
            console.log('Error!', err);
            res.sendStatus(500);
        } else {
            res.send(foundListings);
            console.log(foundListings);
        }
    })
}); //End Home Listings

module.exports = router;