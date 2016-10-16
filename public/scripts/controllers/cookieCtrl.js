angular.module('tubeVisualiserApp')
.controller('cookieCtrl', ['$scope', '$cookies', '$cookieStore', '$window', function($scope, $cookies, $cookieStore, $window) {
  $scope.gradient = $cookieStore.get('gradient');
  $scope.updateCookie = function(){
    $scope.gradient = gradientStylesObject.ngStyleSyntax;
  };
  $scope.saveCookie = function(){
    $cookies.userName = 'Jack';
    $scope.platformCookie = $cookies.userName;
    $cookieStore.put('gradient', gradientStylesObject.ngStyleSyntax);
    $scope.gradient = $cookieStore.get('gradient');
  };
  $scope.deleteCookie = function(){
      $cookieStore.put('gradient', '');
      $scope.gradient.background = $cookieStore.get('gradient');
  };
}]);
