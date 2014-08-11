'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('StaffCtrl', function($scope,$routeParams) {

		$scope.staff = [
		{name:'Marjo Niemela', desc: 'DMaF Lab Manager', img: 'staff/marjo.jpg', col:'252525', op:'1', link:'marjo'},
		{name:'Mel Wimborne', desc: 'Timber Fabrication & Digital Fabrication',subheading:'Fine woodwork (materials & equipment), CNC Routing, Laser Cutting', img: 'staff/mel.jpg', col:'252525', op:'1', link:'mel'},
		{name:'Gabrielle Ulacco', desc: 'Robotics & Digital Fabrication', subheading:'Robotics, CNC Routing, Laser Cutting', img: 'digfab/staff/gabe.jpg', col:'252525', op:'1', link:'gabe'},
		{name:'Celeste Raanoja', desc: 'Digital Fabrication & Robotics', subheading:'CNC Routing, Laser Cutting, 3D Printing, Robotics', img: 'staff/celeste.jpg', col:'252525', op:'1', link:'celeste'},
		{name:'Dylan Wozniak-Oconnor', desc: 'Media Lab & Digital Fabrication', subheading:'3D & 2D Processes (casting, printmaking, soldering etc), 3D Printing, Laser Cutting', img: 'staff/dylan.jpg', col:'252525', op:'1', link:'dylan'},
		{name:'Oni Laughton', desc: 'WHS, Administration & Digital Fabrication', subheading:'Workplace Health & Safety, Laser Cutting, 3D Printing', img: 'staff/oni.jpg', col:'252525', op:'1', link:'oni'},
		{name:'Samantha Horlyck', desc: 'Digital Fabrication', subheading:'Laser Cutting, 3D Printing, CNC Routing, 3D Scanning', img: 'staff/sam-horlyck.jpg', col:'252525', op:'1', link:'sam-horlyck'},
		{name:'Tim Osborne', desc: 'Timber Fabrication & Metalastics', subheading:'Fine woodwork (materials & equipment), metalwork', img: 'staff/tim.jpg', col:'252525', op:'1', link:'tim'},
		{name:'Rob Cohen', desc: 'Fabrication & Digital Fabrication', subheading:'Metalwork, Woodwork, Laser Cutting, 3D Printing', img: 'staff/rob.jpg', col:'252525', op:'1', link:'rob'},
		{name:'Majella Beck', desc: 'Metalastics, Timber Fabrication & Digital Fabrication', subheading:'Metalwork, Woodwork, Laser Cutting', img: 'staff/majella.jpg', col:'252525', op:'1', link:'majella'},
		{name:'Susana Alarcon', desc: 'Digital Fabrication & Robotics', subheading:'CNC Routing, Laser Cutting, Robotics', img: 'staff/susana.jpg', col:'252525', op:'1', link:'susanna'},
		{name:'Rod Watt', desc: 'Digital Fabrication & Robotics', subheading:'CNC Routing, Laser Cutting, 3D Printing, Robotics', img: 'staff/rod.jpg', col:'252525', op:'1', link:'rod'},
		{name:'Sam Choy', desc: 'Metalastics, Timber Fabrication & Digital Fabrication', subheading:'Metalwork, Woodwork, 3D Printing, 3D Scanning', img: 'staff/sam-choy.jpg', col:'252525', op:'1', link:'sam-choy'},
		{name:'Andy Pinnock', desc: 'Timber Fabrication', subheading:'Fine woodwork (materials & equipment)', img: 'staff/andy.jpg', col:'252525', op:'1', link:'andy'},
		{name:'Samuel Green', desc: 'Digital Fabrication', subheading:'Laser Cutting, 3D Printing', img: 'staff/sam-green.jpg', col:'252525', op:'1', link:'sam-green'},

		]
	
	
    
});
