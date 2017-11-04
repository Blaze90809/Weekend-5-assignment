myApp.controller('RentalsController', ['$http', function($http){
    var vr = this;
    vr.rentals = {};

    vr.getRentals = function(){
        
        $http.get('/view').then(function(response){
            console.log('success');
            vr.rentals = response.data;
            console.log(vr.rentals)
        }).catch(function(error){
            console.log('Failure', error)
        })
    }
    vr.getRentals();
}])