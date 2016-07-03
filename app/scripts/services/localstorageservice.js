'use strict';

/**
 * @ngdoc service
 * @name foodReportsApp.localStorageService
 * @description
 * # localStorageService
 * Service in the foodReportsApp.
 */
angular.module('foodReportsApp')
  .service('localStorageService', function($window) {
    var api = {
      get: get,
      set: set,
      remove: remove,
      clear: clear
    };

    return api;

    function clear() {
      if ($window.localStorage) {
        $window.localStorage.clear();
        return true;
      } else {
        return 'no-localstorage';
      }
    }

    function remove(item) {
      if ($window.localStorage) {
        $window.localStorage.removeItem(item);
        return true;
      } else {
        return 'no-localstorage';
      }
    }

    function get(item) {
      if ($window.localStorage) {
        return JSON.parse($window.localStorage.getItem(item));
      } else {
        return [];
      }
    }

    function set(item, value) {
      if ($window.localStorage) {
        $window.localStorage.setItem(item, JSON.stringify(value));
        return true;
      } else {
        return false;
      }
    }

  });
