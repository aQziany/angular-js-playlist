// module name
var myNinjaApp = angular.module('myNinjaApp', []);

// all the code that controlls the section for this controller
myNinjaApp.controller('NinjaController', ['$scope' , function($scope){
// protect scope for minify code

  // $scope.message = "hey y'all";
  // $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];

  // array of objects
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 1000
    }
  ];

}]);
