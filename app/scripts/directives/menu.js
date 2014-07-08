app.directive('menu', function($compile, $timeout) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'views/partials/menu.html',
        link: {
            pre: function preLink(scope, iElement, iAttrs, controller) {
                scope.menuItems = [{
                    section: 'Labs & Machines',
                    links: [{
                        icon: 'digFab',
                        title: 'digital fabrication lab'
                    }, {
                        icon: 'metalastics',
                        title: 'metalastics lab'
                    }, {
                        icon: 'timber',
                        title: 'timber lab'
                    }, {
                        icon: 'mediaLab',
                        title: 'media lab'
                    }]
                }, {
                    section: 'Bookings & Downloads',
                    links: [{
                        icon: 'bookings',
                        title: 'bookings'
                    }, {
                        icon: 'downloads',
                        title: 'downloads'
                    }, {
                        icon: 'learn',
                        title: 'learn about'
                    }]
                }, {
                    section: 'Inductions & Access'
                }, {
                    section: 'Media & Events'
                }, {
                    section: 'People & Contacts'
                }]
            },
            post: function postLink(scope, iElement, iAttrs, controller) {
                scope.currentHover = 'pos0';
                scope.menuHover = function(item) {
                    console.log('pos' + item);
                    scope.currentHover = 'pos' + item;

                }

                scope.$on('$viewContentLoaded', function() {
                    console.log('updated');
                    var mySVGsToInject = $('.svgInject');
                    console.log(mySVGsToInject);
                    SVGInjector(mySVGsToInject);
                });


            }



        }
    };
});
