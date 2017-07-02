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
      0,
      Infinity,
      42
    ].forEach(function (num) {
      expect(Object.is(num, toInteger(num))).toBe(true, num + ' returns itself');
      expect(Object.is(-num, toInteger(-num))).toBe(true, '-' + num + ' returns itself');
    });
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
