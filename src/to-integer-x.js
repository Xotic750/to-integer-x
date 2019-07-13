/**
 * @file ToInteger converts 'argument' to an integral numeric value.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger|7.1.4 ToInteger ( argument )}
 * @version 3.0.0.
 * @author Xotic750 <Xotic750@gmail.com>.
 * @copyright  Xotic750.
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module To-integer-x.
 */

const libToNumber = require('to-number-x');

const {toNumber2016} = libToNumber;
const {toNumber2018} = libToNumber;
const numberIsNaN = require('is-nan-x');
const numberIsFinite = require('is-finite-x');
const libMathSign = require('math-sign-x');

const mathSign2016 = libMathSign.sign2016;
const mathSign2018 = libMathSign.sign2018;
const mathFloor = Math.floor;
const mathAbs = Math.abs;

const $toInteger2016 = function toInteger2016(value) {
  const number = toNumber2016(value);

  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign2016(number) * mathFloor(mathAbs(number));
};

const $toInteger2018 = function toInteger2018(value) {
  const number = toNumber2018(value);

  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign2018(number) * mathFloor(mathAbs(number));
};

module.exports = {
  /**
   * Reference to toInteger2018.
   */
  toInteger: $toInteger2018,

  /**
   * Converts `value` to an integer. (ES2016).
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x').toInteger2016;
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3.
   */
  toInteger2016: $toInteger2016,

  /**
   * Converts `value` to an integer. (ES2018).
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x').toInteger2018;
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3.
   */
  toInteger2018: $toInteger2018,
};
