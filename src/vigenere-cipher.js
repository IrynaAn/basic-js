const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(t) {
    if (t == false) { this.reverse = true;}
  }

  encrypt(str1, str2) {
    if (!str1||!str2) {throw new Error("Incorrect arguments!");}
    let m = str1.toUpperCase(), k = str2.toUpperCase();
    let mCode = '';
    let i = 0;
    for (let char of m) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
          mCode += String.fromCharCode(((char.charCodeAt(0) - 65 + k.charCodeAt(i) - 65) % 26) + 65); i++;
          if (i === k.length) i = 0;
        } else {mCode += char;}
    }
    if (this.reverse) {mCode = mCode.split("").reverse().join("");} 
    return mCode;
  }

  decrypt(str1, str2) {
    if (!str1||!str2) {throw new Error("Incorrect arguments!");}
    let m = str1.toUpperCase(), k = str2.toUpperCase();
    let mCode = "";
    let i = 0;
    for (let char of m) {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        mCode += String.fromCharCode(((char.charCodeAt(0) - k.charCodeAt(i) + 26) % 26) + 65); i++;
        if (i === k.length) i = 0;
      } else {mCode += char;}
    }
    if (this.reverse) {mCode = mCode.split("").reverse().join("");}
    return mCode;
  } 
}
module.exports = {
  VigenereCipheringMachine
};
