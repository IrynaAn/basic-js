const { NotImplementedError } = require('../extensions/index.js');

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
 let res = '', n = 0;
for (let i = 0; i < str.length; i++){
if (str[i] == str[i+1]) {n++;}
else { 
  n ? res += (n+1) + str[i] : res += str[i]; n = 0;
}
}
return res
  
}

module.exports = {
  encodeLine
};
