import toInteger, {toInteger2016} from '../src/to-integer-x';

describe('toInteger', function() {
  describe('basic', function() {
    it('toInteger is a function', function() {
      expect.assertions(1);
      expect(typeof toInteger2016).toBe('function');
    });

    it('toInteger2016 is a function', function() {
      expect.assertions(1);
      expect(typeof toInteger2016).toBe('function');
    });

    it('toInteger not to be toInteger2016', function() {
      expect.assertions(1);
      expect(toInteger).not.toBe(toInteger2016);
    });

    it('toInteger to be toInteger2018', function() {
      expect.assertions(1);
      expect(toInteger).toBe(toInteger);
    });
  });

  describe('toInteger2016', function() {
    it('basic', function() {
      expect.assertions(15);
      /* eslint-disable-next-line compat/compat */
      expect(Object.is(0, toInteger2016(NaN))).toBe(true, 'NaN coerces to +0');
      [-0, 0, Infinity, 42].forEach(function(num) {
        /* eslint-disable-next-line compat/compat */
        expect(Object.is(num, toInteger2016(num))).toBe(true, `${num} returns itself`);
        /* eslint-disable-next-line compat/compat */
        expect(Object.is(-num, toInteger2016(-num))).toBe(true, `-${num} returns itself`);
      });
      expect(toInteger2016('0b10')).toBe(2, 'binary returns 2');
      expect(toInteger2016('0o10')).toBe(8, 'octal returns 8');
      expect(toInteger2016(' \t\r\n\u180e1 \t\r\n\u180e')).toBe(1, 'whitespaces are trimmed');
      expect(toInteger2016('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(0, 'non-whitespaces are not trimmed');
      expect(toInteger2016(Math.PI)).toBe(3, 'pi returns 3');
      expect(function() {
        const uncoercibleObject = {
          toString() {
            return {};
          },
          valueOf() {
            return {};
          },
        };

        return toInteger2016(uncoercibleObject);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  describe('toInteger2018', function() {
    it('basic', function() {
      expect.assertions(16);
      /* eslint-disable-next-line compat/compat */
      expect(Object.is(0, toInteger(NaN))).toBe(true, 'NaN coerces to +0');
      [-0, 0, Infinity, 42].forEach(function(num) {
        /* eslint-disable-next-line compat/compat */
        expect(Object.is(num, toInteger(num))).toBe(true, `${num} returns itself`);
        /* eslint-disable-next-line compat/compat */
        expect(Object.is(-num, toInteger(-num))).toBe(true, `-${num} returns itself`);
      });
      expect(toInteger('0b10')).toBe(2, 'binary returns 2');
      expect(toInteger('0o10')).toBe(8, 'octal returns 8');
      expect(toInteger(' \t\r\n1 \t\r\n')).toBe(1, 'whitespaces are trimmed');
      expect(toInteger('\u0085\u200b\ufffe10\u0085\u200b\ufffe')).toBe(0, 'non-whitespaces are not trimmed');
      expect(toInteger('\u180e10\u180e')).toBe(0, 'non-whitespaces are not trimmed');
      expect(toInteger(Math.PI)).toBe(3, 'pi returns 3');
      expect(function() {
        const uncoercibleObject = {
          toString() {
            return {};
          },
          valueOf() {
            return {};
          },
        };

        return toInteger(uncoercibleObject);
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
