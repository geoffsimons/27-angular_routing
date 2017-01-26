'use strict';

const angular = require('angular');

describe('Signup Controller', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('initial properties', () => {
    it('title should be "this is where you signup"', () => {
      expect(this.signupCtrl.title).toEqual('this is where you signup');
    });
  });
});
