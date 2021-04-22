

describe('This test check whether or not number plates are from certain provinces' , function(){
    it('should show a true if number plates had loaction on number plate' , function(){
        assert.equal(true,regCheck("DV 23 NB GP", "GP"));

        assert.deepEqual(false, regCheck("DV 23 NB GP", "L"));
    });

    it('should show a true if number plates had loaction on number plate' , function(){
        assert.equal(true,regCheck("DV 23 NB L", "L"));

        assert.deepEqual(false, regCheck("DV 23 NB GP", "MP"));
    });

    it('should show a true if number plates had loaction on number plate' , function(){
        assert.equal(true,regCheck("DV 23 NB MP", "MP"));

        assert.deepEqual(false, regCheck("DV 23 NB GP", "NW"));
    });
});