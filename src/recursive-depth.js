const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let newArr = arr.filter((item) => Array.isArray(item));
    if (Array.isArray(newArr)) {
       let newArr2 = newArr.reduce((x,y) => Math.max(this.calculateDepth(y), x), 0) +1;
      return newArr2
    }
  }
}

module.exports = {
  DepthCalculator
};
