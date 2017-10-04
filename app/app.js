// module name
var myNinjaApp = angular.module('myNinjaApp', []);

// all the code that controlls the section for this controller
myNinjaApp.controller('NinjaController', ['$scope' , function($scope){
// protect scope for minify code

  $scope.message = "hey y'all";
  $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];


}]);
