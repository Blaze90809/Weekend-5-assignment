myApp.controller('RentalsController', ['$http', function($http){
    console.log('rentalscontroller created')
    var vr = this;
    vr.rentals = {};

    vr.getRentals = function(){
        
        $http.get('/viewrentals').then(function(response){
            console.log('success');
            vr.rentals = response.data;
            console.log(vr.rentals)
        }).catch(function(error){
            console.log('Failure', error)
        })
    }
    vr.getRentals();
}])