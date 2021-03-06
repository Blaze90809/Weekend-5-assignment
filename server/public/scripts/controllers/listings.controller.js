myApp.controller('ListingsController', function (ListingsService) {
    console.log('listingsController created')
    var vl = this;
    vl.listings = ListingsService.listings;


    ListingsService.getListings();

    vl.postListings = function (listing) {
        ListingsService.postListings(listing);
        vl.clearSearch();
    }
    vl.clearSearch = function() {
        vl.listing = null;
    }

    vl.deleteListing = function (listingId) {
        ListingsService.deleteListing(listingId);


    }

});