(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];
function LunchCheckController($scope){
  var filterString = function(item){
    return typeof(item) === 'string' && item.trim().length>0;
  }

  $scope.checkTooMuch = function () {
    var lunchLength=-1;
    $scope.messageColor = "green";
    if (!$scope.lunch_menu || $scope.lunch_menu.split(',').filter(filterString).length===0){
        $scope.messageColor = "red";
        $scope.myMessage = "Please enter data first!";
    }
    else {
      if($scope.lunch_menu.split(',').filter(filterString).length > 3)
        $scope.myMessage = "Too much!";
      else
        $scope.myMessage = "Enjoy!";
    };
  }
}


})();
