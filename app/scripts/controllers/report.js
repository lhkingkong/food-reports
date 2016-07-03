'use strict';

/**
 * @ngdoc function
 * @name foodReportsApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the foodReportsApp
 */
angular.module('foodReportsApp')
  .controller('ReportCtrl', function ($scope, foodReport) {
    $scope.foodReport = foodReport;
  });
