const {NotImplementedError} = require('../extensions/index.js');

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
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  if (typeof str !== 'string') str = String(str);
  if (typeof addition !== 'string') addition = String(addition);

  let newArr = [];
  while (newArr.length < additionRepeatTimes) {
    newArr.push(addition);
  }

  str = str + newArr.join(additionSeparator);

  let newArr2 = [];
  while (newArr2.length < repeatTimes) {
    newArr2.push(str);
  }
  return newArr2.join(separator);
}

module.exports = {
  repeater
};
