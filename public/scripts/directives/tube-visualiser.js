angular.module('tubeVisualiserApp')
.directive('tubeVisualiser', function(){
  return {
    templateUrl: 'templates/tubeVisualiser.html',
    replace: true,
    controller: 'CollapseDemoCtrl'
  }
});
