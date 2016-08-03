var myApp=angular.module("listApp",["ngRoute"]);


myApp.config(function($routeProvider){
    $routeProvider
        .when("/",{
                  templateUrl:"search.htm",
                   controller:"Controller_1"
             
        })
    
});


myApp.controller("Controller_1",function($scope,$http){
    
    $http.get("data.json").success(function(data) {
		$scope.List = data;
		
	});

      $scope.searchFilter=function(obj){
         var keyword= new RegExp($scope.nameFilter,'i');
         return !$scope.nameFilter || keyword.test(obj.gender)||keyword.test(obj.name)||keyword.test(obj.id)||keyword.test(obj.email)||keyword.test(obj.city);
     }
    
    
});
