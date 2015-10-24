var HomeServices = angular.module("HomeServices", ['ngResource']);

HomeServices.factory("ServerService", ["$resource", function($resource) {
	return $resource("/TestJSP/springMVCTest.mvc", {}, {					
				get : {method: "GET", isArray: true } 				
	})
}]);
