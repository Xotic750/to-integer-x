/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:11, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
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
    toInteger = require('../../index.js');
  } else {
    toInteger = returnExports;
  }

  describe('toInteger', function () {
    it('Basic', function () {
      expect(Object.is(0, toInteger(NaN))).toBe(true, 'NaN coerces to +0');
      [0, Infinity, 42].forEach(function (num) {
        expect(Object.is(num, toInteger(num))).
        toBe(true, num + ' returns itself');
        expect(Object.is(-num, toInteger(-num))).
        toBe(true, '-' + num + ' returns itself');
      });
      expect(toInteger(Math.PI)).toBe(3, 'pi returns 3');
      expect(function () {
        var uncoercibleObject = {
          valueOf: function () {
            return {};
          },
          toString: function () {
            return {};
          }
        };
        return toInteger(uncoercibleObject);
      }).toThrow();
    });
  });
}());
