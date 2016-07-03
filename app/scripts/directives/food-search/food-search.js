'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodSearch', function($timeout, apiService, favoritesService) {
    return {
      templateUrl: 'scripts/directives/food-search/food-search.html',
      scope: {
        searchResults: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        var timer;
        scope.noSearch = false;
        scope.searchText = '';
        scope.withASearch = false;
        scope.goSearch = function(keyEvent) {
          if (keyEvent.which === 13)
            scope.search();
        }

        scope.search = function() {
          if (scope.searchText.length < 1) {
            scope.noSearch = true;
            $timeout.cancel(timer);
            timer = $timeout(function(){
              scope.noSearch = false;
            },5000);
            return false;
          }
          var params = {
            q: scope.searchText,
            max: 50,
            offset: 0,
          };
          apiService.get('search', params).then(function(res) {
            scope.withASearch = true;
            favoritesService.setFavorites(res.list.item);
            scope.searchResults = res.list;
          });
        };

        scope.$on('updateFavoritesInList', function() {
          favoritesService.setFavorites(scope.searchResults.item);
        });

        scope.$on('$destroy', function() {
          $timeout.cancel(timer);
        });
      }
    };
  });
