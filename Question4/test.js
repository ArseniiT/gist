describe("fizzBuzz", function() {

  it("Throws Invalid arguments error whene stop < start", function() {
    assert.throws(function () {fizzBuzz(10, 1)}, Error, "Invalid arguments");
  });

  it("Throws Invalid arguments error whene start < 0", function() {
    assert.throws(function () {fizzBuzz(-1, 100)}, Error, "Invalid arguments");
  });

  it("Throws Invalid arguments error whene stop < 0", function() {
    assert.throws(function () {fizzBuzz(10, -1)}, Error, "Invalid arguments");
  });

  it("Throws Invalid arguments error whene start = 0, stop = 0, ", function() {
    assert.throws(function () {fizzBuzz(0, 0)}, Error, "Invalid arguments");
  });

});