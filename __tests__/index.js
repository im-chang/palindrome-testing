const palindrome = require("../lib/palindromes");
describe("palindrome", () => {
  describe("when word is racecar", () => {
    it("should return true", () => {
      const result = palindrome("racecar");
      expect(result).toEqual(true);
    });
  });
});
describe("palindrome", () => {
  describe("when word is man", () => {
    it("should return false", () => {
      const result = palindrome("man");
      expect(result).toEqual(false);
    });
  });
});
describe("palindrome", () => {
  describe("when word is tiger", () => {
    it("should return false", () => {
      const result = palindrome("tiger");
      expect(result).toEqual(false);
    });
  });
});
describe("palindrome", () => {
  describe("when word is Mom", () => {
    it("should return true", () => {
      const result = palindrome("Mom");
      expect(result).toEqual(true);
    });
  });
});
describe("palindrome", () => {
  describe("when sentence is never odd or even", () => {
    it("should return true", () => {
      const result = palindrome("never odd or even");
      expect(result).toEqual(true);
    });
  });
});
