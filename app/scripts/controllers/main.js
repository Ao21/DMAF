'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    var mySVGsToInject = $('.svgInject');
    SVGInjector(mySVGsToInject);
});
