// module name
var myNinjaApp = angular.module('myNinjaApp', []);

// all the code that controlls the section for this controller
myNinjaApp.controller('NinjaController', ['$scope' , function($scope){
// protect scope for minify code

  $scope.removeNinja = function(ninja) {
    var removeNinja = $scope.ninjas.indexOf(ninja); // javascript function
    $scope.ninjas.splice(removeNinja, 1) // javascript methode
  }

  // ninja object
  $scope.addNinja = function() {
    $scope.ninjas.push({ // javascript push method
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });

    $scope.newninja.name = "";
    $scope.newninja.belt = "";
    $scope.newninja.rate = "";
  };

  // $scope.message = "hey y'all";
  // $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];

  // array of objects
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30,
      available: true
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: false
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 1000,
      available: true
    }
  ];

}]);
