var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/estate/listings', {
        templateUrl: 'templates/viewListings.html',
        controller: 'ListingsController as vl'
    }).when('/estate/view', {
        templateUrl: 'templates/viewRentals.html',
        controller: 'RentalsController as vr'
    }) 
});