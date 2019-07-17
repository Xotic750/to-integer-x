import toNumber, {toNumber2016} from 'to-number-x';
import numberIsNaN from 'is-nan-x';
import numberIsFinite from 'is-finite-x';
import mathSign, {sign2016} from 'math-sign-x';

const {abs, floor} = Math;

/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */
export function toInteger2016(value) {
  const number = toNumber2016(value);

  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return sign2016(number) * floor(abs(number));
}

/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */
const toInteger2018 = function toInteger2018(value) {
  const number = toNumber(value);

  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign(number) * floor(abs(number));
};

export default toInteger2018;
