(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name foodReportsApp
   * @description
   * # foodReportsApp
   *
   * Main module of the application.
   */
  angular
    .module('foodReportsApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'angular.filter'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/search/:search?/:page?', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/report/:ndbno', {
          templateUrl: 'views/report.html',
          controller: 'ReportCtrl',
          controllerAs: 'report',
          resolve: {
            foodReport: function($q, $route, apiService){
              var defer = $q.defer();
              var params = {
                ndbno: $route.current.params.ndbno,
                type:'b'
              };
              apiService.get('reports', params).then(function(res) {
                defer.resolve(res.report);
              },function(){
                defer.reject();
              });
              return defer.promise;
            }
          }
        })
        .otherwise({
          redirectTo: '/search/'
        });
    });
})();
