app.directive('openingHours', function($compile, $timeout, $compile) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'views/partials/opening.html',
        link: {
            pre: function(scope, element, attrs) {

                scope.openingHours = [{
                    day: 'monday',
                    days: ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
                    wood: ['', '', '', 'active', 'active', 'active', 'active', 'active', 'active', 'active', 'active', 'active'],
                    metal: ['active', 'active', 'active', 'active', 'active', 'active', 'active', 'active', 'active', 'active', 'active', 'active'],
                    digFab: ['', '', 'active', 'active', 'active', 'active', 'active', 'active', 'active', '', '', ''],
                }];

            },

            post: function(scope, element, attrs) {



            }


        }
    }
});
