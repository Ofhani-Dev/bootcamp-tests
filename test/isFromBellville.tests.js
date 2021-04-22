describe('This test should check all number plates from Bellville.' , function(){
    it('should return true if number plates contains "CY"' , function(){
        assert.equal(true,isFromBellville("CY"));

        assert.deepEqual(false,isFromBellville("CI"));
    });

    it('should return true if number plates contains "CY"' , function(){
        assert.equal(false,isFromBellville("CL"));

        assert.deepEqual(true,isFromBellville("CY"));
    });

});