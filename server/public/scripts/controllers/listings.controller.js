myApp.controller('ListingsController', ['$http', function($http){
    var vl = this;
    vl.listings = {};

    vl.getListings = function(){
        
        $http.get('/estate/listings').then(function(response){
            console.log('success');
            vl.listings = response.data;
            console.log(vl.listings)
        }).catch(function(error){
            console.log('Failure', error)
        })
    }
    vl.getListings();
}])