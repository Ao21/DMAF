'use strict';

/**
 * @ngdoc overview
 * @name dmafApp
 * @description
 * # dmafApp
 *
 * Main module of the application.
 */
angular
    .module('dmafApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngAnimate'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/lab/:lab', {
                templateUrl: 'views/lab.html',
                controller: 'LabCtrl'
            })
            .when('/machine/:machine', {
                templateUrl: 'views/machine.html',
                controller: 'MachineCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
