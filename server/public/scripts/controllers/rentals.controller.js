myApp.controller('RentalsController', function(ListingsService){
    console.log('rentalscontroller created')
    var vr = this;
    vr.rentals = ListingsService.rentals;
    console.log(vr.rentals);

    
        ListingsService.getRentals();
     

    vr.deleteRentals = function(rentalId){
        ListingsService.deleteRentals(rentalId);
        
       
    }

    vr.postRentals = function(listing){
       ListingsService.postRentals(listing);
      
       
    }

});