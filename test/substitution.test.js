const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return an encoded letter", () => {
    const actual = substitution(
      "a",
      "zabcdefghijklmnopqrstuvwxy",
      (encode = true)
    );
    const expected = "z";
    expect(actual).to.equal(expected);
  });
  it("should return false if an alphabet of greater than 26 chars is supplied", () => {
      const actual = substitution("a", "abcdefghijklmnopqrstuvwxyza", encode = true);
      const expected = false;
      expect(actual).to.equal(expected);
  });
  it("should return a decoded character", () => {
      const actual = substitution("z", "zabcdefghijklmnopqrstuvwxy", encode = false);
      const expected = "a";
      expect(actual).to.equal(expected);
  })
});
