'use strict';

angular.module('beerforgeApp')
    .controller('MainCtrl', function ($scope, $http, socket, recipeFactory) {
        recipeFactory.getRecipeBinding($scope);

    $scope.addRecipe = function(recipe) {
        recipeFactory.addRecipe(recipe);
    };

    $scope.deleteThing = function(id) {
        recipeFactory.deleteRecipe(id);
    };


  });
