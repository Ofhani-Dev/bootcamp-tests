
describe('This test check all the registration numbers from town' , function(){
    it('should give the right number plates for a particular location' , function(){
        assert.equal("fromStellies", allFromTown(['CL 124', 'CL 345', 'CL 341']));
        
    });

});