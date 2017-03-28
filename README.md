<a name="module_to-integer-x"></a>

## to-integer-x
<a href="https://travis-ci.org/Xotic750/to-integer-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/to-integer-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/to-integer-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-integer-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/to-integer-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-integer-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-integer-x" title="npm version">
<img src="https://badge.fury.io/js/to-integer-x.svg"
alt="npm version" height="18">
</a>

ES6-compliant shim for toInteger.

Requires ES3 or above.

**See**: [7.1.4 ToInteger ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger)  
**Version**: 1.2.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_to-integer-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>number</code> ⏏
Converts `value` to an integer.

**Kind**: Exported function  
**Returns**: <code>number</code> - Returns the converted integer.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to convert. |

**Example**  
```js
var toInteger = require('to-integer-x');
toInteger(3); // 3
toInteger(Number.MIN_VALUE); // 0
toInteger(Infinity); // 1.7976931348623157e+308
toInteger('3'); // 3
```
