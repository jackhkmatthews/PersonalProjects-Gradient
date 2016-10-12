


angular.module('tubeVisualiserApp')
.controller('mainCtrl', function($scope) {
  $scope.sayHello = function() {
    console.log("hello")
  };
  $scope.myObj = {
    "color" : "red",
    // "background-color" : "coral",
    // "font-size" : "60px",
    // "padding" : "50px"
  };
  $scope.color = function () {
    return Math.floor(Math.random() * 256 );
  };
});
