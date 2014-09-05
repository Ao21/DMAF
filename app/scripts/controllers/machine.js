'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('MachineCtrl', function($scope, $routeParams, $sce) {






    /* Copy from Here */
    /****** KUKA ******/

    if ($routeParams.machine === 'kuka') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "kuka";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/kuka/banner.jpg';
        $scope.machine = [{
            name: 'KR60-3 6-Axis Robot Arm',
            subname: '',
            brand: 'Kuka',
            endEffectors: 'Router Spindle, 3D Printer / Clay Extruder, Vacuum Grippers and more',
            workingEnvelope: '2003/2230/2429mm',
            cost: '',
            costDesc: ''

        }];
        $scope.showExtras = true;

        $scope.description = "<p>The addition of the Kuka KR60-3 6-axis robot arm has consolidated the DMaF Lab's position as the leading university fabrication lab nationally. Equipped with a 60kg payload and a reach extending beyond a 2.4m building envelope, the possibilities for innovative, cutting edge research into fabrication and material technologies are extensive. The DMaF Lab is making every effort to facilitate research explorations with the acquisition of multiple end-effectors such as a spindle to enable 6 axis CNC milling, a 3D printer / clay extruder and various suction grippers capable of lifting and manoeuvre of irregular shaped objects.</p><p>In parallel to current market available end-effectors the DMaF Lab has acquired a new CNC mill for metals and alloys which enables the development and production of its designs of end-effectors that further broadens the capabilities of the robot arm.</p><p>In addition to facilitating a broad range of research outcomes throughout the Faculty for academic staff, HDRs and students, the Kuka KR60 is instrumental in providing opportunity for interdisciplinary collaboration within the Faculty such as those developing with Design Lab and Architecture, as well as with other Faculties, Universities and industry partners. This has enabled both staff and students to broaden the scope and diversity of research prospects and cultivate a new culture of learning that sits on the cusp of multiple disciplines and fields. Students and staff are now able to draw on the skills and knowledge of a range of skilled staff members in the search for innovative design practice, new material technologies and interactive design with iterative physical outputs via the Kuka Robot Arm. Robot fabrication courses are now offered to students to encourage these collaborations.</p><p>At present, DMaf lab staff are undertaking a rigorous and intensive training program on the Kuka KR60s capabilities and software platforms which have also been expanded to academic staff members and HDRs within the Faculty.</p><p>The Faculty of Architecture, Design and Planning was honoured to be selected as the host of the 2016 Robots in Architecture Conference – an intentional conference and workshop bringing together the most advanced robotic fabrication, art and design minds around the world. This will enable the DMaF Lab to not only display the research outputs and experimentation that is being undertaken at the university, but also be exposed to innovative fabrication practices and robotic fabrication applications from industry and other universities around the world.</p>";
        $scope.videos = [{
            url: 'http://www.youtube.com/embed/NCqImBdsSOk?color=white'
        }, {
            url: 'http://www.youtube.com/embed/QjZ1SPve-z0?color=white'
        }];
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */


    /* Copy from Here */
    /****** LASER CUTTERS ******/

    if ($routeParams.machine === 'lasercutters') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "laser cutters";
        $scope.gridRef = 'one-half';
        $scope.bkimg = 'machines/laser/banner.jpg';
        $scope.machine = [{
            name: 'Trotec 500 Laser Cutters',
            subname: 'Gamma & Delta',
            brand: 'Trotec 120W',
            bedSize: '1240x710mm',
            cost: '$25.00 per 30 Minutes*',
            costDesc: '',
            downloads: [{
                name: 'Guide',
                icon: 'images/icons/machines/guide.svg',
                link: 'assets/downloads/LaserCuttingInduction.pdf'
            }, {
                name: 'Rhino',
                icon: 'images/icons/machines/rhino.svg',
                link: 'assets/downloads/2014_DeltaGamma_V1.3dm'
            }]
        }, {
            name: 'Universal Laser Cutter',
            subname: 'Alpha',
            brand: 'Universal 120W',
            bedSize: '810x450mm',
            cost: '$15.00 per 30 Minutes*',
            costDesc: '',
            downloads: [{
                name: 'Guide',
                icon: 'images/icons/machines/guide.svg',
                link: 'assets/downloads/LaserCuttingInduction.pdf'
            }, {
                name: 'Rhino',
                icon: 'images/icons/machines/rhino.svg',
                link: 'assets/downloads/2014_Alpha_V2.3dm'
            }]
        }];
        $scope.showExtras = true;

        $scope.description = "The Laboratory offers the use of one three laser cutters, enabling the cutting or engraving of sheet materials according to designs produced in Rhino, or produced in AutoCAD and imported into Rhino. The Universal machine is ideal for smaller cutting tasks and thin materials, while larger tasks are suited for the Trotec laser cutters.";
        $scope.allowedicon = 'images/icons/materials/materials-allowed.jpg';
        $scope.allowedHeader = "Materials Allowed";
        $scope.materialsAllowed = "Paper, Cardboard, Screenboard, Boxboard, Solid Timber and Timber Veneer, Interior Plywood, Perspex, Acrylic, Polypropylene, Felt and Fabric";
        $scope.disallowedicon = 'images/icons/materials/materials-disallowed.jpg';
        $scope.disallowedHeader = "Don't use";
        $scope.materialsDisallowed = "Materials containing PVC, Bleach, Toxic, Carcinogenic.\n Materials over 4.5mm (Universal) or 12mm (Totecs)";
        $scope.bookings = ['Your file must be set up in the correct Rhino template', 'Read the instructions clearly stated on the Rhino template to ensure you are setting up your file correctly', 'Laser Inductions new to DMaF, you must bring the Material Safety Data Sheet (MSDS) these can be found online', "Ensure no lines duplicate (lines layered on top of each other). Run 'Make2D' or 'SelDup' Rhino commands to rectify duplicated lines", 'Nest pieces across each panel carefully or by using nesting software such as RhinoNEST. Minimizing gaps between pieces saves material and reduces cutting time', 'Regardless of material type, your selection must be flat (tolerance +/-1mm).'];
        $scope.bookingsReady = "";
        $scope.bookingsUrl = [{
            name: 'ALPHA',
            url: $sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=7769&calendar=4006&style=week-grid&days=7')
        }, {
            name: 'DELTA',
            url: $sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=13835&calendar=4006&style=week-grid&days=7')
        }, {
            name: 'GAMMA',
            url: $sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=7771&calendar=4006&style=week-grid&days=7')
        }, {
            name: 'Grad Studio GAMMA',
            url: $sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=25880&calendar=4006&style=week-grid&days=7')
        }]
        $scope.termsAndConditions = '<p>Please read the following Terms and Conditions before making a booking:</p><ol><li>Read and ensure that you understand the Laser Cutter Guidelines described on the page for the machine you intend to book.</li><li>Please be present 10 minutes before the commencement of your booking time.</li><li>Ensure your files are prepared with the appropriate laser cutter template and layers.  Any time spent on file preparation during your booked time is unfortunately lost as the next appointment will start at the booked time.</li><li>Payment is to be made for the whole period booked even if the job takes a shorter time. Please ensure that your booking accurately reflects the length of time that your require.</li><li>Payment for time and materials is always to be made at completion of cutting.</li><li>Cancellations must be made at least 3 hours in advance of booked time. To cancel your booking, follow the instructions in the Planyo booking confirmation email. Repeated failure (more than once) to cancel bookings may result in being charged for booked time and a ban from the machines from 2 weeks.</li><li>A maximum of 60 minute booking per week per student (2x30min or 1x60min). Any bookings in excess of allowed times may result in all your bookings being cancelled.</li><li>Laser Cutting not available to 1st Year Bachelor of Design in Architecture students.</li><li>Class specific booking forms are only to be used for projects for that Unit of Study</li><li>Class specific bookings are in addition to your usual 60 minutes per week, and may still be booked through the general booking system.</li><li>A stand-by list is available during peak semester periods.  Add your name and telephone number to the list and if a space becomes available, you will be called and must be available to take the space promptly. The list is on a first come first served basis.  Please note that the list starts afresh every day and does not carry over to the following day. Stand-by time is not counted as a part of your 60 minutes per week allowable time per student/week.</li></ol><p>Note: Laser Cutting terms and conditions exist in order to provide fair access to all students in the Faculty. Should you feel that there is a reason that you need additional time beyond these rules, please contact the DMaF manager.</p>'

    }
    /* To here */



    /* Copy from Here */
    /****** 3D PRINTERS ******/

    if ($routeParams.machine === 'extruders') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "3d printers: extruders";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/extruder/banner.jpg';
        $scope.machine = [{
            name: 'Replicator 2',
            subname: 'Green | Red | Purple | Blue | Pink',
            brand: 'Makerbot',
            bedSize: 'Build Envelope: WxDxH 285x150x150mm',
            cost: '$10.00 set-up fee',
            costDesc: 'Plus $2.00 per 10 grams (including raft and scaffolding)',
            downloads: [{
                name: 'Guide',
                icon: 'images/icons/machines/guide.svg',
                link: 'assets/downloads/3DExtruderInduction.pdf'
            }]
        }];
        $scope.showExtras = true;

        $scope.description = "Advancements in 3d printing, particularly plastic extrusion technology have enabled rapid and inexpensive production of 3D components using small, rapid prototypers. The DMaF has 3d printers from leading supplier Makerbot. The Laboratory’s three extruders use heated PLA (Polylactic Acid, a biodegradable plastic) to construct 3D models. The machines are capable of automatically generating scaffolding for the printing of parts accurately and cleanly. With these devices, students, staff and collaborators to the Laboratory can quickly prototype, test and develop their designs.";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookings = ['Recommended minimum wall thickness is 3mm', 'Ensure all surfaces are ‘joined’ (type join) (no holes or gaps) and that you ‘cap’ all volumes (type cap). The model must be ‘watertight’', 'All surface normals must face outwards. Use the ‘direction’ command (type DIR) in Rhinoceros to check', "Ensure there are no double surfaces", 'Exporting your file as an .stl: Scale to print size > Move to origin (0,0) > Select individual objects and Export Selected > Save as Stereolithography (.STL) > 0.01 accuracy & binary', 'Please always provide your original (Rhino) file as well as an .stl.'];
        $scope.bookingsReady = "Book this machine in person in DMaF. Please note that file checking and repair often takes time so have you file prepared early in advance. Please always bring your original Rhino file, as well as the .STL file.";
    }
    /* To here */



    /* Copy from Here */
    /****** POWDER PRINTERS ******/

    if ($routeParams.machine === 'powder') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "3d printers: powder";
        $scope.gridRef = 'one-half';
        $scope.bkimg = 'machines/powder/banner.jpg';
        $scope.machine = [{
            name: 'Spectrum 510',
            subname: 'Powder Rapid Prototyper',
            brand: 'ZCorp',
            bedSize: 'Maximum Printed Model Size: WxDxH 250x355x200mm',
            cost: '$10.00 set-up fee*',
            costDesc: 'Plus $0.50 per 1cm3',
            downloads: [{
                name: 'Guide',
                icon: 'images/icons/machines/guide.svg',
                link: 'assets/downloads/3DPowderInduction.pdf'
            }]
        }, {
            name: 'Spectrum 310',
            subname: 'Powder Rapid Prototyper',
            brand: 'ZCorp',
            bedSize: 'Maximum Printed Model Size: WxDxH 200x250x200mm',
            cost: '$10.00 set-up fee*',
            costDesc: 'Plus $0.50 per 1cm3',
            downloads: [{
                name: 'Guide',
                icon: 'images/icons/machines/guide.svg',
                link: 'assets/downloads/3DPowderInduction.pdf'
            }]
        }];
        $scope.showExtras = true;

        $scope.description = "The ZCorp310 & ZCorp510 Powder Rapid Prototypers enable the production of detailed, high-definition prototypes and three dimensional representations of designs. The precision inkjet printing system delivers components with crisp, defined features and high accuracy.";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookings = ['Ensure all surfaces are joined (type join) with no holes or gaps, and that you cap all volumes (type cap). The model must be watertight', 'All surface normals must face outwards. Use the direction command (type DIR) in Rhinoceros to check', 'Ensure there are no double surfaces', 'Exporting your file as an .stl: Scale to print size > Move to origin (0,0) > Select individual objects and Export Selected > Save as Stereolithography (.STL) > 0.01 accuracy & binary', 'Please always provide your original (Rhino) file as well as an .stl.'];
        $scope.bookingsReady = "Book this machine in person in DMaF. Please note that file checking and repair often takes time so have you file prepared early in advance. Please always bring your original Rhino file, as well as the .STL file.";
    }
    /* To here */


    /* Copy from Here */
    /****** CNC ROUTER ******/

    if ($routeParams.machine === 'cncrouter') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "multicam cnc router";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/cncrouter/banner.jpg';
        $scope.machine = [{
            name: 'CNC Router',
            subname: '',
            brand: 'Multicam',
            bedSize: '1200x2400mm',
            cost: '$30.00 per 30 minutes (including file setup time)*',
            costDesc: '2D and 3D routing of Perspex, Timber, Plywood or Foam. Materials that blunt the cutters (E.g. hardwoods) may incur an additional tool sharpening / tool replacement fee.',

        }];
        $scope.showExtras = true;

        $scope.description = "The MultiCAM CNC router 3 Axis Router enables the efficient and accurate cutting of both 2D and 3D files in large format (1300mm x 2500mm) and has the largest gantry height of any machine of its kind (300mm). The machine has the capability to cut thick timbers and composites and Perspex / acrylic as well as soft metals to superior edge finishing and has a powerful vacuum table to hold down material. The MultiCAM CNC Router also has a ‘floating head’ or ‘air-assit’ when high accuracy is needed for materials such as Alucobond bending applications. Run by Enroute (2D) and Visual Mill software (3D), CNC machining allows for complete control over tool path direction and finish quality.";
        $scope.allowedicon = 'images/icons/materials/materials-allowed.jpg';
        $scope.allowedHeader = "Materials Allowed";
        $scope.materialsAllowed = "Solid timber and composite boards, Perspex / acrylic, foam, tooling board (Recommended)";
        $scope.disallowedicon = 'images/icons/materials/materials-disallowed.jpg';
        $scope.disallowedHeader = "Don't use";
        $scope.materialsDisallowed = "Alloys and metals (by prearrangement only – not recommended)";
        $scope.bookings = ['For all booking enquiries or to request a booking time contact a Digital Fabrication staff member in person with your cutting file', '3D files should be exported as .stl', '2D files should be exported as .dxf', 'Those wishing to do two-sided machining must construct a bounding box and model-in tabs before using the CNC router', 'Softer materials such as foam are extremely fast to route whilst dense materials such as hardwoods are exponentially slower.'];
        $scope.bookingsReady = "Book this machine in person in DMaF. Digital Fabrication staff will need to see your file and discuss material choice to estimate the amount of time it will take in order to make a booking.";

    }
    /* To here */


    /* Copy from Here */
    /****** CNC MILL ******/

    if ($routeParams.machine === 'cncmill') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "cnc mill";
        $scope.gridRef = 'one-half';
        $scope.bkimg = 'machines/cncmill/banner.jpg';
        $scope.machine = [{
            name: 'CNC Mill',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];
        $scope.showExtras = true;

        $scope.description = "";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
    }
    /* To here */

    /* Copy from Here */
    /****** VACUUM FORMER ******/

    if ($routeParams.machine === 'vacuumformer') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "vacuum former";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/vacuumformer/banner.jpg';
        $scope.machine = [{
            name: 'Vacuum Former',
            subname: '686PT',
            brand: 'Formech',
            bedSize: 'TBA',
            cost: 'Free machine use',
            costDesc: 'PETG vacuum forming sheets available to purchase from DMaF',

        }];
        $scope.showExtras = true;

        $scope.description = "The Digital Fabrication Laboratory’s vacuum former uses heat and vacuum pressure to mold a melted sheet of plastic over a surface mold. Molds can be made from many materials depending on longevity required including plywood, card, composite, ceramics, plastics or alloys. Vacuum pressure is used to hold the melted plastic to the mold as temperature reduces, casting a plastic model.Remember that the object will need to be removed. Avoid undercuts, Use a draft angle of 3 degrees or more in the mold in order to avoid formed objects adhering to the mold.";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
    }
    /* To here */



    /* Copy from Here */
    /****** MATERIALS ******/

    if ($routeParams.machine === 'materials') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "materials";
        $scope.gridRef = 'one';
        $scope.bkimg = 'labs/materials.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: ''
        }];
        $scope.showExtras = false;

        $scope.description = "<p>Due to the wide capabilities of the DMaF, the Centre is able to purchase a large range of materials and offer these at reduced prices to students, staff and collaborators.</p><p> These include: </p><ul style='list-style:initial'><li>Solid timbers in a variety of species</li><li>Composite boards such as plywood, Masonite, Alucobond and chipboard in varying thicknesses and sheet sizes</li><li>Sheet metals and alloys, metal and aluminium tubes, rods, bars and extrusions</li><li>Perspex / Acrylic sheets and rods</li><li>Polypropylene</li><li>Boxboard, screen board, corrugated cardboard, foam core</li><li>Extruded and expanded foam</li><li>Tool kits</li><li>Casting products</li><li>Printmaking essentials</li><li>Solder products</li></ul>	<p>Where possible, materials are cut-to-size for the most appropriate, efficient and economical use on Digital Fabrication machines in the DMaF Labs.</p><p>The Centre is also dedicated to the responsible use, reuse and disposal of material. As such, a large array of reusable materials are available for free throughout the workshops. We ask that all students be sympathetic to the environment when using materials throughout the DMaF Lab, ensuring objects are “nested” efficiently and recycling all materials where possible.</p><p>Please also note that RhinoNEST software is available in DMaF Lab and Computer Lab 526. The DMaF Lab is continually adding to this large range of materials, experimenting with new uses and methods of fabrication and engaging in a diverse range of investigation into materiality, expression and construction technique at all stages of the design process.</p>";
        $scope.allowedicon = 'icons/materials/materials-allowed.jpg';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */






    /* Copy from Here */
    /****** METAL | LEVEL 1 MACHINES ******/

    if ($routeParams.machine === 'metal-level1') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "level 1 equipment";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/metal-level1/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];
        $scope.showExtras = false;

        $scope.description = '<p>Successful completion of SICU (Safety Induction and Competency Unit) required prior to Level 1 machine use. SICU, run intensively at the beginning of each academic semester, offers a comprehensive introduction to all Level 1 equipment throughout the whole DMaF Lab.</p><p><strong>Level 1 Metalastics equipment:</strong></p><ul><li>Portable spot welders</li><li>Metal bandsaw</li><li>Plastics bandsaw</li><li>Drill press</li><li>Compressed air</li><li>Disc sander</li><li>Fly press (bending)</li><li>Magnetic metal bender</li><li>•	Manual guillotine</li><li>Metal pan brake</li><li>Metal angle bender</li><li>Metal roller</li></ul><h2><a href="http://www.sydney.edu.au/architecture/dmaf/#/induction/sicu">Book SICU</a></h2><h2><a href="http://www.sydney.edu.au/architecture/dmaf/#/machine/metal-level234">Level 2, 3 & 4 Metalastics Lab equipment</a></h2>';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */



    /* Copy from Here */
    /****** METAL | LEVEL 2,3 & 4 MACHINES ******/

    if ($routeParams.machine === 'metal-level234') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "Level 2, 3 & 4 Equipment";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/metal-level234/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: ''
        }];
        $scope.showExtras = false;

        $scope.description = "<p>Access to Level 2, Level 3 and Level 4 equipment is gained after successful completion of the Safety Induction and Competency Unit (SICU) as well as a Machine Specific Induction for the particular higher-level machine that you would like to use. Please speak to DMaF staff to arrange a Machine Specific Induction.</p><p><strong>Level 2 equipment:</strong></p><ul><li>English wheel</li><li>Perspex Bender</li><li>Fixed spot welder</li><li>Cold saw</li><li>Soldering irons</li><li>Bench grinders</li><li>Fly press (cutting & stamping)</li></ul><p><strong>Level 3 equipment:</strong></p><ul><li>Electric hacksaw</li><li>Large drill press</li><li>Small lathe</li><li>Motorized guillotine</li></ul><p><strong>Level 4 equipment:</strong></p><ul><li>Large lathe</li><li>Mill</li><li>CNC Tormech</li></ul>";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookings = [];
        $scope.bookingsReady = "";
    }
    /* To here */




    /* Copy from Here */
    /****** METAL | MATERIALS ******/

    if ($routeParams.machine === 'metal-materials') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "materials";
        $scope.gridRef = 'one';
        $scope.bkimg = 'labs/metal/metal2.jpg';
        $scope.machine = [{
            name: 'materials',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];

        $scope.description = "<p>Access to Level 2, Level 3 and Level 4 equipment is gained after successful completion of the Safety Induction and Competency Unit (SICU) as well as a Machine Specific Induction for the particular higher-level machine that you would like to use.</p> <p>Please speak to DMaF staff to arrange a Machine Specific Induction.</p> <p>Level 2 equipment:</p><ul><li>English wheel</li><li>Perspex Bender</li><li>Fixed spot welder</li><li>Cold saw</li><li>Soldering irons</li><li>Bench grinders</li><li>Fly press (cutting & stamping) Level 3 equipment:</li><li>Electric hacksaw</li><li>Large drill press</li><li>Small lathe</li><li>Motorized guillotine Level 4 equipment:</li><li>Large lathe</li><li>Mill</li><li>CNC Tormech</li></ul>";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookings = [];
        $scope.bookingsReady = "";
    }
    /* To here */






    /* Copy from Here */
    /****** TIMBER | LEVEL 1 MACHINES ******/

    if ($routeParams.machine === 'timber-level1') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "level 1 equipment";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/timber-level1/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];
        $scope.showExtras = false;

        $scope.description = '<p>Successful completion of SICU (Safety Induction and Competency Unit) required prior to Level 1 machine use. SICU, run intensively at the beginning of each academic semester, offers a comprehensive introduction to all Level 1 equipment throughout the whole DMaF Lab.</p><p><strong>Level 1 Timber Fabrication Lab equipment:</strong></p><ul><li>Bandsaws</li><li>Disc Sander – Hammer</li><li>Sharpening Whetstone</li><li>Drill press</li><li>Bobbin Sander</li><li>Scroll Saw</li></ul><h2><a href="http://www.sydney.edu.au/architecture/dmaf/#/induction/sicu">Book SICU</a></h2><h2><a href="http://www.sydney.edu.au/architecture/#/machine/timber-level234">Level 2, 3 & 4 Timber Fabrication Lab equipment</a></h2>';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */



    /* Copy from Here */
    /****** TIMBER | LEVEL 2,3 & 4 MACHINES ******/

    if ($routeParams.machine === 'timber-level234') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "Level 2, 3 & 4 Equipment";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/timber-level234/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: ''
        }];
        $scope.showExtras = false;

        $scope.description = '<p>Access to Level 2, Level 3 and Level 4 equipment is gained after successful completion of the Safety Induction and Competency Unit (SICU) as well as a Machine Specific Induction for the particular higher-level machine that you would like to use. Please speak to DMaF staff to arrange a Machine Specific Induction.</p><p><strong>Level 2 Timber Fabrication Lab equipment:</strong></p><ul><li>Lathe - Woodfast</li><li>Mortiser (chisel/drill attachment)</li><li>Large Disc Sander</li><li>Thicknesser</li><li>Festool Compound Mitre Saw / Drop Saw</li></ul><p><strong>Level 3 Timber Fabrication Lab equipment:</strong></p><ul><li>Large table saw / panel saw (cross cutting)</li><li>Mortiser (chain attachment)</li></ul><p><strong>Level 4 Timber Fabrication Lab equipment:</strong></p><ul><li>Large table saw / panel saw (ripping)</li><li>Jointer (planer)</li></ul><h2><a href="http://www.sydney.edu.au/architecture/dmaf/#/induction/sicu">Book SICU</a></h2><h2><a href="http://www.sydney.edu.au/architecture/dmaf/#/machine/timber-level1">Level 1 Timber Fabrication Lab equipment</a></h2>';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookings = [];
        $scope.bookingsReady = "";
    }
    /* To here */








    /* Copy from Here */
    /****** MEDIA | 2D ******/

    if ($routeParams.machine === 'media-2d') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "2D processes";
        $scope.gridRef = 'one';
        $scope.bkimg = 'labs/media/medialab-2d/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];
        $scope.showExtras = false;

        $scope.description = '<ul><li><p>Architectural Sketching & Drawing</p></li><li><p>Digital Video</p></li><li><p>General Drawing</p></li><li><p>Photography</p></li><li><p>Printmaking</p></li></ul>';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */





    /* Copy from Here */
    /****** MEDIA | 3D ******/

    if ($routeParams.machine === 'media-3d') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "3D processes";
        $scope.gridRef = 'one';
        $scope.bkimg = 'labs/media/medialab-3d/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];
        $scope.showExtras = false;

        $scope.description = '<ul><li><p>Casting</p></li><li><p>Object Design</p></li><li><p>Sculpture</p></li><li><p>Site Specific Art</p></li></ul>';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */







    /* Copy from Here */
    /****** MEDIA | 3D ******/

    if ($routeParams.machine === 'media-mixed') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "mixed media";
        $scope.gridRef = 'one';
        $scope.bkimg = 'labs/media/medialab-mixedmedia/banner.jpg';
        $scope.machine = [{
            name: '',
            subname: '',
            brand: '',
            bedSize: '',
            cost: '',
            costDesc: '',

        }];
        $scope.showExtras = false;

        $scope.description = '<p>Soldering</p>';
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookingsReady = "";
    }
    /* To here */









    /* Copy from Here */
    /****** PEOPLE & CONTACTS ******/

    if ($routeParams.machine === 'people') {
        /* routeparams = link in array in lab.js  */
        $scope.label = "people";
        $scope.gridRef = 'one';
        $scope.bkimg = 'machines/vacuumformer/banner.jpg';
        $scope.machine = [{
            name: 'Vacuum Former',
            subname: '686PT',
            brand: 'Formech',
            bedSize: 'TBA',
            cost: 'Free machine use',
            costDesc: 'PETG vacuum forming sheets available to purchase from DMaF',
            downloads: [{
                name: 'Guide',
                link: ''
            }, {
                name: 'Rhino',
                link: ''
            }]
        }];

        $scope.description = "The Digital Fabrication Laboratory’s vacuum former uses heat and vacuum pressure to mold a melted sheet of plastic over a surface mold. Molds can be made from many materials depending on longevity required including plywood, card, composite, ceramics, plastics or alloys. Vacuum pressure is used to hold the melted plastic to the mold as temperature reduces, casting a plastic model.";
        $scope.allowedicon = '';
        $scope.allowedHeader = "";
        $scope.materialsAllowed = "";
        $scope.disallowedicon = '';
        $scope.disallowedHeader = "";
        $scope.materialsDisallowed = "";
        $scope.bookings = ['Remember that the object will need to be removed. Avoid undercuts', 'Use a draft angle of 3 degrees or more in the mold in order to avoid formed objects adhering to the mold.'];
        $scope.bookingsReady = "";
    }
    /* To here */



});
