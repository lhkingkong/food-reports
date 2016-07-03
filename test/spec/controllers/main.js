'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('foodReportsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be defined', function () {
    expect(MainCtrl).toBeDefined();
  });
});
