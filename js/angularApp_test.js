'use strict';

describe('flapperNews module', function() {

  var scope;

  beforeEach(module('flapperNews'));
  beforeEach(inject(function($rootScope){
    scope = $rootScope.$new();
  }));

  describe('flapperNews MainController', function(){

    it('should be defined', inject(function($controller) {
      var mainCtrl = $controller('MainController', {$scope: scope});
      expect(mainCtrl).toBeDefined();
    }));

  });
});
