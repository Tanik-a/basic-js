const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let additionComplex
let newAddition
let strComplex
let newStr
  if(typeof options.edition === undefined){
    additionComplex = (options.additionSeparator || '|');
    newAddition = additionComplex.repeat(options.additionRepeatTimes);
    strComplex = String(str) + newAddition + (options.separator || '+');
    newStr = strComplex.repeat(options.repeatTimes - 1) + String(str) + newAddition;
  return newStr;
  //   additionComplex = options.addition ? options.addition + (options.additionSeparator || '|') : (options.additionSeparator || '|');
  //   newAddition = options.addition ? additionComplex.repeat(options.additionRepeatTimes - 1) + options.addition : additionComplex.repeat(options.additionRepeatTimes);
  //   strComplex = String(str) + newAddition + (options.separator || '+');
  //   newStr = strComplex.repeat(options.repeatTimes - 1) + String(str) + newAddition;
  // return newStr;
  }else{
  additionComplex = String(options.addition) ? String(options.addition) + (options.additionSeparator || '|') : (options.additionSeparator || '|');
  newAddition = String(options.addition) ? additionComplex.repeat(options.additionRepeatTimes - 1) + String(options.addition) : additionComplex.repeat(options.additionRepeatTimes);
  strComplex = String(str) + newAddition + (options.separator || '+');
  newStr = strComplex.repeat(options.repeatTimes - 1) + String(str) + newAddition;
  return newStr;
}




}

module.exports = {
  repeater
};
