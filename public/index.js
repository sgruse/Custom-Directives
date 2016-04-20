'use strict';

const angular = require('angular');

const app = angular.module('ElementsApp', [])
// 
// .controller('ShowController', function() {
//   this.show = false;
//   this.click = function() {
//     console.log('SHOW CONTROLLER CLICK FUNCTION HAS BEEN HIT');
//     this.show = false;
//   }
// })

// .directive('customNav', function() {
//   return {
//     restrict: 'E',
//     scope: {
//
//     },
//     templateUrl: './templates/navbar.html',
//     controller: function() {
//       var vm = this
//       vm.active = 'home'
//       vm.setActive = function(tab) {
//         console.log('SetActive function has been called');
//         vm.active = tab;
//       }
//     },
//     controllerAs: 'navbarCtrl'
//   },
//   link: function($scope, element, attrs) {
//     element.on('click', function() {
//       element.css('border', 'solid')
//     })
//   }
// })


// CUSTOM NAVE ELEMENT
.directive('customNav', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/navbar.html'
  }
})

// CUSTOM NAV ATTRIBUTE FUNCTIONALITY
.directive('myActiveLink', function($location) {
  return {
    restrict: 'A',
    scope: {
      path: '@myActiveLink'
    },
    link: function(scope, element, attributes) {
      scope.$on('$locationChangeSuccess', function() {
        if ($location.path() === scope.path) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      })
    }
  }
})

.directive('customHeader', function() {
  return {
    restrict: 'E',
    scope: {

    },
    templateUrl: './templates/header.html'
  };
})

// // SHOW ATTRIBUTE FOR CUSTOM HEADER
// .directive('showHeader', function() {
//   return {
//     restrict: 'A'
//   }
// })

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
