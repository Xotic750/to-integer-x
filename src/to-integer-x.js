import toNumber from 'to-number-x';
import numberIsNaN from 'is-nan-x';
import numberIsFinite from 'is-finite-x';
import mathSign from 'math-sign-x';

const {abs, floor} = Math;

/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */
const toInteger = function toInteger(value) {
  const number = toNumber(value);

  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign(number) * floor(abs(number));
};

export default toInteger;
