var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/viewlistings', {
        templateUrl: 'templates/viewlistings.html',
        controller: 'ListingsController as vl'
    }).when('/viewrentals', {
        templateUrl: 'templates/viewrentals.html',
        controller: 'RentalsController as vr'
    }) 
});