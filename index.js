/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-integer-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/to-integer-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-integer-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-integer-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/to-integer-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-integer-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-integer-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-integer-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6-compliant shim for toInteger.
 *
 * Requires ES3 or above.
 *
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger|7.1.4 ToInteger ( argument )}
 *
 * @version 1.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-integer-x
 */

'use strict';

var $isNaN = require('is-nan');
var $isFinite = require('is-finite-x');
var $sign = require('math-sign-x');

/**
 * Converts `value` to an integer.
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 *
 * @example
 * var toInteger = require('to-integer-x');
 * toInteger(3); // 3
 * toInteger(Number.MIN_VALUE); // 0
 * toInteger(Infinity); // 1.7976931348623157e+308
 * toInteger('3'); // 3
 */
module.exports = function ToInteger(value) {
  var number = Number(value);
  if ($isNaN(number)) {
    return 0;
  }

  if (number === 0 || $isFinite(number) === false) {
    return number;
  }

  return $sign(number) * Math.floor(Math.abs(number));
};
