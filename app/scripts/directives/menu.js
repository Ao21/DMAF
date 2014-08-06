app.directive('menu', function($compile, $timeout,$location) {
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
                        link: 'lab/digfab',
                        title: 'digital fabrication lab'
                    }, {
                        icon: 'metalastics',
                        link: 'lab/metal',
                        title: 'metalastics lab'
                    }, {
                        icon: 'timber',
                        link: 'lab/timber',
                        title: 'timber lab'
                    }, {
                        icon: 'mediaLab',
                        link: 'lab/media',
                        title: 'media lab'
                    }]
                }, {
                    section: 'Bookings & Downloads',
                    links: [{
                        icon: 'bookings',
                        link: 'bookings',
                        title: 'bookings'
                    }, {
                        icon: 'downloads',
                        link: 'downloads',
                        title: 'downloads'
                    }, {
                        icon: 'learn',
                        link: 'learn',
                        title: 'learn about'
                    }]
                }, {
                    section: 'Inductions & Access',
                    links: [{
                        icon: 'sicu',
                        link: 'lab/sicu',
                        title: 'safety and competency unit'
                    }, {
                        icon: 'laser',
                        link: 'lab/laser',
                        title: 'laser cutting inductions'
                    }, {
                        icon: '3d',
                        link: 'lab/3d',
                        title: '3d printing inductions'
                    }, {
                        icon: 'access',
                        link: 'lab/access',
                        title: 'access'
                    }]
                }, {
                    section: 'Media & Events'
                }, {
                    section: 'People & Contacts'
                }]
            },
            post: function postLink(scope, iElement, iAttrs, controller) {
                scope.currentHover = 'pos0';
                scope.menuHover = function(item) {
                    scope.currentHover = 'pos' + item;

                }

                scope.isActive = function (viewLocation) {
                     var active = (viewLocation === $location.path());
                     //console.log(viewLocation);
                     //console.log($location.path());
                     return active;
                };

                scope.$on('$viewContentLoaded', function() {
                    var mySVGsToInject = $('.svgInject');
                    //console.log(mySVGsToInject);
                    SVGInjector(mySVGsToInject);
                });


            }



        }
    };
});
