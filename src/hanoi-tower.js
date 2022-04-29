const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let n = 0, s = 0;
  for(let i = 0; i <= disksNumber; i++) {
    n = i + s; s += n;}
  let sec = Math.floor(3600/turnsSpeed * n);
  let res = { turns: n, seconds: sec }
  return res;
}

module.exports = {
  calculateHanoi
};
