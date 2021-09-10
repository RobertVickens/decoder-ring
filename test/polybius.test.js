const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return a 2-digit encoded letter", () => {
        const actual = polybius("a", encode = true);
        const expected = "11";
        expect(actual).to.equal(expected);
    })
    it("should return a decoded string from encoded input", () => {
        const actual = polybius("11", encode = false);
        const expected = "a";
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const actual = polybius("A", encode = true);
        const expected = "11";
        expect(actual).to.equal(expected);
    })
    it("should preserve spacing after decoding", () => {
        const actual = polybius("116511", encode = false);
        const expected = "a a";
        expect(actual).to.equal(expected);
    })
})