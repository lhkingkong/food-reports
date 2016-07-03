'use strict';

describe('Directive: foodSearch', function () {

  // load the directive's module
  beforeEach(module('foodReportsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<food-search></food-search>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});
