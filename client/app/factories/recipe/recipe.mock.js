'use strict';

angular.module('recipeFactoryMock', [])
    .factory('recipeFactory', function($http, socket) {
        // Service logic
        // ...

        // Public API here
        return {
            getRecipeBinding: function(scope) {
                scope.recipes = ['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express'];
            }
        };
    });
