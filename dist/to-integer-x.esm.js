import toNumber from 'to-number-x';
import numberIsNaN from 'is-nan-x';
import numberIsFinite from 'is-finite-x';
import mathSign from 'math-sign-x';
var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var toInteger = function toInteger(value) {
  var number = toNumber(value);

  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign(number) * floor(abs(number));
};

export default toInteger;

//# sourceMappingURL=to-integer-x.esm.js.map