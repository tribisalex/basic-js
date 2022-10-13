const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  const total = {};

  domains.forEach(item => {
    const doms = item.split('.');
    doms.forEach((el, i) => {
      const key = '.' + doms.slice(i).reverse().join('.');
      total[key] = total.hasOwnProperty(key) ? total[key] + 1 : 1;
    });
  });
  return total;
}

module.exports = {
  getDNSStats
};
