


angular.module('tubeVisualiserApp')
.controller('mainCtrl', function($scope) {
  $scope.sayHello = function() {
    console.log("hello")
  };
  $scope.changeBackgroundColour = function() {
    var x = document.getElementsByClassName("gradient-container");
    x.style.backgroundColor = "blue";
  };
});
