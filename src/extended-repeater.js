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
 * addition: 'PLUS', additionRepeatTimes: 3, sAddor: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let res = [], rAdd = [];
  let n = options.hasOwnProperty("repeatTimes")? options.repeatTimes : 1;
  let s = options.hasOwnProperty("separator")? options.separator + "" : "+";
  let strAdd = options.hasOwnProperty("addition")? options.addition + "" : "";
  let nAdd = options.hasOwnProperty("additionRepeatTimes")? options.additionRepeatTimes : 1;
  let sAdd = options.hasOwnProperty("additionSeparator")? options.additionSeparator : "|";
  for(let i = 0; i<nAdd; i++){rAdd.push(strAdd)}
  rAdd = rAdd.join(sAdd);
  for(let i = 0; i<n; i++){res.push(str + rAdd)}
  return res.join(s)
 
}

module.exports = {
  repeater
};
