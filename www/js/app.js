// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('DroneController', function($scope, $http){
  $scope.state = 'Loaded';

  $scope.connect = function(){ return droneAction('connect'); };
  $scope.takeOff = function(){ return droneAction('takeOff'); };
  $scope.land = function(){ return droneAction('land'); };
  $scope.up = function(){ return droneAction('up'); };
  $scope.down = function(){ return droneAction('down'); };
  $scope.left = function(){ return droneAction('left'); };
  $scope.right = function(){ return droneAction('right'); };
  $scope.backFlip = function(){ return droneAction('backFlip'); };

  function droneAction(action) {
    $http.post('https://triggers.octoblu.com/flows/25cb78ee-2232-49be-839a-364f0fdf7b39/triggers/' + action)
      .then(function(result){
        $scope.result = result;
      })
  }
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
