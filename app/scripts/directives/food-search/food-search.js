'use strict';

/**
 * @ngdoc directive
 * @name foodReportsApp.directive:foodSearch
 * @description
 * # foodSearch
 */
angular.module('foodReportsApp')
  .directive('foodSearch', function(apiService) {
    return {
      templateUrl: 'scripts/directives/food-search/food-search.html',
      scope: {
        searchResults: '='
      },
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.goSearch = function(keyEvent) {
          if (keyEvent.which === 13)
            scope.search();
        }

        scope.search = function() {
          if (scope.searchText.length < 1) {
            alert('Please type something to search');
          }
          var params = {
            q: scope.searchText,
            max: 50,
            offset: 0,
          };
          apiService.get('search', params).then(function(res) {
            scope.searchResults = res.list;
          });
        };
      }
    };
  });
