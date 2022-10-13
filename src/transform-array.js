const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw 'err'
    }
    const arr1 = [...arr];
    let isTrue = false;
    const resp = [];
    for (let i = 0; i < arr1.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          isTrue = true;
          break;

        case '--discard-prev':
          if (!isTrue) {
            resp.pop();
          }
          isTrue = false;
          break;

        case '--double-next':
          isTrue = false;
          resp.push(arr1[i + 1]);
          break;

        case '--double-prev':
          if (!isTrue) {
            resp.push(arr1[i - 1]);
          }
          isTrue = false;
          break;

        default:
          resp.push(arr1[i]);
          isTrue = false;
          break;
      }
    }
    return resp.filter(item => item !== undefined);
  } catch (e) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
