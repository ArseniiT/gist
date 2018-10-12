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

  it('fizzBuzz() with start = 0, stop = 0 have to equals "FizzBuzz" ', () => {
    assert.deepEqual(() => {fizzBuzz(0, 0)},"FizzBuzz");
  });
  
  it('fizzBuzz() with start = "a", stop = 0 have to throws an error', () => {
    assert.equal(() => {fizzBuzz('a', 0)}, Error);
  });

  it('fizzBuzz with insert one string (start = "b", stop is default value) have to throws an error', () => {
    assert.deepEqual(() => {fizzBuzz('b')}, Error);
  });

  it('fizzBuzz with insert two string (start = "c", stop = "d" have tothrows an error ', () => {
    assert.deepEqual(() => {fizzBuzz('c', 'd')}, Error);
  });


});