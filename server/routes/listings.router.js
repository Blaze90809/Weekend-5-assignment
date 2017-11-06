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

router.post('/', function(req, res){
    console.log(req.body)

    var listingToAdd = new Listing(req.body);

    listingToAdd.save(function(err, data){
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    })
})//End Post route

router.delete('/:id', function (req, res){
    var listingId = req.params.id;
    Listing.findByIdAndRemove({ "_id": listingId }, function(err, data){
        if(err){
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    })
});//end Delete route

module.exports = router;