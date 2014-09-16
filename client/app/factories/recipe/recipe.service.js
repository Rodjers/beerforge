'use strict';

angular.module('beerforgeApp')
  .factory('recipe', function ($http, socket) {
    // Service logic
    // ...

    // Public API here
        return {
            getRecipeBinding: function (scope) {
                scope.recipes = [];

                $http.get('/api/recipes').success(function(recipes) {
                    scope.recipes = recipes;
                    socket.syncUpdates('recipe', scope.recipes);
                });
            }
            /*,
            addRecipe: function(recipe) {
                recipes.$add(recipe);
            },
            getRecipe: function(id){
                return $firebase(new Firebase('https://beerforge.firebaseio.com/recipes/' + id));
            }*/
        };
  });
