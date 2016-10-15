function getRgbNumber() {
  return Math.floor(Math.random() * 256 );
};

function getRgbColor () {
  var rgbColor = 'rgb(' + getRgbNumber() + ',' + getRgbNumber() + ',' + getRgbNumber() + ')';
  return rgbColor;
};

function getRbgLinearGradient () {
  rgbColor1 = getRgbColor();
  rgbColor2 = getRgbColor();
  rbgLinearGradient = 'linear-gradient(' + rgbColor1 + ',' + rgbColor2 + ')';
  return rbgLinearGradient
};

function getGradientStylesObject () {
  GradientStylesObject = {
    "rgbColor1" : getRgbColor(),
    "rgbColor2" : getRgbColor(),
    "linear-gradient" : 'linear-gradient(' + this.rgbColor1 + ',' + this.rgbColor2 + ')'
  }
  return GradientStylesObject;
};

// angular.module('tubeVisualiserApp')
// .controller('mainCtrl', function($scope) {
//   $scope.gradientContainerStyleInfo
//   $scope.gradientContainerStyles = {"background":getRbgLinearGradient()};
//   $scope.getRgbColor = getRgbColor;
//   $scope.getRgbLinearGradient = getRbgLinearGradient;
// });

angular.module('tubeVisualiserApp')
.controller('mainCtrl', function($scope) {
  $scope.gradientContainerStyles = {"background":getRbgLinearGradient()};
  $scope.getRgbColor = getRgbColor;
  $scope.getRgbLinearGradient = getRbgLinearGradient;
});
