myApp.controller('ListingsController', function (ListingsService) {
    console.log('listingsController created')
    var vl = this;
    vl.listings = ListingsService.listings;

    if(vl.listings.length === 0){
        getListings();
    }

    //Promise chaining on getListings
    function getListings(){
        ListingsService.getListings().then(function(response){
            // console.log('Promise:', response.data);
            vl.listings=response.data;
        
    })
};

    vl.postListings = function(listing){
        ListingsService.postListings(listing);
        
    }

    vl.deleteListing = function(listingId){
        ListingsService.deleteListing(listingId);
       
        
    }

});