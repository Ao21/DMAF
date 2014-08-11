'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('LearnCtrl', function($scope) {
    $scope.rowCollection = [
        {icon:'',documentName: '3D Extruder Induction', type:'Induction',machine: 'Extruders', link:'assets/downloads/3DExtruderInduction.pdf', lab:'Digital Fabrication'},
        {icon:'',documentName: '3D Powder Induction', type:'Induction',machine: 'Powder', link:'assets/downloads/3DPowderInduction.pdf', lab:'Digital Fabrication'},
        {icon:'',documentName: 'Alpha Laser Cutter Template', type:'Template',machine: 'Laser Cutters', link:'assets/downloads/2014_Alpha_V1.3dm', lab:'Digital Fabrication'},
        {icon:'',documentName: 'Delta & Gamma Laser Cutter Template', type:'Template',machine: 'Laser Cutters', link:'assets/downloads/2014_DeltaGamma_V1.3dm', lab:'Digital Fabrication'},
        {icon:'',documentName: 'Laser Cutting Induction', type:'Induction',machine: 'Laser Cutters', link:'assets/downloads/LaserCuttingInduction.pdf', lab:'Digital Fabrication'},
    ];

    $scope.tableConfig = {
            isPaginationEnabled: false,
            isGlobalSearchActivated: true,
        };

    $scope.columnCollection = [
        {label: 'Title', map: 'documentName'},
        {label: 'Type', map: 'type'},
        {label: 'Lab', map: 'lab'},
        {label: 'File', map: 'link', formatFunction:function(value,formatPeram){
        	return '<a href='+value+'>Download</a>'
        }}
    ];
});
