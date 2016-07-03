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
        console.log(scope.foodReport);
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
      }
    };
  });
