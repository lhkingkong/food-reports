'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodList', function($location, favoritesService) {
    return {
      templateUrl: 'scripts/directives/food-list/food-list.html',
      scope: {
        searchResults: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.gotToReport = function(item){
          $location.path('/report/'+item.ndbno);
        };
        
        scope.toggleFavorite = function(event, item){
          event.preventDefault();
          event.stopImmediatePropagation();
          favoritesService.toggleFavorite(item);
        };
      }
    };
  });
