var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/viewlistings', {
        templateUrl: 'templates/viewListings.html',
        controller: 'ListingsController as vl'
    }).when('/viewrentals', {
        templateUrl: 'templates/viewRentals.html',
        controller: 'RentalsController as vr'
    }) 
});