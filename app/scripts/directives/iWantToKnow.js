app.directive('iWant', function($compile, $timeout, $compile) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'views/partials/iWant.html',
        link: {
            pre: function(scope, element, attrs) {



            },

            post: function(scope, element, attrs) {
                scope.selectQuestions = function(e) {
                    angular.element(e.currentTarget).find('.questionsDropdown').addClass('open');
                }

                scope.closeQuestions = function(e) {
                    angular.element(e.currentTarget).removeClass('open');
                }


            }


        }
    }
});
