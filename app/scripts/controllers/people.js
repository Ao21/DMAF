'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('PeopleCtrl', function($scope,$routeParams) {
	if($routeParams.person === 'marjo'){
		$scope.name = 'Marjo Niemela';
		$scope.img = 'labs/staff/marjo.jpg';
		$scope.info = "<p>Marjo Niemelä is the manager of the Design Modelling and Fabrication Lab (DMaF) in the Faculty of Architecture, Design and Planning at the University of Sydney. The Finnish-born, architecturally trained furniture and fabrication expert has guided the development of the Faculty's digital fabrication facilities. The breadth and extent of facilities and expertise in the faculty today is a testament to her commitment to the importance and integration of fabrication across the numerous programs offered by the Faculty. </p><p>Downstairs in the DMaF laboratory, we're talking about the journey that has brought Marjo to the faculty and how she came to lead this new venture into digital fabrication. Surrounded by the raw sounds of drills, saws and sanders, Marjo's office is an oasis of calm amongst the hectic production that goes on around the clock in the DMaF. Our conversation is punctuated by students firing up new equipment and the faint buzz of a laser cutter making the finishing touches to a model. </p><p>Marjo was born in Lappeenranta, south-eastern Finland. She later moved back and forth between Finland and Australia, starting in 1983. Marjo completed studies in architecture in Canberra and later in Oulu, Finland. Afterwards, she travelled to Japan where she completed a variety of design-based roles. She came back to Australia and completed a fine woodworking course at Sturt School for Wood in Mittagong, NSW. She later moved to Sydney and set up her own company in furniture design and fabrication. It was during this time that she began working with the Faculty to coordinate the fledgling digital fabrication program that was in development. </p><p>From this diverse and multi-cultural experience, Marjo brings a fresh approach to the importance of fabrication. She recognised early on that one of the distinguishing factors of a degree from the Faculty is that we have access to our own equipment. Under her guidance, the DMaF has demonstrated the relevance of fabrication to an ever-increasing array of subjects. </p><p>'When we started, digital fabrication was just for the Master of Digital Architecture students. We produced an exhibition, Metamorphoses of which I am immensely proud. The work we created for that exhibition demonstrated what could be done with the first set of equipment the faculty bought. Of course, we've since improved our tools. For the exhibition, we completed about 340 hours of routing time on just one piece. The new equipment can do all of that work in about 30 hours. It's that kind of efficiency that makes digital fabrication really attractive to students and industry,' Marjo said. </p><p>'What I'm really looking forward to is what the Architectural Communications III students will achieve next year as Master students. There has been a general upskilling in the use of the equipment and students are creating more and more ambitious designs. It's great to see that undergraduates are now at the level of the masters students when we first started the program.'</p><p>'In other design schools, you send your [digital] files off and then you pick up the pieces when they have been cut or the model has been printed. And those schools charge a lot for that service. We train our students to use the machines themselves. The way we do it is what is normal and expected in design schools across Europe. The other universities are now coming to us to learn how we achieved that level of student expertise,' Marjo said. </p><p>'I pushed for everything to be student run,' Marjo said. 'Supervised, of course, but to ensure that students understand the whole process. That's respected in industry because our graduates know that they are sending correct and usable files to their company's fabrication partners.' </p><p>Marjo has recently committed her energy to expanding the scope of the DMaF beyond current students. The Faculty will be launching a pilot program for use of DMaF equipment amongst alumni later this year. Marjo is excited for the opportunity this presents both for alumni and also for current staff. </p><p>'There will be so many benefits. Alumni will stay in touch with the faculty and will be able to pursue their own projects in first-class facilities. And the faculty will be able to retain many of the talented staff that work for us in the workshops. It's been difficult to maintain that talent when the university closes over the non-teaching period. It's these sorts of community programs that will allow the Faculty to maintain and attract such high calibre staff that provide the guidance and expertise for our fabrication facilities,' Marjo said. </p><p>'Humans are the ones that operate machines. They always have done so. And being able to retain the humans that best run our machines, well, that's something we're working hard at achieving'. </p>"
	}

	if($routeParams.person === 'oni'){
		$scope.name = 'Oni Laughton';
		$scope.img = 'labs/staff/oni.jpg';
		$scope.info = "<p>I have a varied role within the Design Modelling and Fabrication Lab, which gives me sound general knowledge of the wide range of equipment and processes we support here in DMaF. </p><p>Primarily I coordinate the Workplace Health and Safety of the Lab, which exists to protect the health and safety of all stakeholders from exposure to hazards and risks resulting from work activities. In particular I ensure that policies and procedures are in place to protect users from high-risk machinery, hazardous chemicals and ergonomic risks.  Other administrative duties include scheduling, ordering, budgeting, and general spreadsheet fixation.</p><p>The final iteration of duties is teaching and supervising users of the Laser Cutters, 3D printers and Vacuum Former. I have been working with these machines for almost two years and have developed a good understanding the relationship between 3D modelling and physical fabrication. </p>"
	}
		
	if($routeParams.person === 'mel'){
		$scope.name = 'Melinda Wimborne';
		$scope.img = 'labs/staff/mel.jpg';
		$scope.info = "<p>I studied the Bachelor of Design in Architecture and graduated in 2011. I’ve done what you’re doing now, so I know what you’re going through. After I studied architecture, I decided that Wood is my area of expertise. I have also studied I studied Fine Woodwork at Sturt School for Wood and Furniture Design at School of Art, University of Tasmania. I also have a diploma in art and 15 years’ experience running furniture businesses.</p><p>I’ve always loved creating and problem solving; I started studying and making bespoke furniture in 1999. It’s been great to watch the evolution of technology and design to what we have now; the ability to manipulate wood to create a spectacular marriage between function, new technology and beauty.</p><p>My level of efficiency is my strongest asset, if a student is struggling to resolve a problem in the making process and has an impending deadline, we can usually get it sorted.</p><p>Working with physical models allows for an added dimension in the creative process, often mistakes can lead to breakthroughs and material choice will also influence the outcome in unexpected ways. There is never a “full stop” on the creative process and by working physically the designer is more open to the concept of evolution of process. You’re always learning, for instance, I have been learning to use the CNC Routing and have just produced an armchair.</p><p>Students must complete the Safety Induction and Competency Course. I can’t stress this enough. Not only do you learn to be safe when using the machines, but it introduce you to what you can make in the DMaF and expands your design thinking. There’s always a different machine or a new technique, and students should always consider their work as a prototype and not as a resolved model.</p>"
	}
	
	if($routeParams.person === 'gabe'){
		$scope.name = 'Gabrielle Ulacco';
		$scope.img = 'labs/staff/gabe.jpg';
		$scope.info = "<p>B Des Arch, USYD, M IDEA, USYD</p><p>I am a director at AR-MA, a Sydney based consultancy who have become leading specialists in the design and fabrication coordination of detailed and geometrically complex sculptural and architectural projects. </p><p>AR-MA is positioned at the intersection of design and fabrication. A detailed and nuanced understanding of materials and the physical processes used to work them is combined with virtuosity in the digital realm to create a unique platform from which to think, produce and create.</p><p> This integration of design thinking and technical skill and knowledge is can be seen clearly in the 2014 Fugitive Structures pavilion ‘Trifolium’, the commission for which AR-MA was awarded by via design competition by the Sherman Contemporary Art Foundation.</p><p> As technical director at AR-MA, I’ve worked to articulate and developi this approach, and have collaborated with a range of leading artists and architects including Anish Kapoor, Richard Goodwin, BVN, Grimshaw, FJMT, CHROFI, projects ranging from public art to commercial highrise building facades. </p><p>My aim is to bring to each project a rich understanding of how digital processes in design and fabrication can interact, this allows for extension of the possibilities of the creative process during design and leveraging of a variety of complex manufacturing processes at production. I’ve enjoyed my experience working in multidisciplinary teams where effective and inclusive leadership are key to effective communication and collaboration. </p><p>In recognition of my expertise in the field of digital fabrication I was appointed Robotics and Digital Fabrication Coordinator at the Department of Architecture and Planning at the University of Sydney. In this capacity I facilitates academic research into the creative potential of combining industrial processes and machine tools with design thinking. </p>"
	}
    
    if($routeParams.person === 'celeste'){
		$scope.name = 'Celeste Raanoja';
		$scope.img = 'labs/staff/celeste.jpg';
		$scope.info = "<p>coming soon</p>"
	}

 if($routeParams.person === 'dylan'){
		$scope.name = 'Dylan Wozniak-Oconnor';
		$scope.img = 'labs/staff/dylan.jpg';
		$scope.info = "<p>I work between the Media Labs and the Digital Fabrication Lab.</p><p>My particular interest is in the integration of traditional processes with digital fabrication techniques, and I am excited to see how students will be approaching the myriad ways an object can be fabricated and the creative applications of fabrication that are possible in a space as varied as the DMaF Lab.</p><p>I have trained in Communication and Media Arts at UTS, Art Direction at AFTRS and Design at TAFE. I am currently furthering my knowledge of mould making and slip casting at TAFE.</p><p>In the DMaF Lab I can assist with design projects utilising casting processes, whether they be models, prototypes or artworks, as well as soldering, 3D printing or any of the digital fabrication technologies in the workshop.</p>"
	}

	 if($routeParams.person === 'sam-horlyck'){
		$scope.name = 'Samantha Horlyck';
		$scope.img = 'labs/staff/sam-horlyck.jpg';
		$scope.info = "<p>I recently completed a Bachelor of Design in Architecture and Bachelor of Civil Engineering here at The University of Sydney.</p><p>From a young age I have been interested in creating objects and using my hands. However it wasn’t until using the workshops as a student that I unearthed my passion for digital fabrication. I have continued to feed my appetite for design through assisting students with projects in the workshops and lecturing in Digital Modelling and Fabrication. I constantly inspired by the wide range of equipment and processes that are occurring in workshop, especially the newly acquired KUKA Robots and the application of robotics in design, art and architecture.</p><p>I have been lucky enough to work in the DigFabLab for the past two years and am able to assist you with laser cutting, 3D printing, 3D scanning, digital modelling, vacuum forming, CNC routing and the robots.</p>"
	}

	if($routeParams.person === 'tim'){
		$scope.name = 'Tim Osborne';
		$scope.img = 'labs/staff/tim.jpg';
		$scope.info = "<p>I am continuously experimenting with combining the digital world with the old world 'hands on' methods, this integration is a constant source of interest to me.</p><p>I’ve spent my career exploring this intersection through Diplomas of Fine Arts Photography/Painting and Cabinet Making combined with 15 years’ experience working in CAD/CAM integration for the Woodworking industry.</p><p>Previous roles include CAD/CAM Product manager for Biesse s.p.a (Italy) and CAD/CAM Software Sales Manager for Komo Machinery (USA).</p><p>I work predominantly across the Timber and Metalastics Labs, secondarily within the Digital Fabrication Lab.</p>"
	}

	if($routeParams.person === 'rob'){
		$scope.name = 'Rob Cohen';
		$scope.img = 'labs/staff/rob.jpg';
		$scope.info = "<p>Rob's my name and metal works my game. </p><p>Just joking, metalwork is no game. And who can confirm my name is actually Rob?</p><p>I hold a Trade Certificate III in Vehicle Mechanics and an Advanced Diploma of Mechanical Engineering. I’ve worked at many different workshops and acquired my fabrication skills during this hands-on experience.</p><p>After completing my apprenticeship, I pursued an engineering career, first completing an Advanced Diploma of Mechanical Engineering. The diploma imparted skills in machining, turning and welding, complementing the practical experience I had already received as a mechanic.</p><p>In the DMaF, I can help you with sheet metal working, welding, basic fabrication using only hand tools, turning, and milling. While metalwork can seem intimidating, it’s no more dangerous than driving a car; both are useful, but both require care and skill. That’s why it’s so important that you speak to the staff if you’re unsure and that you complete the safety course.</p>"
	}


if($routeParams.person === 'majella'){
		$scope.name = 'Majella Beck';
		$scope.img = 'labs/staff/majella.jpg';
		$scope.info = "<p>I am a maker. Specifically I am an object designer, jeweller and tutor. Outside of my work in the Metalastics, Timber and at times Digital Fabrication Labs I teach a variety of courses relating to contemporary jewellery and objects. In my practice I combine precious and non-precious materials and see my work as a constant exploration and evaluation of what makes jewellery precious. I regularly participate in exhibition and have work held in private collections.</p><p>My qualifications in both Training and Assessment (Cert IV) and Metal Fabrication & Engineering Production Systems (Cert III) have honed my teaching skills and are being utilized daily in the DMaF Labs. I teach the Safety and Induction Unit (SICU) Wood & Metal and assist students one on one with their fabrication projects. I can advise on creating through the use of lathes, linishers, band saws, micro-motors, polishing motors, grinders, guillotines, drill press, soldering equipment, welding equipment, hydraulic press, magna bender and more.</p><p>Current inductions into laser cutting, CNC milling and 6-axis routing are furthering my interest in the cross pollination of analogue and digital equipment.</p>"
	}

if($routeParams.person === 'susanna'){
		$scope.name = 'Susana Alarcon';
		$scope.img = 'labs/staff/susana.jpg';
		$scope.info = "<p>coming soon</p>"
	}

	if($routeParams.person === 'rod'){
		$scope.name = 'Rod Watt';
		$scope.img = 'labs/staff/rod.jpg';
		$scope.info = "<p>coming soon</p>"
	}


if($routeParams.person === 'sam-choy'){
		$scope.name = 'Sam Choy';
		$scope.img = 'labs/staff/sam-choy.jpg';
		$scope.info = "<p>I have a Bachelor of Industrial Design from UNSW and a Certificate in Metal Fabrication and Welding Techniques from TAFE. A lot of my experience comes from set construction and dressing for opera and television. I’m currently helping a friend in New Zealand build a temporary Temple for the people of Christchurch as a way to release their earthquake experiences.</p><p>From as early as seven years old, I remember playtime being about tinkering and building. Pulling apart the Beta video player to see how it worked, using LEGO, Dick Smith electronics kits, crystal radios, femo, cubby houses. I was always exploring how things are made.</p><p>Model making is a key physical part of the design process. It gives the designer the sense and knowledge of their design and the hands-on experience of building it. I’m excited by how open-source 3D printing is democratising fabrication and changing who is involved - it’s not just specialists anymore.</p><p>In your creative works, you should capture design accidents. The wrong answer only is the right answer in search of a different question. Collect wrong answers as part of your design process. Ask different questions. I’ve borrowed this idea from Bruce Mau’s Incomplete Manifesto for Growth. You should too.</p>"
	}

	if($routeParams.person === 'andy'){
		$scope.name = 'Andy Pinnock';
		$scope.img = 'labs/staff/andy.jpg';
		$scope.info = "<p>coming soon</p>"
}

});
