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
		{name:'KUKA', desc: 'KUKA KR60-3 6-AXIS ROBOT', img: 'machines/kuka/banner.jpg', col:'555555', op:'0.7', link:'kuka'},
		{name:'Laser Cutters', desc: 'Trotec (Delta & Gamma) Universal (Alpha)', img: 'machines/laser/banner.jpg', col:'555555', op:'0.7', link:'lasercutters'},
		{name:'3D Printers: Extruders', desc: 'Makerbot Replicator 2', img: 'machines/extruder/banner.jpg', col:'555555', op:'0.4', link:'extruders'},
		{name:'3D Printers: Powder', desc: 'ZCorp Spectrum Z510 ZCorp Spectrum Z310', img: 'machines/powder/banner.jpg', col:'7a0026', op:'0.7',link:'powder'},
		{name:'CNC Router', desc: 'Multicam SR2412iv', img: 'machines/cncrouter/banner.jpg', col:'003471', op:'0.5', link:'cncrouter'},
		{name:'CNC Mill', desc: 'Roland MDK650 Tormech', img: 'machines/cncmill/banner.jpg', col:'7a0026', op:'0.7', link:'cncmill'},
		{name:'Vacuum Former', desc: 'Formech 686PT - GOT1000', img: 'machines/vacuumformer/banner.jpg', col:'555555', op:'0.7', link:'vacuumformer'},
		{name:'Materials', desc: '', img: 'digfab/digfab8.jpg', col:'003471', op:'0.7', link:'materials'},

		]
		$scope.blurb = "Enabling the rapid and accurate production of prototypes and finished designs and extensive research opportunities in robotics, advanced fabrication through computation and material properties.";
		$scope.blurbExpanded ="";
	}
	if($routeParams.lab === 'metal'){
		$scope.machines = [
		{name:'Level 1 equipment', desc: 'Access: SICU completion', img: 'metal/metal0.jpg', col:'252525', op:'0.24', link:'metal-level1'},
		{name:'Level 2, Level 3 & Level 4 equipment', desc: 'Access: SICU completion & Individual Machine Induction', img: 'metal/metal1.jpg', col:'555555', op:'0.7', link:'metal-level234'},
		{name:'Materials', desc: '', img: 'metal/metal2.jpg', col:'555555', op:'0.7', link:'materials'},
		
		]
	}

	if($routeParams.lab === 'timber'){
		$scope.machines = [
		{name:'Level 1 equipment', desc: 'Access: SICU completion', img: 'timber/timber0.jpg', col:'252525', op:'0.24', link:'timber-level1'},
		{name:'Level 2, Level 3 & Level 4 equipment', desc: 'Access: SICU completion & Individual Machine Induction', img: 'timber/timber1.jpg', col:'555555', op:'0.7', link:'timber-level234'},
		{name:'Materials', desc: '', img: 'timber/timber2.jpg', col:'555555', op:'0.7', link:'materials'},
		
		]
	}

	if($routeParams.lab === 'media'){
		$scope.machines = [
		{name:'2D Processes', desc: 'Access: SICU completion', img: 'digfab/digfab0.jpg', col:'252525', op:'0.24', link:'media-2d'},
		{name:'3D Processes', desc: 'Access: SICU completion & Individual Machine Induction', img: 'digfab/digfab1.jpg', col:'555555', op:'0.7', link:'media-3d'},
		{name:'Mixed Media', desc: '', img: 'digfab/digfab2.jpg', col:'555555', op:'0.7', link:'media-mixed'},
		
		]
	}



	if($routeParams.lab === 'people'){
		$scope.machines = [		
		]
	}
    
});
