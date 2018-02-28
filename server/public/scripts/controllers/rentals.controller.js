myApp.controller('RentalsController', function(ListingsService){
    console.log('rentalscontroller created')
    var vr = this;
    vr.rentals = ListingsService.rentals;


    
        ListingsService.getRentals();
     

    vr.deleteRentals = function(rentalId){
        ListingsService.deleteRentals(rentalId);
    }

    vr.postRentals = function(listing){
       ListingsService.postRentals(listing);
       vr.clearSearch();       
    }

    vr.clearSearch = function() {
        vr.listing = null;
    }

});