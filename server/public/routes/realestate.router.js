var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentalSchema = new Schema({
    rent: Number,
    sqft: Number,
    city: String
});

var ListingsSchema = new Schema({
    cost: Number,
    sqft: Number,
    city: String
});

var Rentals = mongoose.model('Rentals', RentalSchema, 'Rentals');
var Listings = mongoose.model('Listings', ListingsSchema, 'Listings');

router.get('/view', function(req, res){
   Rentals.find({}, function(err, Rentals){
       if(err){
           console.log('Error! ', err);
           res.sendStatus(500);
       } else {
           res.send(Rentals);
       }
   })
}); //End Rental GET route.

router.get('/listings', function(req, res){
    Listings.find({}, function(err, Listings){
        if(err){
            console.log('Error!', err);
            res.sendStatus(500);
        } else {
            res.send(Listings);
        }
    })
}); //End Home Listings

module.exports = router;