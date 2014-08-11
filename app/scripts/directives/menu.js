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
<<<<<<< HEAD
                        icon:'SICU',
                        link:'sicu',
                        title:'SICU Safety Induction and Competency Unit'
                    },{
                        icon:'laserCutting',
                        link:'laserCutting',
                        title:'Laser Cutting Inductions'
                    },{
                        icon: '3dPrinting',
                        link: '3dprinting',
                        title: '3D printing Inductions'
                    },
                    {
                        icon: 'access',
                        link: 'access',
                        title: 'Access'
=======
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
>>>>>>> 6296a054b9c90a8272203cd58000ee44dd96c122
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
                    resizeMenu(scope.currentHover);
                    

                }

                angular.element(window).bind('resize', function(){
                    var wd = angular.element(window).width();
                    angular.element('.menuBlock').width(wd);
                    resizeMenu(scope.currentHover);
                })


                function resizeMenu(item){
                    switch(item){
                        case "pos0":
                        angular.element('.menuSubContainer').css('transform','translateX(0px)');
                        break;
                        case "pos1":
                        angular.element('.menuSubContainer').css('transform','translateX(-'+angular.element(window).width() * 1+'px)')
                        break;
                        case "pos2":
                        angular.element('.menuSubContainer').css('transform','translateX(-'+angular.element(window).width() * 2+'px)')
                        break;
                        case "pos3":
                        angular.element('.menuSubContainer').css('transform','translateX(-'+angular.element(window).width() * 3+'px)')
                        break;
                        case "pos4":
                        angular.element('.menuSubContainer').css('transform','translateX(-'+angular.element(window).width() * 4+'px)')
                        break;

                    }
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
                    var wd = angular.element(window).width();
                    angular.element('.menuBlock').width(wd);
                });


            }



        }
    };
});
