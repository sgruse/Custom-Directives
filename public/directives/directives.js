var app = angular.module('ElementsApp', [])
  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/navbar.html'
    }
  });
