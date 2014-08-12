'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('BookingCtrl', function($scope,$sce) {
    $scope.bookings = ['Your file must be set up in the correct Rhino template','Read the instructions clearly stated on the Rhino template to ensure you are setting up your file correctly','Laser Inductions new to DMaF, you must bring the Material Safety Data Sheet (MSDS) these can be found online',"Ensure no lines duplicate (lines layered on top of each other). Run 'Make2D' or 'SelDup' Rhino commands to rectify duplicated lines",'Nest pieces across each panel carefully or by using nesting software such as RhinoNEST. Minimizing gaps between pieces saves material and reduces cutting time','Regardless of material type, your selection must be flat (tolerance +/-1mm).'];
		$scope.bookingsReady = "";
		$scope.bookingsUrl = [{name:'ALPHA',url:$sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=7769&calendar=4006&style=week-grid&days=7')},
								{name:'DELTA',url:$sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=13835&calendar=4006&style=week-grid&days=7')},
								{name:'GAMMA',url:$sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=7771&calendar=4006&style=week-grid&days=7')},
								{name:'Grad Studio GAMMA',url:$sce.trustAsResourceUrl('http://www.planyo.com/embed-calendar.php?resource_id=25880&calendar=4006&style=week-grid&days=7')}]
		$scope.termsAndConditions = '<p>Please read the following Terms and Conditions before making a booking:</p><ol><li>Read and ensure that you understand the Laser Cutter Guidelines described on the page for the machine you intend to book.</li><li>Please be present 10 minutes before the commencement of your booking time.</li><li>Ensure your files are prepared with the appropriate laser cutter template and layers.  Any time spent on file preparation during your booked time is unfortunately lost as the next appointment will start at the booked time.</li><li>Payment is to be made for the whole period booked even if the job takes a shorter time. Please ensure that your booking accurately reflects the length of time that your require.</li><li>Payment for time and materials is always to be made at completion of cutting.</li><li>Cancellations must be made at least 3 hours in advance of booked time. To cancel your booking, follow the instructions in the Planyo booking confirmation email. Repeated failure (more than once) to cancel bookings may result in being charged for booked time and a ban from the machines from 2 weeks.</li><li>A maximum of 60 minute booking per week per student (2x30min or 1x60min). Any bookings in excess of allowed times may result in all your bookings being cancelled.</li><li>Laser Cutting not available to 1st Year Bachelor of Design in Architecture students.</li><li>Class specific booking forms are only to be used for projects for that Unit of Study</li><li>Class specific bookings are in addition to your usual 60 minutes per week, and may still be booked through the general booking system.</li><li>A stand-by list is available during peak semester periods.  Add your name and telephone number to the list and if a space becomes available, you will be called and must be available to take the space promptly. The list is on a first come first served basis.  Please note that the list starts afresh every day and does not carry over to the following day. Stand-by time is not counted as a part of your 60 minutes per week allowable time per student/week.</li></ol><p>Note: Laser Cutting terms and conditions exist in order to provide fair access to all students in the Faculty. Should you feel that there is a reason that you need additional time beyond these rules, please contact the DMaF manager.</p>'

	

});
