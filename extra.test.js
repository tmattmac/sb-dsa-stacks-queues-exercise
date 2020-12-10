const { reverseString, isBalanced, prefixCalc } = require("./extra");


describe("reverseString", function() {
  it("reverses a string", function() {
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
    expect(reverseString("abcdef")).toBe("fedcba");
  });
});

describe("isBalanced", function () {
  it("checks if string is balanced", function () {
    expect(isBalanced("hello")).toBe(true);
    expect(isBalanced("(hi) [there]")).toBe(true);
    expect(isBalanced("(hi [there])")).toBe(true);
    expect(isBalanced("(((hi)))")).toBe(true);
    expect(isBalanced("(hello")).toBe(false);
    expect(isBalanced("(nope]")).toBe(false);
    expect(isBalanced("((ok) [nope)]")).toBe(false);
  });
})

describe("prefixCalc", function () {
  it("calculates correctly", function () {
    expect(prefixCalc("+ 1 2")).toBe(3);
    expect(prefixCalc("* 2 + 1 2")).toBe(6);
    expect(prefixCalc("+ 9 * 2 3")).toBe(15);
    expect(prefixCalc("- 1 2")).toBe(-1);
    expect(prefixCalc("- 9 * 2 3")).toBe(3);
    expect(prefixCalc("/ 6 - 4 2")).toBe(3);
  });
})