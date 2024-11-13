// tests/jasmine/spec/exampleSpec.js
import { addNumbers } from '../../../../src/js/example.js';

describe("A suite", function() {
    it("contains a spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("addNumbers", function () {
  it("should add two numbers correctly", function () {
    expect(addNumbers(1, 2)).toBe(3);
    expect(addNumbers(-1, 1)).toBe(0);
  });

  it("should return NaN if a non-number is passed", function () {
    expect(addNumbers(1, "a")).toBeNaN();
  });
});


