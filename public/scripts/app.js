angular.module('tubeVisualiserApp', ['ui.bootstrap'])
.controller('mainController', function($scope) {

  // BUTTONS ======================

  // define some random object and button values
  $scope.bigData = {};

  $scope.bigData.breakfast = false;
  $scope.bigData.lunch = false;
  $scope.bigData.dinner = false;

  // COLLAPSE =====================
  $scope.isCollapsed = false;

});
