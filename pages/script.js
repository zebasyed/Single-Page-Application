/*script.js
   Author: Zeba Syed
   Description: Angular.js routing along with code for message display from an external REST API http://jsonplaceholder.typicode.com
*/
    var navigation = angular.module('navigation', ['ngRoute']);
        navigation.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/home.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : '/about.html',
                controller  : 'aboutController'
            })
            .when('/contact', {
                templateUrl : '/contact.html',
                controller  : 'contactController'
            });
    });

    navigation.controller('mainController', function($scope, $http) {
        $scope.message = 'This is the Home page';
        $http.get('http://jsonplaceholder.typicode.com/posts/1').then(function(response){
        $scope.greeting = response.data;
        });
        
    });

    navigation.controller('aboutController', function($scope, $http) {
        $scope.message = 'This is an About Page';
        $http.get('http://jsonplaceholder.typicode.com/posts/1').then(function(response){
        $scope.random = response.data; 
        });
    });

    navigation.controller('contactController', function($scope, $http) {
        $scope.message = 'This is the Contact Page';
        $http.get('http://jsonplaceholder.typicode.com/posts/1').then(function(response){
        $scope.apiContact = response.data; 
        });
    });