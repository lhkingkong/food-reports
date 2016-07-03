'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodReport', function($location) {
    return {
      templateUrl: 'scripts/directives/food-report/food-report.html',
      scope: {
        foodReport: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.gotToReport = function(item){
          $location.path('/report/'+item.ndbno);
        };
        
        scope.getMeasure = function(item, label){
          var value = 0;
          for(var i = 0, len =item.measures.length;i<len;i++){
            if(item.measures[i].label === label){
              return item.measures[i].value;
            }
          }
          return value;
        };
        
        scope.getEquivalent = function(label){
          var value = '--';
          for(var i = 0, len = scope.foodReport.food.nutrients[0].measures.length;i<len;i++){
            if(scope.foodReport.food.nutrients[0].measures[i].label === label){
              return scope.foodReport.food.nutrients[0].measures[i].eqv + ' g';
            }
          }
          return value;
        };
        
        
      }
    };
  });
