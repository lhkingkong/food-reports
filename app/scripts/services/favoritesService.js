'use strict';

/**
 * @ngdoc service
 * @name foodReportsApp.favoritesService
 * @description
 * # favoritesService
 * Service in the foodReportsApp.
 */
angular.module('foodReportsApp')
  .service('favoritesService', function(localStorageService) {
    var api = {
      getAll: getAll,
      setFavorites: setFavorites,
      isFavorite: isFavorite,
      toggleFavorite: toggleFavorite
    };

    return api;

    function getAll() {
      return localStorageService.get('foodReportsFavorites');
    }

    function setFavorites(items) {
      var favorites = localStorageService.get('foodReportsFavorites');
      for (var j = 0, len2 = items.length; j < len2; j++) {
        items[j].isFavorite = false;
        for (var i = 0, len = favorites.length; i < len; i++) {
          if (items[j].ndbno === favorites[i].ndbno) {
            items[j].isFavorite = true;
          }
        }
      }
    }

    function isFavorite(ndbno) {
      var favorites = localStorageService.get('foodReportsFavorites');
      for (var i = 0, len = favorites.length; i < len; i++) {
        if (favorites[i].ndbno === ndbno) {
          return true;
        }
      }
      return false;
    }

    function toggleFavorite(item) {
      var favorites = localStorageService.get('foodReportsFavorites');
      if (!favorites) {
        favorites = [];
      }
      if (item.isFavorite) {
        for (var i = 0, len = favorites.length; i < len; i++) {
          if (favorites[i].ndbno === item.ndbno) {
            favorites.splice(i, 1);
            break;
          }
        }
        localStorageService.set('foodReportsFavorites', favorites);
        item.isFavorite = false;
      } else {
        item.isFavorite = true;
        favorites.push(item);
        localStorageService.set('foodReportsFavorites', favorites);
      }
    }

  });
