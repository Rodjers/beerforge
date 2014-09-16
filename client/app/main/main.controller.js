'use strict';

angular.module('beerforgeApp')
  .controller('MainCtrl', function ($scope, $http, socket, recipe) {

        recipe.getRecipeBinding($scope);

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('recipe');
    });
  });
