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
	/****** KUKA ******/

	if($routeParams.machine === 'kuka'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "kuka";
		$scope.gridRef = 'one-half';
		$scope.bkimg = 'machines/kuka/banner.jpg';
		$scope.machine = [{
			name:'kuka',
			subname: '',
			brand: '',
			bedSize: '',
			cost:'',
			costDesc:''
			
		}];

		$scope.description = "";
		$scope.allowedHeader = "";
		$scope.materialsAllowed = "";
		$scope.disallowedHeader = "";
		$scope.materialsDisallowed = "";
		$scope.bookings = ['',''];
		$scope.bookingsReady = "";
	}
	/* To here */


	/* Copy from Here */
	/****** LASER CUTTERS ******/

	if($routeParams.machine === 'lasercutters'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "laser cutters";
		$scope.gridRef = 'one-half';
		$scope.bkimg = 'machines/laser/banner.jpg';
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
		$scope.allowedicon = 'images/icons/materials/materials-allowed.jpg';
		$scope.allowedHeader = "Materials Allowed";
		$scope.materialsAllowed = "Paper, Cardboard, Screenboard, Boxboard, Solid Timber and Timber Veneer, Interior Plywood, Perspex, Acrylic, Polypropylene, Felt and Fabric" ;
		$scope.disallowedicon = 'images/icons/materials/materials-disallowed.jpg';
		$scope.disallowedHeader = "Don't use";
		$scope.materialsDisallowed = "Materials containing PVC, Bleach, Toxic, Carcinogenic.\n Materials over 4.5mm (Universal) or 12mm (Totecs)";
		$scope.bookings = ['Your file must be set up in the correct Rhino template','Read the instructions clearly stated on the Rhino template to ensure you are setting up your file correctly','Laser Inductions new to DMaF, you must bring the Material Safety Data Sheet (MSDS) these can be found online',"Ensure no lines duplicate (lines layered on top of each other). Run 'Make2D' or 'SelDup' Rhino commands to rectify duplicated lines",'Nest pieces across each panel carefully or by using nesting software such as RhinoNEST. Minimizing gaps between pieces saves material and reduces cutting time','Regardless of material type, your selection must be flat (tolerance +/-1mm).'];
		$scope.bookingsReady = "";

	}
	/* To here */



	/* Copy from Here */
	/****** 3D PRINTERS ******/

	if($routeParams.machine === 'extruders'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "3d printers: extruders";
		$scope.gridRef = 'one';
		$scope.bkimg = 'machines/extruder/banner.jpg';
		$scope.machine = [{
			name:'Replicator 2',
			subname: 'Green | Red | Purple | Blue | Pink',
			brand: 'Makerbot',
			bedSize: 'Build Envelope: WxDxH 285x150x150mm',
			cost:'$10.00 set-up fee',
			costDesc:'Plus $2.00 per 10 grams (including raft and scaffolding)',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "Advancements in 3d printing, particularly plastic extrusion technology have enabled rapid and inexpensive production of 3D components using small, rapid prototypers. The DMaF has 3d printers from leading supplier Makerbot. The Laboratory’s three extruders use heated PLA (Polylactic Acid, a biodegradable plastic) to construct 3D models. The machines are capable of automatically generating scaffolding for the printing of parts accurately and cleanly. With these devices, students, staff and collaborators to the Laboratory can quickly prototype, test and develop their designs.";
		$scope.allowedicon = '';
		$scope.allowedHeader = "";
		$scope.materialsAllowed = "";
		$scope.disallowedicon = '';
		$scope.disallowedHeader = "";
		$scope.materialsDisallowed = "";
		$scope.bookings = ['Recommended minimum wall thickness is 3mm','Ensure all surfaces are ‘joined’ (type join) (no holes or gaps) and that you ‘cap’ all volumes (type cap). The model must be ‘watertight’','All surface normals must face outwards. Use the ‘direction’ command (type DIR) in Rhinoceros to check',"Ensure there are no double surfaces",'Exporting your file as an .stl: Scale to print size > Move to origin (0,0) > Select individual objects and Export Selected > Save as Stereolithography (.STL) > 0.01 accuracy & binary','Please always provide your original (Rhino) file as well as an .stl.'];
		$scope.bookingsReady = "Book this machine in person in DMaF. Please note that file checking and repair often takes time so have you file prepared early in advance. Please always bring your original Rhino file, as well as the .STL file.";
	}
	/* To here */



	/* Copy from Here */
	/****** POWDER PRINTERS ******/

	if($routeParams.machine === 'powder'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "3d printers: powder";
		$scope.gridRef = 'one-half';
		$scope.bkimg = 'machines/powder/banner.jpg';
		$scope.machine = [{
			name:'Spectrum 510',
			subname: 'Powder Rapid Prototyper',
			brand: 'ZCorp',
			bedSize: 'Maximum Printed Model Size: WxDxH 250x355x200mm',
			cost:'$10.00 set-up fee*',
			costDesc:'Plus $0.50 per 1cm3',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		},{
			name:'Spectrum 310',
			subname: 'Powder Rapid Prototyper',
			brand: 'ZCorp',
			bedSize: 'Maximum Printed Model Size: WxDxH 200x250x200mm',
			cost:'$10.00 set-up fee*',
			costDesc:'Plus $0.50 per 1cm3',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "The ZCorp310 & ZCorp510 Powder Rapid Prototypers enable the production of detailed, high-definition prototypes and three dimensional representations of designs. The precision inkjet printing system delivers components with crisp, defined features and high accuracy.";
		$scope.allowedicon = '';
		$scope.allowedHeader = "";
		$scope.materialsAllowed = "";
		$scope.disallowedicon = '';
		$scope.disallowedHeader = "";
		$scope.materialsDisallowed = "";
		$scope.bookings = ['Ensure all surfaces are joined (type join) with no holes or gaps, and that you cap all volumes (type cap). The model must be watertight','All surface normals must face outwards. Use the direction command (type DIR) in Rhinoceros to check','Ensure there are no double surfaces','Exporting your file as an .stl: Scale to print size > Move to origin (0,0) > Select individual objects and Export Selected > Save as Stereolithography (.STL) > 0.01 accuracy & binary','Please always provide your original (Rhino) file as well as an .stl.'];
		$scope.bookingsReady = "Book this machine in person in DMaF. Please note that file checking and repair often takes time so have you file prepared early in advance. Please always bring your original Rhino file, as well as the .STL file.";
	}
	/* To here */


	/* Copy from Here */
	/****** CNC ROUTER ******/

	if($routeParams.machine === 'cncrouter'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "multicam cnc router";
		$scope.gridRef = 'one';
		$scope.bkimg = 'machines/cncrouter/banner.jpg';
		$scope.machine = [{
			name:'CNC Router',
			subname: '',
			brand: 'Multicam',
			bedSize: '1200x2400mm',
			cost:'$3.00 per 30 minutes (including file setup time)*',
			costDesc:'2D and 3D routing of Perspex, Timber, Plywood or Foam. Materials that blunt the cutters (E.g. hardwoods) may incur an additional tool sharpening / tool replacement fee.',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "The MultiCAM CNC router 3 Axis Router enables the efficient and accurate cutting of both 2D and 3D files in large format (1300mm x 2500mm) and has the largest gantry height of any machine of its kind (300mm). The machine has the capability to cut thick timbers and composites and Perspex / acrylic as well as soft metals to superior edge finishing and has a powerful vacuum table to hold down material. The MultiCAM CNC Router also has a ‘floating head’ or ‘air-assit’ when high accuracy is needed for materials such as Alucobond bending applications. Run by Enroute (2D) and Visual Mill software (3D), CNC machining allows for complete control over tool path direction and finish quality.";
		$scope.allowedicon = 'images/icons/materials/materials-allowed.jpg';
		$scope.allowedHeader = "Materials Allowed";
		$scope.materialsAllowed = "Solid timber and composite boards, Perspex / acrylic, foam, tooling board (Recommended)";
		$scope.disallowedicon = 'images/icons/materials/materials-disallowed.jpg';
		$scope.disallowedHeader = "Don't use";
		$scope.materialsDisallowed = "Alloys and metals (by prearrangement only – not recommended)";
		$scope.bookings = ['For all booking enquiries or to request a booking time contact a Digital Fabrication staff member in person with your cutting file','3D files should be exported as .stl','2D files should be exported as .dxf','Those wishing to do two-sided machining must construct a bounding box and model-in tabs before using the CNC router','Softer materials such as foam are extremely fast to route whilst dense materials such as hardwoods are exponentially slower.'];	
		$scope.bookingsReady = "Book this machine in person in DMaF. Digital Fabrication staff will need to see your file and discuss material choice to estimate the amount of time it will take in order to make a booking.";

	}
	/* To here */


	/* Copy from Here */
	/****** CNC MILL ******/

	if($routeParams.machine === 'cncmill'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "cnc mill";
		$scope.gridRef = 'one-half';
		$scope.bkimg = 'machines/cncmill/banner.jpg';
		$scope.machine = [{
			name:'CNC Mill',
			subname: '',
			brand: '',
			bedSize: '',
			cost:'',
			costDesc:'',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "";
		$scope.allowedicon = '';
		$scope.allowedHeader = "";
		$scope.materialsAllowed = "";
		$scope.disallowedicon = '';
		$scope.disallowedHeader = "";
		$scope.materialsDisallowed = "";
		$scope.bookings = ['',''];
		$scope.bookingsReady = "";
	}
	/* To here */

	/* Copy from Here */
	/****** VACUUM FORMER ******/

	if($routeParams.machine === 'vacuumformer'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "vacuum former";
		$scope.gridRef = 'one';
		$scope.bkimg = 'machines/vacuumformer/banner.jpg';
		$scope.machine = [{
			name:'Vacuum Former',
			subname: '686PT',
			brand: 'Formech',
			bedSize: 'TBA',
			cost:'Free machine use',
			costDesc:'PETG vacuum forming sheets available to purchase from DMaF',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "The Digital Fabrication Laboratory’s vacuum former uses heat and vacuum pressure to mold a melted sheet of plastic over a surface mold. Molds can be made from many materials depending on longevity required including plywood, card, composite, ceramics, plastics or alloys. Vacuum pressure is used to hold the melted plastic to the mold as temperature reduces, casting a plastic model.";
		$scope.allowedicon = '';
		$scope.allowedHeader = "";
		$scope.materialsAllowed = "";
		$scope.disallowedicon = '';
		$scope.disallowedHeader = "";
		$scope.materialsDisallowed = "";
		$scope.bookings = ['Remember that the object will need to be removed. Avoid undercuts','Use a draft angle of 3 degrees or more in the mold in order to avoid formed objects adhering to the mold.'];
		$scope.bookingsReady = "";	}
	/* To here */



	/* Copy from Here */
	/****** MATERIALS ******/

	if($routeParams.machine === 'materials'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "materials";
		$scope.gridRef = 'one';
		$scope.bkimg = 'machines/laser/banner.jpg';
		$scope.machine = [{
			name:'',
			subname: '',
			brand: '',
			bedSize: '',
			cost:'',
			costDesc:'',
			downloads:[{
				name:'Guide',
				link:''
			},{
				name:'Rhino',
				link:''
			}]
		}];

		$scope.description = "Due to the wide capabilities of the DMaF, the Centre is able to purchase a large range of materials and offer these at reduced prices to students, staff and collaborators. These include:\n" + ['1\n','2\n','3\n'] + "Where possible, materials are cut-to-size for the most appropriate, efficient and economical use on Digital Fabrication machines in the DMaF Labs. The Centre is also dedicated to the responsible use, reuse and disposal of material. As such, a large array of reusable materials are available for free throughout the workshops. We ask that all students be sympathetic to the environment when using materials throughout the DMaF Lab, ensuring objects are “nested” efficiently and recycling all materials where possible. Please also note that RhinoNEST software is available in DMaF Lab and Computer Lab 526. The DMaF Lab is continually adding to this large range of materials, experimenting with new uses and methods of fabrication and engaging in a diverse range of investigation into materiality, expression and construction technique at all stages of the design process.";
		$scope.allowedicon = 'icons/materials/materials-allowed.jpg';
		$scope.allowedicon = '';
		$scope.allowedHeader = "";
		$scope.materialsAllowed = "";
		$scope.disallowedicon = '';
		$scope.disallowedHeader = "";
		$scope.materialsDisallowed = "";
		$scope.bookings = ['',''];
		$scope.bookingsReady = "";
	}
	/* To here */

	
});
