const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let origin = arr.slice();
  let result = [];
  let j = 0;

  let arrSorted = arr.sort(function compare(a, b) {
    if (a === '-1' || b === '-1') {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 0;
    }
  })
  for(let i = origin.length - 1; i>=0; i--){
    if(origin[i] === -1){
      result.unshift(-1);
    }else{
       result.unshift(arrSorted[j]);
      j++;
    }
  }
    return result;
}


module.exports = {
  sortByHeight
};
