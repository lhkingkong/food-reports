'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodFavorites', function($rootScope, $location, favoritesService) {
    return {
      templateUrl: 'scripts/directives/food-favorites/food-favorites.html',
      scope: {},
      restrict: 'E',
      replace: true,
      controller: function($scope){
        $scope.showFavorites = false;
      },
      link: function postLink(scope, element, attrs) {
        init();
        
        scope.$on('updateFavorites',function(){
          init();
        });
        
        scope.gotToReport = function(item){
          $location.path('/report/'+item.ndbno);
        };
        
        function init(){
          scope.favorites = favoritesService.getAll();
        }
        
        scope.toggleFavorite = function(event, item){
          event.preventDefault();
          event.stopImmediatePropagation();
          favoritesService.toggleFavorite(item);
          $rootScope.$broadcast('updateFavoritesInList');
        };
      }
    };
  });
