myApp.service('ListingsService', function ($http) {
    console.log('Listings service created')
    var ls = this;
    ls.listings = [];
    ls.rentals = {data: []};

    ls.getListings = function () {

       return $http.get('/viewlistings').then(function (response) {
            ls.listings=response.data;
            return response;
        }).catch(function (error) {
            console.log('Failure', error)
        })
    }
    ls.getListings();

    ls.postListings = function (listing) {
        console.log(listing)
        $http.post('/viewlistings', listing).then(function (response) {
            ls.getListings();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    ls.deleteListing = function (listingId) {
        $http.delete('/viewlistings/' + listingId).then(function (response) {
            ls.getListings();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    ls.getRentals = function(){
        
        $http.get('/viewrentals').then(function(response){
            ls.rentals.data = response.data;
        }).catch(function(error){
            console.log('Failure', error)
        })
    }
    ls.getRentals();

    ls.postRentals = function(listing){

        $http.post('/viewrentals', listing).then(function(response){
            ls.getRentals();
            $route.reload();
        }).catch(function(error){
            console.log('Failure!')
        });
    }

    ls.deleteRentals = function(rentalId){
        $http.delete('/viewrentals/' + rentalId).then(function(response){
            ls.getRentals();
        }).catch(function(error){
            console.log('Failure!')
        })
    }

})//End service