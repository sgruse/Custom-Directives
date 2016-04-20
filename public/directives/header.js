'use strict';

angular.module('CustomHeader', [])

.directive('customHeader', function() {
  return {
    restrict: 'E',
    scope: {
      header: '='
    },
    templateUrl: '../../templates/header.html'
  };
})

.directive('modMessage', function() {
  return {
    restrict: 'E',
    scope: {
      name: '=',
      says: '=',
      points: '='
    },
    replace: true,
    transclude: true,
    templateUrl: './templates/messageMod.html',
    controller: function($scope) {
      $scope.addPoint = function() {
        $scope.points += 1
      }
    }
  }
})
