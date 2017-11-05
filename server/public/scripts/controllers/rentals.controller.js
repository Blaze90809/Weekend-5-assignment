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

    vr.postRentals = function(listing){
        console.log(listing)
        $http.post('/viewrentals', listing).then(function(response){
            console.log('success posting!')
            vr.getRentals()
        }).catch(function(error){
            console.log('Failure!')
        });
    }

    vr.deleteRentals = function(rentalId){
        $http.delete('/viewrentals/' + rentalId).then(function(response){
            console.log('success');
            console.log(rentalId);
            vr.getRentals();
        }).catch(function(error){
            console.log('Failure!')
        })
    }

}]);