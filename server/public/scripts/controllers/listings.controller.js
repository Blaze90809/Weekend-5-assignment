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
}])