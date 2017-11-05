myApp.controller('ListingsController', ['$http', function($http){
    console.log('listingsController created')
    var vl = this;
    vl.listings = {};

    vl.getListings = function(){
        
        $http.get('/viewlistings').then(function(response){
            console.log('success');
            vl.listings = response.data;
            console.log(vl.listings)
        }).catch(function(error){
            console.log('Failure', error)
        })
    }
    vl.getListings();
    
    vl.postListings = function(listing){
      console.log(listing)
    $http.post('/viewlistings', listing).then(function(response){
      console.log('success posting!');
      vl.getListings();
    }).catch(function(error){
        console.log('Failure!');
    });
    }

    vl.deleteListing = function(listingId){
     $http.delete('/viewlistings/' + listingId).then(function(response){
         console.log('success');
         console.log(listingId);
         vl.getListings();
     }).catch(function (error) {
        console.log('Failure!');
    });
    }
    
}]);