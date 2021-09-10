const expect = require("chai").expect;
const { caesar, encodeLetter } = require("../src/caesar");

describe("encodeLetter", () => {
    it("should encode a given letter 9 shifts", () => {
        const actual = encodeLetter("a", 9);
        const expected = "j";
        expect(actual).to.equal(expected);
    })
})

describe("caesar", () => {
    it("should accept a string as input", () => {
        const expected = "j";
        const actual = caesar("a", 9, encode = true);
        expect(actual).to.equal(expected);
    })

    it("should accept a number as the second parameter", () => {
        const expected = "jbcarwp";
        const actual = caesar("a string", 9, encode = true);
        expect(actual).to.equal(expected);
    })

    it("should return false if no input is given or if an empty string is given", () => {
        const expected = false;
        const actual = caesar("", 9, encode = true);
        expect(actual).to.equal(expected);
    })

    it("should return false if no shift is given or if zero is given", () => {
        const expected = false;
        const actual = caesar("a string", 0, encode = true);
        expect(actual).to.equal(expected);
    })

    it("should return false if a shift of greater than 25 or less than -25 is given", () => {
        const expected = false;
        const actual = caesar("a string", -26, encode = true);
        expect(actual).to.equal(expected);
    })

})