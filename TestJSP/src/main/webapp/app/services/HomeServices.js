var HomeServices = angular.module("HomeServices", []);

HomeServices.factory("ServerService", ['$http',function($http) {  
    var obj = {};
    
    obj.getData = function(){ 
        return $http.get('/TestJSP/springMVCTest.mvc');
    }
    obj.postData = function(data){ 
    	return $http.post("/TestJSP/createTeam.mvc", data);
    }
    obj.updateData = function(id){ 
    		console.log("IDDDDDDDD=> " + id)
    	return $http.get("/TestJSP/updateTeam.mvc/" + id);
    }
    return obj;
}]);

