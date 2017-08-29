'use strict';

var toInteger;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  toInteger = require('../../index.js');
} else {
  toInteger = returnExports;
}

describe('toInteger', function () {
  it('Basic', function () {
    expect(Object.is(0, toInteger(NaN))).toBe(true, 'NaN coerces to +0');
    [
      -0,
      0,
      Infinity,
      42
    ].forEach(function (num) {
      expect(Object.is(num, toInteger(num))).toBe(true, num + ' returns itself');
      expect(Object.is(-num, toInteger(-num))).toBe(true, '-' + num + ' returns itself');
    });
    expect(toInteger('0b10')).toBe(2, 'binary returns 2');
    expect(toInteger('0o10')).toBe(8, 'octal returns 8');
    expect(toInteger(' \t\r\n1 \t\r\n')).toBe(1, 'whitespaces are trimmed');
    expect(toInteger('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(0, 'non-whitespaces are not trimmed');
    expect(toInteger(Math.PI)).toBe(3, 'pi returns 3');
    expect(function () {
      var uncoercibleObject = {
        toString: function () {
          return {};
        },
        valueOf: function () {
          return {};
        }
      };
      return toInteger(uncoercibleObject);
    }).toThrow();
  });
});
