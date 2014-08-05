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
		/* routeparams = link in array in lab.js  */
		$scope.label = "Laser Cutters";
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
		$scope.materialsDisallowed = "Materials containing PVC, Bleach, Toxic, Carcinogenic.\n Materials over 4.5mm (Universal) or 12mm (Totecs)"; are held regularly for first time users','If you are intending to cut your own materials
		$scope.bookings = ['Your file must be set up in the correct Rhino template','Read the instructions clearly stated on the Rhino template to ensure you are setting up your file correctly','Laser Inductions new to DMaF, you must bring the Material Safety Data Sheet (MSDS) these can be found online',"Ensure no lines duplicate (lines layered on top of each other). Run 'Make2D' or 'SelDup' Rhino commands to rectify duplicated lines",'Nest pieces across each panel carefully or by using nesting software such as RhinoNEST. Minimizing gaps between pieces saves material and reduces cutting time','Regardless of material type, your selection must be flat (tolerance +/-1mm).'];
		
	}
	/* To here */

	/* Copy from Here */
	if($routeParams.machine === 'extruders'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "3D printers: extruders";
		$scope.gridRef = 'one-half'; /* remove columns */
		$scope.bkimg = 'machines/laser/banner.jpg' 
		$scope.machine = [{
			name:'Replicator 2',
			subname: 'Green | Red | Purple | Blue | Pink',
			brand: 'Makerbot',
			bedSize: 'Build Envelope: WxDxH 285x150x150mm',
			cost:'$10.00 set-up fee*',
			costDesc:'Plus $2.00 per 10 grams (including raft and scaffolding)',
			downloads:[{
				name:'Guide', /* add link to guide here */
				link:''
			},{
				name:'Rhino', /* no template link needed */
				link:''
			}]
		},{
			name:'Universal Laser Cutter', /* remove from here */
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
				link:'' /* To here */
			}]
		}];

		$scope.description = "Advancements in 3d printing, particularly plastic extrusion technology have enabled rapid and inexpensive production of 3D components using small, rapid prototypers. The DMaF has 3d printers from leading supplier Makerbot. The Laboratory’s three extruders use heated PLA (Polylactic Acid, a biodegradable plastic) to construct 3D models. The machines are capable of automatically generating scaffolding for the printing of parts accurately and cleanly. With these devices, students, staff and collaborators to the Laboratory can quickly prototype, test and develop their designs.";
		$scope.bookings = ['Recommended minimum wall thickness is 3mm','Ensure all surfaces are ‘joined’ (type join) (no holes or gaps) and that you ‘cap’ all volumes (type cap). The model must be ‘watertight’','All surface normals must face outwards. Use the ‘direction’ command (type DIR) in Rhinoceros to check',"Ensure there are no double surfaces",'Exporting your file as an .stl: Scale to print size > Move to origin (0,0) > Select individual objects and Export Selected > Save as Stereolithography (.STL) > 0.01 accuracy & binary','Please always provide your original (Rhino) file as well as an .stl.'];
		$scope.bookings = ['Book this machine in person in DMaF. Please note that file checking and repair often takes time so have you file prepared early in advance. Please always bring your original Rhino file, as well as the .STL file.'];
		
	}
	/* To here */

	/* Copy from Here */
	if($routeParams.machine === 'extruders'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "3D printers: powder";
		$scope.gridRef = 'one-half';
		$scope.bkimg = 'machines/laser/banner.jpg' 
		$scope.machine = [{
			name:'Spectrum 510',
			subname: 'Powder Rapid Prototyper',
			brand: 'ZCorp',
			bedSize: 'Maximum Printed Model Size: WxDxH 250x355x200mm',
			cost:'$10.00 set-up fee*',
			costDesc:'Plus $0.50 per 1cm3',
			downloads:[{
				name:'Guide', /* add link to guide here */
				link:''
			},{
				name:'Rhino', /* no template link needed */
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
				name:'Guide', /* add link to guide here */
				link:''
			},{
				name:'Rhino',
				link:'' /* no template link needed */
			}]
		}];

		$scope.description = "The ZCorp310 & ZCorp510 Powder Rapid Prototypers enable the production of detailed, high-definition prototypes and three dimensional representations of designs. The precision inkjet printing system delivers components with crisp, defined features and high accuracy.";
		$scope.bookings = ['Ensure all surfaces are joined (type join) with no holes or gaps, and that you cap all volumes (type cap). The model must be watertight','All surface normals must face outwards. Use the direction command (type DIR) in Rhinoceros to check','Ensure there are no double surfaces','Exporting your file as an .stl: Scale to print size > Move to origin (0,0) > Select individual objects and Export Selected > Save as Stereolithography (.STL) > 0.01 accuracy & binary','Please always provide your original (Rhino) file as well as an .stl.'];
		$scope.bookings = ['Book this machine in person in DMaF. Please note that file checking and repair often takes time so have you file prepared early in advance. Please always bring your original Rhino file, as well as the .STL file.'];

		/* link to 3D printing tutorial bookings page */
	}
	/* To here */
    
    /* Copy from Here */
	if($routeParams.machine === 'router'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "Multicam CNC Router";
		$scope.gridRef = 'one-half'; /* remove columns */
		$scope.bkimg = 'machines/laser/banner.jpg' 
		$scope.machine = [{
			name:'CNC Router',
			brand: 'Multicam',
			bedSize: '1200x2400mm',
			cost:'$3.00 per 30 minutes (including file setup time)*',
			costDesc:'2D and 3D routing of Perspex, Timber, Plywood or Foam. Materials that blunt the cutters (E.g. hardwoods) may incur an additional tool sharpening / tool replacement fee.',
			downloads:[{
				name:'Guide', /* add link to guide here */
				link:''
			},{
				name:'Rhino', /* no template link needed */
				link:''
			}]
		},{
			name:'Universal Laser Cutter', /* remove from here */
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
				link:'' /* To here */
			}]
		}];

		$scope.description = "The MultiCAM CNC router 3 Axis Router enables the efficient and accurate cutting of both 2D and 3D files in large format (1300mm x 2500mm) and has the largest gantry height of any machine of its kind (300mm). The machine has the capability to cut thick timbers and composites and Perspex / acrylic as well as soft metals to superior edge finishing and has a powerful vacuum table to hold down material.
The MultiCAM CNC Router also has a “floating head” or “air-assit” when high accuracy is needed for materials such as Alucobond bending applications.
Run by Enroute (2D) and Visual Mill software (3D), CNC machining allows for complete control over tool path direction and finish quality.
";
		$scope.materialsAllowed = "Solid timber and composite boards, Perspex / acrylic, foam, tooling board (Recommended)" ;
		$scope.materialsDisallowed = "Alloys and metals (by prearrangement only – not recommended)"
		$scope.bookings = ['For all booking enquiries or to request a booking time contact a Digital Fabrication staff member in person with your cutting file','3D files should be exported as .stl','2D files should be exported as .dxf','Those wishing to do two-sided machining must construct a bounding box and model-in tabs before using the CNC router','Softer materials such as foam are extremely fast to route whilst dense materials such as hardwoods are exponentially slower.'];
		$scope.bookings = ['Book this machine in person in DMaF. Digital Fabrication staff will need to see your file and discuss material choice to estimate the amount of time it will take in order to make a booking.'];
		
	}
	/* To here */

	 /* Copy from Here */
	if($routeParams.machine === 'vacuumformer'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "Vacuum Former";
		$scope.gridRef = 'one-half'; /* remove columns */
		$scope.bkimg = 'machines/laser/banner.jpg' 
		$scope.machine = [{
			name:'Vacuum Former',
			subname: '686PT',
			brand: 'Formech',
			bedSize: 'TBA',
			cost:'Free machine use',
			costDesc:'PETG vacuum forming sheets available to purchase from DMaF',
			downloads:[{
				name:'Guide', /* add link to guide here */
				link:''
			},{
				name:'Rhino', /* no template link needed */
				link:''
			}]
		},{
			name:'Universal Laser Cutter', /* remove from here */
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
				link:'' /* To here */
			}]
		}];

		$scope.description = "The Digital Fabrication Laboratory’s vacuum former uses heat and vacuum pressure to mold a melted sheet of plastic over a surface mold. Molds can be made from many materials depending on longevity required including plywood, card, composite, ceramics, plastics or alloys. Vacuum pressure is used to hold the melted plastic to the mold as temperature reduces, casting a plastic model.";
		$scope.bookings = ['Remember that the object will need to be removed. Avoid undercuts','Use a draft angle of 3 degrees or more in the mold in order to avoid formed objects adhering to the mold.'];
	
		
	}
	/* To here */

/* Copy from Here */
	if($routeParams.machine === 'materials'){
		/* routeparams = link in array in lab.js  */
		$scope.label = "Materials";
		$scope.gridRef = 'one-half'; /* remove columns */
		$scope.bkimg = 'machines/laser/banner.jpg' 
		$scope.machine = [{
			name:'Vacuum Former',/* remove  */
			subname: '686PT',/* remove  */
			brand: 'Formech',/* remove  */
			bedSize: 'TBA',/* remove  */
			cost:'Free machine use',/* remove  */
			costDesc:'PETG vacuum forming sheets available to purchase from DMaF',/* remove  */
			downloads:[{
				name:'Guide', /* add link to guide here */
				link:''
			},{
				name:'Rhino', /* no template link needed */
				link:''
			}]
		},{
			name:'Universal Laser Cutter', /* remove from here */
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
				link:'' /* To here */
			}]
		}];

		$scope.description = "Due to the wide capabilities of the DMaF, the Centre is able to purchase a large range of materials and offer these at reduced prices to students, staff and collaborators. These include:
•	Solid timbers in a variety of species
•	Composite boards such as plywood, Masonite, Alucobond and chipboard in varying thicknesses and sheet sizes
•	Sheet metals and alloys, metal and aluminium tubes, rods, bars and extrusions
•	Perspex / Acrylic sheets and rods
•	Polypropylene
•	Boxboard, screen board, corrugated cardboard, foam core
•	Extruded and expanded foam
•	Tool kits
•	Casting products
•	Printmaking essentials
•	Solder products
Where possible, materials are cut-to-size for the most appropriate, efficient and economical use on Digital Fabrication machines in the DMaF Labs. The Centre is also dedicated to the responsible use, reuse and disposal of material. As such, a large array of reusable materials are available for free throughout the workshops. We ask that all students be sympathetic to the environment when using materials throughout the DMaF Lab, ensuring objects are “nested” efficiently and recycling all materials where possible. Please also note that RhinoNEST software is available in DMaF Lab and Computer Lab 526.
The DMaF Lab is continually adding to this large range of materials, experimenting with new uses and methods of fabrication and engaging in a diverse range of investigation into materiality, expression and construction technique at all stages of the design process.";
$scope.description = "DMaF Toolkits have arrived! Our kits are small enough to transport between workspaces and large enough to fit the essentials. A carefully selected range of useful tools handily boxed up to provide you with a mobile tool kit. 
$60 per Tool Kit. DMaF have subsidized the contents of the toolkit to bring you a cheaper than cost price box full of the essentails:
• Mini Cut Plyers
• Mini Long Nose Plyers
• Happer
• Precision Screwdriver Set
• Junior Hacksaw
• Square
• Craft Knife
• Tape Measure
• Screwdriver Set
• Safety Goggles
• Comes in a Tool Box"
$scope.description = "Payment are accepted via use of USYD’s Unikey account (Extro account), which can be topped up via this link (http://sydney.edu.au/ict/student/unikey/recharge-account.shtml), the DMaF Lab staff will then access these funds via our payment terminals.  Please ensure your account is topped up prior to your booking."	

		
	}
	/* To here */

	
});
