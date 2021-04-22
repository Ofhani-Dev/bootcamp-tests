describe('This test should greet a  friend.' , function(){
    it('should return "Hello, Name" ' , function(){
        assert.equal("Hello, Tim", greet("Tim"));
        //assert.deepEqual();
    });
    it('should return "Hello, Name" ' , function(){
        assert.equal("Hello, Zamo", greet("Zamo"));
        //assert.deepEqual();
    });
    it('should return "Hello, Name" ' , function(){
        assert.equal("Hello, Khakhathi", greet("Khakhathi"));
        //assert.deepEqual();
    });

});