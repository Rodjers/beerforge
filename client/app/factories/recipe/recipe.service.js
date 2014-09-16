'use strict';

angular.module('beerforgeApp')
  .factory('recipeFactory', function ($http, socket) {
    // Service logic
    // ...

    // Public API here
        return {
            getRecipeBinding: function (scope) {
                scope.recipes = [];

                $http.get('/api/recipes').success(function(recipes) {
                    scope.recipes = recipes;
                    socket.syncUpdates('recipe', scope.recipes);

                    scope.$on('$destroy', function () {
                        socket.unsyncUpdates('recipe');
                    });
                });
            },
            addRecipe: function(recipe) {
                $http.post('/api/recipes', recipe);
            },
            getRecipe: function(id){
                $http.get('/api/recipes/' + id);
            },
            deleteRecipe: function(id){
                $http.delete('/api/recipes/' + id);
            }
        };
  });
