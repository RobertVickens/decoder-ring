// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    let grid = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
    if(encode){
      // split input string into an array of strings
      let inputArray = input.split("");
      // correct for i/j and force lowercase
      let lowerCaseArray = inputArray.map((letter) => {
        let lowerCase = letter.toLowerCase();
        if(lowerCase === "i" || lowerCase === "j"){
          return "(i/j)";
        }
        return lowerCase;
      });

      // find x and y coordinates
      let xAxis = [];
      let yAxis = lowerCaseArray.map((letter) => {
        for(let i = 0; i < grid.length; i++){
          // current x-position in the grid
          const xCoordinate = grid[i];
          // checks each interior array of the grid
          if(xCoordinate.find((currentLetter) => currentLetter === letter)){
            // adds x-coordinate once letters match. +1 corrects x/y axis to be human readable
            xAxis.push(i + 1);
            // adds y-coordinate from interior array. +1 corrects x/y axis to be human readable
            return xCoordinate.indexOf(letter) + 1;
          }
        }
      });

      // add x coordinate and y coordinate arrays for x/y pairs
      result = xAxis.reduce((acc, xValue, index) => {
        let pair = `${yAxis[index]}${xValue}`;
        // convert numeric space to " "
        if(pair === "65"){
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    // decoding
    if(!encode){
      let spacesAdded = input.replace(" ", 65);
      // check for even number so pairs are kept together
      if(spacesAdded.length % 2 !== 0) return false;
      let coordinates = spacesAdded.match(/..?/g);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return grid[rowIndex][columnIndex];
      })
    }
    // output
    return result.join("");


  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
