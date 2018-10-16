describe("fizzBuzz", () => {

  it("Throws Invalid arguments error whene stop < start", () => {
    assert.throws(() => {fizzBuzz(10, 1)}, Error, "Invalid arguments");
  });

  it("Throws Invalid arguments error whene start < 0", () => {
    assert.throws(() => {fizzBuzz(-1, 100)}, Error, "Invalid arguments");
  });

  it("Throws Invalid arguments error whene stop < 0", () => {
    assert.throws(() => {fizzBuzz(10, -1)}, Error, "Invalid arguments");
  });

  it('fizzBuzz() with start = 0, stop = 0 have to equal "FizzBuzz" ', () => {
    assert.deepEqual(() => {fizzBuzz(0, 0)},"FizzBuzz");
  });
  
  it('NaN test. fizzBuzz() with start = "a", stop = 0 have to return a NaN', () => {
    assert.equal(isNaN(() => {fizzBuzz('a', 0)}), true);
  });
  
  it('NaN test. fizzBuzz with insert one string (start = "b", stop is default value) have to return a NaN', () => {
    assert.equal(isNaN(() => {fizzBuzz('b')}), true);
  });

  it('NaN test. fizzBuzz with insert two string (start = "c", stop = "d" have return a NaN ', () => {
    assert.equal(isNaN(() => {fizzBuzz('c', 'd')}), true);
  });

  it('NaN test. fizzBuzz with insert two string (start = null, stop = "e" have return a NaN ', () => {
    assert.equal(isNaN(() => {fizzBuzz(null, 'e')}), true);
  });

  it('NaN test. fizzBuzz with insert two string (start = "f", stop = null have return a NaN ', () => {
    assert.equal(isNaN(() => {fizzBuzz('f', null)}), true);
  });

  it('NaN test. fizzBuzz with insert two string (start = null, stop = null have return a NaN ', () => {
    assert.equal(isNaN(() => {fizzBuzz(null, null)}), true);
  });

});