myApp.service('ListingsService', function ($http) {
    console.log('Listings service created')
    var ls = this;
    ls.listings = {data: []};
    ls.rentals = {data: []};

    ls.getListings = function () {

        $http.get('/viewlistings').then(function (response) {
            console.log('success');
            ls.listings.data = response.data;
            console.log(ls.listings)
        }).catch(function (error) {
            console.log('Failure', error)
        })
    }
    ls.getListings();

    ls.postListings = function (listing) {
        console.log(listing)
        $http.post('/viewlistings', listing).then(function (response) {
            console.log('success posting!');
            ls.getListings();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    ls.deleteListing = function (listingId) {
        $http.delete('/viewlistings/' + listingId).then(function (response) {
            console.log('success');
            console.log(listingId);
            ls.getListings();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    ls.getRentals = function(){
        
        $http.get('/viewrentals').then(function(response){
            console.log('success');
            ls.rentals.data = response.data;
            console.log(ls.rentals)
        }).catch(function(error){
            console.log('Failure', error)
        })
    }
    ls.getRentals();

    ls.postRentals = function(listing){
        console.log(listing)
        $http.post('/viewrentals', listing).then(function(response){
            console.log('success posting!')
            ls.getRentals();
            $route.reload();
        }).catch(function(error){
            console.log('Failure!')
        });
    }

    ls.deleteRentals = function(rentalId){
        $http.delete('/viewrentals/' + rentalId).then(function(response){
            console.log('success');
            console.log(rentalId);
            ls.getRentals();
        }).catch(function(error){
            console.log('Failure!')
        })
    }

})//End service