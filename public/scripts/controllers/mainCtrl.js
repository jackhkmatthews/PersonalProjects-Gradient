function getRgbNumber() {
  return Math.floor(Math.random() * 256 );
};

function getRgbColor () {
  var rgbColor = 'rgb(' + getRgbNumber() + ',' + getRgbNumber() + ',' + getRgbNumber() + ')';
  return rgbColor;
};

function getGradientStylesObject () {
  rgbColor1 = getRgbColor();
  rgbColor2 = getRgbColor();
  linearGradient = 'linear-gradient(' + rgbColor1 + ',' + rgbColor2 + ')';
  gradientStylesObject = {
    "rgbColor1" : rgbColor1,
    "rgbColor2" : rgbColor2,
    "linearGradient" : linearGradient,
    "ngStyleSyntax" : {
        background: linearGradient,
      }
    };
  return gradientStylesObject;
};

angular.module('tubeVisualiserApp')
.controller('mainCtrl', function($scope) {
  $scope.gradientStylesObject = getGradientStylesObject();
  $scope.getGradientStylesObject = getGradientStylesObject;
});

// angular.module('tubeVisualiserApp')
// .controller('mainCtrl', function($scope) {
//   $scope.gradientContainerStyles = {"background":getRbgLinearGradient()};
//   $scope.getRgbColor = getRgbColor;
//   $scope.getRgbLinearGradient = getRbgLinearGradient;
// });
