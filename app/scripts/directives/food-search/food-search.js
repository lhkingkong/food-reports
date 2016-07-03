'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodSearch', function($timeout, $location, apiService, favoritesService, $route) {
    return {
      templateUrl: 'scripts/directives/food-search/food-search.html',
      scope: {
        searchResults: '=',
        pageSize: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        var timer, timerNoResults; 
        scope.pageSize = 10;
        scope.noSearch = false;
        scope.searchText = '';
        scope.withASearch = false;
        scope.currentPage = 1;
        
        scope.goSearch = function(keyEvent) {
          if (keyEvent.which === 13)
            scope.search();
        };
        
        scope.resetPage = function(){
          scope.currentPage = 1;
        };

        scope.search = function() {
          if (scope.searchText.length < 1) {
            scope.noSearch = true;
            $timeout.cancel(timer);
            timer = $timeout(function(){
              scope.noSearch = false;
            },5000);
            return false;
          }
          $location.path('/search/'+scope.searchText+'/'+scope.currentPage);
        };
        
        scope.getData = function() {
          var params = {
            q: scope.searchText,
            max: scope.pageSize,
            offset: (scope.currentPage-1)*scope.pageSize,
          };
          apiService.get('search', params).then(function(res) {
            scope.withASearch = true;
            favoritesService.setFavorites(res.list.item);
            scope.searchResults = res.list;
            scope.noResults = false;
          },function(){
            scope.noResults = true;
            $timeout.cancel(timerNoResults);
            timerNoResults = $timeout(function(){
              scope.noResults = false;
            },5000);
          });
        };
        
        if($route.current.params.search){
          scope.searchText = $route.current.params.search;
          if($route.current.params.page){
            scope.currentPage = parseInt($route.current.params.page);
            if(scope.currentPage<1 || isNaN(scope.currentPage)){
              scope.currentPage = 0;
            }
          }
          scope.getData();
        }

        scope.$on('updateFavoritesInList', function() {
          favoritesService.setFavorites(scope.searchResults.item);
        });

        scope.$on('$destroy', function() {
          $timeout.cancel(timer);
        });
      }
    };
  });
