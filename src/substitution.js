// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;

    // Global variables
    const alphabeticalArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const substitutionArray = alphabet.toLowerCase().split("");

    // check for no repeat chars in alphabet
    // filter out any repeat chars
    const uniqueChars = substitutionArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );

    if (uniqueChars.length !== alphabet.length) return false;

    // encode msg
    const encodeMsg = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = alphabeticalArray.indexOf(char);
        const encodedChar = substitutionArray[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        // preserve spacing or encode letter
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMsg = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = substitutionArray.indexOf(char);
        const decodedChar = alphabeticalArray[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        // preserve spacing or decode
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };
    // decide whether to encode or decode
    return encode ? encodeMsg() : decodeMsg();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
