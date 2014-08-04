'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('MachineCtrl', function($scope, $routeParams) {
	console.log($routeParams);

	/* Copy from Here */
	if($routeParams.machine === 'lasercutters'){
		$scope.label = "laser cutters";
		$scope.gridRef = 'one-half';
		$scope.bkimg = 'machines/laser/banner.jpg'
		$scope.machine = [{
			name:'Trotect 500 Laser Cutters',
			subname: 'Gamma & Delta',
			brand: 'Trotec 120W',
			bedSize: '1240x710mm',
			cost:'$25.00 per 30 Minutes*',
			costDesc:'',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		},{
			name:'Universal Laser Cutter',
			subname: 'Alpha',
			brand: 'Universal 120W',
			bedSize: '810x450mm',
			cost:'$15.00 per 30 Minutes*',
			costDesc:'',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "The Laboratory offers the use of one three laser cutters, enabling the cutting or engraving of sheet materials according to designs produced in Rhino, or produced in AutoCAD and imported into Rhino. The Universal machine is ideal for smaller cutting tasks and thin materials, while larger tasks are suited for the Trotec laser cutters.";
		$scope.materialsAllowed = "Paper, Cardboard, Screenboard, Boxboard, Solid Timber and Timber Veneer, Interior Plywood, Perspex, Acrylic, Polypropylene, Felt and Fabric" ;
		$scope.materialsDisallowed = "Materials containing PVC, Bleach, Toxic, Carcinogenic.\n Materials over 4.5mm (Universal) or 12mm (Totecs)";
		$scope.bookings = ['Your file must be set up in the correct Rhino template.','Read the instructions clearly stated on the Rhino template to ensure you are setting up your file correctly.','Laser Inductions are held regularly for first time users.','If you are intending to cut your own materials new to DMaF, you must bring the Material Safety Data Sheet (MSDS) these can be found online',"Ensure no lines duplicate (lines layered on top of each other). Run 'Make2D' or 'SelDup' Rhino commands to rectify duplicated lines these can be found online",'Nest pieces across each panel carefully or by using nesting software such as RhinoNEST. Minimizing gaps between pieces saves material and reduces cutting time.','Regardless of material type, your selection must be flat (tolerance +/-1mm).'];
		
	}
	/* To here */
    
});
