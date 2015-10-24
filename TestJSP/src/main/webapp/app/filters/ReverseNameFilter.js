

    angular.module('TitleCaseFilter', []).filter('ProperCase', [function () {
    	 return function (item) {
			  return item.replace(/\w\S*/g, function(txt){
				  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			  });
		  };
    }]);  
		  