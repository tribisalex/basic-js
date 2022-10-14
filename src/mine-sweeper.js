const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixChoice = matrix.map((item) => [...item].fill(0));
  matrix.forEach((item, i, index) => {
    item.forEach((item, j) => {
      if (matrix[i][j - 1]) matrixChoice[i][j]++;
      if (matrix[i][j + 1]) matrixChoice[i][j]++;
      if (i !== 0) {
        if (matrix[i - 1][j + 1]) matrixChoice[i][j]++;
        if (matrix[i - 1][j - 1]) matrixChoice[i][j]++;
        if (matrix[i - 1][j]) matrixChoice[i][j]++;
      }
      if (i !== matrix.length - 1) {
        if (matrix[i + 1][j + 1]) matrixChoice[i][j]++;
        if (matrix[i + 1][j - 1]) matrixChoice[i][j]++;
        if (matrix[i + 1][j]) matrixChoice[i][j]++;
      }
    })
  })
  return matrixChoice;
}

module.exports = {
  minesweeper
};
