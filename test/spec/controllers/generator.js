'use strict';

describe('Controller: GeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('trackyourtagangularApp'));

  var GeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneratorCtrl = $controller('GeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
