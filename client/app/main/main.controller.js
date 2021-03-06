'use strict';

angular.module('beerforgeApp')
    .controller('MainCtrl', function($scope, $http, socket, recipeFactory, Auth) {

        //$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express'];
        $scope.currentUser = Auth.getCurrentUser();

        $scope.filter = {
            showNewRecipe: false
        }

        recipeFactory.getRecipeBinding($scope);

        $scope.addRecipe = function(recipe) {
            recipeFactory.addRecipe(recipe);
        };

        $scope.deleteThing = function(id) {
            recipeFactory.deleteRecipe(id);
        };


    });
