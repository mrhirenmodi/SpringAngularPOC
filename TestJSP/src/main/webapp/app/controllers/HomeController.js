homeModule = angular.module("homeModule", ['HomeServices']);

homeModule.controller("HomeCtrl", [	"$scope","$parse","$location","ServerService", function( $scope, $parse, $location,ServerService) {
	// create the controller and inject Angular's $scope
	
	 $scope.team={};

	 $scope.fetchData = function () {
		 ServerService.getData().success(function(response){
			 console.log("response values " + JSON.stringify(response));
		        $scope.message = response;
		    });
		
		
		};
		
		 $scope.postData = function () {
			 
			 console.log($scope.team);
		/*	 $scope.statusFlag = ServerService.postData($scope.team);
			 console.log($scope.statusFlag);*/
			 ServerService.postData($scope.team).success(function(response){
				 console.log("response values : " + response);
				 $scope.data = response;
			     console.log($scope.data.statusFlag);
			     console.log("response values " + JSON.stringify($scope.data.tableList));				 	
			        angular.forEach($scope.data.tableList, function(fieldName, errorMessage) {
		        		
		        		 console.log(fieldName + " : " + errorMessage);
		        		});
		        	
			        
			        
			    });
		 };
		 
		 $scope.updateData = function () {
			 
			 console.log($scope.team.id);				 
			 ServerService.updateData($scope.team.id).success(function(response){
				 console.log("response values : " + response);
				 $scope.data = response;
			     console.log($scope.data.statusFlag);
			     console.log("response values " + JSON.stringify($scope.data.tableList));				 	
			        			        
			        
			    });
		 };
    }]);
