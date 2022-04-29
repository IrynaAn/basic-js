const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of d, return the object with the appearances of the DNS.
 *
 * @param {Array} d
 * @return {Object}
 *
 * @example
 * d = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The dnsult should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(d) {
  let dns = {}
  for(let i of d){
    let arr = i.split('.').reverse()
    for(let j = 0; j<arr.length; j++){
      let nDns = '.' + arr.slice(0, j + 1).join('.')
      dns[nDns] ? dns[nDns]++ : dns[nDns] = 1
      }
  }
return dns 

}

module.exports = {
  getDNSStats
};
