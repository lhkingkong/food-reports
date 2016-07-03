'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodList', function($location, $route, $window, favoritesService) {
    return {
      templateUrl: 'scripts/directives/food-list/food-list.html',
      scope: {
        searchResults: '=',
        pageSize: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.pages = [];
        var numberOfPages = 1;
        
        scope.gotToReport = function(item){
          $location.path('/report/'+item.ndbno);
        };
        
        scope.toggleFavorite = function(event, item){
          event.preventDefault();
          event.stopImmediatePropagation();
          favoritesService.toggleFavorite(item);
        };
        
        scope.$watch('searchResults',function(){
          if(scope.searchResults){
            numberOfPages = $window.Math.ceil(scope.searchResults.total/scope.pageSize);
            for(var i =1; i<= numberOfPages;i++){
              scope.pages.push(i);
            }
          }
        });
        
        scope.isLastPage = function(){
          return scope.currentPage === numberOfPages;
        };
        
        scope.goPrevious = function(event){
          event.preventDefault();
          event.stopImmediatePropagation();
          if(scope.currentPage===1){
            return false;
          }
          $location.path('/search/'+$route.current.params.search+'/'+(scope.currentPage-1));
        };
        
        scope.goNext = function(event){
          event.preventDefault();
          event.stopImmediatePropagation();
          if(scope.currentPage === numberOfPages){
            return false;
          }
          $location.path('/search/'+$route.current.params.search+'/'+(scope.currentPage+1));
        };
        
        scope.goToPage = function(event, page){
          event.preventDefault();
          event.stopImmediatePropagation();
          $location.path('/search/'+$route.current.params.search+'/'+page);
        };
        
        if($route.current.params.page){
            scope.currentPage = parseInt($route.current.params.page);
            if(scope.currentPage<1 || isNaN(scope.currentPage)){
              scope.currentPage = 0;
            }
          }
      }
    };
  });
