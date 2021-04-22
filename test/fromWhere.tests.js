
describe('This test check where the car is from based on the Reg Number' , function(){
    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Bellville", fromWhere("CY"));
        // assert.deepEqual("R10", transportFee("morning"));
    });

    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Paarl", fromWhere("CJ"));
        // assert.deepEqual("R10", transportFee("morning"));
    });

    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Cape Town", fromWhere("CA"));
        // assert.deepEqual("R10", transportFee("morning"));
    });

    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Some other place!", fromWhere("GP"));
        // assert.deepEqual("R10", transportFee("morning"));
    });

})