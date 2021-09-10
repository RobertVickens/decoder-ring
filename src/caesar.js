// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function encodeLetter(currentLetter, shift) {
    let charCode = currentLetter.charCodeAt(0);
    // encode letter
    return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    // if (!input) || (!shift) return 0
    if (!input) {
      return false;
    }
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    // check shift
    // shift > 25 || shift < -25 || 0 are invalid
    let encrypted = "";
    input.toLowerCase();
    // for loop
    for (let i = 0; i < input.length; i++) {
      let currentLetter = input[i];
      // check if i is a lowercase letter
      if (currentLetter.match(/[a-z]/i)) {
        encrypted += encodeLetter(currentLetter, shift);
      }
    }
    // take in input text; input.toLowerCase
    // check if it's a letter, get letter's charcode
    // for each letter, apply shift
    // shift is mathematical addition or subtraction
    // store result in a new string
    return encrypted;
  }

  return {
    caesar, encodeLetter
  };
})();

module.exports = caesarModule;
