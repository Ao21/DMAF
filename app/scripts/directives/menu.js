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
                        icon: 'digfab',
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
                        link: 'booking',
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
                        icon:'sicu',
                        link:'induction/sicu',
                        title:'SICU Safety Induction and Competency Unit'
                    },{
                        icon:'laser',
                        link:'induction/laserCutting',
                        title:'Laser Cutting Inductions'
                    },{
                        icon: '3d',
                        link: 'induction/3dprinting',
                        title: '3D printing Inductions'
                    },
                    {
                        icon: 'access',
                        link: 'induction/access',
                        title: 'Access'
                    }]
                }, {
                    section: 'Media & Events',
                    topLink:'mediaEvents'
                }, {
                    section: 'People & Contacts',
                    topLink: 'staff'
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
                    var winWidth = angular.element(window).width();
                    //angular.element('.labBlurb').removeClass('push-double--ends');
                    switch(item){
                        case "pos0":
                        angular.element('.menuSubContainer').css('transform','translateX(0px)');
                        angular.element('.container--wide-menu,.menuBlock').css('height','150px');
                        if(winWidth<1280){
                           var b = angular.element('.menuBlock > ul > li').css('width',winWidth/4)
                           angular.element('.menuBlock.it-4 ul').css('width',b*4)
                        }

                        break;
                        case "pos1":
                        angular.element('.menuSubContainer').css('transform','translateX(-'+winWidth * 1+'px)')
                        angular.element('.container--wide-menu,.menuBlock').css('height','150px')
                        if(winWidth<1280){
                            var b = angular.element('.menuBlock > ul > li').css('width',winWidth/5)
                            angular.element('.menuBlock.it-3 ul').css('width',b*3)
                        }
                        break;
                        case "pos2":
                        angular.element('.menuSubContainer').css('transform','translateX(-'+winWidth * 2+'px)')
                        angular.element('.container--wide-menu,.menuBlock').css('height','150px')
                        if(winWidth<1280){
                           var b = angular.element('.menuBlock > ul > li').css('width',winWidth/4)
                           angular.element('.menuBlock.it-4 ul').css('width',b *4)
                        }
                        break;
                        case "pos3":
                        //angular.element('.labBlurb').addClass('push-double--ends');
                        angular.element('.menuSubContainer').css('transform','translateX(-'+winWidth * 3+'px)')
                        angular.element('.container--wide-menu,.menuBlock').css('height','0')
                        break;
                        case "pos4":
                        //angular.element('.labBlurb').addClass('push-double--ends');
                        angular.element('.menuSubContainer').css('transform','translateX(-'+winWidth * 4+'px)')
                        angular.element('.container--wide-menu,.menuBlock').css('height','0');
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
