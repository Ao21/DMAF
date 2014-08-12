'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('MediaEventsCtrl', function($scope,$routeParams) {

		$scope.staff = [
		{name:'Marjo Niemela', desc: 'DMaF Lab Manager', img: 'digfab/digfab0.jpg', col:'252525', op:'0.24', link:'marjo'},
		{name:'Mel Wimborne', desc: 'Timber Fabrication & Digital Fabrication',subheading:'Fine woodwork (materials & equipment), CNC Routing, Laser Cutting', img: 'digfab/digfab0.jpg', col:'252525', op:'0.24', link:'marjo'},
		{name:'Gabrielle Ulacco', desc: 'Robotics & Digital Fabrication', subheading:'Robotics, CNC Routing, Laser Cutting', img: 'digfab/digfab0.jpg', col:'252525', op:'0.24', link:'marjo'},
		{name:'Gabrielle Ulacco', desc: 'Robotics & Digital Fabrication', subheading:'Robotics, CNC Routing, Laser Cutting', img: 'digfab/digfab0.jpg', col:'252525', op:'0.24', link:'marjo'},
		]
	
	
    
});
