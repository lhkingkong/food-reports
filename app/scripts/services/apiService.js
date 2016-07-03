'use strict';

/**
 * @ngdoc service
 * @name foodReportsApp.apiService
 * @description
 * # apiService
 * Service in the foodReportsApp.
 */
angular.module('foodReportsApp')
  .service('apiService', function ($http, $q, $resource) {
    $http.defaults.useXDomain = true;
    
    var apiKey = '3q9SbBwfVlahzyLeA4H9Jb91ZI26Ah4eVeWlJ4X4';
    var baseURL = 'http://api.nal.usda.gov/ndb/';
    
    var api = {
        get: get
    };
    
    return api;
    
    function get(url, params, callback){
        var resource = $resource(baseURL + url,
                                 { api_key : apiKey, format: 'json'},
                                 { 'get': { 
                                     method:'GET', 
                                     cache: false, 
                                     responseType: 'application/json'
                                 } 
        });
        
        return resource.get(params).$promise;
    };
  });
