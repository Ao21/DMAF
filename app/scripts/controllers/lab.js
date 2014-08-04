'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('LabCtrl', function($scope,$routeParams) {
	console.log($routeParams);

	if($routeParams.lab === 'digfab'){
		$scope.machines = [
		{name:'Tutorials & Templates', desc: 'Laser Cutting Templates Growing Library of Practical Tutorials Avaiable for download', img: 'digfab/digfab0.jpg', col:'252525', op:'0.24', link:'tutorials'},
		{name:'KUKA', desc: 'KUKA KR60-3 6-AXIS ROBOT', img: 'digfab/digfab1.jpg', col:'555555', op:'0.7', link:'kuka'},
		{name:'Laser Cutters', desc: 'Trotec (Delta & Gamma) Universal (Alpha)', img: 'digfab/digfab2.jpg', col:'555555', op:'0.7', link:'lasercutters'},
		{name:'3D Printers: Extruders', desc: 'Makerbot Replicator 2', img: 'digfab/digfab3.jpg', col:'555555', op:'0.4', link:'extruders'},
		{name:'3D Printers: Powder', desc: 'ZCorp Spectrum Z510 ZCorp Spectrum Z310', img: 'digfab/digfab4.jpg', col:'7a0026', op:'0.7',link:'powder'},
		{name:'CNC Router', desc: 'Multicam SR2412iv', img: 'digfab/digfab5.jpg', col:'003471', op:'0.5', link:'cncrouter'},
		{name:'CNC Mill', desc: 'Roland MDK650 Tormech', img: 'digfab/digfab6.jpg', col:'7a0026', op:'0.7', link:'cncmill'},
		{name:'Vacuum Former', desc: 'Formech 686PT - GOT1000', img: 'digfab/digfab7.jpg', col:'555555', op:'0.7', link:'vacuumformer'},
		{name:'Materials', desc: '', img: 'digfab/digfab8.jpg', col:'003471', op:'0.7', link:'materials'},

		]
	}
    
});
