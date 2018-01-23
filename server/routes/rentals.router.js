var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentalSchema = new Schema({
    rent: Number,
    sqft: Number,
    city: String
});

var Rental = mongoose.model('Rental', RentalSchema, 'rentals');

router.get('/', function(req, res){
    Rental.find({}, function(err, foundRentals){
        if(err){
            console.log('Error! ', err);
            res.sendStatus(500);
        } else {
            res.send(foundRentals);
        }
    })
 }); //End Rental GET route.

router.post('/', function(req, res){

    var rentalToAdd = new Rental(req.body);

    rentalToAdd.save(function(err, data){
        if(err){
            console.log(err)
        } else {
            res.sendStatus(201);
        }
    })
});//End Post route

router.delete('/:id', function(req, res){
    var rentalId = req.params.id;
    Rental.findByIdAndRemove({ "_id": rentalId }, function(err,data){
        if(err){
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    })
}); //end Delete route.

module.exports = router;