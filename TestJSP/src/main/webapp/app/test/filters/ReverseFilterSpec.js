describe('Filters', function(){ //describe your object type
    beforeEach(module('TitleCaseFilter')); //load module
    
    describe('ProperCase',function(){ //describe your app name
    
        var reverse;    
        beforeEach(inject(function($filter){ 
            reverse = $filter('ProperCase',{});
        }));
        
        it('Should titlecase a string', function(){  //write tests
            expect(reverse('rahil')).toBe('Rahil'); //pass
           // expect(reverse('don')).toBe('Don'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        }); 
    
    });
    
});