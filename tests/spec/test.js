'use strict';

var lib;
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
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var toInteger = lib.toInteger;
var toInteger2016 = lib.toInteger2016;
var toInteger2018 = lib.toInteger2018;

describe('toInteger', function () {
  describe('basic', function () {
    it('toInteger is a function', function () {
      expect(typeof toInteger2016).toBe('function');
    });

    it('toInteger2016 is a function', function () {
      expect(typeof toInteger2016).toBe('function');
    });

    it('toInteger not to be toInteger2016', function () {
      expect(toInteger).not.toBe(toInteger2016);
    });

    it('toInteger to be toInteger2018', function () {
      expect(toInteger).toBe(toInteger2018);
    });
  });

  describe('toInteger2016', function () {
    it('Basic', function () {
      expect(Object.is(0, toInteger2016(NaN))).toBe(true, 'NaN coerces to +0');
      [
        -0,
        0,
        Infinity,
        42
      ].forEach(function (num) {
        expect(Object.is(num, toInteger2016(num))).toBe(true, num + ' returns itself');
        expect(Object.is(-num, toInteger2016(-num))).toBe(true, '-' + num + ' returns itself');
      });
      expect(toInteger2016('0b10')).toBe(2, 'binary returns 2');
      expect(toInteger2016('0o10')).toBe(8, 'octal returns 8');
      expect(toInteger2016(' \t\r\n\u180e1 \t\r\n\u180e')).toBe(1, 'whitespaces are trimmed');
      expect(toInteger2016('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(0, 'non-whitespaces are not trimmed');
      expect(toInteger2016(Math.PI)).toBe(3, 'pi returns 3');
      expect(function () {
        var uncoercibleObject = {
          toString: function () {
            return {};
          },
          valueOf: function () {
            return {};
          }
        };
        return toInteger2016(uncoercibleObject);
      }).toThrow();
    });
  });

  describe('toInteger2018', function () {
    it('Basic', function () {
      expect(Object.is(0, toInteger2018(NaN))).toBe(true, 'NaN coerces to +0');
      [
        -0,
        0,
        Infinity,
        42
      ].forEach(function (num) {
        expect(Object.is(num, toInteger2018(num))).toBe(true, num + ' returns itself');
        expect(Object.is(-num, toInteger2018(-num))).toBe(true, '-' + num + ' returns itself');
      });
      expect(toInteger2018('0b10')).toBe(2, 'binary returns 2');
      expect(toInteger2018('0o10')).toBe(8, 'octal returns 8');
      expect(toInteger2018(' \t\r\n1 \t\r\n')).toBe(1, 'whitespaces are trimmed');
      expect(toInteger2018('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(0, 'non-whitespaces are not trimmed');
      expect(toInteger2018('\u180e10\u180e')).toBe(0, 'non-whitespaces are not trimmed');
      expect(toInteger2018(Math.PI)).toBe(3, 'pi returns 3');
      expect(function () {
        var uncoercibleObject = {
          toString: function () {
            return {};
          },
          valueOf: function () {
            return {};
          }
        };
        return toInteger2018(uncoercibleObject);
      }).toThrow();
    });
  });
});
