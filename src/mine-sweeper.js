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
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // let count 
  // let result = []
  // let finalResult = []
  // for(let i = 0; i < matrix.length; i++){
  //   count = 0;
    // for(let j = 0; j < matrix[i].length; j++){
      
    //   if(matrix[i][j + 1] === true){
    //      count = count + 1
    //     console.log(count)
    //   }
    //   if(matrix[i][j - 1] === true){
    //        count = count + 1
    //     console.log(count)
    //   }
    //   if(matrix[i + 1][j] === true){
    //         count = count + 1
    //     console.log(count)
    //   }
      // if(matrix[i - 1][j] === true){
      //         count++
      //   console.log(count)
      // }
      // if(matrix[i - 1][j - 1] === true){
      //           count++
      //   console.log(count)
      // }
      // if(matrix[i + 1][j - 1] === true){
      //             count++
      //   console.log(count)
      // }
      // if(matrix[i - 1][j - 1] === true){
      //               count++
      //   console.log(count)
      // }
      // if(matrix[i - 1][j + 1] === true){
      //             count++
      // }
  //     result.push(count)
  //     console.log(result)
  //   }
  //   finalResult.push(result)
  // }
  // console.log(finalResult)
}

module.exports = {
  minesweeper
};
