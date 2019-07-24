<a href="https://travis-ci.org/Xotic750/to-integer-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-integer-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/to-integer-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-integer-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-integer-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-integer-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-integer-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-integer-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/to-integer-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-integer-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_to-integer-x"></a>

## to-integer-x

ToInteger converts 'argument' to an integral numeric value.

<a name="exp_module_math-trim-x.exports"></a>

### `module.exports(string)` ⇒ <code>number</code> ⏏

<a name="module_to-integer-x"></a>

### `to-integer-x` ⇒ <code>number</code>

Converts `value` to an integer. (ES2019)

**Kind**: static property of [<code>to-integer-x</code>](#module_to-integer-x)  
**Returns**: <code>number</code> - Returns the converted integer.

| Param | Type            | Description           |
| ----- | --------------- | --------------------- |
| value | <code>\*</code> | The value to convert. |

**Example**

```js
import toInteger from 'to-integer-x';

console.log(toInteger(3)); // 3
console.log(toInteger(Number.MIN_VALUE)); // 0
console.log(toInteger(Infinity)); // 1.7976931348623157e+308
console.log(toInteger('3')); // 3
```
