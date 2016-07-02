'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodSearch', function () {
    return {
      templateUrl: 'scripts/directives/food-search/food-search.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
        console.log('from search');
      }
    };
  });
