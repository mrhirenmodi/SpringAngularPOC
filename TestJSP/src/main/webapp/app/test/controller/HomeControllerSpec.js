/*describe('Controllers', function(){ //describe your object type
    beforeEach(module('scotchApp')); //load module
    
    var service, httpBackend, data;

    beforeEach(inject(function(ServerService, _$httpBackend_) {
        service = ServerService;
        httpBackend = _$httpBackend_;
    }));
    
    
   // describe('HomeServices',function(){ //describe your app name
        
        it('It should not be undefined', function(){  //write tests
            httpBackend.expectGET('/TestJSP/springMVCTest.mvc').respond("[{\"id\":5,\"name\":\"BaVu\",\"rating\":3}]");
            
            service.get(1).then(function(result) {
                data = result;
            }); 
            httpBackend.flush();

            expect(data).toBe("[{\"id\":5,\"name\":\"BaVu\",\"rating\":3}]");
    });
    
});*/

describe("Controllers", function () {
 
    beforeEach(module('scotchApp'));
 
    describe("HomeCtrl", function () {
 
        var scope, httpBackend, controller;
        beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            controller = $controller;
            $controller('HomeCtrl', {
                $scope: scope,
                $http: $http
            });
        }));
        
        it ('controller should be loaded', function() {
            expect(controller).toBeDefined();
        });
 
        it("should have 1 message", function () {
        	httpBackend.when("GET", "/TestJSP/springMVCTest.mvc").respond("[{\"id\":5,\"name\":\"BaVu\",\"rating\":3}]");
        	scope.fetchData();
            httpBackend.flush();
            expect(scope.message.length).toBe(1);
        });
        
        it("should have 0 message", function () {
        	httpBackend.when("GET", "/TestJSP/springMVCTest.mvc").respond("[]");
        	scope.fetchData();
            httpBackend.flush();
            expect(scope.message.length).toBe(0);
        });
        
    });
});