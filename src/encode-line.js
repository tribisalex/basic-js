const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = '', strLength = str.length, count = 1;

  for (let i = 0; i < strLength; i++) {
    let b = str[i];
    if (str[i + 1] === b) {
      count++;
    } else {
      if (count === 1) {
        str1 = str1 + b;
      } else {
        str1 = str1 + count + b;
        count = 1;
      }
    }
  }
  return str1;
}

module.exports = {
  encodeLine
};
