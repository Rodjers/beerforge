'use strict';

describe('Service: recipeFactory', function() {

    // load the service's module
    beforeEach(module('beerforgeApp'));
    beforeEach(module('socketMock'));

    // instantiate service
    var recipeFactory;
    beforeEach(inject(function(_recipeFactory_) {
        recipeFactory = _recipeFactory_;
    }));

    it('should do something', function() {
        expect(!!recipeFactory).toBe(true);
    });

});
