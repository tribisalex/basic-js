const {NotImplementedError} = require('../extensions/index.js');

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
  constructor(val) {
    this.value = val;
  }

  encrypt(mes, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (!mes || !key) {
      throw new Error('Incorrect arguments!');
    }
    let keyword = key.toUpperCase();
    const str = mes.toUpperCase();
    if (str.length > keyword.length) {
      keyword = keyword
      .repeat(Math.ceil(str.length / keyword.length))
      .slice(0, str.length);
    }
    let result = '';
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (alphabet.includes(str[i])) {
        result +=
          alphabet[
          (alphabet.indexOf(str[i]) +
            alphabet.indexOf(keyword[i - count])) %
          alphabet.length
            ];
      } else {
        result += str[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(mes, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (!mes || !key) {
      throw new Error('Incorrect arguments!');
    }
    const str = mes.toUpperCase();
    let keyword = key.toUpperCase();
    if (str.length > keyword.length) {
      keyword = keyword
      .repeat(Math.ceil(str.length / keyword.length))
      .slice(0, str.length);
    }
    let result = '';
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      if (alphabet.includes(str[i])) {
        result +=
          alphabet[
          (alphabet.indexOf(str[i]) -
            alphabet.indexOf(keyword[i - count]) +
            alphabet.length) %
          alphabet.length
            ];
      } else {
        result += str[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
