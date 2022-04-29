const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper( matrix ) {
  let res = new Array(matrix.length).fill().map(function () { return new Array(matrix[0].length).fill(0);});
  for (let i = 0; i < matrix.length; i++) {
  for (let k = 0; k < matrix[i].length; k++) {
      let n = 0;
      for (let j = i - 1; j <= i + 1; j++) {
      for (let l = k - 1; l <= k + 1; l++) {
        try {if (!(j == i && l == k) && matrix[j][l] == true) {n++;}} 
        catch {}
        }
      }
      res[i][k] = n;
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
