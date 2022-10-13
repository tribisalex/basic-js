const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr.slice();
    arr2[i] = null;
    const num = arr2.filter(item => item).join('') * 1;
    max > num ? max : max = num;
  }

  return max;
}

module.exports = {
  deleteDigit
};
