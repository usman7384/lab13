const task2 = require("./task2");


function sumNums(x, y, z) {
    let sum = 0;
    for (i = 0; i < z; i++) {
      if (i % x === 0) {
        sum = sum + i;
      }
      if (i % y === 0) {
        sum = sum + i;
      }
    }
    return sum;
  }

  module.exports.sumNaturalNumber=sumNums;