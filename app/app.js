// module name
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);
// routing dependency, use the route library

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    }).otherwise({
      redirectTo: '/home'
    })

}]);

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
      available: true,
      thumb: "http://placehold.it/50x50/666666/ffffff"
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30,
      available: true,
      thumb: "http://placehold.it/50x50/666666/ffffff"
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: false,
      thumb: "http://placehold.it/50x50/666666/ffffff"
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 1000,
      available: true,
      thumb: "http://placehold.it/50x50/666666/ffffff"
    }
  ];

}]);
