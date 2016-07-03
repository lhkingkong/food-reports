'use strict';

describe('Service: favoritesService', function () {

  // load the service's module
  beforeEach(module('foodReportsApp'));

  // instantiate service
  var favoritesService;
  beforeEach(inject(function (_favoritesService_) {
    favoritesService = _favoritesService_;
  }));

  it('should do something', function () {
    expect(!!favoritesService).toBe(true);
  });

});
