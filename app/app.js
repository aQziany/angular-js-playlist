// module name
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);
// routing dependency, use the route library

myNinjaApp.config(['$routeProvider', '$locationProvider' ,function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);  

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'NinjaController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: 'ContactController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    }).otherwise({
      redirectTo: '/home'
    })

}]);


myNinjaApp.directive('randomNinja', [function(){
  return {
    restrict: 'E', // restrict the directive
    scope: {
      ninjas: '=',
      title: '='
    },
    // template: '<img ng-src="{{ninjas[random].thumb}}"/>',
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);
    }
  };
}]);


// all the code that controlls the section for this controller
myNinjaApp.controller('NinjaController', ['$scope' , '$http' , function($scope, $http){
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

  /* old way of doing
  $http.get('data/ninjas.json').success(function(data){
    $scope.ninjas = data;
  });
  */

  $scope.removeAll = function(){
    $scope.ninjas = [];
  };

  $http.get('data/ninjas.json').then(function(response){
      $scope.ninjas = response.data;
});

  // transform this into json
  // console.log(angular.toJson($scope.ninjas));

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
  $scope.sendMessage = function(){
    $location.path('contact-success');
  };
}]);
