'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dmafApp
 */
angular.module('dmafApp')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
