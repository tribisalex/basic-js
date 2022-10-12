const { NotImplementedError } = require('../extensions/index.js');
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(date) {
  let cats = 0;
  date.forEach(item => {
    item.forEach(i => {
      if (i === '^^') {
        cats++;
      }
    })
  })
  // console.log(cats);
  return cats;
}

// let ar = [
//   ['^^', '^^', 1,3,2,2,1,5,6,5,1],
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ]
//
// countCats(ar);

module.exports = {
  countCats
};
