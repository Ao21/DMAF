'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('BookingCtrl', function($scope) {
    $scope.bookings = ['Your file must be set up in the correct Rhino template','Read the instructions clearly stated on the Rhino template to ensure you are setting up your file correctly','Laser Inductions new to DMaF, you must bring the Material Safety Data Sheet (MSDS) these can be found online',"Ensure no lines duplicate (lines layered on top of each other). Run 'Make2D' or 'SelDup' Rhino commands to rectify duplicated lines",'Nest pieces across each panel carefully or by using nesting software such as RhinoNEST. Minimizing gaps between pieces saves material and reduces cutting time','Regardless of material type, your selection must be flat (tolerance +/-1mm).'];
    $scope.bookingsReady = '<p>Test</p>'
});
