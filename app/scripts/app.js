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
        'ngAnimate',
        'smartTable.table'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/downloads', {
                templateUrl: 'views/downloads.html',
                controller: 'DownloadCtrl'
            })
            .when('/staff', {
                templateUrl: 'views/people.html',
                controller: 'StaffCtrl'
            })
            .when('/staff/:person', {
                templateUrl: 'views/person.html',
                controller: 'PeopleCtrl'
            })
            .when('/learn', {
                templateUrl: 'views/learn.html',
                controller: 'LearnCtrl'
            })
            .when('/lab/:lab', {
                templateUrl: 'views/lab.html',
                controller: 'LabCtrl'
            })
            .when('/induction/:induction', {
                templateUrl: 'views/induction.html',
                controller: 'InductionCtrl'
            })
            .when('/machine/tutorials', {
                templateUrl: 'views/downloads.html',
                controller: 'TutorialsCtrl'
            })
            .when('/machine/:machine', {
                templateUrl: 'views/machine.html',
                controller: 'MachineCtrl'
            })
            .when('/mediaEvents', {
                templateUrl: 'views/mediaEvents.html',
                controller: 'MediaEventsCtrl'
            })
            .when('/booking', {
                templateUrl: 'views/booking.html',
                controller: 'BookingCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
