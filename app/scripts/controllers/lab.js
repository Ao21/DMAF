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
		$scope.blurbExpanded ="<p>This broad scope of complex equipment includes a Kuka KR60 6 Axis Robot with milling spindle, Multicam 3 Axis CNC Router, Roland Model CNC Mill with rotary 4th axis, Trotec and Universal laser cutters, ZCorp powder rapid prototypers, vacuum former and Makerbot 3D extruders.</p><p>As a central part of the DMaF, the University of Sydney Digital Fabrication Laboratory works closely within the Bachelor of Design in Architecture, Bachelor of Design Computing, Bachelor of Architecture and Environments, Masters of Architecture programs and Master of Interaction Design and Electronic Arts as well as facilitates strong research, experimentation and production linkages with PhD students and the Tin Sheds Gallery.</p><p> Such linkages promote a more integrated and interdisciplinary learning experience for students within the Faculty.</p>";
	}
	if($routeParams.lab === 'metal'){
		$scope.machines = [
		{name:'Level 1 equipment', desc: 'Access: SICU completion', img: 'metal/metal0.jpg', col:'252525', op:'0.24', link:'metal-level1'},
		{name:'Level 2, Level 3 & Level 4 equipment', desc: 'Access: SICU completion & Individual Machine Induction', img: 'metal/metal1.jpg', col:'555555', op:'0.7', link:'metal-level234'},
		{name:'Materials', desc: '', img: 'metal/metal2.jpg', col:'555555', op:'0.7', link:'materials'},
		
		]
		$scope.blurb = "The Metalastics Lab is an extensively equipped hub for materials research and fabrication focusing on metals and plastics. As with all studios and laboratories within the DMaF, access to the Metalastics Lab is a strictly subject to completion of the Safety Induction and Competency Course. Higher risk machines require additional Machine Specific Inductions prior to use.";
		$scope.blurbExpanded='<p>The lab is equipped to manipulate, form and join metals and plastics, using soldering and welding. Plastics and metals can be molded, joint, bent as well as cut, sanded and textured with the range of equipment we offer. The inclusion of metalastics as part of the DMaF enables close collaboration with other materials, particularly wood, and the composition of models using all three of our laboratories. This extends student’s ability to explore their designs across a variety of media.</p><p>The Lab makes available a range of materials for purchase and use. These materials are purchased in bulk and cost savings are passed on to users of the studio. The Lab offers a range of metals and plastics with various finishes and properties. Please see the DMaF materials sheet or speak to staff for information on costs and availability.</p><p>The Metalastics Lab provides a workspace to a number of core and elective units of study and functions as an experimental studio space for research into materials through development of prototypes and models.</p>'
	}

	if($routeParams.lab === 'timber'){
		$scope.machines = [
		{name:'Level 1 equipment', desc: 'Access: SICU completion', img: 'timber/timber0.jpg', col:'252525', op:'0.24', link:'timber-level1'},
		{name:'Level 2, Level 3 & Level 4 equipment', desc: 'Access: SICU completion & Individual Machine Induction', img: 'timber/timber1.jpg', col:'252525', op:'0.7', link:'timber-level234'},
		{name:'Materials', desc: '', img: 'timber/timber2.jpg', col:'555555', op:'0.7', link:'materials'},
		
		]
		$scope.blurb = 'The Timber Fabrication Lab provides staff, students and collaborators with a diverse and extensive range of materials and machinery for timber fabrication. Along with the expertise and experience of the Lab’s staff, this enables the production of designs and prototypes with an intense level of detail and specificity across a range of scales. Staff and students can explore the possibilities in the manipulation, joining, forming and finishing of timber across a broad range of species.'
		$scope.blurbExpanded='<p>The availability of well maintained classic machinery and modern equipment, power tools and hand tools also means users can explore the intersections of artisan skills and traditional fabrication methods with more technologically advanced ones, particularly through integration with the Digital Fabrication Laboratory. Through its collaboration with the University of Sydney Tin Sheds Gallery, Media Labs and other design venues throughout Sydney, the Timber Fabrication Lab is recognised for its comprehensiveness and its fostering of integrated and collaborative design and fabrication approaches.</p><p>As with all areas within the DMaF Lab, access to the Timber Fabrication Lab is a strictly subject to completion of the Safety Induction and Competency Course (SICU). This ensures that all users of the Lab are informed as to the operation of its extensive and complex machinery in a safe manner.</p>'
	}

	if($routeParams.lab === 'media'){
		$scope.machines = [
		{name:'2D Processes', desc: 'Access: SICU completion', img: 'media/medialab-2d/banner.jpg', col:'252525', op:'0.24', link:'media-2d'},
		{name:'3D Processes', desc: 'Access: SICU completion & Individual Machine Induction', img: 'media/medialab-3d/banner.jpg', col:'252525', op:'0.7', link:'media-3d'},
		{name:'Mixed Media', desc: '', img: 'media/medialab-mixedmedia/banner.jpg', col:'555555', op:'0.7', link:'media-mixed'},
		
		]
		$scope.blurb = "The Media Labs encompass the 2D processes lab, 3D processes lab and mixed media lab. Through elective units of study such as Printmaking, Ceramics, and Architectural Sketching and Drawing the media labs assist students in developing the conceptual and technical skills required to creatively explore dynamic connections between Architecture and art"
	}



	if($routeParams.lab === 'people'){
		$scope.machines = [		
		]
	}
    
});
