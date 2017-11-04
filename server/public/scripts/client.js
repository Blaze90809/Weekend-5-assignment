var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/listings', {
        templateUrl: 'templates/viewListings.html',
        controller: 'ListingsController as vl'
    }).when('/view', {
        templateUrl: 'templates/viewRentals.html',
        controller: 'RentalsController as vr'
    }) 
});