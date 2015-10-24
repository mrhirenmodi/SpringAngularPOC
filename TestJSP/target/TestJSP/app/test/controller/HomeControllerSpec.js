describe('Controllers', function(){ //describe your object type
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
    
});