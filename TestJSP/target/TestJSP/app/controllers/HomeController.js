homeModule = angular.module("homeModule", ['HomeServices']);

homeModule.controller("HomeCtrl", [	"$scope","$parse","$location","ServerService", function( $scope, $parse, $location,ServerService) {
	// create the controller and inject Angular's $scope
	
	 
	 $scope.ServerService;   
	 $scope.fetchData = function () {
		 
		 ServerService.get(function(response){
				console.log("response values " + response);
				
				$scope.message = response;
			});
		};
		
		
		
    }]);
