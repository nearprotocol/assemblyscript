(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["transformer"] = factory();
	else
		root["transformer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/long/src/long.js":
/*!****************************************!*\
  !*** ../node_modules/long/src/long.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ }),

/***/ "../src/ast.ts":
/*!*********************!*\
  !*** ../src/ast.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Abstract syntax tree representing a source file once parsed.
 * @module ast
 */ /***/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ./common */ "../src/common.ts");
var tokenizer_1 = __webpack_require__(/*! ./tokenizer */ "../src/tokenizer.ts");
exports.Token = tokenizer_1.Token;
exports.Range = tokenizer_1.Range;
var util_1 = __webpack_require__(/*! ./util */ "../src/util/index.ts");
/** Indicates the kind of a node. */
var NodeKind;
(function (NodeKind) {
    NodeKind[NodeKind["SOURCE"] = 0] = "SOURCE";
    // types
    NodeKind[NodeKind["NAMEDTYPE"] = 1] = "NAMEDTYPE";
    NodeKind[NodeKind["FUNCTIONTYPE"] = 2] = "FUNCTIONTYPE";
    NodeKind[NodeKind["TYPENAME"] = 3] = "TYPENAME";
    NodeKind[NodeKind["TYPEPARAMETER"] = 4] = "TYPEPARAMETER";
    NodeKind[NodeKind["PARAMETER"] = 5] = "PARAMETER";
    // expressions
    NodeKind[NodeKind["IDENTIFIER"] = 6] = "IDENTIFIER";
    NodeKind[NodeKind["ASSERTION"] = 7] = "ASSERTION";
    NodeKind[NodeKind["BINARY"] = 8] = "BINARY";
    NodeKind[NodeKind["CALL"] = 9] = "CALL";
    NodeKind[NodeKind["CLASS"] = 10] = "CLASS";
    NodeKind[NodeKind["COMMA"] = 11] = "COMMA";
    NodeKind[NodeKind["ELEMENTACCESS"] = 12] = "ELEMENTACCESS";
    NodeKind[NodeKind["FALSE"] = 13] = "FALSE";
    NodeKind[NodeKind["FUNCTION"] = 14] = "FUNCTION";
    NodeKind[NodeKind["INSTANCEOF"] = 15] = "INSTANCEOF";
    NodeKind[NodeKind["LITERAL"] = 16] = "LITERAL";
    NodeKind[NodeKind["NEW"] = 17] = "NEW";
    NodeKind[NodeKind["NULL"] = 18] = "NULL";
    NodeKind[NodeKind["PARENTHESIZED"] = 19] = "PARENTHESIZED";
    NodeKind[NodeKind["PROPERTYACCESS"] = 20] = "PROPERTYACCESS";
    NodeKind[NodeKind["TERNARY"] = 21] = "TERNARY";
    NodeKind[NodeKind["SUPER"] = 22] = "SUPER";
    NodeKind[NodeKind["THIS"] = 23] = "THIS";
    NodeKind[NodeKind["TRUE"] = 24] = "TRUE";
    NodeKind[NodeKind["CONSTRUCTOR"] = 25] = "CONSTRUCTOR";
    NodeKind[NodeKind["UNARYPOSTFIX"] = 26] = "UNARYPOSTFIX";
    NodeKind[NodeKind["UNARYPREFIX"] = 27] = "UNARYPREFIX";
    // statements
    NodeKind[NodeKind["BLOCK"] = 28] = "BLOCK";
    NodeKind[NodeKind["BREAK"] = 29] = "BREAK";
    NodeKind[NodeKind["CONTINUE"] = 30] = "CONTINUE";
    NodeKind[NodeKind["DO"] = 31] = "DO";
    NodeKind[NodeKind["EMPTY"] = 32] = "EMPTY";
    NodeKind[NodeKind["EXPORT"] = 33] = "EXPORT";
    NodeKind[NodeKind["EXPORTDEFAULT"] = 34] = "EXPORTDEFAULT";
    NodeKind[NodeKind["EXPORTIMPORT"] = 35] = "EXPORTIMPORT";
    NodeKind[NodeKind["EXPRESSION"] = 36] = "EXPRESSION";
    NodeKind[NodeKind["FOR"] = 37] = "FOR";
    NodeKind[NodeKind["IF"] = 38] = "IF";
    NodeKind[NodeKind["IMPORT"] = 39] = "IMPORT";
    NodeKind[NodeKind["RETURN"] = 40] = "RETURN";
    NodeKind[NodeKind["SWITCH"] = 41] = "SWITCH";
    NodeKind[NodeKind["THROW"] = 42] = "THROW";
    NodeKind[NodeKind["TRY"] = 43] = "TRY";
    NodeKind[NodeKind["VARIABLE"] = 44] = "VARIABLE";
    NodeKind[NodeKind["VOID"] = 45] = "VOID";
    NodeKind[NodeKind["WHILE"] = 46] = "WHILE";
    // declaration statements
    NodeKind[NodeKind["CLASSDECLARATION"] = 47] = "CLASSDECLARATION";
    NodeKind[NodeKind["ENUMDECLARATION"] = 48] = "ENUMDECLARATION";
    NodeKind[NodeKind["ENUMVALUEDECLARATION"] = 49] = "ENUMVALUEDECLARATION";
    NodeKind[NodeKind["FIELDDECLARATION"] = 50] = "FIELDDECLARATION";
    NodeKind[NodeKind["FUNCTIONDECLARATION"] = 51] = "FUNCTIONDECLARATION";
    NodeKind[NodeKind["IMPORTDECLARATION"] = 52] = "IMPORTDECLARATION";
    NodeKind[NodeKind["INDEXSIGNATUREDECLARATION"] = 53] = "INDEXSIGNATUREDECLARATION";
    NodeKind[NodeKind["INTERFACEDECLARATION"] = 54] = "INTERFACEDECLARATION";
    NodeKind[NodeKind["METHODDECLARATION"] = 55] = "METHODDECLARATION";
    NodeKind[NodeKind["NAMESPACEDECLARATION"] = 56] = "NAMESPACEDECLARATION";
    NodeKind[NodeKind["TYPEDECLARATION"] = 57] = "TYPEDECLARATION";
    NodeKind[NodeKind["VARIABLEDECLARATION"] = 58] = "VARIABLEDECLARATION";
    // special
    NodeKind[NodeKind["DECORATOR"] = 59] = "DECORATOR";
    NodeKind[NodeKind["EXPORTMEMBER"] = 60] = "EXPORTMEMBER";
    NodeKind[NodeKind["SWITCHCASE"] = 61] = "SWITCHCASE";
    NodeKind[NodeKind["COMMENT"] = 62] = "COMMENT";
})(NodeKind = exports.NodeKind || (exports.NodeKind = {}));
/** Checks if a node represents a constant value. */
function nodeIsConstantValue(kind) {
    switch (kind) {
        case NodeKind.LITERAL:
        case NodeKind.NULL:
        case NodeKind.TRUE:
        case NodeKind.FALSE: return true;
    }
    return false;
}
exports.nodeIsConstantValue = nodeIsConstantValue;
/** Checks if a node might be callable. */
function nodeIsCallable(kind) {
    switch (kind) {
        case NodeKind.IDENTIFIER:
        case NodeKind.ASSERTION: // if kind=NONNULL
        case NodeKind.CALL:
        case NodeKind.ELEMENTACCESS:
        case NodeKind.PARENTHESIZED:
        case NodeKind.PROPERTYACCESS:
        case NodeKind.SUPER: return true;
    }
    return false;
}
exports.nodeIsCallable = nodeIsCallable;
/** Checks if a node might be callable with generic arguments. */
function nodeIsGenericCallable(kind) {
    switch (kind) {
        case NodeKind.IDENTIFIER:
        case NodeKind.PROPERTYACCESS: return true;
    }
    return false;
}
exports.nodeIsGenericCallable = nodeIsGenericCallable;
/** Base class of all nodes. */
var Node = /** @class */ (function () {
    function Node() {
    }
    // types
    Node.createTypeName = function (name, range) {
        var typeName = new TypeName();
        typeName.range = range;
        typeName.identifier = name;
        typeName.next = null;
        return typeName;
    };
    Node.createSimpleTypeName = function (name, range) {
        return Node.createTypeName(Node.createIdentifierExpression(name, range), range);
    };
    Node.createNamedType = function (name, typeArguments, isNullable, range) {
        var type = new NamedTypeNode();
        type.range = range;
        type.name = name;
        type.typeArguments = typeArguments;
        type.isNullable = isNullable;
        return type;
    };
    Node.createFunctionType = function (parameters, returnType, explicitThisType, isNullable, range) {
        var type = new FunctionTypeNode();
        type.range = range;
        type.parameters = parameters;
        type.returnType = returnType;
        type.explicitThisType = explicitThisType;
        type.isNullable = isNullable;
        return type;
    };
    Node.createOmittedType = function (range) {
        return Node.createNamedType(Node.createSimpleTypeName("", range), null, false, range);
    };
    Node.createTypeParameter = function (name, extendsType, defaultType, range) {
        var elem = new TypeParameterNode();
        elem.range = range;
        elem.name = name;
        elem.extendsType = extendsType;
        elem.defaultType = defaultType;
        return elem;
    };
    Node.createParameter = function (name, type, initializer, kind, range) {
        var elem = new ParameterNode();
        elem.range = range;
        elem.name = name;
        elem.type = type;
        elem.initializer = initializer;
        elem.parameterKind = kind;
        return elem;
    };
    // special
    Node.createDecorator = function (name, args, range) {
        var stmt = new DecoratorNode();
        stmt.range = range;
        stmt.name = name;
        stmt.arguments = args;
        stmt.decoratorKind = decoratorNameToKind(name);
        return stmt;
    };
    Node.createComment = function (text, kind, range) {
        var node = new CommentNode();
        node.range = range;
        node.commentKind = kind;
        node.text = text;
        return node;
    };
    // expressions
    Node.createIdentifierExpression = function (name, range, isQuoted) {
        if (isQuoted === void 0) { isQuoted = false; }
        var expr = new IdentifierExpression();
        expr.range = range;
        expr.text = name; // TODO: extract from range
        expr.symbol = name; // TODO: Symbol.for(name)
        expr.isQuoted = isQuoted;
        return expr;
    };
    Node.createEmptyIdentifierExpression = function (range) {
        var expr = new IdentifierExpression();
        expr.range = range;
        expr.text = "";
        return expr;
    };
    Node.createArrayLiteralExpression = function (elements, range) {
        var expr = new ArrayLiteralExpression();
        expr.range = range;
        expr.elementExpressions = elements;
        return expr;
    };
    Node.createAssertionExpression = function (assertionKind, expression, toType, range) {
        var expr = new AssertionExpression();
        expr.range = range;
        expr.assertionKind = assertionKind;
        expr.expression = expression;
        expr.toType = toType;
        return expr;
    };
    Node.createBinaryExpression = function (operator, left, right, range) {
        var expr = new BinaryExpression();
        expr.range = range;
        expr.operator = operator;
        expr.left = left;
        expr.right = right;
        return expr;
    };
    Node.createCallExpression = function (expression, typeArgs, args, range) {
        var expr = new CallExpression();
        expr.range = range;
        expr.expression = expression;
        expr.typeArguments = typeArgs;
        expr.arguments = args;
        return expr;
    };
    Node.createClassExpression = function (declaration) {
        var expr = new ClassExpression();
        expr.range = declaration.range;
        expr.declaration = declaration;
        return expr;
    };
    Node.createCommaExpression = function (expressions, range) {
        var expr = new CommaExpression();
        expr.range = range;
        expr.expressions = expressions;
        return expr;
    };
    Node.createConstructorExpression = function (range) {
        var expr = new ConstructorExpression();
        expr.range = range;
        return expr;
    };
    Node.createElementAccessExpression = function (expression, element, range) {
        var expr = new ElementAccessExpression();
        expr.range = range;
        expr.expression = expression;
        expr.elementExpression = element;
        return expr;
    };
    Node.createFalseExpression = function (range) {
        var expr = new FalseExpression();
        expr.range = range;
        return expr;
    };
    Node.createFloatLiteralExpression = function (value, range) {
        var expr = new FloatLiteralExpression();
        expr.range = range;
        expr.value = value;
        return expr;
    };
    Node.createFunctionExpression = function (declaration) {
        var expr = new FunctionExpression();
        expr.range = declaration.range;
        expr.declaration = declaration;
        return expr;
    };
    Node.createInstanceOfExpression = function (expression, isType, range) {
        var expr = new InstanceOfExpression();
        expr.range = range;
        expr.expression = expression;
        expr.isType = isType;
        return expr;
    };
    Node.createIntegerLiteralExpression = function (value, range) {
        var expr = new IntegerLiteralExpression();
        expr.range = range;
        expr.value = value;
        return expr;
    };
    Node.createNewExpression = function (expression, typeArgs, args, range) {
        var expr = new NewExpression();
        expr.range = range;
        expr.expression = expression;
        expr.typeArguments = typeArgs;
        expr.arguments = args;
        return expr;
    };
    Node.createNullExpression = function (range) {
        var expr = new NullExpression();
        expr.range = range;
        return expr;
    };
    Node.createObjectLiteralExpression = function (names, values, range) {
        var expr = new ObjectLiteralExpression();
        expr.range = range;
        expr.names = names;
        expr.values = values;
        return expr;
    };
    Node.createParenthesizedExpression = function (expression, range) {
        var expr = new ParenthesizedExpression();
        expr.range = range;
        expr.expression = expression;
        return expr;
    };
    Node.createPropertyAccessExpression = function (expression, property, range) {
        var expr = new PropertyAccessExpression();
        expr.range = range;
        expr.expression = expression;
        expr.property = property;
        return expr;
    };
    Node.createRegexpLiteralExpression = function (pattern, flags, range) {
        var expr = new RegexpLiteralExpression();
        expr.range = range;
        expr.pattern = pattern;
        expr.patternFlags = flags;
        return expr;
    };
    Node.createTernaryExpression = function (condition, ifThen, ifElse, range) {
        var expr = new TernaryExpression();
        expr.range = range;
        expr.condition = condition;
        expr.ifThen = ifThen;
        expr.ifElse = ifElse;
        return expr;
    };
    Node.createStringLiteralExpression = function (value, range) {
        var expr = new StringLiteralExpression();
        expr.range = range;
        expr.value = value;
        return expr;
    };
    Node.createSuperExpression = function (range) {
        var expr = new SuperExpression();
        expr.range = range;
        return expr;
    };
    Node.createThisExpression = function (range) {
        var expr = new ThisExpression();
        expr.range = range;
        return expr;
    };
    Node.createTrueExpression = function (range) {
        var expr = new TrueExpression();
        expr.range = range;
        return expr;
    };
    Node.createUnaryPostfixExpression = function (operator, operand, range) {
        var expr = new UnaryPostfixExpression();
        expr.range = range;
        expr.operator = operator;
        expr.operand = operand;
        return expr;
    };
    Node.createUnaryPrefixExpression = function (operator, operand, range) {
        var expr = new UnaryPrefixExpression();
        expr.range = range;
        expr.operator = operator;
        expr.operand = operand;
        return expr;
    };
    // statements
    Node.createBlockStatement = function (statements, range) {
        var stmt = new BlockStatement();
        stmt.range = range;
        stmt.statements = statements;
        return stmt;
    };
    Node.createBreakStatement = function (label, range) {
        var stmt = new BreakStatement();
        stmt.range = range;
        stmt.label = label;
        return stmt;
    };
    Node.createClassDeclaration = function (identifier, typeParameters, extendsType, // can't be a function
    implementsTypes, // can't be functions
    members, decorators, flags, range) {
        var stmt = new ClassDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = identifier;
        stmt.typeParameters = typeParameters;
        stmt.extendsType = extendsType;
        stmt.implementsTypes = implementsTypes;
        stmt.members = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createContinueStatement = function (label, range) {
        var stmt = new ContinueStatement();
        stmt.range = range;
        stmt.label = label;
        return stmt;
    };
    Node.createDoStatement = function (statement, condition, range) {
        var stmt = new DoStatement();
        stmt.range = range;
        stmt.statement = statement;
        stmt.condition = condition;
        return stmt;
    };
    Node.createEmptyStatement = function (range) {
        var stmt = new EmptyStatement();
        stmt.range = range;
        return stmt;
    };
    Node.createEnumDeclaration = function (name, members, decorators, flags, range) {
        var stmt = new EnumDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.values = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createEnumValueDeclaration = function (name, value, flags, range) {
        var stmt = new EnumValueDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.value = value;
        return stmt;
    };
    Node.createExportStatement = function (members, path, isDeclare, range) {
        var stmt = new ExportStatement();
        stmt.range = range;
        stmt.members = members;
        stmt.path = path;
        if (path) {
            var normalizedPath = util_1.normalizePath(path.value);
            if (path.value.startsWith(".")) { // relative
                stmt.normalizedPath = util_1.resolvePath(normalizedPath, range.source.normalizedPath);
            }
            else { // absolute
                if (!normalizedPath.startsWith(common_1.LIBRARY_PREFIX)) {
                    normalizedPath = common_1.LIBRARY_PREFIX + normalizedPath;
                }
                stmt.normalizedPath = normalizedPath;
            }
            stmt.internalPath = mangleInternalPath(stmt.normalizedPath);
        }
        else {
            stmt.normalizedPath = null;
            stmt.internalPath = null;
        }
        stmt.isDeclare = isDeclare;
        return stmt;
    };
    Node.createExportDefaultStatement = function (declaration, range) {
        var stmt = new ExportDefaultStatement();
        stmt.declaration = declaration;
        stmt.range = range;
        return stmt;
    };
    Node.createExportImportStatement = function (name, externalName, range) {
        var stmt = new ExportImportStatement();
        stmt.range = range;
        stmt.name = name;
        stmt.externalName = externalName;
        return stmt;
    };
    Node.createExportMember = function (name, externalName, range) {
        var elem = new ExportMember();
        elem.range = range;
        elem.localName = name;
        if (!externalName)
            externalName = name;
        elem.exportedName = externalName;
        return elem;
    };
    Node.createExpressionStatement = function (expression) {
        var stmt = new ExpressionStatement();
        stmt.range = expression.range;
        stmt.expression = expression;
        return stmt;
    };
    Node.createIfStatement = function (condition, ifTrue, ifFalse, range) {
        var stmt = new IfStatement();
        stmt.range = range;
        stmt.condition = condition;
        stmt.ifTrue = ifTrue;
        stmt.ifFalse = ifFalse;
        return stmt;
    };
    Node.createImportStatement = function (decls, path, range) {
        var stmt = new ImportStatement();
        stmt.range = range;
        stmt.declarations = decls;
        stmt.namespaceName = null;
        stmt.path = path;
        var normalizedPath = util_1.normalizePath(path.value);
        if (path.value.startsWith(".")) { // relative in project
            stmt.normalizedPath = util_1.resolvePath(normalizedPath, range.source.normalizedPath);
        }
        else { // absolute in library
            if (!normalizedPath.startsWith(common_1.LIBRARY_PREFIX)) {
                normalizedPath = common_1.LIBRARY_PREFIX + normalizedPath;
            }
            stmt.normalizedPath = normalizedPath;
        }
        stmt.internalPath = mangleInternalPath(stmt.normalizedPath);
        return stmt;
    };
    Node.createImportStatementWithWildcard = function (identifier, path, range) {
        var stmt = new ImportStatement();
        stmt.range = range;
        stmt.declarations = null;
        stmt.namespaceName = identifier;
        stmt.path = path;
        var normalizedPath = util_1.normalizePath(path.value);
        if (path.value.startsWith(".")) {
            stmt.normalizedPath = util_1.resolvePath(normalizedPath, range.source.normalizedPath);
        }
        else {
            if (!normalizedPath.startsWith(common_1.LIBRARY_PREFIX)) {
                normalizedPath = common_1.LIBRARY_PREFIX + normalizedPath;
            }
            stmt.normalizedPath = normalizedPath;
        }
        stmt.internalPath = mangleInternalPath(stmt.normalizedPath);
        return stmt;
    };
    Node.createImportDeclaration = function (foreignName, name, range) {
        var elem = new ImportDeclaration();
        elem.range = range;
        elem.foreignName = foreignName;
        if (!name)
            name = foreignName;
        elem.name = name;
        return elem;
    };
    Node.createInterfaceDeclaration = function (name, typeParameters, extendsType, // can't be a function
    members, decorators, flags, range) {
        var stmt = new InterfaceDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.extendsType = extendsType;
        stmt.members = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createFieldDeclaration = function (name, type, initializer, decorators, flags, range) {
        var stmt = new FieldDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.type = type;
        stmt.initializer = initializer;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createForStatement = function (initializer, condition, incrementor, statement, range) {
        var stmt = new ForStatement();
        stmt.range = range;
        stmt.initializer = initializer;
        stmt.condition = condition;
        stmt.incrementor = incrementor;
        stmt.statement = statement;
        return stmt;
    };
    Node.createFunctionDeclaration = function (name, typeParameters, signature, body, decorators, flags, arrowKind, range) {
        var stmt = new FunctionDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.signature = signature;
        stmt.body = body;
        stmt.decorators = decorators;
        stmt.arrowKind = arrowKind;
        return stmt;
    };
    Node.createIndexSignatureDeclaration = function (keyType, valueType, range) {
        var elem = new IndexSignatureDeclaration();
        elem.range = range;
        elem.keyType = keyType;
        elem.valueType = valueType;
        return elem;
    };
    Node.createMethodDeclaration = function (name, typeParameters, signature, body, decorators, flags, range) {
        var stmt = new MethodDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.signature = signature;
        stmt.body = body;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createNamespaceDeclaration = function (name, members, decorators, flags, range) {
        var stmt = new NamespaceDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.members = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createReturnStatement = function (value, range) {
        var stmt = new ReturnStatement();
        stmt.range = range;
        stmt.value = value;
        return stmt;
    };
    Node.createSwitchStatement = function (condition, cases, range) {
        var stmt = new SwitchStatement();
        stmt.range = range;
        stmt.condition = condition;
        stmt.cases = cases;
        return stmt;
    };
    Node.createSwitchCase = function (label, statements, range) {
        var elem = new SwitchCase();
        elem.range = range;
        elem.label = label;
        elem.statements = statements;
        return elem;
    };
    Node.createThrowStatement = function (value, range) {
        var stmt = new ThrowStatement();
        stmt.range = range;
        stmt.value = value;
        return stmt;
    };
    Node.createTryStatement = function (statements, catchVariable, catchStatements, finallyStatements, range) {
        var stmt = new TryStatement();
        stmt.range = range;
        stmt.statements = statements;
        stmt.catchVariable = catchVariable;
        stmt.catchStatements = catchStatements;
        stmt.finallyStatements = finallyStatements;
        return stmt;
    };
    Node.createTypeDeclaration = function (name, typeParameters, alias, decorators, flags, range) {
        var stmt = new TypeDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.type = alias;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createVariableStatement = function (declarations, decorators, range) {
        var stmt = new VariableStatement();
        stmt.range = range;
        stmt.declarations = declarations;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createVariableDeclaration = function (name, type, initializer, decorators, flags, range) {
        var elem = new VariableDeclaration();
        elem.range = range;
        elem.flags = flags;
        elem.name = name;
        elem.type = type;
        elem.initializer = initializer;
        elem.decorators = decorators; // inherited
        return elem;
    };
    Node.createVoidStatement = function (expression, range) {
        var stmt = new VoidStatement();
        stmt.range = range;
        stmt.expression = expression;
        return stmt;
    };
    Node.createWhileStatement = function (condition, statement, range) {
        var stmt = new WhileStatement();
        stmt.range = range;
        stmt.condition = condition;
        stmt.statement = statement;
        return stmt;
    };
    return Node;
}());
exports.Node = Node;
// types
var TypeNode = /** @class */ (function (_super) {
    __extends(TypeNode, _super);
    function TypeNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TypeNode;
}(Node));
exports.TypeNode = TypeNode;
/** Represents a type name. */
var TypeName = /** @class */ (function (_super) {
    __extends(TypeName, _super);
    function TypeName() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TYPENAME;
        return _this;
    }
    return TypeName;
}(Node));
exports.TypeName = TypeName;
/** Represents a named type. */
var NamedTypeNode = /** @class */ (function (_super) {
    __extends(NamedTypeNode, _super);
    function NamedTypeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NAMEDTYPE;
        return _this;
    }
    return NamedTypeNode;
}(TypeNode));
exports.NamedTypeNode = NamedTypeNode;
/** Represents a function type. */
var FunctionTypeNode = /** @class */ (function (_super) {
    __extends(FunctionTypeNode, _super);
    function FunctionTypeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FUNCTIONTYPE;
        return _this;
    }
    return FunctionTypeNode;
}(TypeNode));
exports.FunctionTypeNode = FunctionTypeNode;
/** Represents a type parameter. */
var TypeParameterNode = /** @class */ (function (_super) {
    __extends(TypeParameterNode, _super);
    function TypeParameterNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TYPEPARAMETER;
        return _this;
    }
    return TypeParameterNode;
}(Node));
exports.TypeParameterNode = TypeParameterNode;
/** Represents the kind of a parameter. */
var ParameterKind;
(function (ParameterKind) {
    /** No specific flags. */
    ParameterKind[ParameterKind["DEFAULT"] = 0] = "DEFAULT";
    /** Is an optional parameter. */
    ParameterKind[ParameterKind["OPTIONAL"] = 1] = "OPTIONAL";
    /** Is a rest parameter. */
    ParameterKind[ParameterKind["REST"] = 2] = "REST";
})(ParameterKind = exports.ParameterKind || (exports.ParameterKind = {}));
/** Represents a function parameter. */
var ParameterNode = /** @class */ (function (_super) {
    __extends(ParameterNode, _super);
    function ParameterNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.PARAMETER;
        /** Implicit field declaration, if applicable. */
        _this.implicitFieldDeclaration = null;
        /** Common flags indicating specific traits. */
        _this.flags = common_1.CommonFlags.NONE;
        return _this;
    }
    /** Tests if this node has the specified flag or flags. */
    ParameterNode.prototype.is = function (flag) { return (this.flags & flag) == flag; };
    /** Tests if this node has one of the specified flags. */
    ParameterNode.prototype.isAny = function (flag) { return (this.flags & flag) != 0; };
    /** Sets a specific flag or flags. */
    ParameterNode.prototype.set = function (flag) { this.flags |= flag; };
    return ParameterNode;
}(Node));
exports.ParameterNode = ParameterNode;
// special
/** Built-in decorator kinds. */
var DecoratorKind;
(function (DecoratorKind) {
    DecoratorKind[DecoratorKind["CUSTOM"] = 0] = "CUSTOM";
    DecoratorKind[DecoratorKind["GLOBAL"] = 1] = "GLOBAL";
    DecoratorKind[DecoratorKind["OPERATOR"] = 2] = "OPERATOR";
    DecoratorKind[DecoratorKind["OPERATOR_BINARY"] = 3] = "OPERATOR_BINARY";
    DecoratorKind[DecoratorKind["OPERATOR_PREFIX"] = 4] = "OPERATOR_PREFIX";
    DecoratorKind[DecoratorKind["OPERATOR_POSTFIX"] = 5] = "OPERATOR_POSTFIX";
    DecoratorKind[DecoratorKind["UNMANAGED"] = 6] = "UNMANAGED";
    DecoratorKind[DecoratorKind["SEALED"] = 7] = "SEALED";
    DecoratorKind[DecoratorKind["INLINE"] = 8] = "INLINE";
    DecoratorKind[DecoratorKind["EXTERNAL"] = 9] = "EXTERNAL";
    DecoratorKind[DecoratorKind["BUILTIN"] = 10] = "BUILTIN";
    DecoratorKind[DecoratorKind["LAZY"] = 11] = "LAZY";
    DecoratorKind[DecoratorKind["UNSAFE"] = 12] = "UNSAFE";
})(DecoratorKind = exports.DecoratorKind || (exports.DecoratorKind = {}));
/** Returns the kind of the specified decorator. Defaults to {@link DecoratorKind.CUSTOM}. */
function decoratorNameToKind(name) {
    // @global, @inline, @operator, @sealed, @unmanaged
    if (name.kind == NodeKind.IDENTIFIER) {
        var nameStr = name.text;
        assert(nameStr.length);
        switch (nameStr.charCodeAt(0)) {
            case 98 /* b */: {
                if (nameStr == "builtin")
                    return DecoratorKind.BUILTIN;
                break;
            }
            case 101 /* e */: {
                if (nameStr == "external")
                    return DecoratorKind.EXTERNAL;
                break;
            }
            case 103 /* g */: {
                if (nameStr == "global")
                    return DecoratorKind.GLOBAL;
                break;
            }
            case 105 /* i */: {
                if (nameStr == "inline")
                    return DecoratorKind.INLINE;
                break;
            }
            case 108 /* l */: {
                if (nameStr == "lazy")
                    return DecoratorKind.LAZY;
                break;
            }
            case 111 /* o */: {
                if (nameStr == "operator")
                    return DecoratorKind.OPERATOR;
                break;
            }
            case 115 /* s */: {
                if (nameStr == "sealed")
                    return DecoratorKind.SEALED;
                break;
            }
            case 117 /* u */: {
                if (nameStr == "unmanaged")
                    return DecoratorKind.UNMANAGED;
                if (nameStr == "unsafe")
                    return DecoratorKind.UNSAFE;
                break;
            }
        }
    }
    else if (name.kind == NodeKind.PROPERTYACCESS &&
        name.expression.kind == NodeKind.IDENTIFIER) {
        var nameStr = name.expression.text;
        assert(nameStr.length);
        var propStr = name.property.text;
        assert(propStr.length);
        // @operator.binary, @operator.prefix, @operator.postfix
        if (nameStr == "operator") {
            switch (propStr.charCodeAt(0)) {
                case 98 /* b */: {
                    if (propStr == "binary")
                        return DecoratorKind.OPERATOR_BINARY;
                    break;
                }
                case 112 /* p */: {
                    switch (propStr) {
                        case "prefix": return DecoratorKind.OPERATOR_PREFIX;
                        case "postfix": return DecoratorKind.OPERATOR_POSTFIX;
                    }
                    break;
                }
            }
        }
    }
    return DecoratorKind.CUSTOM;
}
exports.decoratorNameToKind = decoratorNameToKind;
/** Represents a decorator. */
var DecoratorNode = /** @class */ (function (_super) {
    __extends(DecoratorNode, _super);
    function DecoratorNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.DECORATOR;
        return _this;
    }
    return DecoratorNode;
}(Node));
exports.DecoratorNode = DecoratorNode;
/** Comment kinds. */
var CommentKind;
(function (CommentKind) {
    /** Line comment. */
    CommentKind[CommentKind["LINE"] = 0] = "LINE";
    /** Triple-slash comment. */
    CommentKind[CommentKind["TRIPLE"] = 1] = "TRIPLE";
    /** Block comment. */
    CommentKind[CommentKind["BLOCK"] = 2] = "BLOCK";
})(CommentKind = exports.CommentKind || (exports.CommentKind = {}));
/** Represents a comment. */
var CommentNode = /** @class */ (function (_super) {
    __extends(CommentNode, _super);
    function CommentNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.COMMENT;
        return _this;
    }
    return CommentNode;
}(Node));
exports.CommentNode = CommentNode;
// expressions
/** Base class of all expression nodes. */
var Expression = /** @class */ (function (_super) {
    __extends(Expression, _super);
    function Expression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Expression;
}(Node));
exports.Expression = Expression;
/** Represents an identifier expression. */
var IdentifierExpression = /** @class */ (function (_super) {
    __extends(IdentifierExpression, _super);
    function IdentifierExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IDENTIFIER;
        return _this;
    }
    return IdentifierExpression;
}(Expression));
exports.IdentifierExpression = IdentifierExpression;
/** Indicates the kind of a literal. */
var LiteralKind;
(function (LiteralKind) {
    LiteralKind[LiteralKind["FLOAT"] = 0] = "FLOAT";
    LiteralKind[LiteralKind["INTEGER"] = 1] = "INTEGER";
    LiteralKind[LiteralKind["STRING"] = 2] = "STRING";
    LiteralKind[LiteralKind["REGEXP"] = 3] = "REGEXP";
    LiteralKind[LiteralKind["ARRAY"] = 4] = "ARRAY";
    LiteralKind[LiteralKind["OBJECT"] = 5] = "OBJECT";
})(LiteralKind = exports.LiteralKind || (exports.LiteralKind = {}));
/** Base class of all literal expressions. */
var LiteralExpression = /** @class */ (function (_super) {
    __extends(LiteralExpression, _super);
    function LiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.LITERAL;
        return _this;
    }
    return LiteralExpression;
}(Expression));
exports.LiteralExpression = LiteralExpression;
/** Represents an `[]` literal expression. */
var ArrayLiteralExpression = /** @class */ (function (_super) {
    __extends(ArrayLiteralExpression, _super);
    function ArrayLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.ARRAY;
        return _this;
    }
    return ArrayLiteralExpression;
}(LiteralExpression));
exports.ArrayLiteralExpression = ArrayLiteralExpression;
/** Indicates the kind of an assertion. */
var AssertionKind;
(function (AssertionKind) {
    AssertionKind[AssertionKind["PREFIX"] = 0] = "PREFIX";
    AssertionKind[AssertionKind["AS"] = 1] = "AS";
    AssertionKind[AssertionKind["NONNULL"] = 2] = "NONNULL";
})(AssertionKind = exports.AssertionKind || (exports.AssertionKind = {}));
/** Represents an assertion expression. */
var AssertionExpression = /** @class */ (function (_super) {
    __extends(AssertionExpression, _super);
    function AssertionExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ASSERTION;
        return _this;
    }
    return AssertionExpression;
}(Expression));
exports.AssertionExpression = AssertionExpression;
/** Represents a binary expression. */
var BinaryExpression = /** @class */ (function (_super) {
    __extends(BinaryExpression, _super);
    function BinaryExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.BINARY;
        return _this;
    }
    return BinaryExpression;
}(Expression));
exports.BinaryExpression = BinaryExpression;
/** Represents a call expression. */
var CallExpression = /** @class */ (function (_super) {
    __extends(CallExpression, _super);
    function CallExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CALL;
        return _this;
    }
    Object.defineProperty(CallExpression.prototype, "typeArgumentsRange", {
        /** Gets the type arguments range for reporting. */
        get: function () {
            var typeArguments = this.typeArguments;
            var numTypeArguments;
            if (typeArguments && (numTypeArguments = typeArguments.length)) {
                return tokenizer_1.Range.join(typeArguments[0].range, typeArguments[numTypeArguments - 1].range);
            }
            return this.expression.range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CallExpression.prototype, "argumentsRange", {
        /** Gets the arguments range for reporting. */
        get: function () {
            var args = this.arguments;
            var numArguments = args.length;
            if (numArguments) {
                return tokenizer_1.Range.join(args[0].range, args[numArguments - 1].range);
            }
            return this.expression.range;
        },
        enumerable: true,
        configurable: true
    });
    return CallExpression;
}(Expression));
exports.CallExpression = CallExpression;
/** Represents a class expression using the 'class' keyword. */
var ClassExpression = /** @class */ (function (_super) {
    __extends(ClassExpression, _super);
    function ClassExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CLASS;
        return _this;
    }
    return ClassExpression;
}(Expression));
exports.ClassExpression = ClassExpression;
/** Represents a comma expression composed of multiple expressions. */
var CommaExpression = /** @class */ (function (_super) {
    __extends(CommaExpression, _super);
    function CommaExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.COMMA;
        return _this;
    }
    return CommaExpression;
}(Expression));
exports.CommaExpression = CommaExpression;
/** Represents a `constructor` expression. */
var ConstructorExpression = /** @class */ (function (_super) {
    __extends(ConstructorExpression, _super);
    function ConstructorExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CONSTRUCTOR;
        _this.text = "constructor";
        _this.symbol = common_1.CommonSymbols.constructor;
        return _this;
    }
    return ConstructorExpression;
}(IdentifierExpression));
exports.ConstructorExpression = ConstructorExpression;
/** Represents an element access expression, e.g., array access. */
var ElementAccessExpression = /** @class */ (function (_super) {
    __extends(ElementAccessExpression, _super);
    function ElementAccessExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ELEMENTACCESS;
        return _this;
    }
    return ElementAccessExpression;
}(Expression));
exports.ElementAccessExpression = ElementAccessExpression;
/** Represents a float literal expression. */
var FloatLiteralExpression = /** @class */ (function (_super) {
    __extends(FloatLiteralExpression, _super);
    function FloatLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.FLOAT;
        return _this;
    }
    return FloatLiteralExpression;
}(LiteralExpression));
exports.FloatLiteralExpression = FloatLiteralExpression;
/** Represents a function expression using the 'function' keyword. */
var FunctionExpression = /** @class */ (function (_super) {
    __extends(FunctionExpression, _super);
    function FunctionExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FUNCTION;
        return _this;
    }
    return FunctionExpression;
}(Expression));
exports.FunctionExpression = FunctionExpression;
/** Represents an `instanceof` expression. */
var InstanceOfExpression = /** @class */ (function (_super) {
    __extends(InstanceOfExpression, _super);
    function InstanceOfExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.INSTANCEOF;
        return _this;
    }
    return InstanceOfExpression;
}(Expression));
exports.InstanceOfExpression = InstanceOfExpression;
/** Represents an integer literal expression. */
var IntegerLiteralExpression = /** @class */ (function (_super) {
    __extends(IntegerLiteralExpression, _super);
    function IntegerLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.INTEGER;
        return _this;
    }
    return IntegerLiteralExpression;
}(LiteralExpression));
exports.IntegerLiteralExpression = IntegerLiteralExpression;
/** Represents a `new` expression. Like a call but with its own kind. */
var NewExpression = /** @class */ (function (_super) {
    __extends(NewExpression, _super);
    function NewExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NEW;
        return _this;
    }
    return NewExpression;
}(CallExpression));
exports.NewExpression = NewExpression;
/** Represents a `null` expression. */
var NullExpression = /** @class */ (function (_super) {
    __extends(NullExpression, _super);
    function NullExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NULL;
        _this.text = "null";
        _this.symbol = common_1.CommonSymbols.null_;
        return _this;
    }
    return NullExpression;
}(IdentifierExpression));
exports.NullExpression = NullExpression;
/** Represents an object literal expression. */
var ObjectLiteralExpression = /** @class */ (function (_super) {
    __extends(ObjectLiteralExpression, _super);
    function ObjectLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.OBJECT;
        return _this;
    }
    return ObjectLiteralExpression;
}(LiteralExpression));
exports.ObjectLiteralExpression = ObjectLiteralExpression;
/** Represents a parenthesized expression. */
var ParenthesizedExpression = /** @class */ (function (_super) {
    __extends(ParenthesizedExpression, _super);
    function ParenthesizedExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.PARENTHESIZED;
        return _this;
    }
    return ParenthesizedExpression;
}(Expression));
exports.ParenthesizedExpression = ParenthesizedExpression;
/** Represents a property access expression. */
var PropertyAccessExpression = /** @class */ (function (_super) {
    __extends(PropertyAccessExpression, _super);
    function PropertyAccessExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.PROPERTYACCESS;
        return _this;
    }
    return PropertyAccessExpression;
}(Expression));
exports.PropertyAccessExpression = PropertyAccessExpression;
/** Represents a regular expression literal expression. */
var RegexpLiteralExpression = /** @class */ (function (_super) {
    __extends(RegexpLiteralExpression, _super);
    function RegexpLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.REGEXP;
        return _this;
    }
    return RegexpLiteralExpression;
}(LiteralExpression));
exports.RegexpLiteralExpression = RegexpLiteralExpression;
/** Represents a ternary expression, i.e., short if notation. */
var TernaryExpression = /** @class */ (function (_super) {
    __extends(TernaryExpression, _super);
    function TernaryExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TERNARY;
        return _this;
    }
    return TernaryExpression;
}(Expression));
exports.TernaryExpression = TernaryExpression;
/** Represents a string literal expression. */
var StringLiteralExpression = /** @class */ (function (_super) {
    __extends(StringLiteralExpression, _super);
    function StringLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.STRING;
        return _this;
    }
    return StringLiteralExpression;
}(LiteralExpression));
exports.StringLiteralExpression = StringLiteralExpression;
/** Represents a `super` expression. */
var SuperExpression = /** @class */ (function (_super) {
    __extends(SuperExpression, _super);
    function SuperExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.SUPER;
        _this.text = "super";
        _this.symbol = common_1.CommonSymbols.super_;
        return _this;
    }
    return SuperExpression;
}(IdentifierExpression));
exports.SuperExpression = SuperExpression;
/** Represents a `this` expression. */
var ThisExpression = /** @class */ (function (_super) {
    __extends(ThisExpression, _super);
    function ThisExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.THIS;
        _this.text = "this";
        _this.symbol = common_1.CommonSymbols.this_;
        return _this;
    }
    return ThisExpression;
}(IdentifierExpression));
exports.ThisExpression = ThisExpression;
/** Represents a `true` expression. */
var TrueExpression = /** @class */ (function (_super) {
    __extends(TrueExpression, _super);
    function TrueExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TRUE;
        _this.text = "true";
        _this.symbol = common_1.CommonSymbols.true_;
        return _this;
    }
    return TrueExpression;
}(IdentifierExpression));
exports.TrueExpression = TrueExpression;
/** Represents a `false` expression. */
var FalseExpression = /** @class */ (function (_super) {
    __extends(FalseExpression, _super);
    function FalseExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FALSE;
        _this.text = "false";
        _this.symbol = common_1.CommonSymbols.false_;
        return _this;
    }
    return FalseExpression;
}(IdentifierExpression));
exports.FalseExpression = FalseExpression;
/** Base class of all unary expressions. */
var UnaryExpression = /** @class */ (function (_super) {
    __extends(UnaryExpression, _super);
    function UnaryExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnaryExpression;
}(Expression));
exports.UnaryExpression = UnaryExpression;
/** Represents a unary postfix expression, e.g. a postfix increment. */
var UnaryPostfixExpression = /** @class */ (function (_super) {
    __extends(UnaryPostfixExpression, _super);
    function UnaryPostfixExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.UNARYPOSTFIX;
        return _this;
    }
    return UnaryPostfixExpression;
}(UnaryExpression));
exports.UnaryPostfixExpression = UnaryPostfixExpression;
/** Represents a unary prefix expression, e.g. a negation. */
var UnaryPrefixExpression = /** @class */ (function (_super) {
    __extends(UnaryPrefixExpression, _super);
    function UnaryPrefixExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.UNARYPREFIX;
        return _this;
    }
    return UnaryPrefixExpression;
}(UnaryExpression));
exports.UnaryPrefixExpression = UnaryPrefixExpression;
// statements
/** Base class of all statement nodes. */
var Statement = /** @class */ (function (_super) {
    __extends(Statement, _super);
    function Statement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Statement;
}(Node));
exports.Statement = Statement;
/** Indicates the specific kind of a source. */
var SourceKind;
(function (SourceKind) {
    /** User-provided file. */
    SourceKind[SourceKind["USER"] = 0] = "USER";
    /** User-provided entry file. */
    SourceKind[SourceKind["USER_ENTRY"] = 1] = "USER_ENTRY";
    /** Library-provided file. */
    SourceKind[SourceKind["LIBRARY"] = 2] = "LIBRARY";
    /** Library-provided entry file. */
    SourceKind[SourceKind["LIBRARY_ENTRY"] = 3] = "LIBRARY_ENTRY";
})(SourceKind = exports.SourceKind || (exports.SourceKind = {}));
/** A top-level source node. */
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    /** Constructs a new source node. */
    function Source(normalizedPath, text, kind) {
        var _this = _super.call(this) || this;
        _this.kind = NodeKind.SOURCE;
        _this.parent = null;
        /** Tokenizer reference. */
        _this.tokenizer = null;
        /** Source map index. */
        _this.debugInfoIndex = -1;
        /** Re-exported sources. */
        _this.exportPaths = null;
        _this.sourceKind = kind;
        _this.normalizedPath = normalizedPath;
        var internalPath = mangleInternalPath(_this.normalizedPath);
        _this.internalPath = internalPath;
        var pos = internalPath.lastIndexOf(common_1.PATH_DELIMITER);
        _this.simplePath = pos >= 0 ? internalPath.substring(pos + 1) : internalPath;
        _this.statements = new Array();
        _this.range = new tokenizer_1.Range(_this, 0, text.length);
        _this.text = text;
        return _this;
    }
    Object.defineProperty(Source.prototype, "isLibrary", {
        get: function () {
            var kind = this.sourceKind;
            return kind == SourceKind.LIBRARY || kind == SourceKind.LIBRARY_ENTRY;
        },
        enumerable: true,
        configurable: true
    });
    return Source;
}(Node));
exports.Source = Source;
/** Base class of all declaration statements. */
var DeclarationStatement = /** @class */ (function (_super) {
    __extends(DeclarationStatement, _super);
    function DeclarationStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Array of decorators. */
        _this.decorators = null;
        /** Common flags indicating specific traits. */
        _this.flags = common_1.CommonFlags.NONE;
        return _this;
    }
    /** Tests if this node has the specified flag or flags. */
    DeclarationStatement.prototype.is = function (flag) { return (this.flags & flag) == flag; };
    /** Tests if this node has one of the specified flags. */
    DeclarationStatement.prototype.isAny = function (flag) { return (this.flags & flag) != 0; };
    /** Sets a specific flag or flags. */
    DeclarationStatement.prototype.set = function (flag) { this.flags |= flag; };
    return DeclarationStatement;
}(Statement));
exports.DeclarationStatement = DeclarationStatement;
/** Represents an index signature declaration. */
var IndexSignatureDeclaration = /** @class */ (function (_super) {
    __extends(IndexSignatureDeclaration, _super);
    function IndexSignatureDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.INDEXSIGNATUREDECLARATION;
        return _this;
    }
    return IndexSignatureDeclaration;
}(DeclarationStatement));
exports.IndexSignatureDeclaration = IndexSignatureDeclaration;
/** Base class of all variable-like declaration statements. */
var VariableLikeDeclarationStatement = /** @class */ (function (_super) {
    __extends(VariableLikeDeclarationStatement, _super);
    function VariableLikeDeclarationStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VariableLikeDeclarationStatement;
}(DeclarationStatement));
exports.VariableLikeDeclarationStatement = VariableLikeDeclarationStatement;
/** Represents a block statement. */
var BlockStatement = /** @class */ (function (_super) {
    __extends(BlockStatement, _super);
    function BlockStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.BLOCK;
        return _this;
    }
    return BlockStatement;
}(Statement));
exports.BlockStatement = BlockStatement;
/** Represents a `break` statement. */
var BreakStatement = /** @class */ (function (_super) {
    __extends(BreakStatement, _super);
    function BreakStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.BREAK;
        return _this;
    }
    return BreakStatement;
}(Statement));
exports.BreakStatement = BreakStatement;
/** Represents a `class` declaration. */
var ClassDeclaration = /** @class */ (function (_super) {
    __extends(ClassDeclaration, _super);
    function ClassDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CLASSDECLARATION;
        return _this;
    }
    Object.defineProperty(ClassDeclaration.prototype, "isGeneric", {
        get: function () {
            var typeParameters = this.typeParameters;
            return typeParameters != null && typeParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    return ClassDeclaration;
}(DeclarationStatement));
exports.ClassDeclaration = ClassDeclaration;
/** Represents a `continue` statement. */
var ContinueStatement = /** @class */ (function (_super) {
    __extends(ContinueStatement, _super);
    function ContinueStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CONTINUE;
        return _this;
    }
    return ContinueStatement;
}(Statement));
exports.ContinueStatement = ContinueStatement;
/** Represents a `do` statement. */
var DoStatement = /** @class */ (function (_super) {
    __extends(DoStatement, _super);
    function DoStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.DO;
        return _this;
    }
    return DoStatement;
}(Statement));
exports.DoStatement = DoStatement;
/** Represents an empty statement, i.e., a semicolon terminating nothing. */
var EmptyStatement = /** @class */ (function (_super) {
    __extends(EmptyStatement, _super);
    function EmptyStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EMPTY;
        return _this;
    }
    return EmptyStatement;
}(Statement));
exports.EmptyStatement = EmptyStatement;
/** Represents an `enum` declaration. */
var EnumDeclaration = /** @class */ (function (_super) {
    __extends(EnumDeclaration, _super);
    function EnumDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ENUMDECLARATION;
        return _this;
    }
    return EnumDeclaration;
}(DeclarationStatement));
exports.EnumDeclaration = EnumDeclaration;
/** Represents a value of an `enum` declaration. */
var EnumValueDeclaration = /** @class */ (function (_super) {
    __extends(EnumValueDeclaration, _super);
    function EnumValueDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ENUMVALUEDECLARATION;
        return _this;
    }
    return EnumValueDeclaration;
}(VariableLikeDeclarationStatement));
exports.EnumValueDeclaration = EnumValueDeclaration;
/** Represents an `export import` statement of an interface. */
var ExportImportStatement = /** @class */ (function (_super) {
    __extends(ExportImportStatement, _super);
    function ExportImportStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORTIMPORT;
        return _this;
    }
    return ExportImportStatement;
}(Node));
exports.ExportImportStatement = ExportImportStatement;
/** Represents a member of an `export` statement. */
var ExportMember = /** @class */ (function (_super) {
    __extends(ExportMember, _super);
    function ExportMember() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORTMEMBER;
        return _this;
    }
    return ExportMember;
}(Node));
exports.ExportMember = ExportMember;
/** Represents an `export` statement. */
var ExportStatement = /** @class */ (function (_super) {
    __extends(ExportStatement, _super);
    function ExportStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORT;
        return _this;
    }
    return ExportStatement;
}(Statement));
exports.ExportStatement = ExportStatement;
/** Represents an `export default` statement. */
var ExportDefaultStatement = /** @class */ (function (_super) {
    __extends(ExportDefaultStatement, _super);
    function ExportDefaultStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORTDEFAULT;
        return _this;
    }
    return ExportDefaultStatement;
}(Statement));
exports.ExportDefaultStatement = ExportDefaultStatement;
/** Represents an expression that is used as a statement. */
var ExpressionStatement = /** @class */ (function (_super) {
    __extends(ExpressionStatement, _super);
    function ExpressionStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPRESSION;
        return _this;
    }
    return ExpressionStatement;
}(Statement));
exports.ExpressionStatement = ExpressionStatement;
/** Represents a field declaration within a `class`. */
var FieldDeclaration = /** @class */ (function (_super) {
    __extends(FieldDeclaration, _super);
    function FieldDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FIELDDECLARATION;
        /** Parameter index if declared as a constructor parameter, otherwise `-1`. */
        _this.parameterIndex = -1;
        return _this;
    }
    return FieldDeclaration;
}(VariableLikeDeclarationStatement));
exports.FieldDeclaration = FieldDeclaration;
/** Represents a `for` statement. */
var ForStatement = /** @class */ (function (_super) {
    __extends(ForStatement, _super);
    function ForStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FOR;
        return _this;
    }
    return ForStatement;
}(Statement));
exports.ForStatement = ForStatement;
/** Indicates the kind of an array function. */
var ArrowKind;
(function (ArrowKind) {
    /** Not an arrow function. */
    ArrowKind[ArrowKind["NONE"] = 0] = "NONE";
    /** Parenthesized parameter list. */
    ArrowKind[ArrowKind["ARROW_PARENTHESIZED"] = 1] = "ARROW_PARENTHESIZED";
    /** Single parameter without parenthesis. */
    ArrowKind[ArrowKind["ARROW_SINGLE"] = 2] = "ARROW_SINGLE";
})(ArrowKind = exports.ArrowKind || (exports.ArrowKind = {}));
/** Represents a `function` declaration. */
var FunctionDeclaration = /** @class */ (function (_super) {
    __extends(FunctionDeclaration, _super);
    function FunctionDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FUNCTIONDECLARATION;
        return _this;
    }
    Object.defineProperty(FunctionDeclaration.prototype, "isGeneric", {
        get: function () {
            var typeParameters = this.typeParameters;
            return typeParameters != null && typeParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /** Clones this function declaration. */
    FunctionDeclaration.prototype.clone = function () {
        return Node.createFunctionDeclaration(this.name, this.typeParameters, this.signature, this.body, this.decorators, this.flags, this.arrowKind, this.range);
    };
    return FunctionDeclaration;
}(DeclarationStatement));
exports.FunctionDeclaration = FunctionDeclaration;
/** Represents an `if` statement. */
var IfStatement = /** @class */ (function (_super) {
    __extends(IfStatement, _super);
    function IfStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IF;
        return _this;
    }
    return IfStatement;
}(Statement));
exports.IfStatement = IfStatement;
/** Represents an `import` declaration part of an {@link ImportStatement}. */
var ImportDeclaration = /** @class */ (function (_super) {
    __extends(ImportDeclaration, _super);
    function ImportDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IMPORTDECLARATION;
        return _this;
    }
    return ImportDeclaration;
}(DeclarationStatement));
exports.ImportDeclaration = ImportDeclaration;
/** Represents an `import` statement. */
var ImportStatement = /** @class */ (function (_super) {
    __extends(ImportStatement, _super);
    function ImportStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IMPORT;
        return _this;
    }
    return ImportStatement;
}(Statement));
exports.ImportStatement = ImportStatement;
/** Represents an `interfarce` declaration. */
var InterfaceDeclaration = /** @class */ (function (_super) {
    __extends(InterfaceDeclaration, _super);
    function InterfaceDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.INTERFACEDECLARATION;
        return _this;
    }
    return InterfaceDeclaration;
}(ClassDeclaration));
exports.InterfaceDeclaration = InterfaceDeclaration;
/** Represents a method declaration within a `class`. */
var MethodDeclaration = /** @class */ (function (_super) {
    __extends(MethodDeclaration, _super);
    function MethodDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.METHODDECLARATION;
        return _this;
    }
    return MethodDeclaration;
}(FunctionDeclaration));
exports.MethodDeclaration = MethodDeclaration;
/** Represents a `namespace` declaration. */
var NamespaceDeclaration = /** @class */ (function (_super) {
    __extends(NamespaceDeclaration, _super);
    function NamespaceDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NAMESPACEDECLARATION;
        return _this;
    }
    return NamespaceDeclaration;
}(DeclarationStatement));
exports.NamespaceDeclaration = NamespaceDeclaration;
/** Represents a `return` statement. */
var ReturnStatement = /** @class */ (function (_super) {
    __extends(ReturnStatement, _super);
    function ReturnStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.RETURN;
        return _this;
    }
    return ReturnStatement;
}(Statement));
exports.ReturnStatement = ReturnStatement;
/** Represents a single `case` within a `switch` statement. */
var SwitchCase = /** @class */ (function (_super) {
    __extends(SwitchCase, _super);
    function SwitchCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.SWITCHCASE;
        return _this;
    }
    return SwitchCase;
}(Node));
exports.SwitchCase = SwitchCase;
/** Represents a `switch` statement. */
var SwitchStatement = /** @class */ (function (_super) {
    __extends(SwitchStatement, _super);
    function SwitchStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.SWITCH;
        return _this;
    }
    return SwitchStatement;
}(Statement));
exports.SwitchStatement = SwitchStatement;
/** Represents a `throw` statement. */
var ThrowStatement = /** @class */ (function (_super) {
    __extends(ThrowStatement, _super);
    function ThrowStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.THROW;
        return _this;
    }
    return ThrowStatement;
}(Statement));
exports.ThrowStatement = ThrowStatement;
/** Represents a `try` statement. */
var TryStatement = /** @class */ (function (_super) {
    __extends(TryStatement, _super);
    function TryStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TRY;
        return _this;
    }
    return TryStatement;
}(Statement));
exports.TryStatement = TryStatement;
/** Represents a `type` declaration. */
var TypeDeclaration = /** @class */ (function (_super) {
    __extends(TypeDeclaration, _super);
    function TypeDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TYPEDECLARATION;
        return _this;
    }
    return TypeDeclaration;
}(DeclarationStatement));
exports.TypeDeclaration = TypeDeclaration;
/** Represents a variable declaration part of a {@link VariableStatement}. */
var VariableDeclaration = /** @class */ (function (_super) {
    __extends(VariableDeclaration, _super);
    function VariableDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.VARIABLEDECLARATION;
        return _this;
    }
    return VariableDeclaration;
}(VariableLikeDeclarationStatement));
exports.VariableDeclaration = VariableDeclaration;
/** Represents a variable statement wrapping {@link VariableDeclaration}s. */
var VariableStatement = /** @class */ (function (_super) {
    __extends(VariableStatement, _super);
    function VariableStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.VARIABLE;
        return _this;
    }
    return VariableStatement;
}(Statement));
exports.VariableStatement = VariableStatement;
/** Represents a void statement dropping an expression's value. */
var VoidStatement = /** @class */ (function (_super) {
    __extends(VoidStatement, _super);
    function VoidStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.VOID;
        return _this;
    }
    return VoidStatement;
}(Statement));
exports.VoidStatement = VoidStatement;
/** Represents a `while` statement. */
var WhileStatement = /** @class */ (function (_super) {
    __extends(WhileStatement, _super);
    function WhileStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.WHILE;
        return _this;
    }
    return WhileStatement;
}(Statement));
exports.WhileStatement = WhileStatement;
/** Finds the first decorator matching the specified kind. */
function findDecorator(kind, decorators) {
    if (decorators) {
        for (var i = 0, k = decorators.length; i < k; ++i) {
            var decorator = decorators[i];
            if (decorator.decoratorKind == kind)
                return decorator;
        }
    }
    return null;
}
exports.findDecorator = findDecorator;
/** Mangles an external to an internal path. */
function mangleInternalPath(path) {
    if (path.endsWith(".ts"))
        path = path.substring(0, path.length - 3);
    return path;
}
exports.mangleInternalPath = mangleInternalPath;
/** Tests if the specified type node represents an omitted type. */
function isTypeOmitted(type) {
    if (type.kind == NodeKind.NAMEDTYPE) {
        var name = type.name;
        return !(name.next || name.identifier.text.length);
    }
    return false;
}
exports.isTypeOmitted = isTypeOmitted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHLENBQUEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsbUNBS2tCO0FBRWxCLHlDQUlxQjtBQVFaLGdCQVhQLGlCQUFLLENBV087QUFBRSxnQkFUZCxpQkFBSyxDQVNjO0FBTnJCLCtCQUlnQjtBQUloQixvQ0FBb0M7QUFDcEMsSUFBWSxRQTJFWDtBQTNFRCxXQUFZLFFBQVE7SUFFbEIsMkNBQU0sQ0FBQTtJQUVOLFFBQVE7SUFDUixpREFBUyxDQUFBO0lBQ1QsdURBQVksQ0FBQTtJQUNaLCtDQUFRLENBQUE7SUFDUix5REFBYSxDQUFBO0lBQ2IsaURBQVMsQ0FBQTtJQUVULGNBQWM7SUFDZCxtREFBVSxDQUFBO0lBQ1YsaURBQVMsQ0FBQTtJQUNULDJDQUFNLENBQUE7SUFDTix1Q0FBSSxDQUFBO0lBQ0osMENBQUssQ0FBQTtJQUNMLDBDQUFLLENBQUE7SUFDTCwwREFBYSxDQUFBO0lBQ2IsMENBQUssQ0FBQTtJQUNMLGdEQUFRLENBQUE7SUFDUixvREFBVSxDQUFBO0lBQ1YsOENBQU8sQ0FBQTtJQUNQLHNDQUFHLENBQUE7SUFDSCx3Q0FBSSxDQUFBO0lBQ0osMERBQWEsQ0FBQTtJQUNiLDREQUFjLENBQUE7SUFDZCw4Q0FBTyxDQUFBO0lBQ1AsMENBQUssQ0FBQTtJQUNMLHdDQUFJLENBQUE7SUFDSix3Q0FBSSxDQUFBO0lBQ0osc0RBQVcsQ0FBQTtJQUNYLHdEQUFZLENBQUE7SUFDWixzREFBVyxDQUFBO0lBRVgsYUFBYTtJQUNiLDBDQUFLLENBQUE7SUFDTCwwQ0FBSyxDQUFBO0lBQ0wsZ0RBQVEsQ0FBQTtJQUNSLG9DQUFFLENBQUE7SUFDRiwwQ0FBSyxDQUFBO0lBQ0wsNENBQU0sQ0FBQTtJQUNOLDBEQUFhLENBQUE7SUFDYix3REFBWSxDQUFBO0lBQ1osb0RBQVUsQ0FBQTtJQUNWLHNDQUFH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R0FPNUM7QUFQWSx3Q0FBYztBQVMzQiw2REFBNkQ7QUFDN0QsU0FBZ0IsYUFBYSxDQUFDLElBQW1CLEVBQUUsVUFBa0M7SUFDbkYsSUFBSSxVQUFVLEVBQUU7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2pELElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLFNBQVMsQ0FBQyxhQUFhLElBQUksSUFBSTtnQkFBRSxPQUFPLFNBQVMsQ0FBQztTQUN2RDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBUkQsc0NBUUM7QUFFRCwrQ0FBK0M7QUFDL0MsU0FBZ0Isa0JBQWtCLENBQUMsSUFBWTtJQUM3QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEUsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBSEQsZ0RBR0M7QUFFRCxtRUFBbUU7QUFDbkUsU0FBZ0IsYUFBYSxDQUFDLElBQWM7SUFDMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDbkMsSUFBSSxJQUFJLEdBQW1CLElBQUssQ0FBQyxJQUFJLENBQUM7UUFDdEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwRDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQU5ELHNDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBYnN0cmFjdCBzeW50YXggdHJlZSByZXByZXNlbnRpbmcgYSBzb3VyY2UgZmlsZSBvbmNlIHBhcnNlZC5cbiAqIEBtb2R1bGUgYXN0XG4gKi8vKioqL1xuXG5pbXBvcnQge1xuICBDb21tb25GbGFncyxcbiAgQ29tbW9uU3ltYm9scyxcbiAgUEFUSF9ERUxJTUlURVIsXG4gIExJQlJBUllfUFJFRklYXG59IGZyb20gXCIuL2NvbW1vblwiO1xuXG5pbXBvcnQge1xuICBUb2tlbixcbiAgVG9rZW5pemVyLFxuICBSYW5nZVxufSBmcm9tIFwiLi90b2tlbml6ZXJcIjtcblxuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aCxcbiAgcmVzb2x2ZVBhdGgsXG4gIENoYXJDb2RlXG59IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IHsgVG9rZW4sIFJhbmdlIH07XG5cbi8qKiBJbmRpY2F0ZXMgdGhlIGtpbmQgb2YgYSBub2RlLiAqL1xuZXhwb3J0IGVudW0gTm9kZUtpbmQge1xuXG4gIFNPVVJDRSxcblxuICAvLyB0eXBlc1xuICBOQU1FRFRZUEUsXG4gIEZVTkNUSU9OVFlQRSxcbiAgVFlQRU5BTUUsXG4gIFRZUEVQQVJBTUVURVIsXG4gIFBBUkFNRVRFUixcblxuICAvLyBleHByZXNzaW9uc1xuICBJREVOVElGSUVSLFxuICBBU1NFUlRJT04sXG4gIEJJTkFSWSxcbiAgQ0FMTCxcbiAgQ0xBU1MsXG4gIENPTU1BLFxuICBFTEVNRU5UQUNDRVNTLFxuICBGQUxTRSxcbiAgRlVOQ1RJT04sXG4gIElOU1RBTkNFT0YsXG4gIExJVEVSQUwsXG4gIE5FVyxcbiAgTlVMTCxcbiAgUEFSRU5USEVTSVpFRCxcbiAgUFJPUEVSVFlBQ0NFU1MsXG4gIFRFUk5BUlksXG4gIFNVUEVSLFxuICBUSElTLFxuICBUUlVFLFxuICBDT05TVFJVQ1RPUixcbiAgVU5BUllQT1NURklYLFxuICBVTkFSWVBSRUZJWCxcblxuICAvLyBzdGF0ZW1lbnRzXG4gIEJMT0NLLFxuICBCUkVBSyxcbiAgQ09OVElOVUUsXG4gIERPLFxuICBFTVBUWSxcbiAgRVhQT1JULFxuICBFWFBPUlRERUZBVUxULFxuICBFWFBPUlRJTVBPUlQsXG4gIEVYUFJFU1NJT04sXG4gIEZPUixcbiAgSUYsXG4gIElNUE9SVCxcbiAgUkVUVVJOLFxuICBTV0lUQ0gsXG4gIFRIUk9XLFxuICBUUlksXG4gIFZBUklBQkxFLFxuICBWT0lELFxuICBXSElMRSxcblxuICAvLyBkZWNsYXJhdGlvbiBzdGF0ZW1lbnRzXG4gIENMQVNTREVDTEFSQVRJT04sXG4gIEVOVU1ERUNMQVJBVElPTixcbiAgRU5VTVZBTFVFREVDTEFSQVRJT04sXG4gIEZJRUxEREVDTEFSQVRJT04sXG4gIEZVTkNUSU9OREVDTEFSQVRJT04sXG4gIElNUE9SVERFQ0xBUkFUSU9OLFxuICBJTkRFWFNJR05BVFVSRURFQ0xBUkFUSU9OLFxuICBJTlRFUkZBQ0VERUNMQVJBVElPTixcbiAgTUVUSE9EREVDTEFSQVRJT04sXG4gIE5BTUVTUEFDRURFQ0xBUkFUSU9OLFxuICBUWVBFREVDTEFSQVRJT04sXG4gIFZBUklBQkxFREVDTEFSQVRJT04sXG5cbiAgLy8gc3BlY2lhbFxuICBERUNPUkFUT1IsXG4gIEVYUE9SVE1FTUJFUixcbiAgU1dJVENIQ0FTRSxcbiAgQ09NTUVOVFxufVxuXG4vKiogQ2hlY2tzIGlmIGEgbm9kZSByZXByZXNlbnRzIGEgY29uc3RhbnQgdmFsdWUuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZUlzQ29uc3RhbnRWYWx1ZShraW5kOiBOb2RlS2luZCk6IGJvb2wge1xuICBzd2l0Y2ggKGtpbmQpIHtcbiAgICBjYXNlIE5vZGVLaW5kLkxJVEVSQUw6XG4gICAgY2FzZSBOb2RlS2luZC5OVUxMOlxuICAgIGNhc2UgTm9kZUtpbmQuVFJVRTpcbiAgICBjYXNlIE5vZGVLaW5kLkZBTFNFOiByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBDaGVja3MgaWYgYSBub2RlIG1pZ2h0IGJlIGNhbGxhYmxlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vZGVJc0NhbGxhYmxlKGtpbmQ6IE5vZGVLaW5kKTogYm9vbCB7XG4gIHN3aXRjaCAoa2luZCkge1xuICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjpcbiAgICBjYXNlIE5vZGVLaW5kLkFTU0VSVElPTjogLy8gaWYga2luZD1OT05OVUxMXG4gICAgY2FzZSBOb2RlS2luZC5DQUxMOlxuICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzpcbiAgICBjYXNlIE5vZGVLaW5kLlBBUkVOVEhFU0laRUQ6XG4gICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzpcbiAgICBjYXNlIE5vZGVLaW5kLlNVUEVSOiByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBDaGVja3MgaWYgYSBub2RlIG1pZ2h0IGJlIGNhbGxhYmxlIHdpdGggZ2VuZXJpYyBhcmd1bWVudHMuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZUlzR2VuZXJpY0NhbGxhYmxlKGtpbmQ6IE5vZGVLaW5kKTogYm9vbCB7XG4gIHN3aXRjaCAoa2luZCkge1xuICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjpcbiAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBCYXNlIGNsYXNzIG9mIGFsbCBub2Rlcy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOb2RlIHtcblxuICAvKiogTm9kZSBraW5kIGluZGljYXRvci4gKi9cbiAga2luZDogTm9kZUtpbmQ7XG4gIC8qKiBTb3VyY2UgcmFuZ2UuICovXG4gIHJhbmdlOiBSYW5nZTtcblxuICAvLyB0eXBlc1xuXG4gIHN0YXRpYyBjcmVhdGVUeXBlTmFtZShcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVHlwZU5hbWUge1xuICAgIHZhciB0eXBlTmFtZSA9IG5ldyBUeXBlTmFtZSgpO1xuICAgIHR5cGVOYW1lLnJhbmdlID0gcmFuZ2U7XG4gICAgdHlwZU5hbWUuaWRlbnRpZmllciA9IG5hbWU7XG4gICAgdHlwZU5hbWUubmV4dCA9IG51bGw7XG4gICAgcmV0dXJuIHR5cGVOYW1lO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVNpbXBsZVR5cGVOYW1lKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVHlwZU5hbWUge1xuICAgIHJldHVybiBOb2RlLmNyZWF0ZVR5cGVOYW1lKE5vZGUuY3JlYXRlSWRlbnRpZmllckV4cHJlc3Npb24obmFtZSwgcmFuZ2UpLCByYW5nZSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTmFtZWRUeXBlKFxuICAgIG5hbWU6IFR5cGVOYW1lLFxuICAgIHR5cGVBcmd1bWVudHM6IFR5cGVOb2RlW10gfCBudWxsLFxuICAgIGlzTnVsbGFibGU6IGJvb2wsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE5hbWVkVHlwZU5vZGUge1xuICAgIHZhciB0eXBlID0gbmV3IE5hbWVkVHlwZU5vZGUoKTtcbiAgICB0eXBlLnJhbmdlID0gcmFuZ2U7XG4gICAgdHlwZS5uYW1lID0gbmFtZTtcbiAgICB0eXBlLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzO1xuICAgIHR5cGUuaXNOdWxsYWJsZSA9IGlzTnVsbGFibGU7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRnVuY3Rpb25UeXBlKFxuICAgIHBhcmFtZXRlcnM6IFBhcmFtZXRlck5vZGVbXSxcbiAgICByZXR1cm5UeXBlOiBUeXBlTm9kZSxcbiAgICBleHBsaWNpdFRoaXNUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbCxcbiAgICBpc051bGxhYmxlOiBib29sLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGdW5jdGlvblR5cGVOb2RlIHtcbiAgICB2YXIgdHlwZSA9IG5ldyBGdW5jdGlvblR5cGVOb2RlKCk7XG4gICAgdHlwZS5yYW5nZSA9IHJhbmdlO1xuICAgIHR5cGUucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdHlwZS5yZXR1cm5UeXBlID0gcmV0dXJuVHlwZTtcbiAgICB0eXBlLmV4cGxpY2l0VGhpc1R5cGUgPSBleHBsaWNpdFRoaXNUeXBlO1xuICAgIHR5cGUuaXNOdWxsYWJsZSA9IGlzTnVsbGFibGU7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlT21pdHRlZFR5cGUoXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE5hbWVkVHlwZU5vZGUge1xuICAgIHJldHVybiBOb2RlLmNyZWF0ZU5hbWVkVHlwZShcbiAgICAgIE5vZGUuY3JlYXRlU2ltcGxlVHlwZU5hbWUoXCJcIiwgcmFuZ2UpLFxuICAgICAgbnVsbCxcbiAgICAgIGZhbHNlLFxuICAgICAgcmFuZ2VcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVR5cGVQYXJhbWV0ZXIoXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgZXh0ZW5kc1R5cGU6IE5hbWVkVHlwZU5vZGUgfCBudWxsLFxuICAgIGRlZmF1bHRUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVHlwZVBhcmFtZXRlck5vZGUge1xuICAgIHZhciBlbGVtID0gbmV3IFR5cGVQYXJhbWV0ZXJOb2RlKCk7XG4gICAgZWxlbS5yYW5nZSA9IHJhbmdlO1xuICAgIGVsZW0ubmFtZSA9IG5hbWU7XG4gICAgZWxlbS5leHRlbmRzVHlwZSA9IGV4dGVuZHNUeXBlO1xuICAgIGVsZW0uZGVmYXVsdFR5cGUgPSBkZWZhdWx0VHlwZTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQYXJhbWV0ZXIoXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgdHlwZTogVHlwZU5vZGUsXG4gICAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsLFxuICAgIGtpbmQ6IFBhcmFtZXRlcktpbmQsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFBhcmFtZXRlck5vZGUge1xuICAgIHZhciBlbGVtID0gbmV3IFBhcmFtZXRlck5vZGUoKTtcbiAgICBlbGVtLnJhbmdlID0gcmFuZ2U7XG4gICAgZWxlbS5uYW1lID0gbmFtZTtcbiAgICBlbGVtLnR5cGUgPSB0eXBlO1xuICAgIGVsZW0uaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICBlbGVtLnBhcmFtZXRlcktpbmQgPSBraW5kO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgLy8gc3BlY2lhbFxuXG4gIHN0YXRpYyBjcmVhdGVEZWNvcmF0b3IoXG4gICAgbmFtZTogRXhwcmVzc2lvbixcbiAgICBhcmdzOiBFeHByZXNzaW9uW10gfCBudWxsLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBEZWNvcmF0b3JOb2RlIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBEZWNvcmF0b3JOb2RlKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC5hcmd1bWVudHMgPSBhcmdzO1xuICAgIHN0bXQuZGVjb3JhdG9yS2luZCA9IGRlY29yYXRvck5hbWVUb0tpbmQobmFtZSk7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ29tbWVudChcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAga2luZDogQ29tbWVudEtpbmQsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IENvbW1lbnROb2RlIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBDb21tZW50Tm9kZSgpO1xuICAgIG5vZGUucmFuZ2UgPSByYW5nZTtcbiAgICBub2RlLmNvbW1lbnRLaW5kID0ga2luZDtcbiAgICBub2RlLnRleHQgPSB0ZXh0O1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gZXhwcmVzc2lvbnNcblxuICBzdGF0aWMgY3JlYXRlSWRlbnRpZmllckV4cHJlc3Npb24oXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICBpc1F1b3RlZDogYm9vbCA9IGZhbHNlXG4gICk6IElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBJZGVudGlmaWVyRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLnRleHQgPSBuYW1lOyAvLyBUT0RPOiBleHRyYWN0IGZyb20gcmFuZ2VcbiAgICBleHByLnN5bWJvbCA9IG5hbWU7IC8vIFRPRE86IFN5bWJvbC5mb3IobmFtZSlcbiAgICBleHByLmlzUXVvdGVkID0gaXNRdW90ZWQ7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRW1wdHlJZGVudGlmaWVyRXhwcmVzc2lvbihcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogSWRlbnRpZmllckV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IElkZW50aWZpZXJFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIudGV4dCA9IFwiXCI7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQXJyYXlMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBlbGVtZW50czogKEV4cHJlc3Npb24gfCBudWxsKVtdLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBBcnJheUxpdGVyYWxFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZWxlbWVudEV4cHJlc3Npb25zID0gZWxlbWVudHM7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQXNzZXJ0aW9uRXhwcmVzc2lvbihcbiAgICBhc3NlcnRpb25LaW5kOiBBc3NlcnRpb25LaW5kLFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb24sXG4gICAgdG9UeXBlOiBUeXBlTm9kZSB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEFzc2VydGlvbkV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEFzc2VydGlvbkV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5hc3NlcnRpb25LaW5kID0gYXNzZXJ0aW9uS2luZDtcbiAgICBleHByLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIGV4cHIudG9UeXBlID0gdG9UeXBlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUJpbmFyeUV4cHJlc3Npb24oXG4gICAgb3BlcmF0b3I6IFRva2VuLFxuICAgIGxlZnQ6IEV4cHJlc3Npb24sXG4gICAgcmlnaHQ6IEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEJpbmFyeUV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEJpbmFyeUV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIGV4cHIubGVmdCA9IGxlZnQ7XG4gICAgZXhwci5yaWdodCA9IHJpZ2h0O1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNhbGxFeHByZXNzaW9uKFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb24sXG4gICAgdHlwZUFyZ3M6IFR5cGVOb2RlW10gfCBudWxsLFxuICAgIGFyZ3M6IEV4cHJlc3Npb25bXSxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQ2FsbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IENhbGxFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgZXhwci50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3M7XG4gICAgZXhwci5hcmd1bWVudHMgPSBhcmdzO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNsYXNzRXhwcmVzc2lvbihcbiAgICBkZWNsYXJhdGlvbjogQ2xhc3NEZWNsYXJhdGlvblxuICApOiBDbGFzc0V4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IENsYXNzRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSBkZWNsYXJhdGlvbi5yYW5nZTtcbiAgICBleHByLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ29tbWFFeHByZXNzaW9uKFxuICAgIGV4cHJlc3Npb25zOiBFeHByZXNzaW9uW10sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IENvbW1hRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgQ29tbWFFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb25zdHJ1Y3RvckV4cHJlc3Npb24oXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IENvbnN0cnVjdG9yRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgQ29uc3RydWN0b3JFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb24sXG4gICAgZWxlbWVudDogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgZXhwci5lbGVtZW50RXhwcmVzc2lvbiA9IGVsZW1lbnQ7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRmFsc2VFeHByZXNzaW9uKFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGYWxzZUV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEZhbHNlRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGbG9hdExpdGVyYWxFeHByZXNzaW9uKFxuICAgIHZhbHVlOiBmNjQsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZ1bmN0aW9uRXhwcmVzc2lvbihcbiAgICBkZWNsYXJhdGlvbjogRnVuY3Rpb25EZWNsYXJhdGlvblxuICApOiBGdW5jdGlvbkV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEZ1bmN0aW9uRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSBkZWNsYXJhdGlvbi5yYW5nZTtcbiAgICBleHByLmRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb247XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW5zdGFuY2VPZkV4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICBpc1R5cGU6IFR5cGVOb2RlLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJbnN0YW5jZU9mRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgSW5zdGFuY2VPZkV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICBleHByLmlzVHlwZSA9IGlzVHlwZTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgdmFsdWU6IEk2NCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5ld0V4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICB0eXBlQXJnczogVHlwZU5vZGVbXSB8IG51bGwsXG4gICAgYXJnczogRXhwcmVzc2lvbltdLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBOZXdFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBOZXdFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgZXhwci50eXBlQXJndW1lbnRzID0gdHlwZUFyZ3M7XG4gICAgZXhwci5hcmd1bWVudHMgPSBhcmdzO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU51bGxFeHByZXNzaW9uKFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBOdWxsRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgTnVsbEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgbmFtZXM6IElkZW50aWZpZXJFeHByZXNzaW9uW10sXG4gICAgdmFsdWVzOiBFeHByZXNzaW9uW10sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLm5hbWVzID0gbmFtZXM7XG4gICAgZXhwci52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUGFyZW50aGVzaXplZEV4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogUGFyZW50aGVzaXplZEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb24sXG4gICAgcHJvcGVydHk6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIGV4cHIucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgZmxhZ3M6IHN0cmluZyxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIucGF0dGVybiA9IHBhdHRlcm47XG4gICAgZXhwci5wYXR0ZXJuRmxhZ3MgPSBmbGFncztcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUZXJuYXJ5RXhwcmVzc2lvbihcbiAgICBjb25kaXRpb246IEV4cHJlc3Npb24sXG4gICAgaWZUaGVuOiBFeHByZXNzaW9uLFxuICAgIGlmRWxzZTogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVGVybmFyeUV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFRlcm5hcnlFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGV4cHIuaWZUaGVuID0gaWZUaGVuO1xuICAgIGV4cHIuaWZFbHNlID0gaWZFbHNlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlU3VwZXJFeHByZXNzaW9uKFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBTdXBlckV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFN1cGVyRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUaGlzRXhwcmVzc2lvbihcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVGhpc0V4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFRoaXNFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRydWVFeHByZXNzaW9uKFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBUcnVlRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgVHJ1ZUV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVW5hcnlQb3N0Zml4RXhwcmVzc2lvbihcbiAgICBvcGVyYXRvcjogVG9rZW4sXG4gICAgb3BlcmFuZDogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgZXhwci5vcGVyYW5kID0gb3BlcmFuZDtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVVbmFyeVByZWZpeEV4cHJlc3Npb24oXG4gICAgb3BlcmF0b3I6IFRva2VuLFxuICAgIG9wZXJhbmQ6IEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFVuYXJ5UHJlZml4RXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgVW5hcnlQcmVmaXhFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICBleHByLm9wZXJhbmQgPSBvcGVyYW5kO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgLy8gc3RhdGVtZW50c1xuXG4gIHN0YXRpYyBjcmVhdGVCbG9ja1N0YXRlbWVudChcbiAgICBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQmxvY2tTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEJsb2NrU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQnJlYWtTdGF0ZW1lbnQoXG4gICAgbGFiZWw6IElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQnJlYWtTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEJyZWFrU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQubGFiZWwgPSBsYWJlbDtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDbGFzc0RlY2xhcmF0aW9uKFxuICAgIGlkZW50aWZpZXI6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbCxcbiAgICBleHRlbmRzVHlwZTogTmFtZWRUeXBlTm9kZSB8IG51bGwsIC8vIGNhbid0IGJlIGEgZnVuY3Rpb25cbiAgICBpbXBsZW1lbnRzVHlwZXM6IE5hbWVkVHlwZU5vZGVbXSB8IG51bGwsIC8vIGNhbid0IGJlIGZ1bmN0aW9uc1xuICAgIG1lbWJlcnM6IERlY2xhcmF0aW9uU3RhdGVtZW50W10sXG4gICAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IENsYXNzRGVjbGFyYXRpb24ge1xuICAgIHZhciBzdG10ID0gbmV3IENsYXNzRGVjbGFyYXRpb24oKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5mbGFncyA9IGZsYWdzO1xuICAgIHN0bXQubmFtZSA9IGlkZW50aWZpZXI7XG4gICAgc3RtdC50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuICAgIHN0bXQuZXh0ZW5kc1R5cGUgPSBleHRlbmRzVHlwZTtcbiAgICBzdG10LmltcGxlbWVudHNUeXBlcyA9IGltcGxlbWVudHNUeXBlcztcbiAgICBzdG10Lm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ29udGludWVTdGF0ZW1lbnQoXG4gICAgbGFiZWw6IElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQ29udGludWVTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IENvbnRpbnVlU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQubGFiZWwgPSBsYWJlbDtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEb1N0YXRlbWVudChcbiAgICBzdGF0ZW1lbnQ6IFN0YXRlbWVudCxcbiAgICBjb25kaXRpb246IEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IERvU3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBEb1N0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICBzdG10LmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbXB0eVN0YXRlbWVudChcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRW1wdHlTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEVtcHR5U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVudW1EZWNsYXJhdGlvbihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICBtZW1iZXJzOiBFbnVtVmFsdWVEZWNsYXJhdGlvbltdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFbnVtRGVjbGFyYXRpb24ge1xuICAgIHZhciBzdG10ID0gbmV3IEVudW1EZWNsYXJhdGlvbigpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmZsYWdzID0gZmxhZ3M7XG4gICAgc3RtdC5uYW1lID0gbmFtZTtcbiAgICBzdG10LnZhbHVlcyA9IG1lbWJlcnM7XG4gICAgc3RtdC5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycztcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbnVtVmFsdWVEZWNsYXJhdGlvbihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICB2YWx1ZTogRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFbnVtVmFsdWVEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgRW51bVZhbHVlRGVjbGFyYXRpb24oKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5mbGFncyA9IGZsYWdzO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUV4cG9ydFN0YXRlbWVudChcbiAgICBtZW1iZXJzOiBFeHBvcnRNZW1iZXJbXSB8IG51bGwsXG4gICAgcGF0aDogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24gfCBudWxsLFxuICAgIGlzRGVjbGFyZTogYm9vbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRXhwb3J0U3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBFeHBvcnRTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5tZW1iZXJzID0gbWVtYmVycztcbiAgICBzdG10LnBhdGggPSBwYXRoO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBsZXQgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVQYXRoKHBhdGgudmFsdWUpO1xuICAgICAgaWYgKHBhdGgudmFsdWUuc3RhcnRzV2l0aChcIi5cIikpIHsgLy8gcmVsYXRpdmVcbiAgICAgICAgc3RtdC5ub3JtYWxpemVkUGF0aCA9IHJlc29sdmVQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZWRQYXRoLFxuICAgICAgICAgIHJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHsgLy8gYWJzb2x1dGVcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUGF0aC5zdGFydHNXaXRoKExJQlJBUllfUFJFRklYKSkge1xuICAgICAgICAgIG5vcm1hbGl6ZWRQYXRoID0gTElCUkFSWV9QUkVGSVggKyBub3JtYWxpemVkUGF0aDtcbiAgICAgICAgfVxuICAgICAgICBzdG10Lm5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplZFBhdGg7XG4gICAgICB9XG4gICAgICBzdG10LmludGVybmFsUGF0aCA9IG1hbmdsZUludGVybmFsUGF0aChzdG10Lm5vcm1hbGl6ZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RtdC5ub3JtYWxpemVkUGF0aCA9IG51bGw7XG4gICAgICBzdG10LmludGVybmFsUGF0aCA9IG51bGw7XG4gICAgfVxuICAgIHN0bXQuaXNEZWNsYXJlID0gaXNEZWNsYXJlO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoXG4gICAgZGVjbGFyYXRpb246IERlY2xhcmF0aW9uU3RhdGVtZW50LFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBFeHBvcnREZWZhdWx0U3RhdGVtZW50KCk7XG4gICAgc3RtdC5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgZXh0ZXJuYWxOYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRXhwb3J0SW1wb3J0U3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5uYW1lID0gbmFtZTtcbiAgICBzdG10LmV4dGVybmFsTmFtZSA9IGV4dGVybmFsTmFtZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFeHBvcnRNZW1iZXIoXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgZXh0ZXJuYWxOYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEV4cG9ydE1lbWJlciB7XG4gICAgdmFyIGVsZW0gPSBuZXcgRXhwb3J0TWVtYmVyKCk7XG4gICAgZWxlbS5yYW5nZSA9IHJhbmdlO1xuICAgIGVsZW0ubG9jYWxOYW1lID0gbmFtZTtcbiAgICBpZiAoIWV4dGVybmFsTmFtZSkgZXh0ZXJuYWxOYW1lID0gbmFtZTtcbiAgICBlbGVtLmV4cG9ydGVkTmFtZSA9IGV4dGVybmFsTmFtZTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFeHByZXNzaW9uU3RhdGVtZW50KFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb25cbiAgKTogRXhwcmVzc2lvblN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSBleHByZXNzaW9uLnJhbmdlO1xuICAgIHN0bXQuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSWZTdGF0ZW1lbnQoXG4gICAgY29uZGl0aW9uOiBFeHByZXNzaW9uLFxuICAgIGlmVHJ1ZTogU3RhdGVtZW50LFxuICAgIGlmRmFsc2U6IFN0YXRlbWVudCB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IElmU3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBJZlN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBzdG10LmlmVHJ1ZSA9IGlmVHJ1ZTtcbiAgICBzdG10LmlmRmFsc2UgPSBpZkZhbHNlO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUltcG9ydFN0YXRlbWVudChcbiAgICBkZWNsczogSW1wb3J0RGVjbGFyYXRpb25bXSB8IG51bGwsXG4gICAgcGF0aDogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEltcG9ydFN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgSW1wb3J0U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZGVjbGFyYXRpb25zID0gZGVjbHM7XG4gICAgc3RtdC5uYW1lc3BhY2VOYW1lID0gbnVsbDtcbiAgICBzdG10LnBhdGggPSBwYXRoO1xuICAgIHZhciBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZVBhdGgocGF0aC52YWx1ZSk7XG4gICAgaWYgKHBhdGgudmFsdWUuc3RhcnRzV2l0aChcIi5cIikpIHsgLy8gcmVsYXRpdmUgaW4gcHJvamVjdFxuICAgICAgc3RtdC5ub3JtYWxpemVkUGF0aCA9IHJlc29sdmVQYXRoKFxuICAgICAgICBub3JtYWxpemVkUGF0aCxcbiAgICAgICAgcmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoXG4gICAgICApO1xuICAgIH0gZWxzZSB7IC8vIGFic29sdXRlIGluIGxpYnJhcnlcbiAgICAgIGlmICghbm9ybWFsaXplZFBhdGguc3RhcnRzV2l0aChMSUJSQVJZX1BSRUZJWCkpIHtcbiAgICAgICAgbm9ybWFsaXplZFBhdGggPSBMSUJSQVJZX1BSRUZJWCArIG5vcm1hbGl6ZWRQYXRoO1xuICAgICAgfVxuICAgICAgc3RtdC5ub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZWRQYXRoO1xuICAgIH1cbiAgICBzdG10LmludGVybmFsUGF0aCA9IG1hbmdsZUludGVybmFsUGF0aChzdG10Lm5vcm1hbGl6ZWRQYXRoKTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbXBvcnRTdGF0ZW1lbnRXaXRoV2lsZGNhcmQoXG4gICAgaWRlbnRpZmllcjogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgcGF0aDogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEltcG9ydFN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgSW1wb3J0U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZGVjbGFyYXRpb25zID0gbnVsbDtcbiAgICBzdG10Lm5hbWVzcGFjZU5hbWUgPSBpZGVudGlmaWVyO1xuICAgIHN0bXQucGF0aCA9IHBhdGg7XG4gICAgdmFyIG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplUGF0aChwYXRoLnZhbHVlKTtcbiAgICBpZiAocGF0aC52YWx1ZS5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgc3RtdC5ub3JtYWxpemVkUGF0aCA9IHJlc29sdmVQYXRoKFxuICAgICAgICBub3JtYWxpemVkUGF0aCxcbiAgICAgICAgcmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW5vcm1hbGl6ZWRQYXRoLnN0YXJ0c1dpdGgoTElCUkFSWV9QUkVGSVgpKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRQYXRoID0gTElCUkFSWV9QUkVGSVggKyBub3JtYWxpemVkUGF0aDtcbiAgICAgIH1cbiAgICAgIHN0bXQubm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVkUGF0aDtcbiAgICB9XG4gICAgc3RtdC5pbnRlcm5hbFBhdGggPSBtYW5nbGVJbnRlcm5hbFBhdGgoc3RtdC5ub3JtYWxpemVkUGF0aCk7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW1wb3J0RGVjbGFyYXRpb24oXG4gICAgZm9yZWlnbk5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogSW1wb3J0RGVjbGFyYXRpb24ge1xuICAgIHZhciBlbGVtID0gbmV3IEltcG9ydERlY2xhcmF0aW9uKCk7XG4gICAgZWxlbS5yYW5nZSA9IHJhbmdlO1xuICAgIGVsZW0uZm9yZWlnbk5hbWUgPSBmb3JlaWduTmFtZTtcbiAgICBpZiAoIW5hbWUpIG5hbWUgPSBmb3JlaWduTmFtZTtcbiAgICBlbGVtLm5hbWUgPSBuYW1lO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbCxcbiAgICBleHRlbmRzVHlwZTogTmFtZWRUeXBlTm9kZSB8IG51bGwsIC8vIGNhbid0IGJlIGEgZnVuY3Rpb25cbiAgICBtZW1iZXJzOiBEZWNsYXJhdGlvblN0YXRlbWVudFtdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJbnRlcmZhY2VEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgSW50ZXJmYWNlRGVjbGFyYXRpb24oKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5mbGFncyA9IGZsYWdzO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuICAgIHN0bXQuZXh0ZW5kc1R5cGUgPSBleHRlbmRzVHlwZTtcbiAgICBzdG10Lm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRmllbGREZWNsYXJhdGlvbihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICB0eXBlOiBUeXBlTm9kZSB8IG51bGwsXG4gICAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGaWVsZERlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBGaWVsZERlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudHlwZSA9IHR5cGU7XG4gICAgc3RtdC5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRm9yU3RhdGVtZW50KFxuICAgIGluaXRpYWxpemVyOiBTdGF0ZW1lbnQgfCBudWxsLFxuICAgIGNvbmRpdGlvbjogRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgaW5jcmVtZW50b3I6IEV4cHJlc3Npb24gfCBudWxsLFxuICAgIHN0YXRlbWVudDogU3RhdGVtZW50LFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGb3JTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEZvclN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gICAgc3RtdC5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgc3RtdC5pbmNyZW1lbnRvciA9IGluY3JlbWVudG9yO1xuICAgIHN0bXQuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgdHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsLFxuICAgIHNpZ25hdHVyZTogRnVuY3Rpb25UeXBlTm9kZSxcbiAgICBib2R5OiBTdGF0ZW1lbnQgfCBudWxsLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIGFycm93S2luZDogQXJyb3dLaW5kLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGdW5jdGlvbkRlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBGdW5jdGlvbkRlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcbiAgICBzdG10LnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICBzdG10LmJvZHkgPSBib2R5O1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgc3RtdC5hcnJvd0tpbmQgPSBhcnJvd0tpbmQ7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbihcbiAgICBrZXlUeXBlOiBOYW1lZFR5cGVOb2RlLFxuICAgIHZhbHVlVHlwZTogVHlwZU5vZGUsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24ge1xuICAgIHZhciBlbGVtID0gbmV3IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24oKTtcbiAgICBlbGVtLnJhbmdlID0gcmFuZ2U7XG4gICAgZWxlbS5rZXlUeXBlID0ga2V5VHlwZTtcbiAgICBlbGVtLnZhbHVlVHlwZSA9IHZhbHVlVHlwZTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNZXRob2REZWNsYXJhdGlvbihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICB0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGwsXG4gICAgc2lnbmF0dXJlOiBGdW5jdGlvblR5cGVOb2RlLFxuICAgIGJvZHk6IFN0YXRlbWVudCB8IG51bGwsXG4gICAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE1ldGhvZERlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBNZXRob2REZWNsYXJhdGlvbigpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmZsYWdzID0gZmxhZ3M7XG4gICAgc3RtdC5uYW1lID0gbmFtZTtcbiAgICBzdG10LnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG4gICAgc3RtdC5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgc3RtdC5ib2R5ID0gYm9keTtcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5hbWVzcGFjZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIG1lbWJlcnM6IFN0YXRlbWVudFtdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBOYW1lc3BhY2VEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgTmFtZXNwYWNlRGVjbGFyYXRpb24oKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5mbGFncyA9IGZsYWdzO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC5tZW1iZXJzID0gbWVtYmVycztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVJldHVyblN0YXRlbWVudChcbiAgICB2YWx1ZTogRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFJldHVyblN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTd2l0Y2hTdGF0ZW1lbnQoXG4gICAgY29uZGl0aW9uOiBFeHByZXNzaW9uLFxuICAgIGNhc2VzOiBTd2l0Y2hDYXNlW10sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFN3aXRjaFN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgU3dpdGNoU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHN0bXQuY2FzZXMgPSBjYXNlcztcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTd2l0Y2hDYXNlKFxuICAgIGxhYmVsOiBFeHByZXNzaW9uIHwgbnVsbCxcbiAgICBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogU3dpdGNoQ2FzZSB7XG4gICAgdmFyIGVsZW0gPSBuZXcgU3dpdGNoQ2FzZSgpO1xuICAgIGVsZW0ucmFuZ2UgPSByYW5nZTtcbiAgICBlbGVtLmxhYmVsID0gbGFiZWw7XG4gICAgZWxlbS5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUaHJvd1N0YXRlbWVudChcbiAgICB2YWx1ZTogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVGhyb3dTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IFRocm93U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUcnlTdGF0ZW1lbnQoXG4gICAgc3RhdGVtZW50czogU3RhdGVtZW50W10sXG4gICAgY2F0Y2hWYXJpYWJsZTogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsLFxuICAgIGNhdGNoU3RhdGVtZW50czogU3RhdGVtZW50W10gfCBudWxsLFxuICAgIGZpbmFsbHlTdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFRyeVN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgVHJ5U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgc3RtdC5jYXRjaFZhcmlhYmxlID0gY2F0Y2hWYXJpYWJsZTtcbiAgICBzdG10LmNhdGNoU3RhdGVtZW50cyA9IGNhdGNoU3RhdGVtZW50cztcbiAgICBzdG10LmZpbmFsbHlTdGF0ZW1lbnRzID0gZmluYWxseVN0YXRlbWVudHM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVHlwZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbCxcbiAgICBhbGlhczogVHlwZU5vZGUsXG4gICAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFR5cGVEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgVHlwZURlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcbiAgICBzdG10LnR5cGUgPSBhbGlhcztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZhcmlhYmxlU3RhdGVtZW50KFxuICAgIGRlY2xhcmF0aW9uczogVmFyaWFibGVEZWNsYXJhdGlvbltdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFZhcmlhYmxlU3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBWYXJpYWJsZVN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRpb24oXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgdHlwZTogVHlwZU5vZGUgfCBudWxsLFxuICAgIGluaXRpYWxpemVyOiBFeHByZXNzaW9uIHwgbnVsbCxcbiAgICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JOb2RlW10gfCBudWxsLFxuICAgIGZsYWdzOiBDb21tb25GbGFncyxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gICAgdmFyIGVsZW0gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbigpO1xuICAgIGVsZW0ucmFuZ2UgPSByYW5nZTtcbiAgICBlbGVtLmZsYWdzID0gZmxhZ3M7XG4gICAgZWxlbS5uYW1lID0gbmFtZTtcbiAgICBlbGVtLnR5cGUgPSB0eXBlO1xuICAgIGVsZW0uaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICBlbGVtLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzOyAvLyBpbmhlcml0ZWRcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVWb2lkU3RhdGVtZW50KFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFZvaWRTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IFZvaWRTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVXaGlsZVN0YXRlbWVudChcbiAgICBjb25kaXRpb246IEV4cHJlc3Npb24sXG4gICAgc3RhdGVtZW50OiBTdGF0ZW1lbnQsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFdoaWxlU3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBXaGlsZVN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBzdG10LnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxufVxuXG4vLyB0eXBlc1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZU5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgLy8ga2luZCB2YXJpZXNcblxuICAvKiogV2hldGhlciBudWxsYWJsZSBvciBub3QuICovXG4gIGlzTnVsbGFibGU6IGJvb2w7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdHlwZSBuYW1lLiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVOYW1lIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5UWVBFTkFNRTtcblxuICAvKiogSWRlbnRpZmllciBvZiB0aGlzIHBhcnQuICovXG4gIGlkZW50aWZpZXI6IElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAvKiogTmV4dCBwYXJ0IG9mIHRoZSB0eXBlIG5hbWUgb3IgYG51bGxgIGlmIHRoaXMgaXMgdGhlIGxhc3QgcGFydC4gKi9cbiAgbmV4dDogVHlwZU5hbWUgfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIG5hbWVkIHR5cGUuICovXG5leHBvcnQgY2xhc3MgTmFtZWRUeXBlTm9kZSBleHRlbmRzIFR5cGVOb2RlIHtcbiAga2luZCA9IE5vZGVLaW5kLk5BTUVEVFlQRTtcblxuICAvKiogVHlwZSBuYW1lLiAqL1xuICBuYW1lOiBUeXBlTmFtZTtcbiAgLyoqIFR5cGUgYXJndW1lbnQgcmVmZXJlbmNlcy4gKi9cbiAgdHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgZnVuY3Rpb24gdHlwZS4gKi9cbmV4cG9ydCBjbGFzcyBGdW5jdGlvblR5cGVOb2RlIGV4dGVuZHMgVHlwZU5vZGUge1xuICBraW5kID0gTm9kZUtpbmQuRlVOQ1RJT05UWVBFO1xuXG4gIC8qKiBBY2NlcHRlZCBwYXJhbWV0ZXJzLiAqL1xuICBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJOb2RlW107XG4gIC8qKiBSZXR1cm4gdHlwZS4gKi9cbiAgcmV0dXJuVHlwZTogVHlwZU5vZGU7XG4gIC8qKiBFeHBsaWNpdGx5IHByb3ZpZGVkIHRoaXMgdHlwZSwgaWYgYW55LiAqL1xuICBleHBsaWNpdFRoaXNUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbDsgLy8gY2FuJ3QgYmUgYSBmdW5jdGlvblxufVxuXG4vKiogUmVwcmVzZW50cyBhIHR5cGUgcGFyYW1ldGVyLiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSO1xuXG4gIC8qKiBJZGVudGlmaWVyIHJlZmVyZW5jZS4gKi9cbiAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBFeHRlbmRlZCB0eXBlIHJlZmVyZW5jZSwgaWYgYW55LiAqL1xuICBleHRlbmRzVHlwZTogTmFtZWRUeXBlTm9kZSB8IG51bGw7IC8vIGNhbid0IGJlIGEgZnVuY3Rpb25cbiAgLyoqIERlZmF1bHQgdHlwZSBpZiBvbWl0dGVkLCBpZiBhbnkuICovXG4gIGRlZmF1bHRUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbDsgLy8gY2FuJ3QgYmUgYSBmdW5jdGlvblxufVxuXG4vKiogUmVwcmVzZW50cyB0aGUga2luZCBvZiBhIHBhcmFtZXRlci4gKi9cbmV4cG9ydCBlbnVtIFBhcmFtZXRlcktpbmQge1xuICAvKiogTm8gc3BlY2lmaWMgZmxhZ3MuICovXG4gIERFRkFVTFQsXG4gIC8qKiBJcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIuICovXG4gIE9QVElPTkFMLFxuICAvKiogSXMgYSByZXN0IHBhcmFtZXRlci4gKi9cbiAgUkVTVFxufVxuXG4vKiogUmVwcmVzZW50cyBhIGZ1bmN0aW9uIHBhcmFtZXRlci4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5QQVJBTUVURVI7XG5cbiAgLyoqIFBhcmFtZXRlciBraW5kLiAqL1xuICBwYXJhbWV0ZXJLaW5kOiBQYXJhbWV0ZXJLaW5kO1xuICAvKiogUGFyYW1ldGVyIG5hbWUuICovXG4gIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAvKiogUGFyYW1ldGVyIHR5cGUuICovXG4gIHR5cGU6IFR5cGVOb2RlO1xuICAvKiogSW5pdGlhbGl6ZXIgZXhwcmVzc2lvbiwgaWYgcHJlc2VudC4gKi9cbiAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogSW1wbGljaXQgZmllbGQgZGVjbGFyYXRpb24sIGlmIGFwcGxpY2FibGUuICovXG4gIGltcGxpY2l0RmllbGREZWNsYXJhdGlvbjogRmllbGREZWNsYXJhdGlvbiB8IG51bGwgPSBudWxsO1xuICAvKiogQ29tbW9uIGZsYWdzIGluZGljYXRpbmcgc3BlY2lmaWMgdHJhaXRzLiAqL1xuICBmbGFnczogQ29tbW9uRmxhZ3MgPSBDb21tb25GbGFncy5OT05FO1xuXG4gIC8qKiBUZXN0cyBpZiB0aGlzIG5vZGUgaGFzIHRoZSBzcGVjaWZpZWQgZmxhZyBvciBmbGFncy4gKi9cbiAgaXMoZmxhZzogQ29tbW9uRmxhZ3MpOiBib29sIHsgcmV0dXJuICh0aGlzLmZsYWdzICYgZmxhZykgPT0gZmxhZzsgfVxuICAvKiogVGVzdHMgaWYgdGhpcyBub2RlIGhhcyBvbmUgb2YgdGhlIHNwZWNpZmllZCBmbGFncy4gKi9cbiAgaXNBbnkoZmxhZzogQ29tbW9uRmxhZ3MpOiBib29sIHsgcmV0dXJuICh0aGlzLmZsYWdzICYgZmxhZykgIT0gMDsgfVxuICAvKiogU2V0cyBhIHNwZWNpZmljIGZsYWcgb3IgZmxhZ3MuICovXG4gIHNldChmbGFnOiBDb21tb25GbGFncyk6IHZvaWQgeyB0aGlzLmZsYWdzIHw9IGZsYWc7IH1cbn1cblxuLy8gc3BlY2lhbFxuXG4vKiogQnVpbHQtaW4gZGVjb3JhdG9yIGtpbmRzLiAqL1xuZXhwb3J0IGVudW0gRGVjb3JhdG9yS2luZCB7XG4gIENVU1RPTSxcbiAgR0xPQkFMLFxuICBPUEVSQVRPUixcbiAgT1BFUkFUT1JfQklOQVJZLFxuICBPUEVSQVRPUl9QUkVGSVgsXG4gIE9QRVJBVE9SX1BPU1RGSVgsXG4gIFVOTUFOQUdFRCxcbiAgU0VBTEVELFxuICBJTkxJTkUsXG4gIEVYVEVSTkFMLFxuICBCVUlMVElOLFxuICBMQVpZLFxuICBVTlNBRkVcbn1cblxuLyoqIFJldHVybnMgdGhlIGtpbmQgb2YgdGhlIHNwZWNpZmllZCBkZWNvcmF0b3IuIERlZmF1bHRzIHRvIHtAbGluayBEZWNvcmF0b3JLaW5kLkNVU1RPTX0uICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdG9yTmFtZVRvS2luZChuYW1lOiBFeHByZXNzaW9uKTogRGVjb3JhdG9yS2luZCB7XG4gIC8vIEBnbG9iYWwsIEBpbmxpbmUsIEBvcGVyYXRvciwgQHNlYWxlZCwgQHVubWFuYWdlZFxuICBpZiAobmFtZS5raW5kID09IE5vZGVLaW5kLklERU5USUZJRVIpIHtcbiAgICBsZXQgbmFtZVN0ciA9ICg8SWRlbnRpZmllckV4cHJlc3Npb24+bmFtZSkudGV4dDtcbiAgICBhc3NlcnQobmFtZVN0ci5sZW5ndGgpO1xuICAgIHN3aXRjaCAobmFtZVN0ci5jaGFyQ29kZUF0KDApKSB7XG4gICAgICBjYXNlIENoYXJDb2RlLmI6IHtcbiAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJidWlsdGluXCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLkJVSUxUSU47XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDaGFyQ29kZS5lOiB7XG4gICAgICAgIGlmIChuYW1lU3RyID09IFwiZXh0ZXJuYWxcIikgcmV0dXJuIERlY29yYXRvcktpbmQuRVhURVJOQUw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBDaGFyQ29kZS5nOiB7XG4gICAgICAgIGlmIChuYW1lU3RyID09IFwiZ2xvYmFsXCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLkdMT0JBTDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENoYXJDb2RlLmk6IHtcbiAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJpbmxpbmVcIikgcmV0dXJuIERlY29yYXRvcktpbmQuSU5MSU5FO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ2hhckNvZGUubDoge1xuICAgICAgICBpZiAobmFtZVN0ciA9PSBcImxhenlcIikgcmV0dXJuIERlY29yYXRvcktpbmQuTEFaWTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENoYXJDb2RlLm86IHtcbiAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJvcGVyYXRvclwiKSByZXR1cm4gRGVjb3JhdG9yS2luZC5PUEVSQVRPUjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENoYXJDb2RlLnM6IHtcbiAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJzZWFsZWRcIikgcmV0dXJuIERlY29yYXRvcktpbmQuU0VBTEVEO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ2hhckNvZGUudToge1xuICAgICAgICBpZiAobmFtZVN0ciA9PSBcInVubWFuYWdlZFwiKSByZXR1cm4gRGVjb3JhdG9yS2luZC5VTk1BTkFHRUQ7XG4gICAgICAgIGlmIChuYW1lU3RyID09IFwidW5zYWZlXCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLlVOU0FGRTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIG5hbWUua2luZCA9PSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUyAmJlxuICAgICg8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5hbWUpLmV4cHJlc3Npb24ua2luZCA9PSBOb2RlS2luZC5JREVOVElGSUVSXG4gICkge1xuICAgIGxldCBuYW1lU3RyID0gKDxJZGVudGlmaWVyRXhwcmVzc2lvbj4oPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5uYW1lKS5leHByZXNzaW9uKS50ZXh0O1xuICAgIGFzc2VydChuYW1lU3RyLmxlbmd0aCk7XG4gICAgbGV0IHByb3BTdHIgPSAoPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5uYW1lKS5wcm9wZXJ0eS50ZXh0O1xuICAgIGFzc2VydChwcm9wU3RyLmxlbmd0aCk7XG4gICAgLy8gQG9wZXJhdG9yLmJpbmFyeSwgQG9wZXJhdG9yLnByZWZpeCwgQG9wZXJhdG9yLnBvc3RmaXhcbiAgICBpZiAobmFtZVN0ciA9PSBcIm9wZXJhdG9yXCIpIHtcbiAgICAgIHN3aXRjaCAocHJvcFN0ci5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuYjoge1xuICAgICAgICAgIGlmIChwcm9wU3RyID09IFwiYmluYXJ5XCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLk9QRVJBVE9SX0JJTkFSWTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLnA6IHtcbiAgICAgICAgICBzd2l0Y2ggKHByb3BTdHIpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwcmVmaXhcIjogcmV0dXJuIERlY29yYXRvcktpbmQuT1BFUkFUT1JfUFJFRklYO1xuICAgICAgICAgICAgY2FzZSBcInBvc3RmaXhcIjogcmV0dXJuIERlY29yYXRvcktpbmQuT1BFUkFUT1JfUE9TVEZJWDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIERlY29yYXRvcktpbmQuQ1VTVE9NO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGRlY29yYXRvci4gKi9cbmV4cG9ydCBjbGFzcyBEZWNvcmF0b3JOb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5ERUNPUkFUT1I7XG5cbiAgLyoqIEJ1aWx0LWluIGtpbmQsIGlmIGFwcGxpY2FibGUuICovXG4gIGRlY29yYXRvcktpbmQ6IERlY29yYXRvcktpbmQ7XG4gIC8qKiBOYW1lIGV4cHJlc3Npb24uICovXG4gIG5hbWU6IEV4cHJlc3Npb247XG4gIC8qKiBBcmd1bWVudCBleHByZXNzaW9ucy4gKi9cbiAgYXJndW1lbnRzOiBFeHByZXNzaW9uW10gfCBudWxsO1xufVxuXG4vKiogQ29tbWVudCBraW5kcy4gKi9cbmV4cG9ydCBlbnVtIENvbW1lbnRLaW5kIHtcbiAgLyoqIExpbmUgY29tbWVudC4gKi9cbiAgTElORSxcbiAgLyoqIFRyaXBsZS1zbGFzaCBjb21tZW50LiAqL1xuICBUUklQTEUsXG4gIC8qKiBCbG9jayBjb21tZW50LiAqL1xuICBCTE9DS1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGNvbW1lbnQuICovXG5leHBvcnQgY2xhc3MgQ29tbWVudE5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAga2luZCA9IE5vZGVLaW5kLkNPTU1FTlQ7XG5cbiAgLyoqIENvbW1lbnQga2luZC4gKi9cbiAgY29tbWVudEtpbmQ6IENvbW1lbnRLaW5kO1xuICAvKiogQ29tbWVudCB0ZXh0LiAqL1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8vIGV4cHJlc3Npb25zXG5cbi8qKiBCYXNlIGNsYXNzIG9mIGFsbCBleHByZXNzaW9uIG5vZGVzLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHsgfVxuXG4vKiogUmVwcmVzZW50cyBhbiBpZGVudGlmaWVyIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllckV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLklERU5USUZJRVI7XG5cbiAgLyoqIFRleHR1YWwgbmFtZS4gKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogU3ltYm9sLiAqL1xuICBzeW1ib2w6IHN0cmluZzsgLy8gVE9ETzogc3ltYm9sXG4gIC8qKiBXaGV0aGVyIHF1b3RlZCBvciBub3QuICovXG4gIGlzUXVvdGVkOiBib29sO1xufVxuXG4vKiogSW5kaWNhdGVzIHRoZSBraW5kIG9mIGEgbGl0ZXJhbC4gKi9cbmV4cG9ydCBlbnVtIExpdGVyYWxLaW5kIHtcbiAgRkxPQVQsXG4gIElOVEVHRVIsXG4gIFNUUklORyxcbiAgUkVHRVhQLFxuICBBUlJBWSxcbiAgT0JKRUNUXG59XG5cbi8qKiBCYXNlIGNsYXNzIG9mIGFsbCBsaXRlcmFsIGV4cHJlc3Npb25zLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5MSVRFUkFMO1xuXG4gIC8qKiBTcGVjaWZpYyBsaXRlcmFsIGtpbmQuICovXG4gIGxpdGVyYWxLaW5kOiBMaXRlcmFsS2luZDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYFtdYCBsaXRlcmFsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbiBleHRlbmRzIExpdGVyYWxFeHByZXNzaW9uIHtcbiAgbGl0ZXJhbEtpbmQgPSBMaXRlcmFsS2luZC5BUlJBWTtcblxuICAvKiogTmVzdGVkIGVsZW1lbnQgZXhwcmVzc2lvbnMuICovXG4gIGVsZW1lbnRFeHByZXNzaW9uczogKEV4cHJlc3Npb24gfCBudWxsKVtdO1xufVxuXG4vKiogSW5kaWNhdGVzIHRoZSBraW5kIG9mIGFuIGFzc2VydGlvbi4gKi9cbmV4cG9ydCBlbnVtIEFzc2VydGlvbktpbmQge1xuICBQUkVGSVgsXG4gIEFTLFxuICBOT05OVUxMXG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGFzc2VydGlvbiBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIEFzc2VydGlvbkV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkFTU0VSVElPTjtcblxuICAvKiogU3BlY2lmaWMga2luZCBvZiB0aGlzIGFzc2VydGlvbi4gKi9cbiAgYXNzZXJ0aW9uS2luZDogQXNzZXJ0aW9uS2luZDtcbiAgLyoqIEV4cHJlc3Npb24gYmVpbmcgYXNzZXJ0ZWQuICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb247XG4gIC8qKiBUYXJnZXQgdHlwZS4gKi9cbiAgdG9UeXBlOiBUeXBlTm9kZSB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYmluYXJ5IGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuQklOQVJZO1xuXG4gIC8qKiBPcGVyYXRvciB0b2tlbi4gKi9cbiAgb3BlcmF0b3I6IFRva2VuO1xuICAvKiogTGVmdC1oYW5kIHNpZGUgZXhwcmVzc2lvbiAqL1xuICBsZWZ0OiBFeHByZXNzaW9uO1xuICAvKiogUmlnaHQtaGFuZCBzaWRlIGV4cHJlc3Npb24uICovXG4gIHJpZ2h0OiBFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGNhbGwgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuQ0FMTDtcblxuICAvKiogQ2FsbGVkIGV4cHJlc3Npb24uIFVzdWFsbHkgYW4gaWRlbnRpZmllciBvciBwcm9wZXJ0eSBhY2Nlc3MgZXhwcmVzc2lvbi4gKi9cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbiAgLyoqIFByb3ZpZGVkIHR5cGUgYXJndW1lbnRzLiAqL1xuICB0eXBlQXJndW1lbnRzOiBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgLyoqIFByb3ZpZGVkIGFyZ3VtZW50cy4gKi9cbiAgYXJndW1lbnRzOiBFeHByZXNzaW9uW107XG5cbiAgLyoqIEdldHMgdGhlIHR5cGUgYXJndW1lbnRzIHJhbmdlIGZvciByZXBvcnRpbmcuICovXG4gIGdldCB0eXBlQXJndW1lbnRzUmFuZ2UoKTogUmFuZ2Uge1xuICAgIHZhciB0eXBlQXJndW1lbnRzID0gdGhpcy50eXBlQXJndW1lbnRzO1xuICAgIHZhciBudW1UeXBlQXJndW1lbnRzOiBpMzI7XG4gICAgaWYgKHR5cGVBcmd1bWVudHMgJiYgKG51bVR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBSYW5nZS5qb2luKHR5cGVBcmd1bWVudHNbMF0ucmFuZ2UsIHR5cGVBcmd1bWVudHNbbnVtVHlwZUFyZ3VtZW50cyAtIDFdLnJhbmdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5yYW5nZTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBhcmd1bWVudHMgcmFuZ2UgZm9yIHJlcG9ydGluZy4gKi9cbiAgZ2V0IGFyZ3VtZW50c1JhbmdlKCk6IFJhbmdlIHtcbiAgICB2YXIgYXJncyA9IHRoaXMuYXJndW1lbnRzO1xuICAgIHZhciBudW1Bcmd1bWVudHMgPSBhcmdzLmxlbmd0aDtcbiAgICBpZiAobnVtQXJndW1lbnRzKSB7XG4gICAgICByZXR1cm4gUmFuZ2Uuam9pbihhcmdzWzBdLnJhbmdlLCBhcmdzW251bUFyZ3VtZW50cyAtIDFdLnJhbmdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5yYW5nZTtcbiAgfVxufVxuXG4vKiogUmVwcmVzZW50cyBhIGNsYXNzIGV4cHJlc3Npb24gdXNpbmcgdGhlICdjbGFzcycga2V5d29yZC4gKi9cbmV4cG9ydCBjbGFzcyBDbGFzc0V4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkNMQVNTO1xuXG4gIC8qKiBJbmxpbmUgY2xhc3MgZGVjbGFyYXRpb24uICovXG4gIGRlY2xhcmF0aW9uOiBDbGFzc0RlY2xhcmF0aW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGNvbW1hIGV4cHJlc3Npb24gY29tcG9zZWQgb2YgbXVsdGlwbGUgZXhwcmVzc2lvbnMuICovXG5leHBvcnQgY2xhc3MgQ29tbWFFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5DT01NQTtcblxuICAvKiogU2VxdWVudGlhbCBleHByZXNzaW9ucy4gKi9cbiAgZXhwcmVzc2lvbnM6IEV4cHJlc3Npb25bXTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgY29uc3RydWN0b3JgIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgQ29uc3RydWN0b3JFeHByZXNzaW9uIGV4dGVuZHMgSWRlbnRpZmllckV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuQ09OU1RSVUNUT1I7XG4gIHRleHQgPSBcImNvbnN0cnVjdG9yXCI7XG4gIHN5bWJvbCA9IENvbW1vblN5bWJvbHMuY29uc3RydWN0b3I7XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGVsZW1lbnQgYWNjZXNzIGV4cHJlc3Npb24sIGUuZy4sIGFycmF5IGFjY2Vzcy4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUztcblxuICAvKiogRXhwcmVzc2lvbiBiZWluZyBhY2Nlc3NlZC4gKi9cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbiAgLyoqIEVsZW1lbnQgb2YgdGhlIGV4cHJlc3Npb24gYmVpbmcgYWNjZXNzZWQuICovXG4gIGVsZW1lbnRFeHByZXNzaW9uOiBFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGZsb2F0IGxpdGVyYWwgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBGbG9hdExpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBsaXRlcmFsS2luZCA9IExpdGVyYWxLaW5kLkZMT0FUO1xuXG4gIC8qKiBGbG9hdCB2YWx1ZS4gKi9cbiAgdmFsdWU6IGY2NDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBmdW5jdGlvbiBleHByZXNzaW9uIHVzaW5nIHRoZSAnZnVuY3Rpb24nIGtleXdvcmQuICovXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5GVU5DVElPTjtcblxuICAvKiogSW5saW5lIGZ1bmN0aW9uIGRlY2xhcmF0aW9uLiAqL1xuICBkZWNsYXJhdGlvbjogRnVuY3Rpb25EZWNsYXJhdGlvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYGluc3RhbmNlb2ZgIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VPZkV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLklOU1RBTkNFT0Y7XG5cbiAgLyoqIEV4cHJlc3Npb24gYmVpbmcgYXNzZXJ0ZWQuICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb247XG4gIC8qKiBUeXBlIHRvIHRlc3QgZm9yLiAqL1xuICBpc1R5cGU6IFR5cGVOb2RlO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBpbnRlZ2VyIGxpdGVyYWwgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGxpdGVyYWxLaW5kID0gTGl0ZXJhbEtpbmQuSU5URUdFUjtcblxuICAvKiogSW50ZWdlciB2YWx1ZS4gKi9cbiAgdmFsdWU6IEk2NDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgbmV3YCBleHByZXNzaW9uLiBMaWtlIGEgY2FsbCBidXQgd2l0aCBpdHMgb3duIGtpbmQuICovXG5leHBvcnQgY2xhc3MgTmV3RXhwcmVzc2lvbiBleHRlbmRzIENhbGxFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLk5FVztcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgbnVsbGAgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBOdWxsRXhwcmVzc2lvbiBleHRlbmRzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLk5VTEw7XG4gIHRleHQgPSBcIm51bGxcIjtcbiAgc3ltYm9sID0gQ29tbW9uU3ltYm9scy5udWxsXztcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gb2JqZWN0IGxpdGVyYWwgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbiBleHRlbmRzIExpdGVyYWxFeHByZXNzaW9uIHtcbiAgbGl0ZXJhbEtpbmQgPSBMaXRlcmFsS2luZC5PQkpFQ1Q7XG5cbiAgLyoqIEZpZWxkIG5hbWVzLiAqL1xuICBuYW1lczogSWRlbnRpZmllckV4cHJlc3Npb25bXTtcbiAgLyoqIEZpZWxkIHZhbHVlcy4gKi9cbiAgdmFsdWVzOiBFeHByZXNzaW9uW107XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgcGFyZW50aGVzaXplZCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEO1xuXG4gIC8qKiBFeHByZXNzaW9uIGluIHBhcmVudGhlc2lzLiAqL1xuICBleHByZXNzaW9uOiBFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHByb3BlcnR5IGFjY2VzcyBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuUFJPUEVSVFlBQ0NFU1M7XG5cbiAgLyoqIEV4cHJlc3Npb24gYmVpbmcgYWNjZXNzZWQuICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb247XG4gIC8qKiBQcm9wZXJ0eSBvZiB0aGUgZXhwcmVzc2lvbiBiZWluZyBhY2Nlc3NlZC4gKi9cbiAgcHJvcGVydHk6IElkZW50aWZpZXJFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBsaXRlcmFsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGxpdGVyYWxLaW5kID0gTGl0ZXJhbEtpbmQuUkVHRVhQO1xuXG4gIC8qKiBSZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybi4gKi9cbiAgcGF0dGVybjogc3RyaW5nO1xuICAvKiogUmVndWxhciBleHByZXNzaW9uIGZsYWdzLiAqL1xuICBwYXR0ZXJuRmxhZ3M6IHN0cmluZztcbn1cblxuLyoqIFJlcHJlc2VudHMgYSB0ZXJuYXJ5IGV4cHJlc3Npb24sIGkuZS4sIHNob3J0IGlmIG5vdGF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIFRlcm5hcnlFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5URVJOQVJZO1xuXG4gIC8qKiBDb25kaXRpb24gZXhwcmVzc2lvbi4gKi9cbiAgY29uZGl0aW9uOiBFeHByZXNzaW9uO1xuICAvKiogRXhwcmVzc2lvbiBleGVjdXRlZCB3aGVuIGNvbmRpdGlvbiBpcyBgdHJ1ZWAuICovXG4gIGlmVGhlbjogRXhwcmVzc2lvbjtcbiAgLyoqIEV4cHJlc3Npb24gZXhlY3V0ZWQgd2hlbiBjb25kaXRpb24gaXMgYGZhbHNlYC4gKi9cbiAgaWZFbHNlOiBFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHN0cmluZyBsaXRlcmFsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGxpdGVyYWxLaW5kID0gTGl0ZXJhbEtpbmQuU1RSSU5HO1xuXG4gIC8qKiBTdHJpbmcgdmFsdWUgd2l0aG91dCBxdW90ZXMuICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHN1cGVyYCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIFN1cGVyRXhwcmVzc2lvbiBleHRlbmRzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLlNVUEVSO1xuICB0ZXh0ID0gXCJzdXBlclwiO1xuICBzeW1ib2wgPSBDb21tb25TeW1ib2xzLnN1cGVyXztcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgdGhpc2AgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBUaGlzRXhwcmVzc2lvbiBleHRlbmRzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLlRISVM7XG4gIHRleHQgPSBcInRoaXNcIjtcbiAgc3ltYm9sID0gQ29tbW9uU3ltYm9scy50aGlzXztcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgdHJ1ZWAgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBUcnVlRXhwcmVzc2lvbiBleHRlbmRzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLlRSVUU7XG4gIHRleHQgPSBcInRydWVcIjtcbiAgc3ltYm9sID0gQ29tbW9uU3ltYm9scy50cnVlXztcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgZmFsc2VgIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgRmFsc2VFeHByZXNzaW9uIGV4dGVuZHMgSWRlbnRpZmllckV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuRkFMU0U7XG4gIHRleHQgPSBcImZhbHNlXCI7XG4gIHN5bWJvbCA9IENvbW1vblN5bWJvbHMuZmFsc2VfO1xufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgdW5hcnkgZXhwcmVzc2lvbnMuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG5cbiAgLyoqIE9wZXJhdG9yIHRva2VuLiAqL1xuICBvcGVyYXRvcjogVG9rZW47XG4gIC8qKiBPcGVyYW5kIGV4cHJlc3Npb24uICovXG4gIG9wZXJhbmQ6IEV4cHJlc3Npb247XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdW5hcnkgcG9zdGZpeCBleHByZXNzaW9uLCBlLmcuIGEgcG9zdGZpeCBpbmNyZW1lbnQuICovXG5leHBvcnQgY2xhc3MgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbiBleHRlbmRzIFVuYXJ5RXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5VTkFSWVBPU1RGSVg7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdW5hcnkgcHJlZml4IGV4cHJlc3Npb24sIGUuZy4gYSBuZWdhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBVbmFyeVByZWZpeEV4cHJlc3Npb24gZXh0ZW5kcyBVbmFyeUV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuVU5BUllQUkVGSVg7XG59XG5cbi8vIHN0YXRlbWVudHNcblxuLyoqIEJhc2UgY2xhc3Mgb2YgYWxsIHN0YXRlbWVudCBub2Rlcy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHsgfVxuXG4vKiogSW5kaWNhdGVzIHRoZSBzcGVjaWZpYyBraW5kIG9mIGEgc291cmNlLiAqL1xuZXhwb3J0IGVudW0gU291cmNlS2luZCB7XG4gIC8qKiBVc2VyLXByb3ZpZGVkIGZpbGUuICovXG4gIFVTRVIgPSAwLFxuICAvKiogVXNlci1wcm92aWRlZCBlbnRyeSBmaWxlLiAqL1xuICBVU0VSX0VOVFJZID0gMSxcbiAgLyoqIExpYnJhcnktcHJvdmlkZWQgZmlsZS4gKi9cbiAgTElCUkFSWSA9IDIsXG4gIC8qKiBMaWJyYXJ5LXByb3ZpZGVkIGVudHJ5IGZpbGUuICovXG4gIExJQlJBUllfRU5UUlkgPSAzXG59XG5cbi8qKiBBIHRvcC1sZXZlbCBzb3VyY2Ugbm9kZS4gKi9cbmV4cG9ydCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBOb2RlIHtcbiAga2luZCA9IE5vZGVLaW5kLlNPVVJDRTtcbiAgcGFyZW50ID0gbnVsbDtcblxuICAvKiogU291cmNlIGtpbmQuICovXG4gIHNvdXJjZUtpbmQ6IFNvdXJjZUtpbmQ7XG4gIC8qKiBOb3JtYWxpemVkIHBhdGguICovXG4gIG5vcm1hbGl6ZWRQYXRoOiBzdHJpbmc7XG4gIC8qKiBQYXRoIHVzZWQgaW50ZXJuYWxseS4gKi9cbiAgaW50ZXJuYWxQYXRoOiBzdHJpbmc7XG4gIC8qKiBTaW1wbGUgcGF0aCAobGFzdCBwYXJ0IHdpdGhvdXQgZXh0ZW5zaW9uKS4gKi9cbiAgc2ltcGxlUGF0aDogc3RyaW5nO1xuICAvKiogQ29udGFpbmVkIHN0YXRlbWVudHMuICovXG4gIHN0YXRlbWVudHM6IFN0YXRlbWVudFtdO1xuICAvKiogRnVsbCBzb3VyY2UgdGV4dC4gKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogVG9rZW5pemVyIHJlZmVyZW5jZS4gKi9cbiAgdG9rZW5pemVyOiBUb2tlbml6ZXIgfCBudWxsID0gbnVsbDtcbiAgLyoqIFNvdXJjZSBtYXAgaW5kZXguICovXG4gIGRlYnVnSW5mb0luZGV4OiBpMzIgPSAtMTtcbiAgLyoqIFJlLWV4cG9ydGVkIHNvdXJjZXMuICovXG4gIGV4cG9ydFBhdGhzOiBTZXQ8c3RyaW5nPiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IHNvdXJjZSBub2RlLiAqL1xuICBjb25zdHJ1Y3Rvcihub3JtYWxpemVkUGF0aDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGtpbmQ6IFNvdXJjZUtpbmQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlS2luZCA9IGtpbmQ7XG4gICAgdGhpcy5ub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZWRQYXRoO1xuICAgIHZhciBpbnRlcm5hbFBhdGggPSBtYW5nbGVJbnRlcm5hbFBhdGgodGhpcy5ub3JtYWxpemVkUGF0aCk7XG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSBpbnRlcm5hbFBhdGg7XG4gICAgdmFyIHBvcyA9IGludGVybmFsUGF0aC5sYXN0SW5kZXhPZihQQVRIX0RFTElNSVRFUik7XG4gICAgdGhpcy5zaW1wbGVQYXRoID0gcG9zID49IDAgPyBpbnRlcm5hbFBhdGguc3Vic3RyaW5nKHBvcyArIDEpIDogaW50ZXJuYWxQYXRoO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IG5ldyBBcnJheSgpO1xuICAgIHRoaXMucmFuZ2UgPSBuZXcgUmFuZ2UodGhpcywgMCwgdGV4dC5sZW5ndGgpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH1cblxuICBnZXQgaXNMaWJyYXJ5KCk6IGJvb2wge1xuICAgIHZhciBraW5kID0gdGhpcy5zb3VyY2VLaW5kO1xuICAgIHJldHVybiBraW5kID09IFNvdXJjZUtpbmQuTElCUkFSWSB8fCBraW5kID09IFNvdXJjZUtpbmQuTElCUkFSWV9FTlRSWTtcbiAgfVxufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgZGVjbGFyYXRpb24gc3RhdGVtZW50cy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZWNsYXJhdGlvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIC8qKiBTaW1wbGUgbmFtZSBiZWluZyBkZWNsYXJlZC4gKi9cbiAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBBcnJheSBvZiBkZWNvcmF0b3JzLiAqL1xuICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JOb2RlW10gfCBudWxsID0gbnVsbDtcbiAgLyoqIENvbW1vbiBmbGFncyBpbmRpY2F0aW5nIHNwZWNpZmljIHRyYWl0cy4gKi9cbiAgZmxhZ3M6IENvbW1vbkZsYWdzID0gQ29tbW9uRmxhZ3MuTk9ORTtcblxuICAvKiogVGVzdHMgaWYgdGhpcyBub2RlIGhhcyB0aGUgc3BlY2lmaWVkIGZsYWcgb3IgZmxhZ3MuICovXG4gIGlzKGZsYWc6IENvbW1vbkZsYWdzKTogYm9vbCB7IHJldHVybiAodGhpcy5mbGFncyAmIGZsYWcpID09IGZsYWc7IH1cbiAgLyoqIFRlc3RzIGlmIHRoaXMgbm9kZSBoYXMgb25lIG9mIHRoZSBzcGVjaWZpZWQgZmxhZ3MuICovXG4gIGlzQW55KGZsYWc6IENvbW1vbkZsYWdzKTogYm9vbCB7IHJldHVybiAodGhpcy5mbGFncyAmIGZsYWcpICE9IDA7IH1cbiAgLyoqIFNldHMgYSBzcGVjaWZpYyBmbGFnIG9yIGZsYWdzLiAqL1xuICBzZXQoZmxhZzogQ29tbW9uRmxhZ3MpOiB2b2lkIHsgdGhpcy5mbGFncyB8PSBmbGFnOyB9XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGluZGV4IHNpZ25hdHVyZSBkZWNsYXJhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkVERUNMQVJBVElPTjtcblxuICAvKiogS2V5IHR5cGUuICovXG4gIGtleVR5cGU6IE5hbWVkVHlwZU5vZGU7XG4gIC8qKiBWYWx1ZSB0eXBlLiAqL1xuICB2YWx1ZVR5cGU6IFR5cGVOb2RlO1xufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgdmFyaWFibGUtbGlrZSBkZWNsYXJhdGlvbiBzdGF0ZW1lbnRzLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhcmlhYmxlTGlrZURlY2xhcmF0aW9uU3RhdGVtZW50IGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuXG4gIC8qKiBWYXJpYWJsZSB0eXBlLiAqL1xuICB0eXBlOiBUeXBlTm9kZSB8IG51bGw7XG4gIC8qKiBWYXJpYWJsZSBpbml0aWFsaXplci4gKi9cbiAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGJsb2NrIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5CTE9DSztcblxuICAvKiogQ29udGFpbmVkIHN0YXRlbWVudHMuICovXG4gIHN0YXRlbWVudHM6IFN0YXRlbWVudFtdO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGBicmVha2Agc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIEJyZWFrU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkJSRUFLO1xuXG4gIC8qKiBUYXJnZXQgbGFiZWwsIGlmIGFwcGxpY2FibGUuICovXG4gIGxhYmVsOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYGNsYXNzYCBkZWNsYXJhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBDbGFzc0RlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjtcblxuICAvKiogQWNjZXB0ZWQgdHlwZSBwYXJhbWV0ZXJzLiAqL1xuICB0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGw7XG4gIC8qKiBCYXNlIGNsYXNzIHR5cGUgYmVpbmcgZXh0ZW5kZWQsIGlmIGFueS4gKi9cbiAgZXh0ZW5kc1R5cGU6IE5hbWVkVHlwZU5vZGUgfCBudWxsOyAvLyBjYW4ndCBiZSBhIGZ1bmN0aW9uXG4gIC8qKiBJbnRlcmZhY2UgdHlwZXMgYmVpbmcgaW1wbGVtZW50ZWQsIGlmIGFueS4gKi9cbiAgaW1wbGVtZW50c1R5cGVzOiBOYW1lZFR5cGVOb2RlW10gfCBudWxsOyAvLyBjYW4ndCBiZSBmdW5jdGlvbnNcbiAgLyoqIENsYXNzIG1lbWJlciBkZWNsYXJhdGlvbnMuICovXG4gIG1lbWJlcnM6IERlY2xhcmF0aW9uU3RhdGVtZW50W107XG5cbiAgZ2V0IGlzR2VuZXJpYygpOiBib29sIHtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSB0aGlzLnR5cGVQYXJhbWV0ZXJzO1xuICAgIHJldHVybiB0eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgY29udGludWVgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBDb250aW51ZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5DT05USU5VRTtcblxuICAvKiogVGFyZ2V0IGxhYmVsLCBpZiBhcHBsaWNhYmxlLiAqL1xuICBsYWJlbDogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGBkb2Agc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIERvU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkRPO1xuXG4gIC8qKiBTdGF0ZW1lbnQgYmVpbmcgbG9vcGVkIG92ZXIuICovXG4gIHN0YXRlbWVudDogU3RhdGVtZW50O1xuICAvKiogQ29uZGl0aW9uIHdoZW4gdG8gcmVwZWF0LiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb247XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGVtcHR5IHN0YXRlbWVudCwgaS5lLiwgYSBzZW1pY29sb24gdGVybWluYXRpbmcgbm90aGluZy4gKi9cbmV4cG9ydCBjbGFzcyBFbXB0eVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5FTVBUWTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYGVudW1gIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIEVudW1EZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjtcblxuICAvKiogRW51bSB2YWx1ZSBkZWNsYXJhdGlvbnMuICovXG4gIHZhbHVlczogRW51bVZhbHVlRGVjbGFyYXRpb25bXTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSB2YWx1ZSBvZiBhbiBgZW51bWAgZGVjbGFyYXRpb24uICovXG5leHBvcnQgY2xhc3MgRW51bVZhbHVlRGVjbGFyYXRpb24gZXh0ZW5kcyBWYXJpYWJsZUxpa2VEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjtcbiAgLy8gbmFtZSBpcyBpbmhlcml0ZWRcblxuICAvKiogVmFsdWUgZXhwcmVzc2lvbi4gKi9cbiAgdmFsdWU6IEV4cHJlc3Npb24gfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgZXhwb3J0IGltcG9ydGAgc3RhdGVtZW50IG9mIGFuIGludGVyZmFjZS4gKi9cbmV4cG9ydCBjbGFzcyBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcbiAga2luZCA9IE5vZGVLaW5kLkVYUE9SVElNUE9SVDtcblxuICAvKiogSWRlbnRpZmllciBiZWluZyBpbXBvcnRlZC4gKi9cbiAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBJZGVudGlmaWVyIGJlaW5nIGV4cG9ydGVkLiAqL1xuICBleHRlcm5hbE5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIG1lbWJlciBvZiBhbiBgZXhwb3J0YCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgRXhwb3J0TWVtYmVyIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5FWFBPUlRNRU1CRVI7XG5cbiAgLyoqIExvY2FsIGlkZW50aWZpZXIuICovXG4gIGxvY2FsTmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBFeHBvcnRlZCBpZGVudGlmaWVyLiAqL1xuICBleHBvcnRlZE5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgZXhwb3J0YCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgRXhwb3J0U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkVYUE9SVDtcblxuICAvKiogQXJyYXkgb2YgbWVtYmVycyBpZiBhIHNldCBvZiBuYW1lZCBleHBvcnRzLCBvciBgbnVsbGAgaWYgYSBmaWxlIGV4cG9ydC4gKi9cbiAgbWVtYmVyczogRXhwb3J0TWVtYmVyW10gfCBudWxsO1xuICAvKiogUGF0aCBiZWluZyBleHBvcnRlZCBmcm9tLCBpZiBhcHBsaWNhYmxlLiAqL1xuICBwYXRoOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbiB8IG51bGw7XG4gIC8qKiBOb3JtYWxpemVkIHBhdGgsIGlmIGBwYXRoYCBpcyBzZXQuICovXG4gIG5vcm1hbGl6ZWRQYXRoOiBzdHJpbmcgfCBudWxsO1xuICAvKiogTWFuZ2xlZCBpbnRlcm5hbCBwYXRoIGJlaW5nIHJlZmVyZW5jZWQsIGlmIGBwYXRoYCBpcyBzZXQuICovXG4gIGludGVybmFsUGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFdoZXRoZXIgdGhpcyBpcyBhIGRlY2xhcmVkIGV4cG9ydC4gKi9cbiAgaXNEZWNsYXJlOiBib29sO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgZXhwb3J0IGRlZmF1bHRgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBFeHBvcnREZWZhdWx0U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ7XG5cbiAgLyoqIERlY2xhcmF0aW9uIGJlaW5nIGV4cG9ydGVkIGFzIGRlZmF1bHQuICovXG4gIGRlY2xhcmF0aW9uOiBEZWNsYXJhdGlvblN0YXRlbWVudDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gZXhwcmVzc2lvbiB0aGF0IGlzIHVzZWQgYXMgYSBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5FWFBSRVNTSU9OO1xuXG4gIC8qKiBFeHByZXNzaW9uIGJlaW5nIHVzZWQgYXMgYSBzdGF0ZW1lbnQuKi9cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBmaWVsZCBkZWNsYXJhdGlvbiB3aXRoaW4gYSBgY2xhc3NgLiAqL1xuZXhwb3J0IGNsYXNzIEZpZWxkRGVjbGFyYXRpb24gZXh0ZW5kcyBWYXJpYWJsZUxpa2VEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OO1xuXG4gIC8qKiBQYXJhbWV0ZXIgaW5kZXggaWYgZGVjbGFyZWQgYXMgYSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIsIG90aGVyd2lzZSBgLTFgLiAqL1xuICBwYXJhbWV0ZXJJbmRleDogaTMyID0gLTE7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYGZvcmAgc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIEZvclN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5GT1I7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVyIHN0YXRlbWVudCwgaWYgcHJlc2VudC5cbiAgICogRWl0aGVyIGEge0BsaW5rIFZhcmlhYmxlU3RhdGVtZW50fSBvciB7QGxpbmsgRXhwcmVzc2lvblN0YXRlbWVudH0uXG4gICAqL1xuICBpbml0aWFsaXplcjogU3RhdGVtZW50IHwgbnVsbDtcbiAgLyoqIENvbmRpdGlvbiBleHByZXNzaW9uLCBpZiBwcmVzZW50LiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogSW5jcmVtZW50b3IgZXhwcmVzc2lvbiwgaWYgcHJlc2VudC4gKi9cbiAgaW5jcmVtZW50b3I6IEV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogU3RhdGVtZW50IGJlaW5nIGxvb3BlZCBvdmVyLiAqL1xuICBzdGF0ZW1lbnQ6IFN0YXRlbWVudDtcbn1cblxuLyoqIEluZGljYXRlcyB0aGUga2luZCBvZiBhbiBhcnJheSBmdW5jdGlvbi4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEFycm93S2luZCB7XG4gIC8qKiBOb3QgYW4gYXJyb3cgZnVuY3Rpb24uICovXG4gIE5PTkUsXG4gIC8qKiBQYXJlbnRoZXNpemVkIHBhcmFtZXRlciBsaXN0LiAqL1xuICBBUlJPV19QQVJFTlRIRVNJWkVELFxuICAvKiogU2luZ2xlIHBhcmFtZXRlciB3aXRob3V0IHBhcmVudGhlc2lzLiAqL1xuICBBUlJPV19TSU5HTEVcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgZnVuY3Rpb25gIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OO1xuXG4gIC8qKiBUeXBlIHBhcmFtZXRlcnMsIGlmIGFueS4gKi9cbiAgdHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsO1xuICAvKiogRnVuY3Rpb24gc2lnbmF0dXJlLiAqL1xuICBzaWduYXR1cmU6IEZ1bmN0aW9uVHlwZU5vZGU7XG4gIC8qKiBCb2R5IHN0YXRlbWVudC4gVXN1YWxseSBhIGJsb2NrLiAqL1xuICBib2R5OiBTdGF0ZW1lbnQgfCBudWxsO1xuICAvKiogQXJyb3cgZnVuY3Rpb24ga2luZCwgaWYgYXBwbGljYWJsZS4gKi9cbiAgYXJyb3dLaW5kOiBBcnJvd0tpbmQ7XG5cbiAgZ2V0IGlzR2VuZXJpYygpOiBib29sIHtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSB0aGlzLnR5cGVQYXJhbWV0ZXJzO1xuICAgIHJldHVybiB0eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogQ2xvbmVzIHRoaXMgZnVuY3Rpb24gZGVjbGFyYXRpb24uICovXG4gIGNsb25lKCk6IEZ1bmN0aW9uRGVjbGFyYXRpb24ge1xuICAgIHJldHVybiBOb2RlLmNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLnR5cGVQYXJhbWV0ZXJzLFxuICAgICAgdGhpcy5zaWduYXR1cmUsXG4gICAgICB0aGlzLmJvZHksXG4gICAgICB0aGlzLmRlY29yYXRvcnMsXG4gICAgICB0aGlzLmZsYWdzLFxuICAgICAgdGhpcy5hcnJvd0tpbmQsXG4gICAgICB0aGlzLnJhbmdlXG4gICAgKTtcbiAgfVxufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgaWZgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBJZlN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5JRjtcblxuICAvKiogQ29uZGl0aW9uLiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb247XG4gIC8qKiBTdGF0ZW1lbnQgZXhlY3V0ZWQgd2hlbiBjb25kaXRpb24gaXMgYHRydWVgLiAqL1xuICBpZlRydWU6IFN0YXRlbWVudDtcbiAgLyoqIFN0YXRlbWVudCBleGVjdXRlZCB3aGVuIGNvbmRpdGlvbiBpcyBgZmFsc2VgLiAqL1xuICBpZkZhbHNlOiBTdGF0ZW1lbnQgfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgaW1wb3J0YCBkZWNsYXJhdGlvbiBwYXJ0IG9mIGFuIHtAbGluayBJbXBvcnRTdGF0ZW1lbnR9LiAqL1xuZXhwb3J0IGNsYXNzIEltcG9ydERlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT047XG5cbiAgLyoqIElkZW50aWZpZXIgYmVpbmcgaW1wb3J0ZWQuICovXG4gIGZvcmVpZ25OYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYGltcG9ydGAgc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIEltcG9ydFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5JTVBPUlQ7XG5cbiAgLyoqIEFycmF5IG9mIG1lbWJlciBkZWNsYXJhdGlvbnMgb3IgYG51bGxgIGlmIGFuIGFzdGVyaXNrIGltcG9ydC4gKi9cbiAgZGVjbGFyYXRpb25zOiBJbXBvcnREZWNsYXJhdGlvbltdIHwgbnVsbDtcbiAgLyoqIE5hbWUgb2YgdGhlIGxvY2FsIG5hbWVzcGFjZSwgaWYgYW4gYXN0ZXJpc2sgaW1wb3J0LiAqL1xuICBuYW1lc3BhY2VOYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XG4gIC8qKiBQYXRoIGJlaW5nIGltcG9ydGVkIGZyb20uICovXG4gIHBhdGg6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uO1xuICAvKiogTm9ybWFsaXplZCBwYXRoLiAqL1xuICBub3JtYWxpemVkUGF0aDogc3RyaW5nO1xuICAvKiogTWFuZ2xlZCBpbnRlcm5hbCBwYXRoIGJlaW5nIHJlZmVyZW5jZWQuICovXG4gIGludGVybmFsUGF0aDogc3RyaW5nO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgaW50ZXJmYXJjZWAgZGVjbGFyYXRpb24uICovXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRGVjbGFyYXRpb24gZXh0ZW5kcyBDbGFzc0RlY2xhcmF0aW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIG1ldGhvZCBkZWNsYXJhdGlvbiB3aXRoaW4gYSBgY2xhc3NgLiAqL1xuZXhwb3J0IGNsYXNzIE1ldGhvZERlY2xhcmF0aW9uIGV4dGVuZHMgRnVuY3Rpb25EZWNsYXJhdGlvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgbmFtZXNwYWNlYCBkZWNsYXJhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OO1xuXG4gIC8qKiBBcnJheSBvZiBuYW1lc3BhY2UgbWVtYmVycy4gKi9cbiAgbWVtYmVyczogU3RhdGVtZW50W107XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHJldHVybmAgc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIFJldHVyblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5SRVRVUk47XG5cbiAgLyoqIFZhbHVlIGV4cHJlc3Npb24gYmVpbmcgcmV0dXJuZWQsIGlmIHByZXNlbnQuICovXG4gIHZhbHVlOiBFeHByZXNzaW9uIHwgbnVsbDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBzaW5nbGUgYGNhc2VgIHdpdGhpbiBhIGBzd2l0Y2hgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBTd2l0Y2hDYXNlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5TV0lUQ0hDQVNFO1xuXG4gIC8qKiBMYWJlbCBleHByZXNzaW9uLiBgbnVsbGAgaW5kaWNhdGVzIHRoZSBkZWZhdWx0IGNhc2UuICovXG4gIGxhYmVsOiBFeHByZXNzaW9uIHwgbnVsbDtcbiAgLyoqIENvbnRhaW5lZCBzdGF0ZW1lbnRzLiAqL1xuICBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgc3dpdGNoYCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgU3dpdGNoU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLlNXSVRDSDtcblxuICAvKiogQ29uZGl0aW9uIGV4cHJlc3Npb24uICovXG4gIGNvbmRpdGlvbjogRXhwcmVzc2lvbjtcbiAgLyoqIENvbnRhaW5lZCBjYXNlcy4gKi9cbiAgY2FzZXM6IFN3aXRjaENhc2VbXTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgdGhyb3dgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBUaHJvd1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5USFJPVztcblxuICAvKiogVmFsdWUgZXhwcmVzc2lvbiBiZWluZyB0aHJvd24uICovXG4gIHZhbHVlOiBFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGB0cnlgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBUcnlTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuVFJZO1xuXG4gIC8qKiBDb250YWluZWQgc3RhdGVtZW50cy4gKi9cbiAgc3RhdGVtZW50czogU3RhdGVtZW50W107XG4gIC8qKiBFeGNlcHRpb24gdmFyaWFibGUgbmFtZSwgaWYgYSBgY2F0Y2hgIGNsYXVzZSBpcyBwcmVzZW50LiAqL1xuICBjYXRjaFZhcmlhYmxlOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XG4gIC8qKiBTdGF0ZW1lbnRzIGJlaW5nIGV4ZWN1dGVkIG9uIGNhdGNoLCBpZiBhIGBjYXRjaGAgY2xhdXNlIGlzIHByZXNlbnQuICovXG4gIGNhdGNoU3RhdGVtZW50czogU3RhdGVtZW50W10gfCBudWxsO1xuICAvKiogU3RhdGVtZW50cyBiZWluZyBleGVjdXRlZCBhZnRlcndhcmRzLCBpZiBhIGBmaW5hbGx5YCBjbGF1c2UgaXMgcHJlc2VudC4gKi9cbiAgZmluYWxseVN0YXRlbWVudHM6IFN0YXRlbWVudFtdIHwgbnVsbDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgdHlwZWAgZGVjbGFyYXRpb24uICovXG5leHBvcnQgY2xhc3MgVHlwZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuVFlQRURFQ0xBUkFUSU9OO1xuXG4gIC8qKiBUeXBlIHBhcmFtZXRlcnMsIGlmIGFueS4gKi9cbiAgdHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsO1xuICAvKiogVHlwZSBiZWluZyBhbGlhc2VkLiAqL1xuICB0eXBlOiBUeXBlTm9kZTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBwYXJ0IG9mIGEge0BsaW5rIFZhcmlhYmxlU3RhdGVtZW50fS4gKi9cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgVmFyaWFibGVMaWtlRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBzdGF0ZW1lbnQgd3JhcHBpbmcge0BsaW5rIFZhcmlhYmxlRGVjbGFyYXRpb259cy4gKi9cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5WQVJJQUJMRTtcblxuICAvKiogQXJyYXkgb2YgZGVjb3JhdG9ycy4gKi9cbiAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgLyoqIEFycmF5IG9mIG1lbWJlciBkZWNsYXJhdGlvbnMuICovXG4gIGRlY2xhcmF0aW9uczogVmFyaWFibGVEZWNsYXJhdGlvbltdO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHZvaWQgc3RhdGVtZW50IGRyb3BwaW5nIGFuIGV4cHJlc3Npb24ncyB2YWx1ZS4gKi9cbmV4cG9ydCBjbGFzcyBWb2lkU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLlZPSUQ7XG5cbiAgLyoqIEV4cHJlc3Npb24gYmVpbmcgZHJvcHBlZC4gKi9cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgd2hpbGVgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBXaGlsZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5XSElMRTtcblxuICAvKiogQ29uZGl0aW9uIGV4cHJlc3Npb24uICovXG4gIGNvbmRpdGlvbjogRXhwcmVzc2lvbjtcbiAgLyoqIFN0YXRlbWVudCBiZWluZyBsb29wZWQgb3Zlci4gKi9cbiAgc3RhdGVtZW50OiBTdGF0ZW1lbnQ7XG59XG5cbi8qKiBGaW5kcyB0aGUgZmlyc3QgZGVjb3JhdG9yIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQga2luZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGVjb3JhdG9yKGtpbmQ6IERlY29yYXRvcktpbmQsIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwpOiBEZWNvcmF0b3JOb2RlIHwgbnVsbCB7XG4gIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgbGV0IGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgICBpZiAoZGVjb3JhdG9yLmRlY29yYXRvcktpbmQgPT0ga2luZCkgcmV0dXJuIGRlY29yYXRvcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKiBNYW5nbGVzIGFuIGV4dGVybmFsIHRvIGFuIGludGVybmFsIHBhdGguICovXG5leHBvcnQgZnVuY3Rpb24gbWFuZ2xlSW50ZXJuYWxQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwYXRoLmVuZHNXaXRoKFwiLnRzXCIpKSBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sZW5ndGggLSAzKTtcbiAgcmV0dXJuIHBhdGg7XG59XG5cbi8qKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIHR5cGUgbm9kZSByZXByZXNlbnRzIGFuIG9taXR0ZWQgdHlwZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVPbWl0dGVkKHR5cGU6IFR5cGVOb2RlKTogYm9vbCB7XG4gIGlmICh0eXBlLmtpbmQgPT0gTm9kZUtpbmQuTkFNRURUWVBFKSB7XG4gICAgbGV0IG5hbWUgPSAoPE5hbWVkVHlwZU5vZGU+dHlwZSkubmFtZTtcbiAgICByZXR1cm4gIShuYW1lLm5leHQgfHwgbmFtZS5pZGVudGlmaWVyLnRleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=

/***/ }),

/***/ "../src/common.ts":
/*!************************!*\
  !*** ../src/common.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Common constants.
 * @module common
 */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** Indicates traits of a {@link Node} or {@link Element}. */
var CommonFlags;
(function (CommonFlags) {
    /** No flags set. */
    CommonFlags[CommonFlags["NONE"] = 0] = "NONE";
    // Basic modifiers
    /** Has an `import` modifier. */
    CommonFlags[CommonFlags["IMPORT"] = 1] = "IMPORT";
    /** Has an `export` modifier. */
    CommonFlags[CommonFlags["EXPORT"] = 2] = "EXPORT";
    /** Has a `declare` modifier. */
    CommonFlags[CommonFlags["DECLARE"] = 4] = "DECLARE";
    /** Has a `const` modifier. */
    CommonFlags[CommonFlags["CONST"] = 8] = "CONST";
    /** Has a `let` modifier. */
    CommonFlags[CommonFlags["LET"] = 16] = "LET";
    /** Has a `static` modifier. */
    CommonFlags[CommonFlags["STATIC"] = 32] = "STATIC";
    /** Has a `readonly` modifier. */
    CommonFlags[CommonFlags["READONLY"] = 64] = "READONLY";
    /** Has an `abstract` modifier. */
    CommonFlags[CommonFlags["ABSTRACT"] = 128] = "ABSTRACT";
    /** Has a `public` modifier. */
    CommonFlags[CommonFlags["PUBLIC"] = 256] = "PUBLIC";
    /** Has a `private` modifier. */
    CommonFlags[CommonFlags["PRIVATE"] = 512] = "PRIVATE";
    /** Has a `protected` modifier. */
    CommonFlags[CommonFlags["PROTECTED"] = 1024] = "PROTECTED";
    /** Has a `get` modifier. */
    CommonFlags[CommonFlags["GET"] = 2048] = "GET";
    /** Has a `set` modifier. */
    CommonFlags[CommonFlags["SET"] = 4096] = "SET";
    /** Has a definite assignment assertion `!` as in `x!: i32;`. */
    CommonFlags[CommonFlags["DEFINITE_ASSIGNMENT"] = 8192] = "DEFINITE_ASSIGNMENT";
    // Extended modifiers usually derived from basic modifiers
    /** Is ambient, that is either declared or nested in a declared element. */
    CommonFlags[CommonFlags["AMBIENT"] = 16384] = "AMBIENT";
    /** Is generic. */
    CommonFlags[CommonFlags["GENERIC"] = 32768] = "GENERIC";
    /** Is part of a generic context. */
    CommonFlags[CommonFlags["GENERIC_CONTEXT"] = 65536] = "GENERIC_CONTEXT";
    /** Is an instance member. */
    CommonFlags[CommonFlags["INSTANCE"] = 131072] = "INSTANCE";
    /** Is a constructor. */
    CommonFlags[CommonFlags["CONSTRUCTOR"] = 262144] = "CONSTRUCTOR";
    /** Is a module export. */
    CommonFlags[CommonFlags["MODULE_EXPORT"] = 524288] = "MODULE_EXPORT";
    /** Is a module import. */
    CommonFlags[CommonFlags["MODULE_IMPORT"] = 1048576] = "MODULE_IMPORT";
    // Compilation states
    /** Is resolved. */
    CommonFlags[CommonFlags["RESOLVED"] = 2097152] = "RESOLVED";
    /** Is compiled. */
    CommonFlags[CommonFlags["COMPILED"] = 4194304] = "COMPILED";
    /** Has a constant value and is therefore inlined. */
    CommonFlags[CommonFlags["INLINED"] = 8388608] = "INLINED";
    /** Is scoped. */
    CommonFlags[CommonFlags["SCOPED"] = 16777216] = "SCOPED";
    /** Is a trampoline. */
    CommonFlags[CommonFlags["TRAMPOLINE"] = 33554432] = "TRAMPOLINE";
    /** Is a virtual method. */
    CommonFlags[CommonFlags["VIRTUAL"] = 67108864] = "VIRTUAL";
    /** Is the main function. */
    CommonFlags[CommonFlags["MAIN"] = 134217728] = "MAIN";
    // Other
    /** Is quoted. */
    CommonFlags[CommonFlags["QUOTED"] = 268435456] = "QUOTED";
})(CommonFlags = exports.CommonFlags || (exports.CommonFlags = {}));
/** Path delimiter inserted between file system levels. */
exports.PATH_DELIMITER = "/";
/** Substitution used to indicate the parent directory. */
exports.PARENT_SUBST = "..";
/** Function name prefix used for getters. */
exports.GETTER_PREFIX = "get:";
/** Function name prefix used for setters. */
exports.SETTER_PREFIX = "set:";
/** Delimiter used between class names and instance members. */
exports.INSTANCE_DELIMITER = "#";
/** Delimiter used between class and namespace names and static members. */
exports.STATIC_DELIMITER = ".";
/** Delimiter used between a function and its inner elements. */
exports.INNER_DELIMITER = "~";
/** Substitution used to indicate a library directory. */
exports.LIBRARY_SUBST = "~lib";
/** Library directory prefix. */
exports.LIBRARY_PREFIX = exports.LIBRARY_SUBST + exports.PATH_DELIMITER;
/** Path index suffix. */
exports.INDEX_SUFFIX = exports.PATH_DELIMITER + "index";
/** Common compiler symbols. */
var CommonSymbols;
(function (CommonSymbols) {
    // special
    CommonSymbols.EMPTY = "";
    // types
    CommonSymbols.i8 = "i8";
    CommonSymbols.i16 = "i16";
    CommonSymbols.i32 = "i32";
    CommonSymbols.i64 = "i64";
    CommonSymbols.isize = "isize";
    CommonSymbols.u8 = "u8";
    CommonSymbols.u16 = "u16";
    CommonSymbols.u32 = "u32";
    CommonSymbols.u64 = "u64";
    CommonSymbols.usize = "usize";
    CommonSymbols.bool = "bool";
    CommonSymbols.f32 = "f32";
    CommonSymbols.f64 = "f64";
    CommonSymbols.v128 = "v128";
    CommonSymbols.i8x16 = "i8x16";
    CommonSymbols.u8x16 = "u8x16";
    CommonSymbols.i16x8 = "i16x8";
    CommonSymbols.u16x8 = "u16x8";
    CommonSymbols.i32x4 = "i32x4";
    CommonSymbols.u32x4 = "u32x4";
    CommonSymbols.i64x2 = "i64x2";
    CommonSymbols.u64x2 = "u64x2";
    CommonSymbols.f32x4 = "f32x4";
    CommonSymbols.f64x2 = "f64x2";
    CommonSymbols.void_ = "void";
    CommonSymbols.number = "number";
    CommonSymbols.boolean = "boolean";
    CommonSymbols.string = "string";
    CommonSymbols.native = "native";
    CommonSymbols.indexof = "indexof";
    CommonSymbols.valueof = "valueof";
    CommonSymbols.returnof = "returnof";
    // aliases
    CommonSymbols.null_ = "null";
    CommonSymbols.true_ = "true";
    CommonSymbols.false_ = "false";
    // objects
    CommonSymbols.this_ = "this";
    CommonSymbols.super_ = "super";
    CommonSymbols.constructor = "constructor";
    // constants
    CommonSymbols.ASC_TARGET = "ASC_TARGET";
    CommonSymbols.ASC_NO_TREESHAKING = "ASC_NO_TREESHAKING";
    CommonSymbols.ASC_NO_ASSERT = "ASC_NO_ASSERT";
    CommonSymbols.ASC_MEMORY_BASE = "ASC_MEMORY_BASE";
    CommonSymbols.ASC_OPTIMIZE_LEVEL = "ASC_OPTIMIZE_LEVEL";
    CommonSymbols.ASC_SHRINK_LEVEL = "ASC_SHRINK_LEVEL";
    CommonSymbols.ASC_FEATURE_MUTABLE_GLOBAL = "ASC_FEATURE_MUTABLE_GLOBAL";
    CommonSymbols.ASC_FEATURE_SIGN_EXTENSION = "ASC_FEATURE_SIGN_EXTENSION";
    CommonSymbols.ASC_FEATURE_BULK_MEMORY = "ASC_FEATURE_BULK_MEMORY";
    CommonSymbols.ASC_FEATURE_SIMD = "ASC_FEATURE_SIMD";
    CommonSymbols.ASC_FEATURE_THREADS = "ASC_FEATURE_THREADS";
    // classes
    CommonSymbols.I8 = "I8";
    CommonSymbols.I16 = "I16";
    CommonSymbols.I32 = "I32";
    CommonSymbols.I64 = "I64";
    CommonSymbols.Isize = "Isize";
    CommonSymbols.U8 = "U8";
    CommonSymbols.U16 = "U16";
    CommonSymbols.U32 = "U32";
    CommonSymbols.U64 = "U64";
    CommonSymbols.Usize = "Usize";
    CommonSymbols.Bool = "Bool";
    CommonSymbols.F32 = "F32";
    CommonSymbols.F64 = "F64";
    CommonSymbols.V128 = "V128";
    CommonSymbols.String = "String";
    CommonSymbols.Array = "Array";
    CommonSymbols.FixedArray = "FixedArray";
    CommonSymbols.Set = "Set";
    CommonSymbols.Map = "Map";
    CommonSymbols.ArrayBufferView = "ArrayBufferView";
    CommonSymbols.ArrayBuffer = "ArrayBuffer";
    CommonSymbols.Math = "Math";
    CommonSymbols.Mathf = "Mathf";
    CommonSymbols.Int8Array = "Int8Array";
    CommonSymbols.Int16Array = "Int16Array";
    CommonSymbols.Int32Array = "Int32Array";
    CommonSymbols.Int64Array = "Int64Array";
    CommonSymbols.Uint8Array = "Uint8Array";
    CommonSymbols.Uint8ClampedArray = "Uint8ClampedArray";
    CommonSymbols.Uint16Array = "Uint16Array";
    CommonSymbols.Uint32Array = "Uint32Array";
    CommonSymbols.Uint64Array = "Uint64Array";
    CommonSymbols.Float32Array = "Float32Array";
    CommonSymbols.Float64Array = "Float64Array";
    // runtime
    CommonSymbols.abort = "abort";
    CommonSymbols.pow = "pow";
    CommonSymbols.mod = "mod";
    CommonSymbols.alloc = "__alloc";
    CommonSymbols.realloc = "__realloc";
    CommonSymbols.free = "__free";
    CommonSymbols.retain = "__retain";
    CommonSymbols.release = "__release";
    CommonSymbols.collect = "__collect";
    CommonSymbols.typeinfo = "__typeinfo";
    CommonSymbols.instanceof_ = "__instanceof";
    CommonSymbols.visit = "__visit";
    CommonSymbols.allocArray = "__allocArray";
})(CommonSymbols = exports.CommonSymbols || (exports.CommonSymbols = {}));
// shared
var feature_1 = __webpack_require__(/*! ../std/assembly/shared/feature */ "../std/assembly/shared/feature.ts");
exports.Feature = feature_1.Feature;
var target_1 = __webpack_require__(/*! ../std/assembly/shared/target */ "../std/assembly/shared/target.ts");
exports.Target = target_1.Target;
var typeinfo_1 = __webpack_require__(/*! ../std/assembly/shared/typeinfo */ "../std/assembly/shared/typeinfo.ts");
exports.Typeinfo = typeinfo_1.Typeinfo;
exports.TypeinfoFlags = typeinfo_1.TypeinfoFlags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHLENBQUEsS0FBSzs7QUFFUiw2REFBNkQ7QUFDN0QsSUFBWSxXQXlFWDtBQXpFRCxXQUFZLFdBQVc7SUFDckIsb0JBQW9CO0lBQ3BCLDZDQUFRLENBQUE7SUFFUixrQkFBa0I7SUFFbEIsZ0NBQWdDO0lBQ2hDLGlEQUFlLENBQUE7SUFDZixnQ0FBZ0M7SUFDaEMsaURBQWUsQ0FBQTtJQUNmLGdDQUFnQztJQUNoQyxtREFBZ0IsQ0FBQTtJQUNoQiw4QkFBOEI7SUFDOUIsK0NBQWMsQ0FBQTtJQUNkLDRCQUE0QjtJQUM1Qiw0Q0FBWSxDQUFBO0lBQ1osK0JBQStCO0lBQy9CLGtEQUFlLENBQUE7SUFDZixpQ0FBaUM7SUFDakMsc0RBQWlCLENBQUE7SUFDakIsa0NBQWtDO0lBQ2xDLHVEQUFpQixDQUFBO0lBQ2pCLCtCQUErQjtJQUMvQixtREFBZSxDQUFBO0lBQ2YsZ0NBQWdDO0lBQ2hDLHFEQUFnQixDQUFBO0lBQ2hCLGtDQUFrQztJQUNsQywwREFBbUIsQ0FBQTtJQUNuQiw0QkFBNEI7SUFDNUIsOENBQWEsQ0FBQTtJQUNiLDRCQUE0QjtJQUM1Qiw4Q0FBYSxDQUFBO0lBQ2IsZ0VBQWdFO0lBQ2hFLDhFQUE2QixDQUFBO0lBRTdCLDBEQUEwRDtJQUUxRCwyRUFBMkU7SUFDM0UsdURBQWlCLENBQUE7SUFDakIsa0JBQWtCO0lBQ2xCLHVEQUFpQixDQUFBO0lBQ2pCLG9DQUFvQztJQUNwQyx1RUFBeUIsQ0FBQTtJQUN6Qiw2QkFBNkI7SUFDN0IsMERBQWtCLENBQUE7SUFDbEIsd0JBQXdCO0lBQ3hCLGdFQUFxQixDQUFBO0lBQ3JCLDBCQUEwQjtJQUMxQixvRUFBdUIsQ0FBQTtJQUN2QiwwQkFBMEI7SUFDMUIscUVBQXVCLENBQUE7SUFFdkIscUJBQXFCO0lBRXJCLG1CQUFtQjtJQUNuQiwy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RDtBQUE5QywwQkFBQSxNQUFNLENBQUE7QUFDZiw0REFBMEU7QUFBakUsOEJBQUEsUUFBUSxDQUFBO0FBQUUsbUNBQUEsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21tb24gY29uc3RhbnRzLlxuICogQG1vZHVsZSBjb21tb25cbiAqLy8qKiovXG5cbi8qKiBJbmRpY2F0ZXMgdHJhaXRzIG9mIGEge0BsaW5rIE5vZGV9IG9yIHtAbGluayBFbGVtZW50fS4gKi9cbmV4cG9ydCBlbnVtIENvbW1vbkZsYWdzIHtcbiAgLyoqIE5vIGZsYWdzIHNldC4gKi9cbiAgTk9ORSA9IDAsXG5cbiAgLy8gQmFzaWMgbW9kaWZpZXJzXG5cbiAgLyoqIEhhcyBhbiBgaW1wb3J0YCBtb2RpZmllci4gKi9cbiAgSU1QT1JUID0gMSA8PCAwLFxuICAvKiogSGFzIGFuIGBleHBvcnRgIG1vZGlmaWVyLiAqL1xuICBFWFBPUlQgPSAxIDw8IDEsXG4gIC8qKiBIYXMgYSBgZGVjbGFyZWAgbW9kaWZpZXIuICovXG4gIERFQ0xBUkUgPSAxIDw8IDIsXG4gIC8qKiBIYXMgYSBgY29uc3RgIG1vZGlmaWVyLiAqL1xuICBDT05TVCA9IDEgPDwgMyxcbiAgLyoqIEhhcyBhIGBsZXRgIG1vZGlmaWVyLiAqL1xuICBMRVQgPSAxIDw8IDQsXG4gIC8qKiBIYXMgYSBgc3RhdGljYCBtb2RpZmllci4gKi9cbiAgU1RBVElDID0gMSA8PCA1LFxuICAvKiogSGFzIGEgYHJlYWRvbmx5YCBtb2RpZmllci4gKi9cbiAgUkVBRE9OTFkgPSAxIDw8IDYsXG4gIC8qKiBIYXMgYW4gYGFic3RyYWN0YCBtb2RpZmllci4gKi9cbiAgQUJTVFJBQ1QgPSAxIDw8IDcsXG4gIC8qKiBIYXMgYSBgcHVibGljYCBtb2RpZmllci4gKi9cbiAgUFVCTElDID0gMSA8PCA4LFxuICAvKiogSGFzIGEgYHByaXZhdGVgIG1vZGlmaWVyLiAqL1xuICBQUklWQVRFID0gMSA8PCA5LFxuICAvKiogSGFzIGEgYHByb3RlY3RlZGAgbW9kaWZpZXIuICovXG4gIFBST1RFQ1RFRCA9IDEgPDwgMTAsXG4gIC8qKiBIYXMgYSBgZ2V0YCBtb2RpZmllci4gKi9cbiAgR0VUID0gMSA8PCAxMSxcbiAgLyoqIEhhcyBhIGBzZXRgIG1vZGlmaWVyLiAqL1xuICBTRVQgPSAxIDw8IDEyLFxuICAvKiogSGFzIGEgZGVmaW5pdGUgYXNzaWdubWVudCBhc3NlcnRpb24gYCFgIGFzIGluIGB4ITogaTMyO2AuICovXG4gIERFRklOSVRFX0FTU0lHTk1FTlQgPSAxIDw8IDEzLFxuXG4gIC8vIEV4dGVuZGVkIG1vZGlmaWVycyB1c3VhbGx5IGRlcml2ZWQgZnJvbSBiYXNpYyBtb2RpZmllcnNcblxuICAvKiogSXMgYW1iaWVudCwgdGhhdCBpcyBlaXRoZXIgZGVjbGFyZWQgb3IgbmVzdGVkIGluIGEgZGVjbGFyZWQgZWxlbWVudC4gKi9cbiAgQU1CSUVOVCA9IDEgPDwgMTQsXG4gIC8qKiBJcyBnZW5lcmljLiAqL1xuICBHRU5FUklDID0gMSA8PCAxNSxcbiAgLyoqIElzIHBhcnQgb2YgYSBnZW5lcmljIGNvbnRleHQuICovXG4gIEdFTkVSSUNfQ09OVEVYVCA9IDEgPDwgMTYsXG4gIC8qKiBJcyBhbiBpbnN0YW5jZSBtZW1iZXIuICovXG4gIElOU1RBTkNFID0gMSA8PCAxNyxcbiAgLyoqIElzIGEgY29uc3RydWN0b3IuICovXG4gIENPTlNUUlVDVE9SID0gMSA8PCAxOCxcbiAgLyoqIElzIGEgbW9kdWxlIGV4cG9ydC4gKi9cbiAgTU9EVUxFX0VYUE9SVCA9IDEgPDwgMTksXG4gIC8qKiBJcyBhIG1vZHVsZSBpbXBvcnQuICovXG4gIE1PRFVMRV9JTVBPUlQgPSAxIDw8IDIwLFxuXG4gIC8vIENvbXBpbGF0aW9uIHN0YXRlc1xuXG4gIC8qKiBJcyByZXNvbHZlZC4gKi9cbiAgUkVTT0xWRUQgPSAxIDw8IDIxLFxuICAvKiogSXMgY29tcGlsZWQuICovXG4gIENPTVBJTEVEID0gMSA8PCAyMixcbiAgLyoqIEhhcyBhIGNvbnN0YW50IHZhbHVlIGFuZCBpcyB0aGVyZWZvcmUgaW5saW5lZC4gKi9cbiAgSU5MSU5FRCA9IDEgPDwgMjMsXG4gIC8qKiBJcyBzY29wZWQuICovXG4gIFNDT1BFRCA9IDEgPDwgMjQsXG4gIC8qKiBJcyBhIHRyYW1wb2xpbmUuICovXG4gIFRSQU1QT0xJTkUgPSAxIDw8IDI1LFxuICAvKiogSXMgYSB2aXJ0dWFsIG1ldGhvZC4gKi9cbiAgVklSVFVBTCA9IDEgPDwgMjYsXG4gIC8qKiBJcyB0aGUgbWFpbiBmdW5jdGlvbi4gKi9cbiAgTUFJTiA9IDEgPDwgMjcsXG5cbiAgLy8gT3RoZXJcblxuICAvKiogSXMgcXVvdGVkLiAqL1xuICBRVU9URUQgPSAxIDw8IDI4XG59XG5cbi8qKiBQYXRoIGRlbGltaXRlciBpbnNlcnRlZCBiZXR3ZWVuIGZpbGUgc3lzdGVtIGxldmVscy4gKi9cbmV4cG9ydCBjb25zdCBQQVRIX0RFTElNSVRFUiA9IFwiL1wiO1xuLyoqIFN1YnN0aXR1dGlvbiB1c2VkIHRvIGluZGljYXRlIHRoZSBwYXJlbnQgZGlyZWN0b3J5LiAqL1xuZXhwb3J0IGNvbnN0IFBBUkVOVF9TVUJTVCA9IFwiLi5cIjtcbi8qKiBGdW5jdGlvbiBuYW1lIHByZWZpeCB1c2VkIGZvciBnZXR0ZXJzLiAqL1xuZXhwb3J0IGNvbnN0IEdFVFRFUl9QUkVGSVggPSBcImdldDpcIjtcbi8qKiBGdW5jdGlvbiBuYW1lIHByZWZpeCB1c2VkIGZvciBzZXR0ZXJzLiAqL1xuZXhwb3J0IGNvbnN0IFNFVFRFUl9QUkVGSVggPSBcInNldDpcIjtcbi8qKiBEZWxpbWl0ZXIgdXNlZCBiZXR3ZWVuIGNsYXNzIG5hbWVzIGFuZCBpbnN0YW5jZSBtZW1iZXJzLiAqL1xuZXhwb3J0IGNvbnN0IElOU1RBTkNFX0RFTElNSVRFUiA9IFwiI1wiO1xuLyoqIERlbGltaXRlciB1c2VkIGJldHdlZW4gY2xhc3MgYW5kIG5hbWVzcGFjZSBuYW1lcyBhbmQgc3RhdGljIG1lbWJlcnMuICovXG5leHBvcnQgY29uc3QgU1RBVElDX0RFTElNSVRFUiA9IFwiLlwiO1xuLyoqIERlbGltaXRlciB1c2VkIGJldHdlZW4gYSBmdW5jdGlvbiBhbmQgaXRzIGlubmVyIGVsZW1lbnRzLiAqL1xuZXhwb3J0IGNvbnN0IElOTkVSX0RFTElNSVRFUiA9IFwiflwiO1xuLyoqIFN1YnN0aXR1dGlvbiB1c2VkIHRvIGluZGljYXRlIGEgbGlicmFyeSBkaXJlY3RvcnkuICovXG5leHBvcnQgY29uc3QgTElCUkFSWV9TVUJTVCA9IFwifmxpYlwiO1xuLyoqIExpYnJhcnkgZGlyZWN0b3J5IHByZWZpeC4gKi9cbmV4cG9ydCBjb25zdCBMSUJSQVJZX1BSRUZJWCA9IExJQlJBUllfU1VCU1QgKyBQQVRIX0RFTElNSVRFUjtcbi8qKiBQYXRoIGluZGV4IHN1ZmZpeC4gKi9cbmV4cG9ydCBjb25zdCBJTkRFWF9TVUZGSVggPSBQQVRIX0RFTElNSVRFUiArIFwiaW5kZXhcIjtcblxuLyoqIENvbW1vbiBjb21waWxlciBzeW1ib2xzLiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBDb21tb25TeW1ib2xzIHtcbiAgLy8gc3BlY2lhbFxuICBleHBvcnQgY29uc3QgRU1QVFkgPSBcIlwiO1xuICAvLyB0eXBlc1xuICBleHBvcnQgY29uc3QgaTggPSBcImk4XCI7XG4gIGV4cG9ydCBjb25zdCBpMTYgPSBcImkxNlwiO1xuICBleHBvcnQgY29uc3QgaTMyID0gXCJpMzJcIjtcbiAgZXhwb3J0IGNvbnN0IGk2NCA9IFwiaTY0XCI7XG4gIGV4cG9ydCBjb25zdCBpc2l6ZSA9IFwiaXNpemVcIjtcbiAgZXhwb3J0IGNvbnN0IHU4ID0gXCJ1OFwiO1xuICBleHBvcnQgY29uc3QgdTE2ID0gXCJ1MTZcIjtcbiAgZXhwb3J0IGNvbnN0IHUzMiA9IFwidTMyXCI7XG4gIGV4cG9ydCBjb25zdCB1NjQgPSBcInU2NFwiO1xuICBleHBvcnQgY29uc3QgdXNpemUgPSBcInVzaXplXCI7XG4gIGV4cG9ydCBjb25zdCBib29sID0gXCJib29sXCI7XG4gIGV4cG9ydCBjb25zdCBmMzIgPSBcImYzMlwiO1xuICBleHBvcnQgY29uc3QgZjY0ID0gXCJmNjRcIjtcbiAgZXhwb3J0IGNvbnN0IHYxMjggPSBcInYxMjhcIjtcbiAgZXhwb3J0IGNvbnN0IGk4eDE2ID0gXCJpOHgxNlwiO1xuICBleHBvcnQgY29uc3QgdTh4MTYgPSBcInU4eDE2XCI7XG4gIGV4cG9ydCBjb25zdCBpMTZ4OCA9IFwiaTE2eDhcIjtcbiAgZXhwb3J0IGNvbnN0IHUxNng4ID0gXCJ1MTZ4OFwiO1xuICBleHBvcnQgY29uc3QgaTMyeDQgPSBcImkzMng0XCI7XG4gIGV4cG9ydCBjb25zdCB1MzJ4NCA9IFwidTMyeDRcIjtcbiAgZXhwb3J0IGNvbnN0IGk2NHgyID0gXCJpNjR4MlwiO1xuICBleHBvcnQgY29uc3QgdTY0eDIgPSBcInU2NHgyXCI7XG4gIGV4cG9ydCBjb25zdCBmMzJ4NCA9IFwiZjMyeDRcIjtcbiAgZXhwb3J0IGNvbnN0IGY2NHgyID0gXCJmNjR4MlwiO1xuICBleHBvcnQgY29uc3Qgdm9pZF8gPSBcInZvaWRcIjtcbiAgZXhwb3J0IGNvbnN0IG51bWJlciA9IFwibnVtYmVyXCI7XG4gIGV4cG9ydCBjb25zdCBib29sZWFuID0gXCJib29sZWFuXCI7XG4gIGV4cG9ydCBjb25zdCBzdHJpbmcgPSBcInN0cmluZ1wiO1xuICBleHBvcnQgY29uc3QgbmF0aXZlID0gXCJuYXRpdmVcIjtcbiAgZXhwb3J0IGNvbnN0IGluZGV4b2YgPSBcImluZGV4b2ZcIjtcbiAgZXhwb3J0IGNvbnN0IHZhbHVlb2YgPSBcInZhbHVlb2ZcIjtcbiAgZXhwb3J0IGNvbnN0IHJldHVybm9mID0gXCJyZXR1cm5vZlwiO1xuICAvLyBhbGlhc2VzXG4gIGV4cG9ydCBjb25zdCBudWxsXyA9IFwibnVsbFwiO1xuICBleHBvcnQgY29uc3QgdHJ1ZV8gPSBcInRydWVcIjtcbiAgZXhwb3J0IGNvbnN0IGZhbHNlXyA9IFwiZmFsc2VcIjtcbiAgLy8gb2JqZWN0c1xuICBleHBvcnQgY29uc3QgdGhpc18gPSBcInRoaXNcIjtcbiAgZXhwb3J0IGNvbnN0IHN1cGVyXyA9IFwic3VwZXJcIjtcbiAgZXhwb3J0IGNvbnN0IGNvbnN0cnVjdG9yID0gXCJjb25zdHJ1Y3RvclwiO1xuICAvLyBjb25zdGFudHNcbiAgZXhwb3J0IGNvbnN0IEFTQ19UQVJHRVQgPSBcIkFTQ19UQVJHRVRcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19OT19UUkVFU0hBS0lORyA9IFwiQVNDX05PX1RSRUVTSEFLSU5HXCI7XG4gIGV4cG9ydCBjb25zdCBBU0NfTk9fQVNTRVJUID0gXCJBU0NfTk9fQVNTRVJUXCI7XG4gIGV4cG9ydCBjb25zdCBBU0NfTUVNT1JZX0JBU0UgPSBcIkFTQ19NRU1PUllfQkFTRVwiO1xuICBleHBvcnQgY29uc3QgQVNDX09QVElNSVpFX0xFVkVMID0gXCJBU0NfT1BUSU1JWkVfTEVWRUxcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19TSFJJTktfTEVWRUwgPSBcIkFTQ19TSFJJTktfTEVWRUxcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19GRUFUVVJFX01VVEFCTEVfR0xPQkFMID0gXCJBU0NfRkVBVFVSRV9NVVRBQkxFX0dMT0JBTFwiO1xuICBleHBvcnQgY29uc3QgQVNDX0ZFQVRVUkVfU0lHTl9FWFRFTlNJT04gPSBcIkFTQ19GRUFUVVJFX1NJR05fRVhURU5TSU9OXCI7XG4gIGV4cG9ydCBjb25zdCBBU0NfRkVBVFVSRV9CVUxLX01FTU9SWSA9IFwiQVNDX0ZFQVRVUkVfQlVMS19NRU1PUllcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19GRUFUVVJFX1NJTUQgPSBcIkFTQ19GRUFUVVJFX1NJTURcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19GRUFUVVJFX1RIUkVBRFMgPSBcIkFTQ19GRUFUVVJFX1RIUkVBRFNcIjtcbiAgLy8gY2xhc3Nlc1xuICBleHBvcnQgY29uc3QgSTggPSBcIkk4XCI7XG4gIGV4cG9ydCBjb25zdCBJMTYgPSBcIkkxNlwiO1xuICBleHBvcnQgY29uc3QgSTMyID0gXCJJMzJcIjtcbiAgZXhwb3J0IGNvbnN0IEk2NCA9IFwiSTY0XCI7XG4gIGV4cG9ydCBjb25zdCBJc2l6ZSA9IFwiSXNpemVcIjtcbiAgZXhwb3J0IGNvbnN0IFU4ID0gXCJVOFwiO1xuICBleHBvcnQgY29uc3QgVTE2ID0gXCJVMTZcIjtcbiAgZXhwb3J0IGNvbnN0IFUzMiA9IFwiVTMyXCI7XG4gIGV4cG9ydCBjb25zdCBVNjQgPSBcIlU2NFwiO1xuICBleHBvcnQgY29uc3QgVXNpemUgPSBcIlVzaXplXCI7XG4gIGV4cG9ydCBjb25zdCBCb29sID0gXCJCb29sXCI7XG4gIGV4cG9ydCBjb25zdCBGMzIgPSBcIkYzMlwiO1xuICBleHBvcnQgY29uc3QgRjY0ID0gXCJGNjRcIjtcbiAgZXhwb3J0IGNvbnN0IFYxMjggPSBcIlYxMjhcIjtcbiAgZXhwb3J0IGNvbnN0IFN0cmluZyA9IFwiU3RyaW5nXCI7XG4gIGV4cG9ydCBjb25zdCBBcnJheSA9IFwiQXJyYXlcIjtcbiAgZXhwb3J0IGNvbnN0IEZpeGVkQXJyYXkgPSBcIkZpeGVkQXJyYXlcIjtcbiAgZXhwb3J0IGNvbnN0IFNldCA9IFwiU2V0XCI7XG4gIGV4cG9ydCBjb25zdCBNYXAgPSBcIk1hcFwiO1xuICBleHBvcnQgY29uc3QgQXJyYXlCdWZmZXJWaWV3ID0gXCJBcnJheUJ1ZmZlclZpZXdcIjtcbiAgZXhwb3J0IGNvbnN0IEFycmF5QnVmZmVyID0gXCJBcnJheUJ1ZmZlclwiO1xuICBleHBvcnQgY29uc3QgTWF0aCA9IFwiTWF0aFwiO1xuICBleHBvcnQgY29uc3QgTWF0aGYgPSBcIk1hdGhmXCI7XG4gIGV4cG9ydCBjb25zdCBJbnQ4QXJyYXkgPSBcIkludDhBcnJheVwiO1xuICBleHBvcnQgY29uc3QgSW50MTZBcnJheSA9IFwiSW50MTZBcnJheVwiO1xuICBleHBvcnQgY29uc3QgSW50MzJBcnJheSA9IFwiSW50MzJBcnJheVwiO1xuICBleHBvcnQgY29uc3QgSW50NjRBcnJheSA9IFwiSW50NjRBcnJheVwiO1xuICBleHBvcnQgY29uc3QgVWludDhBcnJheSA9IFwiVWludDhBcnJheVwiO1xuICBleHBvcnQgY29uc3QgVWludDhDbGFtcGVkQXJyYXkgPSBcIlVpbnQ4Q2xhbXBlZEFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBVaW50MTZBcnJheSA9IFwiVWludDE2QXJyYXlcIjtcbiAgZXhwb3J0IGNvbnN0IFVpbnQzMkFycmF5ID0gXCJVaW50MzJBcnJheVwiO1xuICBleHBvcnQgY29uc3QgVWludDY0QXJyYXkgPSBcIlVpbnQ2NEFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBGbG9hdDMyQXJyYXkgPSBcIkZsb2F0MzJBcnJheVwiO1xuICBleHBvcnQgY29uc3QgRmxvYXQ2NEFycmF5ID0gXCJGbG9hdDY0QXJyYXlcIjtcbiAgLy8gcnVudGltZVxuICBleHBvcnQgY29uc3QgYWJvcnQgPSBcImFib3J0XCI7XG4gIGV4cG9ydCBjb25zdCBwb3cgPSBcInBvd1wiO1xuICBleHBvcnQgY29uc3QgbW9kID0gXCJtb2RcIjtcbiAgZXhwb3J0IGNvbnN0IGFsbG9jID0gXCJfX2FsbG9jXCI7XG4gIGV4cG9ydCBjb25zdCByZWFsbG9jID0gXCJfX3JlYWxsb2NcIjtcbiAgZXhwb3J0IGNvbnN0IGZyZWUgPSBcIl9fZnJlZVwiO1xuICBleHBvcnQgY29uc3QgcmV0YWluID0gXCJfX3JldGFpblwiO1xuICBleHBvcnQgY29uc3QgcmVsZWFzZSA9IFwiX19yZWxlYXNlXCI7XG4gIGV4cG9ydCBjb25zdCBjb2xsZWN0ID0gXCJfX2NvbGxlY3RcIjtcbiAgZXhwb3J0IGNvbnN0IHR5cGVpbmZvID0gXCJfX3R5cGVpbmZvXCI7XG4gIGV4cG9ydCBjb25zdCBpbnN0YW5jZW9mXyA9IFwiX19pbnN0YW5jZW9mXCI7XG4gIGV4cG9ydCBjb25zdCB2aXNpdCA9IFwiX192aXNpdFwiO1xuICBleHBvcnQgY29uc3QgYWxsb2NBcnJheSA9IFwiX19hbGxvY0FycmF5XCI7XG59XG5cbi8vIHNoYXJlZFxuZXhwb3J0IHsgRmVhdHVyZSB9IGZyb20gXCIuLi9zdGQvYXNzZW1ibHkvc2hhcmVkL2ZlYXR1cmVcIjtcbmV4cG9ydCB7IFRhcmdldCB9IGZyb20gXCIuLi9zdGQvYXNzZW1ibHkvc2hhcmVkL3RhcmdldFwiO1xuZXhwb3J0IHsgVHlwZWluZm8sIFR5cGVpbmZvRmxhZ3MgfSBmcm9tIFwiLi4vc3RkL2Fzc2VtYmx5L3NoYXJlZC90eXBlaW5mb1wiO1xuIl19

/***/ }),

/***/ "../src/diagnosticMessages.generated.ts":
/*!**********************************************!*\
  !*** ../src/diagnosticMessages.generated.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Generated from diagnosticsMessages.json. Do not edit.
 * @module diagnostics
 */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
/** Enum of available diagnostic codes. */
var DiagnosticCode;
(function (DiagnosticCode) {
    DiagnosticCode[DiagnosticCode["Operation_not_supported"] = 100] = "Operation_not_supported";
    DiagnosticCode[DiagnosticCode["Operation_is_unsafe"] = 101] = "Operation_is_unsafe";
    DiagnosticCode[DiagnosticCode["User_defined_0"] = 102] = "User_defined_0";
    DiagnosticCode[DiagnosticCode["Conversion_from_type_0_to_1_requires_an_explicit_cast"] = 200] = "Conversion_from_type_0_to_1_requires_an_explicit_cast";
    DiagnosticCode[DiagnosticCode["Conversion_from_type_0_to_1_will_require_an_explicit_cast_when_switching_between_32_64_bit"] = 201] = "Conversion_from_type_0_to_1_will_require_an_explicit_cast_when_switching_between_32_64_bit";
    DiagnosticCode[DiagnosticCode["Type_0_cannot_be_changed_to_type_1"] = 202] = "Type_0_cannot_be_changed_to_type_1";
    DiagnosticCode[DiagnosticCode["Type_0_cannot_be_reinterpreted_as_type_1"] = 203] = "Type_0_cannot_be_reinterpreted_as_type_1";
    DiagnosticCode[DiagnosticCode["Basic_type_0_cannot_be_nullable"] = 204] = "Basic_type_0_cannot_be_nullable";
    DiagnosticCode[DiagnosticCode["Cannot_export_a_mutable_global"] = 205] = "Cannot_export_a_mutable_global";
    DiagnosticCode[DiagnosticCode["Mutable_value_cannot_be_inlined"] = 206] = "Mutable_value_cannot_be_inlined";
    DiagnosticCode[DiagnosticCode["Unmanaged_classes_cannot_extend_managed_classes_and_vice_versa"] = 207] = "Unmanaged_classes_cannot_extend_managed_classes_and_vice_versa";
    DiagnosticCode[DiagnosticCode["Unmanaged_classes_cannot_implement_interfaces"] = 208] = "Unmanaged_classes_cannot_implement_interfaces";
    DiagnosticCode[DiagnosticCode["Invalid_regular_expression_flags"] = 209] = "Invalid_regular_expression_flags";
    DiagnosticCode[DiagnosticCode["Implementation_0_must_match_the_signature_1"] = 210] = "Implementation_0_must_match_the_signature_1";
    DiagnosticCode[DiagnosticCode["Class_0_is_sealed_and_cannot_be_extended"] = 211] = "Class_0_is_sealed_and_cannot_be_extended";
    DiagnosticCode[DiagnosticCode["Decorator_0_is_not_valid_here"] = 212] = "Decorator_0_is_not_valid_here";
    DiagnosticCode[DiagnosticCode["Duplicate_decorator"] = 213] = "Duplicate_decorator";
    DiagnosticCode[DiagnosticCode["An_allocator_must_be_present_to_use_0"] = 214] = "An_allocator_must_be_present_to_use_0";
    DiagnosticCode[DiagnosticCode["Optional_parameter_must_have_an_initializer"] = 215] = "Optional_parameter_must_have_an_initializer";
    DiagnosticCode[DiagnosticCode["Constructor_of_class_0_must_not_require_any_arguments"] = 216] = "Constructor_of_class_0_must_not_require_any_arguments";
    DiagnosticCode[DiagnosticCode["Function_0_cannot_be_inlined_into_itself"] = 217] = "Function_0_cannot_be_inlined_into_itself";
    DiagnosticCode[DiagnosticCode["Cannot_access_method_0_without_calling_it_as_it_requires_this_to_be_set"] = 218] = "Cannot_access_method_0_without_calling_it_as_it_requires_this_to_be_set";
    DiagnosticCode[DiagnosticCode["Optional_properties_are_not_supported"] = 219] = "Optional_properties_are_not_supported";
    DiagnosticCode[DiagnosticCode["Expression_must_be_a_compile_time_constant"] = 220] = "Expression_must_be_a_compile_time_constant";
    DiagnosticCode[DiagnosticCode["Module_cannot_have_multiple_start_functions"] = 221] = "Module_cannot_have_multiple_start_functions";
    DiagnosticCode[DiagnosticCode["_0_must_be_a_value_between_1_and_2_inclusive"] = 222] = "_0_must_be_a_value_between_1_and_2_inclusive";
    DiagnosticCode[DiagnosticCode["_0_must_be_a_power_of_two"] = 223] = "_0_must_be_a_power_of_two";
    DiagnosticCode[DiagnosticCode["Expression_is_unsafe"] = 224] = "Expression_is_unsafe";
    DiagnosticCode[DiagnosticCode["Expression_is_never_null"] = 225] = "Expression_is_never_null";
    DiagnosticCode[DiagnosticCode["Unterminated_string_literal"] = 1002] = "Unterminated_string_literal";
    DiagnosticCode[DiagnosticCode["Identifier_expected"] = 1003] = "Identifier_expected";
    DiagnosticCode[DiagnosticCode["_0_expected"] = 1005] = "_0_expected";
    DiagnosticCode[DiagnosticCode["A_file_cannot_have_a_reference_to_itself"] = 1006] = "A_file_cannot_have_a_reference_to_itself";
    DiagnosticCode[DiagnosticCode["Trailing_comma_not_allowed"] = 1009] = "Trailing_comma_not_allowed";
    DiagnosticCode[DiagnosticCode["Unexpected_token"] = 1012] = "Unexpected_token";
    DiagnosticCode[DiagnosticCode["A_rest_parameter_must_be_last_in_a_parameter_list"] = 1014] = "A_rest_parameter_must_be_last_in_a_parameter_list";
    DiagnosticCode[DiagnosticCode["Parameter_cannot_have_question_mark_and_initializer"] = 1015] = "Parameter_cannot_have_question_mark_and_initializer";
    DiagnosticCode[DiagnosticCode["A_required_parameter_cannot_follow_an_optional_parameter"] = 1016] = "A_required_parameter_cannot_follow_an_optional_parameter";
    DiagnosticCode[DiagnosticCode["Statements_are_not_allowed_in_ambient_contexts"] = 1036] = "Statements_are_not_allowed_in_ambient_contexts";
    DiagnosticCode[DiagnosticCode["Initializers_are_not_allowed_in_ambient_contexts"] = 1039] = "Initializers_are_not_allowed_in_ambient_contexts";
    DiagnosticCode[DiagnosticCode["_0_modifier_cannot_be_used_here"] = 1042] = "_0_modifier_cannot_be_used_here";
    DiagnosticCode[DiagnosticCode["A_rest_parameter_cannot_be_optional"] = 1047] = "A_rest_parameter_cannot_be_optional";
    DiagnosticCode[DiagnosticCode["A_rest_parameter_cannot_have_an_initializer"] = 1048] = "A_rest_parameter_cannot_have_an_initializer";
    DiagnosticCode[DiagnosticCode["A_set_accessor_must_have_exactly_one_parameter"] = 1049] = "A_set_accessor_must_have_exactly_one_parameter";
    DiagnosticCode[DiagnosticCode["A_set_accessor_parameter_cannot_have_an_initializer"] = 1052] = "A_set_accessor_parameter_cannot_have_an_initializer";
    DiagnosticCode[DiagnosticCode["A_get_accessor_cannot_have_parameters"] = 1054] = "A_get_accessor_cannot_have_parameters";
    DiagnosticCode[DiagnosticCode["Enum_member_must_have_initializer"] = 1061] = "Enum_member_must_have_initializer";
    DiagnosticCode[DiagnosticCode["Type_parameters_cannot_appear_on_a_constructor_declaration"] = 1092] = "Type_parameters_cannot_appear_on_a_constructor_declaration";
    DiagnosticCode[DiagnosticCode["Type_annotation_cannot_appear_on_a_constructor_declaration"] = 1093] = "Type_annotation_cannot_appear_on_a_constructor_declaration";
    DiagnosticCode[DiagnosticCode["An_accessor_cannot_have_type_parameters"] = 1094] = "An_accessor_cannot_have_type_parameters";
    DiagnosticCode[DiagnosticCode["A_set_accessor_cannot_have_a_return_type_annotation"] = 1095] = "A_set_accessor_cannot_have_a_return_type_annotation";
    DiagnosticCode[DiagnosticCode["Type_parameter_list_cannot_be_empty"] = 1098] = "Type_parameter_list_cannot_be_empty";
    DiagnosticCode[DiagnosticCode["A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement"] = 1104] = "A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement";
    DiagnosticCode[DiagnosticCode["A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement"] = 1105] = "A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement";
    DiagnosticCode[DiagnosticCode["A_return_statement_can_only_be_used_within_a_function_body"] = 1108] = "A_return_statement_can_only_be_used_within_a_function_body";
    DiagnosticCode[DiagnosticCode["Expression_expected"] = 1109] = "Expression_expected";
    DiagnosticCode[DiagnosticCode["Type_expected"] = 1110] = "Type_expected";
    DiagnosticCode[DiagnosticCode["A_default_clause_cannot_appear_more_than_once_in_a_switch_statement"] = 1113] = "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement";
    DiagnosticCode[DiagnosticCode["Duplicate_label_0"] = 1114] = "Duplicate_label_0";
    DiagnosticCode[DiagnosticCode["An_export_assignment_cannot_have_modifiers"] = 1120] = "An_export_assignment_cannot_have_modifiers";
    DiagnosticCode[DiagnosticCode["Octal_literals_are_not_allowed_in_strict_mode"] = 1121] = "Octal_literals_are_not_allowed_in_strict_mode";
    DiagnosticCode[DiagnosticCode["Digit_expected"] = 1124] = "Digit_expected";
    DiagnosticCode[DiagnosticCode["Hexadecimal_digit_expected"] = 1125] = "Hexadecimal_digit_expected";
    DiagnosticCode[DiagnosticCode["Unexpected_end_of_text"] = 1126] = "Unexpected_end_of_text";
    DiagnosticCode[DiagnosticCode["Invalid_character"] = 1127] = "Invalid_character";
    DiagnosticCode[DiagnosticCode["_case_or_default_expected"] = 1130] = "_case_or_default_expected";
    DiagnosticCode[DiagnosticCode["_super_must_be_followed_by_an_argument_list_or_member_access"] = 1034] = "_super_must_be_followed_by_an_argument_list_or_member_access";
    DiagnosticCode[DiagnosticCode["A_declare_modifier_cannot_be_used_in_an_already_ambient_context"] = 1038] = "A_declare_modifier_cannot_be_used_in_an_already_ambient_context";
    DiagnosticCode[DiagnosticCode["Type_argument_expected"] = 1140] = "Type_argument_expected";
    DiagnosticCode[DiagnosticCode["String_literal_expected"] = 1141] = "String_literal_expected";
    DiagnosticCode[DiagnosticCode["Line_break_not_permitted_here"] = 1142] = "Line_break_not_permitted_here";
    DiagnosticCode[DiagnosticCode["Declaration_expected"] = 1146] = "Declaration_expected";
    DiagnosticCode[DiagnosticCode["_const_declarations_must_be_initialized"] = 1155] = "_const_declarations_must_be_initialized";
    DiagnosticCode[DiagnosticCode["Unterminated_regular_expression_literal"] = 1161] = "Unterminated_regular_expression_literal";
    DiagnosticCode[DiagnosticCode["Interface_declaration_cannot_have_implements_clause"] = 1176] = "Interface_declaration_cannot_have_implements_clause";
    DiagnosticCode[DiagnosticCode["Binary_digit_expected"] = 1177] = "Binary_digit_expected";
    DiagnosticCode[DiagnosticCode["Octal_digit_expected"] = 1178] = "Octal_digit_expected";
    DiagnosticCode[DiagnosticCode["An_implementation_cannot_be_declared_in_ambient_contexts"] = 1183] = "An_implementation_cannot_be_declared_in_ambient_contexts";
    DiagnosticCode[DiagnosticCode["An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive"] = 1198] = "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive";
    DiagnosticCode[DiagnosticCode["Unterminated_Unicode_escape_sequence"] = 1199] = "Unterminated_Unicode_escape_sequence";
    DiagnosticCode[DiagnosticCode["Decorators_are_not_valid_here"] = 1206] = "Decorators_are_not_valid_here";
    DiagnosticCode[DiagnosticCode["_abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration"] = 1242] = "_abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration";
    DiagnosticCode[DiagnosticCode["Method_0_cannot_have_an_implementation_because_it_is_marked_abstract"] = 1245] = "Method_0_cannot_have_an_implementation_because_it_is_marked_abstract";
    DiagnosticCode[DiagnosticCode["A_definite_assignment_assertion_is_not_permitted_in_this_context"] = 1255] = "A_definite_assignment_assertion_is_not_permitted_in_this_context";
    DiagnosticCode[DiagnosticCode["A_class_may_only_extend_another_class"] = 1311] = "A_class_may_only_extend_another_class";
    DiagnosticCode[DiagnosticCode["A_parameter_property_cannot_be_declared_using_a_rest_parameter"] = 1317] = "A_parameter_property_cannot_be_declared_using_a_rest_parameter";
    DiagnosticCode[DiagnosticCode["Duplicate_identifier_0"] = 2300] = "Duplicate_identifier_0";
    DiagnosticCode[DiagnosticCode["Cannot_find_name_0"] = 2304] = "Cannot_find_name_0";
    DiagnosticCode[DiagnosticCode["Module_0_has_no_exported_member_1"] = 2305] = "Module_0_has_no_exported_member_1";
    DiagnosticCode[DiagnosticCode["Generic_type_0_requires_1_type_argument_s"] = 2314] = "Generic_type_0_requires_1_type_argument_s";
    DiagnosticCode[DiagnosticCode["Type_0_is_not_generic"] = 2315] = "Type_0_is_not_generic";
    DiagnosticCode[DiagnosticCode["Type_0_is_not_assignable_to_type_1"] = 2322] = "Type_0_is_not_assignable_to_type_1";
    DiagnosticCode[DiagnosticCode["Index_signature_is_missing_in_type_0"] = 2329] = "Index_signature_is_missing_in_type_0";
    DiagnosticCode[DiagnosticCode["_this_cannot_be_referenced_in_current_location"] = 2332] = "_this_cannot_be_referenced_in_current_location";
    DiagnosticCode[DiagnosticCode["_super_can_only_be_referenced_in_a_derived_class"] = 2335] = "_super_can_only_be_referenced_in_a_derived_class";
    DiagnosticCode[DiagnosticCode["Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors"] = 2337] = "Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors";
    DiagnosticCode[DiagnosticCode["Property_0_does_not_exist_on_type_1"] = 2339] = "Property_0_does_not_exist_on_type_1";
    DiagnosticCode[DiagnosticCode["Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures"] = 2349] = "Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures";
    DiagnosticCode[DiagnosticCode["Cannot_use_new_with_an_expression_whose_type_lacks_a_construct_signature"] = 2351] = "Cannot_use_new_with_an_expression_whose_type_lacks_a_construct_signature";
    DiagnosticCode[DiagnosticCode["A_function_whose_declared_type_is_not_void_must_return_a_value"] = 2355] = "A_function_whose_declared_type_is_not_void_must_return_a_value";
    DiagnosticCode[DiagnosticCode["The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access"] = 2357] = "The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access";
    DiagnosticCode[DiagnosticCode["The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access"] = 2364] = "The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access";
    DiagnosticCode[DiagnosticCode["Operator_0_cannot_be_applied_to_types_1_and_2"] = 2365] = "Operator_0_cannot_be_applied_to_types_1_and_2";
    DiagnosticCode[DiagnosticCode["A_super_call_must_be_the_first_statement_in_the_constructor"] = 2376] = "A_super_call_must_be_the_first_statement_in_the_constructor";
    DiagnosticCode[DiagnosticCode["Constructors_for_derived_classes_must_contain_a_super_call"] = 2377] = "Constructors_for_derived_classes_must_contain_a_super_call";
    DiagnosticCode[DiagnosticCode["_get_and_set_accessor_must_have_the_same_type"] = 2380] = "_get_and_set_accessor_must_have_the_same_type";
    DiagnosticCode[DiagnosticCode["Constructor_implementation_is_missing"] = 2390] = "Constructor_implementation_is_missing";
    DiagnosticCode[DiagnosticCode["Function_implementation_is_missing_or_not_immediately_following_the_declaration"] = 2391] = "Function_implementation_is_missing_or_not_immediately_following_the_declaration";
    DiagnosticCode[DiagnosticCode["Multiple_constructor_implementations_are_not_allowed"] = 2392] = "Multiple_constructor_implementations_are_not_allowed";
    DiagnosticCode[DiagnosticCode["Duplicate_function_implementation"] = 2393] = "Duplicate_function_implementation";
    DiagnosticCode[DiagnosticCode["Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local"] = 2395] = "Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local";
    DiagnosticCode[DiagnosticCode["A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged"] = 2434] = "A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged";
    DiagnosticCode[DiagnosticCode["Type_0_has_no_property_1"] = 2460] = "Type_0_has_no_property_1";
    DiagnosticCode[DiagnosticCode["The_0_operator_cannot_be_applied_to_type_1"] = 2469] = "The_0_operator_cannot_be_applied_to_type_1";
    DiagnosticCode[DiagnosticCode["In_const_enum_declarations_member_initializer_must_be_constant_expression"] = 2474] = "In_const_enum_declarations_member_initializer_must_be_constant_expression";
    DiagnosticCode[DiagnosticCode["Export_declaration_conflicts_with_exported_declaration_of_0"] = 2484] = "Export_declaration_conflicts_with_exported_declaration_of_0";
    DiagnosticCode[DiagnosticCode["Object_is_possibly_null"] = 2531] = "Object_is_possibly_null";
    DiagnosticCode[DiagnosticCode["Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property"] = 2540] = "Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property";
    DiagnosticCode[DiagnosticCode["The_target_of_an_assignment_must_be_a_variable_or_a_property_access"] = 2541] = "The_target_of_an_assignment_must_be_a_variable_or_a_property_access";
    DiagnosticCode[DiagnosticCode["Index_signature_in_type_0_only_permits_reading"] = 2542] = "Index_signature_in_type_0_only_permits_reading";
    DiagnosticCode[DiagnosticCode["Expected_0_arguments_but_got_1"] = 2554] = "Expected_0_arguments_but_got_1";
    DiagnosticCode[DiagnosticCode["Expected_at_least_0_arguments_but_got_1"] = 2555] = "Expected_at_least_0_arguments_but_got_1";
    DiagnosticCode[DiagnosticCode["Expected_0_type_arguments_but_got_1"] = 2558] = "Expected_0_type_arguments_but_got_1";
    DiagnosticCode[DiagnosticCode["A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums"] = 2651] = "A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums";
    DiagnosticCode[DiagnosticCode["Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration"] = 2673] = "Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration";
    DiagnosticCode[DiagnosticCode["Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration"] = 2674] = "Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration";
    DiagnosticCode[DiagnosticCode["Namespace_0_has_no_exported_member_1"] = 2694] = "Namespace_0_has_no_exported_member_1";
    DiagnosticCode[DiagnosticCode["Required_type_parameters_may_not_follow_optional_type_parameters"] = 2706] = "Required_type_parameters_may_not_follow_optional_type_parameters";
    DiagnosticCode[DiagnosticCode["Duplicate_property_0"] = 2718] = "Duplicate_property_0";
    DiagnosticCode[DiagnosticCode["Type_0_has_no_call_signatures"] = 2757] = "Type_0_has_no_call_signatures";
    DiagnosticCode[DiagnosticCode["File_0_not_found"] = 6054] = "File_0_not_found";
    DiagnosticCode[DiagnosticCode["Numeric_separators_are_not_allowed_here"] = 6188] = "Numeric_separators_are_not_allowed_here";
    DiagnosticCode[DiagnosticCode["Multiple_consecutive_numeric_separators_are_not_permitted"] = 6189] = "Multiple_consecutive_numeric_separators_are_not_permitted";
    DiagnosticCode[DiagnosticCode["_super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class"] = 17009] = "_super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class";
    DiagnosticCode[DiagnosticCode["_super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class"] = 17011] = "_super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class";
})(DiagnosticCode = exports.DiagnosticCode || (exports.DiagnosticCode = {}));
/** Translates a diagnostic code to its respective string. */
function diagnosticCodeToString(code) {
    switch (code) {
        case 100: return "Operation not supported.";
        case 101: return "Operation is unsafe.";
        case 102: return "User-defined: {0}";
        case 200: return "Conversion from type '{0}' to '{1}' requires an explicit cast.";
        case 201: return "Conversion from type '{0}' to '{1}' will require an explicit cast when switching between 32/64-bit.";
        case 202: return "Type '{0}' cannot be changed to type '{1}'.";
        case 203: return "Type '{0}' cannot be reinterpreted as type '{1}'.";
        case 204: return "Basic type '{0}' cannot be nullable.";
        case 205: return "Cannot export a mutable global.";
        case 206: return "Mutable value cannot be inlined.";
        case 207: return "Unmanaged classes cannot extend managed classes and vice-versa.";
        case 208: return "Unmanaged classes cannot implement interfaces.";
        case 209: return "Invalid regular expression flags.";
        case 210: return "Implementation '{0}' must match the signature '{1}'.";
        case 211: return "Class '{0}' is sealed and cannot be extended.";
        case 212: return "Decorator '{0}' is not valid here.";
        case 213: return "Duplicate decorator.";
        case 214: return "An allocator must be present to use '{0}'.";
        case 215: return "Optional parameter must have an initializer.";
        case 216: return "Constructor of class '{0}' must not require any arguments.";
        case 217: return "Function '{0}' cannot be inlined into itself.";
        case 218: return "Cannot access method '{0}' without calling it as it requires 'this' to be set.";
        case 219: return "Optional properties are not supported.";
        case 220: return "Expression must be a compile-time constant.";
        case 221: return "Module cannot have multiple start functions.";
        case 222: return "'{0}' must be a value between '{1}' and '{2}' inclusive.";
        case 223: return "'{0}' must be a power of two.";
        case 224: return "Expression is unsafe.";
        case 225: return "Expression is never 'null'.";
        case 1002: return "Unterminated string literal.";
        case 1003: return "Identifier expected.";
        case 1005: return "'{0}' expected.";
        case 1006: return "A file cannot have a reference to itself.";
        case 1009: return "Trailing comma not allowed.";
        case 1012: return "Unexpected token.";
        case 1014: return "A rest parameter must be last in a parameter list.";
        case 1015: return "Parameter cannot have question mark and initializer.";
        case 1016: return "A required parameter cannot follow an optional parameter.";
        case 1036: return "Statements are not allowed in ambient contexts.";
        case 1039: return "Initializers are not allowed in ambient contexts.";
        case 1042: return "'{0}' modifier cannot be used here.";
        case 1047: return "A rest parameter cannot be optional.";
        case 1048: return "A rest parameter cannot have an initializer.";
        case 1049: return "A 'set' accessor must have exactly one parameter.";
        case 1052: return "A 'set' accessor parameter cannot have an initializer.";
        case 1054: return "A 'get' accessor cannot have parameters.";
        case 1061: return "Enum member must have initializer.";
        case 1092: return "Type parameters cannot appear on a constructor declaration.";
        case 1093: return "Type annotation cannot appear on a constructor declaration.";
        case 1094: return "An accessor cannot have type parameters.";
        case 1095: return "A 'set' accessor cannot have a return type annotation.";
        case 1098: return "Type parameter list cannot be empty.";
        case 1104: return "A 'continue' statement can only be used within an enclosing iteration statement.";
        case 1105: return "A 'break' statement can only be used within an enclosing iteration or switch statement.";
        case 1108: return "A 'return' statement can only be used within a function body.";
        case 1109: return "Expression expected.";
        case 1110: return "Type expected.";
        case 1113: return "A 'default' clause cannot appear more than once in a 'switch' statement.";
        case 1114: return "Duplicate label '{0}'.";
        case 1120: return "An export assignment cannot have modifiers.";
        case 1121: return "Octal literals are not allowed in strict mode.";
        case 1124: return "Digit expected.";
        case 1125: return "Hexadecimal digit expected.";
        case 1126: return "Unexpected end of text.";
        case 1127: return "Invalid character.";
        case 1130: return "'case' or 'default' expected.";
        case 1034: return "'super' must be followed by an argument list or member access.";
        case 1038: return "A 'declare' modifier cannot be used in an already ambient context.";
        case 1140: return "Type argument expected.";
        case 1141: return "String literal expected.";
        case 1142: return "Line break not permitted here.";
        case 1146: return "Declaration expected.";
        case 1155: return "'const' declarations must be initialized.";
        case 1161: return "Unterminated regular expression literal.";
        case 1176: return "Interface declaration cannot have 'implements' clause.";
        case 1177: return "Binary digit expected.";
        case 1178: return "Octal digit expected.";
        case 1183: return "An implementation cannot be declared in ambient contexts.";
        case 1198: return "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive.";
        case 1199: return "Unterminated Unicode escape sequence.";
        case 1206: return "Decorators are not valid here.";
        case 1242: return "'abstract' modifier can only appear on a class, method, or property declaration.";
        case 1245: return "Method '{0}' cannot have an implementation because it is marked abstract.";
        case 1255: return "A definite assignment assertion '!' is not permitted in this context.";
        case 1311: return "A class may only extend another class.";
        case 1317: return "A parameter property cannot be declared using a rest parameter.";
        case 2300: return "Duplicate identifier '{0}'.";
        case 2304: return "Cannot find name '{0}'.";
        case 2305: return "Module '{0}' has no exported member '{1}'.";
        case 2314: return "Generic type '{0}' requires {1} type argument(s).";
        case 2315: return "Type '{0}' is not generic.";
        case 2322: return "Type '{0}' is not assignable to type '{1}'.";
        case 2329: return "Index signature is missing in type '{0}'.";
        case 2332: return "'this' cannot be referenced in current location.";
        case 2335: return "'super' can only be referenced in a derived class.";
        case 2337: return "Super calls are not permitted outside constructors or in nested functions inside constructors.";
        case 2339: return "Property '{0}' does not exist on type '{1}'.";
        case 2349: return "Cannot invoke an expression whose type lacks a call signature. Type '{0}' has no compatible call signatures.";
        case 2351: return "Cannot use 'new' with an expression whose type lacks a construct signature.";
        case 2355: return "A function whose declared type is not 'void' must return a value.";
        case 2357: return "The operand of an increment or decrement operator must be a variable or a property access.";
        case 2364: return "The left-hand side of an assignment expression must be a variable or a property access.";
        case 2365: return "Operator '{0}' cannot be applied to types '{1}' and '{2}'.";
        case 2376: return "A 'super' call must be the first statement in the constructor.";
        case 2377: return "Constructors for derived classes must contain a 'super' call.";
        case 2380: return "'get' and 'set' accessor must have the same type.";
        case 2390: return "Constructor implementation is missing.";
        case 2391: return "Function implementation is missing or not immediately following the declaration.";
        case 2392: return "Multiple constructor implementations are not allowed.";
        case 2393: return "Duplicate function implementation.";
        case 2395: return "Individual declarations in merged declaration '{0}' must be all exported or all local.";
        case 2434: return "A namespace declaration cannot be located prior to a class or function with which it is merged.";
        case 2460: return "Type '{0}' has no property '{1}'.";
        case 2469: return "The '{0}' operator cannot be applied to type '{1}'.";
        case 2474: return "In 'const' enum declarations member initializer must be constant expression.";
        case 2484: return "Export declaration conflicts with exported declaration of '{0}'.";
        case 2531: return "Object is possibly 'null'.";
        case 2540: return "Cannot assign to '{0}' because it is a constant or a read-only property.";
        case 2541: return "The target of an assignment must be a variable or a property access.";
        case 2542: return "Index signature in type '{0}' only permits reading.";
        case 2554: return "Expected {0} arguments, but got {1}.";
        case 2555: return "Expected at least {0} arguments, but got {1}.";
        case 2558: return "Expected {0} type arguments, but got {1}.";
        case 2651: return "A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums.";
        case 2673: return "Constructor of class '{0}' is private and only accessible within the class declaration.";
        case 2674: return "Constructor of class '{0}' is protected and only accessible within the class declaration.";
        case 2694: return "Namespace '{0}' has no exported member '{1}'.";
        case 2706: return "Required type parameters may not follow optional type parameters.";
        case 2718: return "Duplicate property '{0}'.";
        case 2757: return "Type '{0}' has no call signatures.";
        case 6054: return "File '{0}' not found.";
        case 6188: return "Numeric separators are not allowed here.";
        case 6189: return "Multiple consecutive numeric separators are not permitted.";
        case 17009: return "'super' must be called before accessing 'this' in the constructor of a derived class.";
        case 17011: return "'super' must be called before accessing a property of 'super' in the constructor of a derived class.";
        default: return "";
    }
}
exports.diagnosticCodeToString = diagnosticCodeToString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY01lc3NhZ2VzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFnbm9zdGljTWVzc2FnZXMuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0csQ0FBQSxLQUFLOztBQUVSLG9DQUFvQztBQUVwQywwQ0FBMEM7QUFDMUMsSUFBWSxjQXdJWDtBQXhJRCxXQUFZLGNBQWM7SUFDeEIsMkZBQTZCLENBQUE7SUFDN0IsbUZBQXlCLENBQUE7SUFDekIseUVBQW9CLENBQUE7SUFDcEIsdUpBQTJELENBQUE7SUFDM0QsaU9BQWdHLENBQUE7SUFDaEcsaUhBQXdDLENBQUE7SUFDeEMsNkhBQThDLENBQUE7SUFDOUMsMkdBQXFDLENBQUE7SUFDckMseUdBQW9DLENBQUE7SUFDcEMsMkdBQXFDLENBQUE7SUFDckMseUtBQW9FLENBQUE7SUFDcEUsdUlBQW1ELENBQUE7SUFDbkQsNkdBQXNDLENBQUE7SUFDdEMsbUlBQWlELENBQUE7SUFDakQsNkhBQThDLENBQUE7SUFDOUMsdUdBQW1DLENBQUE7SUFDbkMsbUZBQXlCLENBQUE7SUFDekIsdUhBQTJDLENBQUE7SUFDM0MsbUlBQWlELENBQUE7SUFDakQsdUpBQTJELENBQUE7SUFDM0QsNkhBQThDLENBQUE7SUFDOUMsMkxBQTZFLENBQUE7SUFDN0UsdUhBQTJDLENBQUE7SUFDM0MsaUlBQWdELENBQUE7SUFDaEQsbUlBQWlELENBQUE7SUFDakQscUlBQWtELENBQUE7SUFDbEQsK0ZBQStCLENBQUE7SUFDL0IscUZBQTBCLENBQUE7SUFDMUIsNkZBQThCLENBQUE7SUFDOUIsb0dBQWtDLENBQUE7SUFDbEMsb0ZBQTBCLENBQUE7SUFDMUIsb0VBQWtCLENBQUE7SUFDbEIsOEhBQStDLENBQUE7SUFDL0Msa0dBQWlDLENBQUE7SUFDakMsOEVBQXVCLENBQUE7SUFDdkIsZ0pBQXdELENBQUE7SUFDeEQsb0pBQTBELENBQUE7SUFDMUQsOEpBQStELENBQUE7SUFDL0QsMElBQXFELENBQUE7SUFDckQsOElBQXVELENBQUE7SUFDdkQsNEdBQXNDLENBQUE7SUFDdEMsb0hBQTBDLENBQUE7SUFDMUMsb0lBQWtELENBQUE7SUFDbEQsMElBQXFELENBQUE7SUFDckQsb0pBQTBELENBQUE7SUFDMUQsd0hBQTRDLENBQUE7SUFDNUMsZ0hBQXdDLENBQUE7SUFDeEMsa0tBQWlFLENBQUE7SUFDakUsa0tBQWlFLENBQUE7SUFDakUsNEhBQThDLENBQUE7SUFDOUMsb0pBQTBELENBQUE7SUFDMUQsb0hBQTBDLENBQUE7SUFDMUMsd01BQW9GLENBQUE7SUFDcEYsc05BQTJGLENBQUE7SUFDM0Ysa0tBQWlFLENBQUE7SUFDakUsb0ZBQTBCLENBQUE7SUFDMUIsd0VBQW9CLENBQUE7SUFDcEIsb0xBQTBFLENBQUE7SUFDMUUsZ0ZBQXdCLENBQUE7SUFDeEIsa0lBQWlELENBQUE7SUFDakQsd0lBQW9ELENBQUE7SUFDcEQsMEVBQXFCLENBQUE7SUFDckIsa0dBQWlDLENBQUE7SUFDakMsMEZBQTZCLENBQUE7SUFDN0IsZ0ZBQXdCLENBQUE7SUFDeEIsZ0dBQWdDLENBQUE7SUFDaEMsc0tBQW1FLENBQUE7SUFDbkUsNEtBQXNFLENBQUE7SUFDdEUsMEZBQTZCLENBQUE7SUFDN0IsNEZBQThCLENBQUE7SUFDOUIsd0dBQW9DLENBQUE7SUFDcEMsc0ZBQTJCLENBQUE7SUFDM0IsNEhBQThDLENBQUE7SUFDOUMsNEhBQThDLENBQUE7SUFDOUMsb0pBQTBELENBQUE7SUFDMUQsd0ZBQTRCLENBQUE7SUFDNUIsc0ZBQTJCLENBQUE7SUFDM0IsOEpBQStELENBQUE7SUFDL0Qsb01BQWtGLENBQUE7SUFDbEYsc0hBQTJDLENBQUE7SUFDM0Msd0dBQW9DLENBQUE7SUFDcEMsc01BQW1GLENBQUE7SUFDbkYsc0xBQTJFLENBQUE7SUFDM0UsOEtBQXVFLENBQUE7SUFDdkUsd0hBQTRDLENBQUE7SUFDNUMsMEtBQXFFLENBQUE7SUFDckUsMEZBQTZCLENBQUE7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QWtJLENBQUM7UUFDckosS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLHlGQUF5RixDQUFDO1FBQzVHLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTywyRkFBMkYsQ0FBQztRQUM5RyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sK0NBQStDLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLG1FQUFtRSxDQUFDO1FBQ3RGLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTywyQkFBMkIsQ0FBQztRQUM5QyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sb0NBQW9DLENBQUM7UUFDdkQsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLHVCQUF1QixDQUFDO1FBQzFDLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTywwQ0FBMEMsQ0FBQztRQUM3RCxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sNERBQTRELENBQUM7UUFDL0UsS0FBSyxLQUFLLENBQUMsQ0FBQyxPQUFPLHVGQUF1RixDQUFDO1FBQzNHLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyxzR0FBc0csQ0FBQztRQUMxSCxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNwQjtBQUNILENBQUM7QUEzSUQsd0RBMklDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZWQgZnJvbSBkaWFnbm9zdGljc01lc3NhZ2VzLmpzb24uIERvIG5vdCBlZGl0LlxuICogQG1vZHVsZSBkaWFnbm9zdGljc1xuICovLyoqKi9cblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbi8qKiBFbnVtIG9mIGF2YWlsYWJsZSBkaWFnbm9zdGljIGNvZGVzLiAqL1xuZXhwb3J0IGVudW0gRGlhZ25vc3RpY0NvZGUge1xuICBPcGVyYXRpb25fbm90X3N1cHBvcnRlZCA9IDEwMCxcbiAgT3BlcmF0aW9uX2lzX3Vuc2FmZSA9IDEwMSxcbiAgVXNlcl9kZWZpbmVkXzAgPSAxMDIsXG4gIENvbnZlcnNpb25fZnJvbV90eXBlXzBfdG9fMV9yZXF1aXJlc19hbl9leHBsaWNpdF9jYXN0ID0gMjAwLFxuICBDb252ZXJzaW9uX2Zyb21fdHlwZV8wX3RvXzFfd2lsbF9yZXF1aXJlX2FuX2V4cGxpY2l0X2Nhc3Rfd2hlbl9zd2l0Y2hpbmdfYmV0d2Vlbl8zMl82NF9iaXQgPSAyMDEsXG4gIFR5cGVfMF9jYW5ub3RfYmVfY2hhbmdlZF90b190eXBlXzEgPSAyMDIsXG4gIFR5cGVfMF9jYW5ub3RfYmVfcmVpbnRlcnByZXRlZF9hc190eXBlXzEgPSAyMDMsXG4gIEJhc2ljX3R5cGVfMF9jYW5ub3RfYmVfbnVsbGFibGUgPSAyMDQsXG4gIENhbm5vdF9leHBvcnRfYV9tdXRhYmxlX2dsb2JhbCA9IDIwNSxcbiAgTXV0YWJsZV92YWx1ZV9jYW5ub3RfYmVfaW5saW5lZCA9IDIwNixcbiAgVW5tYW5hZ2VkX2NsYXNzZXNfY2Fubm90X2V4dGVuZF9tYW5hZ2VkX2NsYXNzZXNfYW5kX3ZpY2VfdmVyc2EgPSAyMDcsXG4gIFVubWFuYWdlZF9jbGFzc2VzX2Nhbm5vdF9pbXBsZW1lbnRfaW50ZXJmYWNlcyA9IDIwOCxcbiAgSW52YWxpZF9yZWd1bGFyX2V4cHJlc3Npb25fZmxhZ3MgPSAyMDksXG4gIEltcGxlbWVudGF0aW9uXzBfbXVzdF9tYXRjaF90aGVfc2lnbmF0dXJlXzEgPSAyMTAsXG4gIENsYXNzXzBfaXNfc2VhbGVkX2FuZF9jYW5ub3RfYmVfZXh0ZW5kZWQgPSAyMTEsXG4gIERlY29yYXRvcl8wX2lzX25vdF92YWxpZF9oZXJlID0gMjEyLFxuICBEdXBsaWNhdGVfZGVjb3JhdG9yID0gMjEzLFxuICBBbl9hbGxvY2F0b3JfbXVzdF9iZV9wcmVzZW50X3RvX3VzZV8wID0gMjE0LFxuICBPcHRpb25hbF9wYXJhbWV0ZXJfbXVzdF9oYXZlX2FuX2luaXRpYWxpemVyID0gMjE1LFxuICBDb25zdHJ1Y3Rvcl9vZl9jbGFzc18wX211c3Rfbm90X3JlcXVpcmVfYW55X2FyZ3VtZW50cyA9IDIxNixcbiAgRnVuY3Rpb25fMF9jYW5ub3RfYmVfaW5saW5lZF9pbnRvX2l0c2VsZiA9IDIxNyxcbiAgQ2Fubm90X2FjY2Vzc19tZXRob2RfMF93aXRob3V0X2NhbGxpbmdfaXRfYXNfaXRfcmVxdWlyZXNfdGhpc190b19iZV9zZXQgPSAyMTgsXG4gIE9wdGlvbmFsX3Byb3BlcnRpZXNfYXJlX25vdF9zdXBwb3J0ZWQgPSAyMTksXG4gIEV4cHJlc3Npb25fbXVzdF9iZV9hX2NvbXBpbGVfdGltZV9jb25zdGFudCA9IDIyMCxcbiAgTW9kdWxlX2Nhbm5vdF9oYXZlX211bHRpcGxlX3N0YXJ0X2Z1bmN0aW9ucyA9IDIyMSxcbiAgXzBfbXVzdF9iZV9hX3ZhbHVlX2JldHdlZW5fMV9hbmRfMl9pbmNsdXNpdmUgPSAyMjIsXG4gIF8wX211c3RfYmVfYV9wb3dlcl9vZl90d28gPSAyMjMsXG4gIEV4cHJlc3Npb25faXNfdW5zYWZlID0gMjI0LFxuICBFeHByZXNzaW9uX2lzX25ldmVyX251bGwgPSAyMjUsXG4gIFVudGVybWluYXRlZF9zdHJpbmdfbGl0ZXJhbCA9IDEwMDIsXG4gIElkZW50aWZpZXJfZXhwZWN0ZWQgPSAxMDAzLFxuICBfMF9leHBlY3RlZCA9IDEwMDUsXG4gIEFfZmlsZV9jYW5ub3RfaGF2ZV9hX3JlZmVyZW5jZV90b19pdHNlbGYgPSAxMDA2LFxuICBUcmFpbGluZ19jb21tYV9ub3RfYWxsb3dlZCA9IDEwMDksXG4gIFVuZXhwZWN0ZWRfdG9rZW4gPSAxMDEyLFxuICBBX3Jlc3RfcGFyYW1ldGVyX211c3RfYmVfbGFzdF9pbl9hX3BhcmFtZXRlcl9saXN0ID0gMTAxNCxcbiAgUGFyYW1ldGVyX2Nhbm5vdF9oYXZlX3F1ZXN0aW9uX21hcmtfYW5kX2luaXRpYWxpemVyID0gMTAxNSxcbiAgQV9yZXF1aXJlZF9wYXJhbWV0ZXJfY2Fubm90X2ZvbGxvd19hbl9vcHRpb25hbF9wYXJhbWV0ZXIgPSAxMDE2LFxuICBTdGF0ZW1lbnRzX2FyZV9ub3RfYWxsb3dlZF9pbl9hbWJpZW50X2NvbnRleHRzID0gMTAzNixcbiAgSW5pdGlhbGl6ZXJzX2FyZV9ub3RfYWxsb3dlZF9pbl9hbWJpZW50X2NvbnRleHRzID0gMTAzOSxcbiAgXzBfbW9kaWZpZXJfY2Fubm90X2JlX3VzZWRfaGVyZSA9IDEwNDIsXG4gIEFfcmVzdF9wYXJhbWV0ZXJfY2Fubm90X2JlX29wdGlvbmFsID0gMTA0NyxcbiAgQV9yZXN0X3BhcmFtZXRlcl9jYW5ub3RfaGF2ZV9hbl9pbml0aWFsaXplciA9IDEwNDgsXG4gIEFfc2V0X2FjY2Vzc29yX211c3RfaGF2ZV9leGFjdGx5X29uZV9wYXJhbWV0ZXIgPSAxMDQ5LFxuICBBX3NldF9hY2Nlc3Nvcl9wYXJhbWV0ZXJfY2Fubm90X2hhdmVfYW5faW5pdGlhbGl6ZXIgPSAxMDUyLFxuICBBX2dldF9hY2Nlc3Nvcl9jYW5ub3RfaGF2ZV9wYXJhbWV0ZXJzID0gMTA1NCxcbiAgRW51bV9tZW1iZXJfbXVzdF9oYXZlX2luaXRpYWxpemVyID0gMTA2MSxcbiAgVHlwZV9wYXJhbWV0ZXJzX2Nhbm5vdF9hcHBlYXJfb25fYV9jb25zdHJ1Y3Rvcl9kZWNsYXJhdGlvbiA9IDEwOTIsXG4gIFR5cGVfYW5ub3RhdGlvbl9jYW5ub3RfYXBwZWFyX29uX2FfY29uc3RydWN0b3JfZGVjbGFyYXRpb24gPSAxMDkzLFxuICBBbl9hY2Nlc3Nvcl9jYW5ub3RfaGF2ZV90eXBlX3BhcmFtZXRlcnMgPSAxMDk0LFxuICBBX3NldF9hY2Nlc3Nvcl9jYW5ub3RfaGF2ZV9hX3JldHVybl90eXBlX2Fubm90YXRpb24gPSAxMDk1LFxuICBUeXBlX3BhcmFtZXRlcl9saXN0X2Nhbm5vdF9iZV9lbXB0eSA9IDEwOTgsXG4gIEFfY29udGludWVfc3RhdGVtZW50X2Nhbl9vbmx5X2JlX3VzZWRfd2l0aGluX2FuX2VuY2xvc2luZ19pdGVyYXRpb25fc3RhdGVtZW50ID0gMTEwNCxcbiAgQV9icmVha19zdGF0ZW1lbnRfY2FuX29ubHlfYmVfdXNlZF93aXRoaW5fYW5fZW5jbG9zaW5nX2l0ZXJhdGlvbl9vcl9zd2l0Y2hfc3RhdGVtZW50ID0gMTEwNSxcbiAgQV9yZXR1cm5fc3RhdGVtZW50X2Nhbl9vbmx5X2JlX3VzZWRfd2l0aGluX2FfZnVuY3Rpb25fYm9keSA9IDExMDgsXG4gIEV4cHJlc3Npb25fZXhwZWN0ZWQgPSAxMTA5LFxuICBUeXBlX2V4cGVjdGVkID0gMTExMCxcbiAgQV9kZWZhdWx0X2NsYXVzZV9jYW5ub3RfYXBwZWFyX21vcmVfdGhhbl9vbmNlX2luX2Ffc3dpdGNoX3N0YXRlbWVudCA9IDExMTMsXG4gIER1cGxpY2F0ZV9sYWJlbF8wID0gMTExNCxcbiAgQW5fZXhwb3J0X2Fzc2lnbm1lbnRfY2Fubm90X2hhdmVfbW9kaWZpZXJzID0gMTEyMCxcbiAgT2N0YWxfbGl0ZXJhbHNfYXJlX25vdF9hbGxvd2VkX2luX3N0cmljdF9tb2RlID0gMTEyMSxcbiAgRGlnaXRfZXhwZWN0ZWQgPSAxMTI0LFxuICBIZXhhZGVjaW1hbF9kaWdpdF9leHBlY3RlZCA9IDExMjUsXG4gIFVuZXhwZWN0ZWRfZW5kX29mX3RleHQgPSAxMTI2LFxuICBJbnZhbGlkX2NoYXJhY3RlciA9IDExMjcsXG4gIF9jYXNlX29yX2RlZmF1bHRfZXhwZWN0ZWQgPSAxMTMwLFxuICBfc3VwZXJfbXVzdF9iZV9mb2xsb3dlZF9ieV9hbl9hcmd1bWVudF9saXN0X29yX21lbWJlcl9hY2Nlc3MgPSAxMDM0LFxuICBBX2RlY2xhcmVfbW9kaWZpZXJfY2Fubm90X2JlX3VzZWRfaW5fYW5fYWxyZWFkeV9hbWJpZW50X2NvbnRleHQgPSAxMDM4LFxuICBUeXBlX2FyZ3VtZW50X2V4cGVjdGVkID0gMTE0MCxcbiAgU3RyaW5nX2xpdGVyYWxfZXhwZWN0ZWQgPSAxMTQxLFxuICBMaW5lX2JyZWFrX25vdF9wZXJtaXR0ZWRfaGVyZSA9IDExNDIsXG4gIERlY2xhcmF0aW9uX2V4cGVjdGVkID0gMTE0NixcbiAgX2NvbnN0X2RlY2xhcmF0aW9uc19tdXN0X2JlX2luaXRpYWxpemVkID0gMTE1NSxcbiAgVW50ZXJtaW5hdGVkX3JlZ3VsYXJfZXhwcmVzc2lvbl9saXRlcmFsID0gMTE2MSxcbiAgSW50ZXJmYWNlX2RlY2xhcmF0aW9uX2Nhbm5vdF9oYXZlX2ltcGxlbWVudHNfY2xhdXNlID0gMTE3NixcbiAgQmluYXJ5X2RpZ2l0X2V4cGVjdGVkID0gMTE3NyxcbiAgT2N0YWxfZGlnaXRfZXhwZWN0ZWQgPSAxMTc4LFxuICBBbl9pbXBsZW1lbnRhdGlvbl9jYW5ub3RfYmVfZGVjbGFyZWRfaW5fYW1iaWVudF9jb250ZXh0cyA9IDExODMsXG4gIEFuX2V4dGVuZGVkX1VuaWNvZGVfZXNjYXBlX3ZhbHVlX211c3RfYmVfYmV0d2Vlbl8weDBfYW5kXzB4MTBGRkZGX2luY2x1c2l2ZSA9IDExOTgsXG4gIFVudGVybWluYXRlZF9Vbmljb2RlX2VzY2FwZV9zZXF1ZW5jZSA9IDExOTksXG4gIERlY29yYXRvcnNfYXJlX25vdF92YWxpZF9oZXJlID0gMTIwNixcbiAgX2Fic3RyYWN0X21vZGlmaWVyX2Nhbl9vbmx5X2FwcGVhcl9vbl9hX2NsYXNzX21ldGhvZF9vcl9wcm9wZXJ0eV9kZWNsYXJhdGlvbiA9IDEyNDIsXG4gIE1ldGhvZF8wX2Nhbm5vdF9oYXZlX2FuX2ltcGxlbWVudGF0aW9uX2JlY2F1c2VfaXRfaXNfbWFya2VkX2Fic3RyYWN0ID0gMTI0NSxcbiAgQV9kZWZpbml0ZV9hc3NpZ25tZW50X2Fzc2VydGlvbl9pc19ub3RfcGVybWl0dGVkX2luX3RoaXNfY29udGV4dCA9IDEyNTUsXG4gIEFfY2xhc3NfbWF5X29ubHlfZXh0ZW5kX2Fub3RoZXJfY2xhc3MgPSAxMzExLFxuICBBX3BhcmFtZXRlcl9wcm9wZXJ0eV9jYW5ub3RfYmVfZGVjbGFyZWRfdXNpbmdfYV9yZXN0X3BhcmFtZXRlciA9IDEzMTcsXG4gIER1cGxpY2F0ZV9pZGVudGlmaWVyXzAgPSAyMzAwLFxuICBDYW5ub3RfZmluZF9uYW1lXzAgPSAyMzA0LFxuICBNb2R1bGVfMF9oYXNfbm9fZXhwb3J0ZWRfbWVtYmVyXzEgPSAyMzA1LFxuICBHZW5lcmljX3R5cGVfMF9yZXF1aXJlc18xX3R5cGVfYXJndW1lbnRfcyA9IDIzMTQsXG4gIFR5cGVfMF9pc19ub3RfZ2VuZXJpYyA9IDIzMTUsXG4gIFR5cGVfMF9pc19ub3RfYXNzaWduYWJsZV90b190eXBlXzEgPSAyMzIyLFxuICBJbmRleF9zaWduYXR1cmVfaXNfbWlzc2luZ19pbl90eXBlXzAgPSAyMzI5LFxuICBfdGhpc19jYW5ub3RfYmVfcmVmZXJlbmNlZF9pbl9jdXJyZW50X2xvY2F0aW9uID0gMjMzMixcbiAgX3N1cGVyX2Nhbl9vbmx5X2JlX3JlZmVyZW5jZWRfaW5fYV9kZXJpdmVkX2NsYXNzID0gMjMzNSxcbiAgU3VwZXJfY2FsbHNfYXJlX25vdF9wZXJtaXR0ZWRfb3V0c2lkZV9jb25zdHJ1Y3RvcnNfb3JfaW5fbmVzdGVkX2Z1bmN0aW9uc19pbnNpZGVfY29uc3RydWN0b3JzID0gMjMzNyxcbiAgUHJvcGVydHlfMF9kb2VzX25vdF9leGlzdF9vbl90eXBlXzEgPSAyMzM5LFxuICBDYW5ub3RfaW52b2tlX2FuX2V4cHJlc3Npb25fd2hvc2VfdHlwZV9sYWNrc19hX2NhbGxfc2lnbmF0dXJlX1R5cGVfMF9oYXNfbm9fY29tcGF0aWJsZV9jYWxsX3NpZ25hdHVyZXMgPSAyMzQ5LFxuICBDYW5ub3RfdXNlX25ld193aXRoX2FuX2V4cHJlc3Npb25fd2hvc2VfdHlwZV9sYWNrc19hX2NvbnN0cnVjdF9zaWduYXR1cmUgPSAyMzUxLFxuICBBX2Z1bmN0aW9uX3dob3NlX2RlY2xhcmVkX3R5cGVfaXNfbm90X3ZvaWRfbXVzdF9yZXR1cm5fYV92YWx1ZSA9IDIzNTUsXG4gIFRoZV9vcGVyYW5kX29mX2FuX2luY3JlbWVudF9vcl9kZWNyZW1lbnRfb3BlcmF0b3JfbXVzdF9iZV9hX3ZhcmlhYmxlX29yX2FfcHJvcGVydHlfYWNjZXNzID0gMjM1NyxcbiAgVGhlX2xlZnRfaGFuZF9zaWRlX29mX2FuX2Fzc2lnbm1lbnRfZXhwcmVzc2lvbl9tdXN0X2JlX2FfdmFyaWFibGVfb3JfYV9wcm9wZXJ0eV9hY2Nlc3MgPSAyMzY0LFxuICBPcGVyYXRvcl8wX2Nhbm5vdF9iZV9hcHBsaWVkX3RvX3R5cGVzXzFfYW5kXzIgPSAyMzY1LFxuICBBX3N1cGVyX2NhbGxfbXVzdF9iZV90aGVfZmlyc3Rfc3RhdGVtZW50X2luX3RoZV9jb25zdHJ1Y3RvciA9IDIzNzYsXG4gIENvbnN0cnVjdG9yc19mb3JfZGVyaXZlZF9jbGFzc2VzX211c3RfY29udGFpbl9hX3N1cGVyX2NhbGwgPSAyMzc3LFxuICBfZ2V0X2FuZF9zZXRfYWNjZXNzb3JfbXVzdF9oYXZlX3RoZV9zYW1lX3R5cGUgPSAyMzgwLFxuICBDb25zdHJ1Y3Rvcl9pbXBsZW1lbnRhdGlvbl9pc19taXNzaW5nID0gMjM5MCxcbiAgRnVuY3Rpb25faW1wbGVtZW50YXRpb25faXNfbWlzc2luZ19vcl9ub3RfaW1tZWRpYXRlbHlfZm9sbG93aW5nX3RoZV9kZWNsYXJhdGlvbiA9IDIzOTEsXG4gIE11bHRpcGxlX2NvbnN0cnVjdG9yX2ltcGxlbWVudGF0aW9uc19hcmVfbm90X2FsbG93ZWQgPSAyMzkyLFxuICBEdXBsaWNhdGVfZnVuY3Rpb25faW1wbGVtZW50YXRpb24gPSAyMzkzLFxuICBJbmRpdmlkdWFsX2RlY2xhcmF0aW9uc19pbl9tZXJnZWRfZGVjbGFyYXRpb25fMF9tdXN0X2JlX2FsbF9leHBvcnRlZF9vcl9hbGxfbG9jYWwgPSAyMzk1LFxuICBBX25hbWVzcGFjZV9kZWNsYXJhdGlvbl9jYW5ub3RfYmVfbG9jYXRlZF9wcmlvcl90b19hX2NsYXNzX29yX2Z1bmN0aW9uX3dpdGhfd2hpY2hfaXRfaXNfbWVyZ2VkID0gMjQzNCxcbiAgVHlwZV8wX2hhc19ub19wcm9wZXJ0eV8xID0gMjQ2MCxcbiAgVGhlXzBfb3BlcmF0b3JfY2Fubm90X2JlX2FwcGxpZWRfdG9fdHlwZV8xID0gMjQ2OSxcbiAgSW5fY29uc3RfZW51bV9kZWNsYXJhdGlvbnNfbWVtYmVyX2luaXRpYWxpemVyX211c3RfYmVfY29uc3RhbnRfZXhwcmVzc2lvbiA9IDI0NzQsXG4gIEV4cG9ydF9kZWNsYXJhdGlvbl9jb25mbGljdHNfd2l0aF9leHBvcnRlZF9kZWNsYXJhdGlvbl9vZl8wID0gMjQ4NCxcbiAgT2JqZWN0X2lzX3Bvc3NpYmx5X251bGwgPSAyNTMxLFxuICBDYW5ub3RfYXNzaWduX3RvXzBfYmVjYXVzZV9pdF9pc19hX2NvbnN0YW50X29yX2FfcmVhZF9vbmx5X3Byb3BlcnR5ID0gMjU0MCxcbiAgVGhlX3RhcmdldF9vZl9hbl9hc3NpZ25tZW50X211c3RfYmVfYV92YXJpYWJsZV9vcl9hX3Byb3BlcnR5X2FjY2VzcyA9IDI1NDEsXG4gIEluZGV4X3NpZ25hdHVyZV9pbl90eXBlXzBfb25seV9wZXJtaXRzX3JlYWRpbmcgPSAyNTQyLFxuICBFeHBlY3RlZF8wX2FyZ3VtZW50c19idXRfZ290XzEgPSAyNTU0LFxuICBFeHBlY3RlZF9hdF9sZWFzdF8wX2FyZ3VtZW50c19idXRfZ290XzEgPSAyNTU1LFxuICBFeHBlY3RlZF8wX3R5cGVfYXJndW1lbnRzX2J1dF9nb3RfMSA9IDI1NTgsXG4gIEFfbWVtYmVyX2luaXRpYWxpemVyX2luX2FfZW51bV9kZWNsYXJhdGlvbl9jYW5ub3RfcmVmZXJlbmNlX21lbWJlcnNfZGVjbGFyZWRfYWZ0ZXJfaXRfaW5jbHVkaW5nX21lbWJlcnNfZGVmaW5lZF9pbl9vdGhlcl9lbnVtcyA9IDI2NTEsXG4gIENvbnN0cnVjdG9yX29mX2NsYXNzXzBfaXNfcHJpdmF0ZV9hbmRfb25seV9hY2Nlc3NpYmxlX3dpdGhpbl90aGVfY2xhc3NfZGVjbGFyYXRpb24gPSAyNjczLFxuICBDb25zdHJ1Y3Rvcl9vZl9jbGFzc18wX2lzX3Byb3RlY3RlZF9hbmRfb25seV9hY2Nlc3NpYmxlX3dpdGhpbl90aGVfY2xhc3NfZGVjbGFyYXRpb24gPSAyNjc0LFxuICBOYW1lc3BhY2VfMF9oYXNfbm9fZXhwb3J0ZWRfbWVtYmVyXzEgPSAyNjk0LFxuICBSZXF1aXJlZF90eXBlX3BhcmFtZXRlcnNfbWF5X25vdF9mb2xsb3dfb3B0aW9uYWxfdHlwZV9wYXJhbWV0ZXJzID0gMjcwNixcbiAgRHVwbGljYXRlX3Byb3BlcnR5XzAgPSAyNzE4LFxuICBUeXBlXzBfaGFzX25vX2NhbGxfc2lnbmF0dXJlcyA9IDI3NTcsXG4gIEZpbGVfMF9ub3RfZm91bmQgPSA2MDU0LFxuICBOdW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9hbGxvd2VkX2hlcmUgPSA2MTg4LFxuICBNdWx0aXBsZV9jb25zZWN1dGl2ZV9udW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9wZXJtaXR0ZWQgPSA2MTg5LFxuICBfc3VwZXJfbXVzdF9iZV9jYWxsZWRfYmVmb3JlX2FjY2Vzc2luZ190aGlzX2luX3RoZV9jb25zdHJ1Y3Rvcl9vZl9hX2Rlcml2ZWRfY2xhc3MgPSAxNzAwOSxcbiAgX3N1cGVyX211c3RfYmVfY2FsbGVkX2JlZm9yZV9hY2Nlc3NpbmdfYV9wcm9wZXJ0eV9vZl9zdXBlcl9pbl90aGVfY29uc3RydWN0b3Jfb2ZfYV9kZXJpdmVkX2NsYXNzID0gMTcwMTFcbn1cblxuLyoqIFRyYW5zbGF0ZXMgYSBkaWFnbm9zdGljIGNvZGUgdG8gaXRzIHJlc3BlY3RpdmUgc3RyaW5nLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpYWdub3N0aWNDb2RlVG9TdHJpbmcoY29kZTogRGlhZ25vc3RpY0NvZGUpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDEwMDogcmV0dXJuIFwiT3BlcmF0aW9uIG5vdCBzdXBwb3J0ZWQuXCI7XG4gICAgY2FzZSAxMDE6IHJldHVybiBcIk9wZXJhdGlvbiBpcyB1bnNhZmUuXCI7XG4gICAgY2FzZSAxMDI6IHJldHVybiBcIlVzZXItZGVmaW5lZDogezB9XCI7XG4gICAgY2FzZSAyMDA6IHJldHVybiBcIkNvbnZlcnNpb24gZnJvbSB0eXBlICd7MH0nIHRvICd7MX0nIHJlcXVpcmVzIGFuIGV4cGxpY2l0IGNhc3QuXCI7XG4gICAgY2FzZSAyMDE6IHJldHVybiBcIkNvbnZlcnNpb24gZnJvbSB0eXBlICd7MH0nIHRvICd7MX0nIHdpbGwgcmVxdWlyZSBhbiBleHBsaWNpdCBjYXN0IHdoZW4gc3dpdGNoaW5nIGJldHdlZW4gMzIvNjQtYml0LlwiO1xuICAgIGNhc2UgMjAyOiByZXR1cm4gXCJUeXBlICd7MH0nIGNhbm5vdCBiZSBjaGFuZ2VkIHRvIHR5cGUgJ3sxfScuXCI7XG4gICAgY2FzZSAyMDM6IHJldHVybiBcIlR5cGUgJ3swfScgY2Fubm90IGJlIHJlaW50ZXJwcmV0ZWQgYXMgdHlwZSAnezF9Jy5cIjtcbiAgICBjYXNlIDIwNDogcmV0dXJuIFwiQmFzaWMgdHlwZSAnezB9JyBjYW5ub3QgYmUgbnVsbGFibGUuXCI7XG4gICAgY2FzZSAyMDU6IHJldHVybiBcIkNhbm5vdCBleHBvcnQgYSBtdXRhYmxlIGdsb2JhbC5cIjtcbiAgICBjYXNlIDIwNjogcmV0dXJuIFwiTXV0YWJsZSB2YWx1ZSBjYW5ub3QgYmUgaW5saW5lZC5cIjtcbiAgICBjYXNlIDIwNzogcmV0dXJuIFwiVW5tYW5hZ2VkIGNsYXNzZXMgY2Fubm90IGV4dGVuZCBtYW5hZ2VkIGNsYXNzZXMgYW5kIHZpY2UtdmVyc2EuXCI7XG4gICAgY2FzZSAyMDg6IHJldHVybiBcIlVubWFuYWdlZCBjbGFzc2VzIGNhbm5vdCBpbXBsZW1lbnQgaW50ZXJmYWNlcy5cIjtcbiAgICBjYXNlIDIwOTogcmV0dXJuIFwiSW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb24gZmxhZ3MuXCI7XG4gICAgY2FzZSAyMTA6IHJldHVybiBcIkltcGxlbWVudGF0aW9uICd7MH0nIG11c3QgbWF0Y2ggdGhlIHNpZ25hdHVyZSAnezF9Jy5cIjtcbiAgICBjYXNlIDIxMTogcmV0dXJuIFwiQ2xhc3MgJ3swfScgaXMgc2VhbGVkIGFuZCBjYW5ub3QgYmUgZXh0ZW5kZWQuXCI7XG4gICAgY2FzZSAyMTI6IHJldHVybiBcIkRlY29yYXRvciAnezB9JyBpcyBub3QgdmFsaWQgaGVyZS5cIjtcbiAgICBjYXNlIDIxMzogcmV0dXJuIFwiRHVwbGljYXRlIGRlY29yYXRvci5cIjtcbiAgICBjYXNlIDIxNDogcmV0dXJuIFwiQW4gYWxsb2NhdG9yIG11c3QgYmUgcHJlc2VudCB0byB1c2UgJ3swfScuXCI7XG4gICAgY2FzZSAyMTU6IHJldHVybiBcIk9wdGlvbmFsIHBhcmFtZXRlciBtdXN0IGhhdmUgYW4gaW5pdGlhbGl6ZXIuXCI7XG4gICAgY2FzZSAyMTY6IHJldHVybiBcIkNvbnN0cnVjdG9yIG9mIGNsYXNzICd7MH0nIG11c3Qgbm90IHJlcXVpcmUgYW55IGFyZ3VtZW50cy5cIjtcbiAgICBjYXNlIDIxNzogcmV0dXJuIFwiRnVuY3Rpb24gJ3swfScgY2Fubm90IGJlIGlubGluZWQgaW50byBpdHNlbGYuXCI7XG4gICAgY2FzZSAyMTg6IHJldHVybiBcIkNhbm5vdCBhY2Nlc3MgbWV0aG9kICd7MH0nIHdpdGhvdXQgY2FsbGluZyBpdCBhcyBpdCByZXF1aXJlcyAndGhpcycgdG8gYmUgc2V0LlwiO1xuICAgIGNhc2UgMjE5OiByZXR1cm4gXCJPcHRpb25hbCBwcm9wZXJ0aWVzIGFyZSBub3Qgc3VwcG9ydGVkLlwiO1xuICAgIGNhc2UgMjIwOiByZXR1cm4gXCJFeHByZXNzaW9uIG11c3QgYmUgYSBjb21waWxlLXRpbWUgY29uc3RhbnQuXCI7XG4gICAgY2FzZSAyMjE6IHJldHVybiBcIk1vZHVsZSBjYW5ub3QgaGF2ZSBtdWx0aXBsZSBzdGFydCBmdW5jdGlvbnMuXCI7XG4gICAgY2FzZSAyMjI6IHJldHVybiBcIid7MH0nIG11c3QgYmUgYSB2YWx1ZSBiZXR3ZWVuICd7MX0nIGFuZCAnezJ9JyBpbmNsdXNpdmUuXCI7XG4gICAgY2FzZSAyMjM6IHJldHVybiBcIid7MH0nIG11c3QgYmUgYSBwb3dlciBvZiB0d28uXCI7XG4gICAgY2FzZSAyMjQ6IHJldHVybiBcIkV4cHJlc3Npb24gaXMgdW5zYWZlLlwiO1xuICAgIGNhc2UgMjI1OiByZXR1cm4gXCJFeHByZXNzaW9uIGlzIG5ldmVyICdudWxsJy5cIjtcbiAgICBjYXNlIDEwMDI6IHJldHVybiBcIlVudGVybWluYXRlZCBzdHJpbmcgbGl0ZXJhbC5cIjtcbiAgICBjYXNlIDEwMDM6IHJldHVybiBcIklkZW50aWZpZXIgZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMDA1OiByZXR1cm4gXCInezB9JyBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDEwMDY6IHJldHVybiBcIkEgZmlsZSBjYW5ub3QgaGF2ZSBhIHJlZmVyZW5jZSB0byBpdHNlbGYuXCI7XG4gICAgY2FzZSAxMDA5OiByZXR1cm4gXCJUcmFpbGluZyBjb21tYSBub3QgYWxsb3dlZC5cIjtcbiAgICBjYXNlIDEwMTI6IHJldHVybiBcIlVuZXhwZWN0ZWQgdG9rZW4uXCI7XG4gICAgY2FzZSAxMDE0OiByZXR1cm4gXCJBIHJlc3QgcGFyYW1ldGVyIG11c3QgYmUgbGFzdCBpbiBhIHBhcmFtZXRlciBsaXN0LlwiO1xuICAgIGNhc2UgMTAxNTogcmV0dXJuIFwiUGFyYW1ldGVyIGNhbm5vdCBoYXZlIHF1ZXN0aW9uIG1hcmsgYW5kIGluaXRpYWxpemVyLlwiO1xuICAgIGNhc2UgMTAxNjogcmV0dXJuIFwiQSByZXF1aXJlZCBwYXJhbWV0ZXIgY2Fubm90IGZvbGxvdyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIuXCI7XG4gICAgY2FzZSAxMDM2OiByZXR1cm4gXCJTdGF0ZW1lbnRzIGFyZSBub3QgYWxsb3dlZCBpbiBhbWJpZW50IGNvbnRleHRzLlwiO1xuICAgIGNhc2UgMTAzOTogcmV0dXJuIFwiSW5pdGlhbGl6ZXJzIGFyZSBub3QgYWxsb3dlZCBpbiBhbWJpZW50IGNvbnRleHRzLlwiO1xuICAgIGNhc2UgMTA0MjogcmV0dXJuIFwiJ3swfScgbW9kaWZpZXIgY2Fubm90IGJlIHVzZWQgaGVyZS5cIjtcbiAgICBjYXNlIDEwNDc6IHJldHVybiBcIkEgcmVzdCBwYXJhbWV0ZXIgY2Fubm90IGJlIG9wdGlvbmFsLlwiO1xuICAgIGNhc2UgMTA0ODogcmV0dXJuIFwiQSByZXN0IHBhcmFtZXRlciBjYW5ub3QgaGF2ZSBhbiBpbml0aWFsaXplci5cIjtcbiAgICBjYXNlIDEwNDk6IHJldHVybiBcIkEgJ3NldCcgYWNjZXNzb3IgbXVzdCBoYXZlIGV4YWN0bHkgb25lIHBhcmFtZXRlci5cIjtcbiAgICBjYXNlIDEwNTI6IHJldHVybiBcIkEgJ3NldCcgYWNjZXNzb3IgcGFyYW1ldGVyIGNhbm5vdCBoYXZlIGFuIGluaXRpYWxpemVyLlwiO1xuICAgIGNhc2UgMTA1NDogcmV0dXJuIFwiQSAnZ2V0JyBhY2Nlc3NvciBjYW5ub3QgaGF2ZSBwYXJhbWV0ZXJzLlwiO1xuICAgIGNhc2UgMTA2MTogcmV0dXJuIFwiRW51bSBtZW1iZXIgbXVzdCBoYXZlIGluaXRpYWxpemVyLlwiO1xuICAgIGNhc2UgMTA5MjogcmV0dXJuIFwiVHlwZSBwYXJhbWV0ZXJzIGNhbm5vdCBhcHBlYXIgb24gYSBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5cIjtcbiAgICBjYXNlIDEwOTM6IHJldHVybiBcIlR5cGUgYW5ub3RhdGlvbiBjYW5ub3QgYXBwZWFyIG9uIGEgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uXCI7XG4gICAgY2FzZSAxMDk0OiByZXR1cm4gXCJBbiBhY2Nlc3NvciBjYW5ub3QgaGF2ZSB0eXBlIHBhcmFtZXRlcnMuXCI7XG4gICAgY2FzZSAxMDk1OiByZXR1cm4gXCJBICdzZXQnIGFjY2Vzc29yIGNhbm5vdCBoYXZlIGEgcmV0dXJuIHR5cGUgYW5ub3RhdGlvbi5cIjtcbiAgICBjYXNlIDEwOTg6IHJldHVybiBcIlR5cGUgcGFyYW1ldGVyIGxpc3QgY2Fubm90IGJlIGVtcHR5LlwiO1xuICAgIGNhc2UgMTEwNDogcmV0dXJuIFwiQSAnY29udGludWUnIHN0YXRlbWVudCBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBhbiBlbmNsb3NpbmcgaXRlcmF0aW9uIHN0YXRlbWVudC5cIjtcbiAgICBjYXNlIDExMDU6IHJldHVybiBcIkEgJ2JyZWFrJyBzdGF0ZW1lbnQgY2FuIG9ubHkgYmUgdXNlZCB3aXRoaW4gYW4gZW5jbG9zaW5nIGl0ZXJhdGlvbiBvciBzd2l0Y2ggc3RhdGVtZW50LlwiO1xuICAgIGNhc2UgMTEwODogcmV0dXJuIFwiQSAncmV0dXJuJyBzdGF0ZW1lbnQgY2FuIG9ubHkgYmUgdXNlZCB3aXRoaW4gYSBmdW5jdGlvbiBib2R5LlwiO1xuICAgIGNhc2UgMTEwOTogcmV0dXJuIFwiRXhwcmVzc2lvbiBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExMTA6IHJldHVybiBcIlR5cGUgZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMTEzOiByZXR1cm4gXCJBICdkZWZhdWx0JyBjbGF1c2UgY2Fubm90IGFwcGVhciBtb3JlIHRoYW4gb25jZSBpbiBhICdzd2l0Y2gnIHN0YXRlbWVudC5cIjtcbiAgICBjYXNlIDExMTQ6IHJldHVybiBcIkR1cGxpY2F0ZSBsYWJlbCAnezB9Jy5cIjtcbiAgICBjYXNlIDExMjA6IHJldHVybiBcIkFuIGV4cG9ydCBhc3NpZ25tZW50IGNhbm5vdCBoYXZlIG1vZGlmaWVycy5cIjtcbiAgICBjYXNlIDExMjE6IHJldHVybiBcIk9jdGFsIGxpdGVyYWxzIGFyZSBub3QgYWxsb3dlZCBpbiBzdHJpY3QgbW9kZS5cIjtcbiAgICBjYXNlIDExMjQ6IHJldHVybiBcIkRpZ2l0IGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTEyNTogcmV0dXJuIFwiSGV4YWRlY2ltYWwgZGlnaXQgZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMTI2OiByZXR1cm4gXCJVbmV4cGVjdGVkIGVuZCBvZiB0ZXh0LlwiO1xuICAgIGNhc2UgMTEyNzogcmV0dXJuIFwiSW52YWxpZCBjaGFyYWN0ZXIuXCI7XG4gICAgY2FzZSAxMTMwOiByZXR1cm4gXCInY2FzZScgb3IgJ2RlZmF1bHQnIGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTAzNDogcmV0dXJuIFwiJ3N1cGVyJyBtdXN0IGJlIGZvbGxvd2VkIGJ5IGFuIGFyZ3VtZW50IGxpc3Qgb3IgbWVtYmVyIGFjY2Vzcy5cIjtcbiAgICBjYXNlIDEwMzg6IHJldHVybiBcIkEgJ2RlY2xhcmUnIG1vZGlmaWVyIGNhbm5vdCBiZSB1c2VkIGluIGFuIGFscmVhZHkgYW1iaWVudCBjb250ZXh0LlwiO1xuICAgIGNhc2UgMTE0MDogcmV0dXJuIFwiVHlwZSBhcmd1bWVudCBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExNDE6IHJldHVybiBcIlN0cmluZyBsaXRlcmFsIGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTE0MjogcmV0dXJuIFwiTGluZSBicmVhayBub3QgcGVybWl0dGVkIGhlcmUuXCI7XG4gICAgY2FzZSAxMTQ2OiByZXR1cm4gXCJEZWNsYXJhdGlvbiBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExNTU6IHJldHVybiBcIidjb25zdCcgZGVjbGFyYXRpb25zIG11c3QgYmUgaW5pdGlhbGl6ZWQuXCI7XG4gICAgY2FzZSAxMTYxOiByZXR1cm4gXCJVbnRlcm1pbmF0ZWQgcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWwuXCI7XG4gICAgY2FzZSAxMTc2OiByZXR1cm4gXCJJbnRlcmZhY2UgZGVjbGFyYXRpb24gY2Fubm90IGhhdmUgJ2ltcGxlbWVudHMnIGNsYXVzZS5cIjtcbiAgICBjYXNlIDExNzc6IHJldHVybiBcIkJpbmFyeSBkaWdpdCBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExNzg6IHJldHVybiBcIk9jdGFsIGRpZ2l0IGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTE4MzogcmV0dXJuIFwiQW4gaW1wbGVtZW50YXRpb24gY2Fubm90IGJlIGRlY2xhcmVkIGluIGFtYmllbnQgY29udGV4dHMuXCI7XG4gICAgY2FzZSAxMTk4OiByZXR1cm4gXCJBbiBleHRlbmRlZCBVbmljb2RlIGVzY2FwZSB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gMHgwIGFuZCAweDEwRkZGRiBpbmNsdXNpdmUuXCI7XG4gICAgY2FzZSAxMTk5OiByZXR1cm4gXCJVbnRlcm1pbmF0ZWQgVW5pY29kZSBlc2NhcGUgc2VxdWVuY2UuXCI7XG4gICAgY2FzZSAxMjA2OiByZXR1cm4gXCJEZWNvcmF0b3JzIGFyZSBub3QgdmFsaWQgaGVyZS5cIjtcbiAgICBjYXNlIDEyNDI6IHJldHVybiBcIidhYnN0cmFjdCcgbW9kaWZpZXIgY2FuIG9ubHkgYXBwZWFyIG9uIGEgY2xhc3MsIG1ldGhvZCwgb3IgcHJvcGVydHkgZGVjbGFyYXRpb24uXCI7XG4gICAgY2FzZSAxMjQ1OiByZXR1cm4gXCJNZXRob2QgJ3swfScgY2Fubm90IGhhdmUgYW4gaW1wbGVtZW50YXRpb24gYmVjYXVzZSBpdCBpcyBtYXJrZWQgYWJzdHJhY3QuXCI7XG4gICAgY2FzZSAxMjU1OiByZXR1cm4gXCJBIGRlZmluaXRlIGFzc2lnbm1lbnQgYXNzZXJ0aW9uICchJyBpcyBub3QgcGVybWl0dGVkIGluIHRoaXMgY29udGV4dC5cIjtcbiAgICBjYXNlIDEzMTE6IHJldHVybiBcIkEgY2xhc3MgbWF5IG9ubHkgZXh0ZW5kIGFub3RoZXIgY2xhc3MuXCI7XG4gICAgY2FzZSAxMzE3OiByZXR1cm4gXCJBIHBhcmFtZXRlciBwcm9wZXJ0eSBjYW5ub3QgYmUgZGVjbGFyZWQgdXNpbmcgYSByZXN0IHBhcmFtZXRlci5cIjtcbiAgICBjYXNlIDIzMDA6IHJldHVybiBcIkR1cGxpY2F0ZSBpZGVudGlmaWVyICd7MH0nLlwiO1xuICAgIGNhc2UgMjMwNDogcmV0dXJuIFwiQ2Fubm90IGZpbmQgbmFtZSAnezB9Jy5cIjtcbiAgICBjYXNlIDIzMDU6IHJldHVybiBcIk1vZHVsZSAnezB9JyBoYXMgbm8gZXhwb3J0ZWQgbWVtYmVyICd7MX0nLlwiO1xuICAgIGNhc2UgMjMxNDogcmV0dXJuIFwiR2VuZXJpYyB0eXBlICd7MH0nIHJlcXVpcmVzIHsxfSB0eXBlIGFyZ3VtZW50KHMpLlwiO1xuICAgIGNhc2UgMjMxNTogcmV0dXJuIFwiVHlwZSAnezB9JyBpcyBub3QgZ2VuZXJpYy5cIjtcbiAgICBjYXNlIDIzMjI6IHJldHVybiBcIlR5cGUgJ3swfScgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnezF9Jy5cIjtcbiAgICBjYXNlIDIzMjk6IHJldHVybiBcIkluZGV4IHNpZ25hdHVyZSBpcyBtaXNzaW5nIGluIHR5cGUgJ3swfScuXCI7XG4gICAgY2FzZSAyMzMyOiByZXR1cm4gXCIndGhpcycgY2Fubm90IGJlIHJlZmVyZW5jZWQgaW4gY3VycmVudCBsb2NhdGlvbi5cIjtcbiAgICBjYXNlIDIzMzU6IHJldHVybiBcIidzdXBlcicgY2FuIG9ubHkgYmUgcmVmZXJlbmNlZCBpbiBhIGRlcml2ZWQgY2xhc3MuXCI7XG4gICAgY2FzZSAyMzM3OiByZXR1cm4gXCJTdXBlciBjYWxscyBhcmUgbm90IHBlcm1pdHRlZCBvdXRzaWRlIGNvbnN0cnVjdG9ycyBvciBpbiBuZXN0ZWQgZnVuY3Rpb25zIGluc2lkZSBjb25zdHJ1Y3RvcnMuXCI7XG4gICAgY2FzZSAyMzM5OiByZXR1cm4gXCJQcm9wZXJ0eSAnezB9JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7MX0nLlwiO1xuICAgIGNhc2UgMjM0OTogcmV0dXJuIFwiQ2Fubm90IGludm9rZSBhbiBleHByZXNzaW9uIHdob3NlIHR5cGUgbGFja3MgYSBjYWxsIHNpZ25hdHVyZS4gVHlwZSAnezB9JyBoYXMgbm8gY29tcGF0aWJsZSBjYWxsIHNpZ25hdHVyZXMuXCI7XG4gICAgY2FzZSAyMzUxOiByZXR1cm4gXCJDYW5ub3QgdXNlICduZXcnIHdpdGggYW4gZXhwcmVzc2lvbiB3aG9zZSB0eXBlIGxhY2tzIGEgY29uc3RydWN0IHNpZ25hdHVyZS5cIjtcbiAgICBjYXNlIDIzNTU6IHJldHVybiBcIkEgZnVuY3Rpb24gd2hvc2UgZGVjbGFyZWQgdHlwZSBpcyBub3QgJ3ZvaWQnIG11c3QgcmV0dXJuIGEgdmFsdWUuXCI7XG4gICAgY2FzZSAyMzU3OiByZXR1cm4gXCJUaGUgb3BlcmFuZCBvZiBhbiBpbmNyZW1lbnQgb3IgZGVjcmVtZW50IG9wZXJhdG9yIG11c3QgYmUgYSB2YXJpYWJsZSBvciBhIHByb3BlcnR5IGFjY2Vzcy5cIjtcbiAgICBjYXNlIDIzNjQ6IHJldHVybiBcIlRoZSBsZWZ0LWhhbmQgc2lkZSBvZiBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24gbXVzdCBiZSBhIHZhcmlhYmxlIG9yIGEgcHJvcGVydHkgYWNjZXNzLlwiO1xuICAgIGNhc2UgMjM2NTogcmV0dXJuIFwiT3BlcmF0b3IgJ3swfScgY2Fubm90IGJlIGFwcGxpZWQgdG8gdHlwZXMgJ3sxfScgYW5kICd7Mn0nLlwiO1xuICAgIGNhc2UgMjM3NjogcmV0dXJuIFwiQSAnc3VwZXInIGNhbGwgbXVzdCBiZSB0aGUgZmlyc3Qgc3RhdGVtZW50IGluIHRoZSBjb25zdHJ1Y3Rvci5cIjtcbiAgICBjYXNlIDIzNzc6IHJldHVybiBcIkNvbnN0cnVjdG9ycyBmb3IgZGVyaXZlZCBjbGFzc2VzIG11c3QgY29udGFpbiBhICdzdXBlcicgY2FsbC5cIjtcbiAgICBjYXNlIDIzODA6IHJldHVybiBcIidnZXQnIGFuZCAnc2V0JyBhY2Nlc3NvciBtdXN0IGhhdmUgdGhlIHNhbWUgdHlwZS5cIjtcbiAgICBjYXNlIDIzOTA6IHJldHVybiBcIkNvbnN0cnVjdG9yIGltcGxlbWVudGF0aW9uIGlzIG1pc3NpbmcuXCI7XG4gICAgY2FzZSAyMzkxOiByZXR1cm4gXCJGdW5jdGlvbiBpbXBsZW1lbnRhdGlvbiBpcyBtaXNzaW5nIG9yIG5vdCBpbW1lZGlhdGVseSBmb2xsb3dpbmcgdGhlIGRlY2xhcmF0aW9uLlwiO1xuICAgIGNhc2UgMjM5MjogcmV0dXJuIFwiTXVsdGlwbGUgY29uc3RydWN0b3IgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgYWxsb3dlZC5cIjtcbiAgICBjYXNlIDIzOTM6IHJldHVybiBcIkR1cGxpY2F0ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbi5cIjtcbiAgICBjYXNlIDIzOTU6IHJldHVybiBcIkluZGl2aWR1YWwgZGVjbGFyYXRpb25zIGluIG1lcmdlZCBkZWNsYXJhdGlvbiAnezB9JyBtdXN0IGJlIGFsbCBleHBvcnRlZCBvciBhbGwgbG9jYWwuXCI7XG4gICAgY2FzZSAyNDM0OiByZXR1cm4gXCJBIG5hbWVzcGFjZSBkZWNsYXJhdGlvbiBjYW5ub3QgYmUgbG9jYXRlZCBwcmlvciB0byBhIGNsYXNzIG9yIGZ1bmN0aW9uIHdpdGggd2hpY2ggaXQgaXMgbWVyZ2VkLlwiO1xuICAgIGNhc2UgMjQ2MDogcmV0dXJuIFwiVHlwZSAnezB9JyBoYXMgbm8gcHJvcGVydHkgJ3sxfScuXCI7XG4gICAgY2FzZSAyNDY5OiByZXR1cm4gXCJUaGUgJ3swfScgb3BlcmF0b3IgY2Fubm90IGJlIGFwcGxpZWQgdG8gdHlwZSAnezF9Jy5cIjtcbiAgICBjYXNlIDI0NzQ6IHJldHVybiBcIkluICdjb25zdCcgZW51bSBkZWNsYXJhdGlvbnMgbWVtYmVyIGluaXRpYWxpemVyIG11c3QgYmUgY29uc3RhbnQgZXhwcmVzc2lvbi5cIjtcbiAgICBjYXNlIDI0ODQ6IHJldHVybiBcIkV4cG9ydCBkZWNsYXJhdGlvbiBjb25mbGljdHMgd2l0aCBleHBvcnRlZCBkZWNsYXJhdGlvbiBvZiAnezB9Jy5cIjtcbiAgICBjYXNlIDI1MzE6IHJldHVybiBcIk9iamVjdCBpcyBwb3NzaWJseSAnbnVsbCcuXCI7XG4gICAgY2FzZSAyNTQwOiByZXR1cm4gXCJDYW5ub3QgYXNzaWduIHRvICd7MH0nIGJlY2F1c2UgaXQgaXMgYSBjb25zdGFudCBvciBhIHJlYWQtb25seSBwcm9wZXJ0eS5cIjtcbiAgICBjYXNlIDI1NDE6IHJldHVybiBcIlRoZSB0YXJnZXQgb2YgYW4gYXNzaWdubWVudCBtdXN0IGJlIGEgdmFyaWFibGUgb3IgYSBwcm9wZXJ0eSBhY2Nlc3MuXCI7XG4gICAgY2FzZSAyNTQyOiByZXR1cm4gXCJJbmRleCBzaWduYXR1cmUgaW4gdHlwZSAnezB9JyBvbmx5IHBlcm1pdHMgcmVhZGluZy5cIjtcbiAgICBjYXNlIDI1NTQ6IHJldHVybiBcIkV4cGVjdGVkIHswfSBhcmd1bWVudHMsIGJ1dCBnb3QgezF9LlwiO1xuICAgIGNhc2UgMjU1NTogcmV0dXJuIFwiRXhwZWN0ZWQgYXQgbGVhc3QgezB9IGFyZ3VtZW50cywgYnV0IGdvdCB7MX0uXCI7XG4gICAgY2FzZSAyNTU4OiByZXR1cm4gXCJFeHBlY3RlZCB7MH0gdHlwZSBhcmd1bWVudHMsIGJ1dCBnb3QgezF9LlwiO1xuICAgIGNhc2UgMjY1MTogcmV0dXJuIFwiQSBtZW1iZXIgaW5pdGlhbGl6ZXIgaW4gYSBlbnVtIGRlY2xhcmF0aW9uIGNhbm5vdCByZWZlcmVuY2UgbWVtYmVycyBkZWNsYXJlZCBhZnRlciBpdCwgaW5jbHVkaW5nIG1lbWJlcnMgZGVmaW5lZCBpbiBvdGhlciBlbnVtcy5cIjtcbiAgICBjYXNlIDI2NzM6IHJldHVybiBcIkNvbnN0cnVjdG9yIG9mIGNsYXNzICd7MH0nIGlzIHByaXZhdGUgYW5kIG9ubHkgYWNjZXNzaWJsZSB3aXRoaW4gdGhlIGNsYXNzIGRlY2xhcmF0aW9uLlwiO1xuICAgIGNhc2UgMjY3NDogcmV0dXJuIFwiQ29uc3RydWN0b3Igb2YgY2xhc3MgJ3swfScgaXMgcHJvdGVjdGVkIGFuZCBvbmx5IGFjY2Vzc2libGUgd2l0aGluIHRoZSBjbGFzcyBkZWNsYXJhdGlvbi5cIjtcbiAgICBjYXNlIDI2OTQ6IHJldHVybiBcIk5hbWVzcGFjZSAnezB9JyBoYXMgbm8gZXhwb3J0ZWQgbWVtYmVyICd7MX0nLlwiO1xuICAgIGNhc2UgMjcwNjogcmV0dXJuIFwiUmVxdWlyZWQgdHlwZSBwYXJhbWV0ZXJzIG1heSBub3QgZm9sbG93IG9wdGlvbmFsIHR5cGUgcGFyYW1ldGVycy5cIjtcbiAgICBjYXNlIDI3MTg6IHJldHVybiBcIkR1cGxpY2F0ZSBwcm9wZXJ0eSAnezB9Jy5cIjtcbiAgICBjYXNlIDI3NTc6IHJldHVybiBcIlR5cGUgJ3swfScgaGFzIG5vIGNhbGwgc2lnbmF0dXJlcy5cIjtcbiAgICBjYXNlIDYwNTQ6IHJldHVybiBcIkZpbGUgJ3swfScgbm90IGZvdW5kLlwiO1xuICAgIGNhc2UgNjE4ODogcmV0dXJuIFwiTnVtZXJpYyBzZXBhcmF0b3JzIGFyZSBub3QgYWxsb3dlZCBoZXJlLlwiO1xuICAgIGNhc2UgNjE4OTogcmV0dXJuIFwiTXVsdGlwbGUgY29uc2VjdXRpdmUgbnVtZXJpYyBzZXBhcmF0b3JzIGFyZSBub3QgcGVybWl0dGVkLlwiO1xuICAgIGNhc2UgMTcwMDk6IHJldHVybiBcIidzdXBlcicgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGFjY2Vzc2luZyAndGhpcycgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGEgZGVyaXZlZCBjbGFzcy5cIjtcbiAgICBjYXNlIDE3MDExOiByZXR1cm4gXCInc3VwZXInIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBhY2Nlc3NpbmcgYSBwcm9wZXJ0eSBvZiAnc3VwZXInIGluIHRoZSBjb25zdHJ1Y3RvciBvZiBhIGRlcml2ZWQgY2xhc3MuXCI7XG4gICAgZGVmYXVsdDogcmV0dXJuIFwiXCI7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "../src/diagnostics.ts":
/*!*****************************!*\
  !*** ../src/diagnostics.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Shared diagnostic handling inherited by the parser and the compiler.
 * @module diagnostics
 * @preferred
 */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
var diagnosticMessages_generated_1 = __webpack_require__(/*! ./diagnosticMessages.generated */ "../src/diagnosticMessages.generated.ts");
var util_1 = __webpack_require__(/*! ./util */ "../src/util/index.ts");
var diagnosticMessages_generated_2 = __webpack_require__(/*! ./diagnosticMessages.generated */ "../src/diagnosticMessages.generated.ts");
exports.DiagnosticCode = diagnosticMessages_generated_2.DiagnosticCode;
exports.diagnosticCodeToString = diagnosticMessages_generated_2.diagnosticCodeToString;
/** Indicates the category of a {@link DiagnosticMessage}. */
var DiagnosticCategory;
(function (DiagnosticCategory) {
    /** Informatory message. */
    DiagnosticCategory[DiagnosticCategory["INFO"] = 0] = "INFO";
    /** Warning message. */
    DiagnosticCategory[DiagnosticCategory["WARNING"] = 1] = "WARNING";
    /** Error message. */
    DiagnosticCategory[DiagnosticCategory["ERROR"] = 2] = "ERROR";
})(DiagnosticCategory = exports.DiagnosticCategory || (exports.DiagnosticCategory = {}));
/** Returns the string representation of the specified diagnostic category. */
function diagnosticCategoryToString(category) {
    switch (category) {
        case DiagnosticCategory.INFO: return "INFO";
        case DiagnosticCategory.WARNING: return "WARNING";
        case DiagnosticCategory.ERROR: return "ERROR";
        default: {
            assert(false);
            return "";
        }
    }
}
exports.diagnosticCategoryToString = diagnosticCategoryToString;
/** ANSI escape sequence for blue foreground. */
exports.COLOR_BLUE = "\u001b[96m";
/** ANSI escape sequence for yellow foreground. */
exports.COLOR_YELLOW = "\u001b[93m";
/** ANSI escape sequence for red foreground. */
exports.COLOR_RED = "\u001b[91m";
/** ANSI escape sequence to reset the foreground color. */
exports.COLOR_RESET = "\u001b[0m";
/** Returns the ANSI escape sequence for the specified category. */
function diagnosticCategoryToColor(category) {
    switch (category) {
        case DiagnosticCategory.INFO: return exports.COLOR_BLUE;
        case DiagnosticCategory.WARNING: return exports.COLOR_YELLOW;
        case DiagnosticCategory.ERROR: return exports.COLOR_RED;
        default: {
            assert(false);
            return "";
        }
    }
}
exports.diagnosticCategoryToColor = diagnosticCategoryToColor;
/** Represents a diagnostic message. */
var DiagnosticMessage = /** @class */ (function () {
    /** Constructs a new diagnostic message. */
    function DiagnosticMessage(code, category, message) {
        /** Respective source range, if any. */
        this.range = null;
        /** Related range, if any. */
        this.relatedRange = null;
        this.code = code;
        this.category = category;
        this.message = message;
    }
    /** Creates a new diagnostic message of the specified category. */
    DiagnosticMessage.create = function (code, category, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        var message = diagnosticMessages_generated_1.diagnosticCodeToString(code);
        if (arg0 != null)
            message = message.replace("{0}", arg0);
        if (arg1 != null)
            message = message.replace("{1}", arg1);
        if (arg2 != null)
            message = message.replace("{2}", arg2);
        return new DiagnosticMessage(code, category, message);
    };
    /** Creates a new informatory diagnostic message. */
    DiagnosticMessage.createInfo = function (code, arg0, arg1) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        return DiagnosticMessage.create(code, DiagnosticCategory.INFO, arg0, arg1);
    };
    /** Creates a new warning diagnostic message. */
    DiagnosticMessage.createWarning = function (code, arg0, arg1) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        return DiagnosticMessage.create(code, DiagnosticCategory.WARNING, arg0, arg1);
    };
    /** Creates a new error diagnostic message. */
    DiagnosticMessage.createError = function (code, arg0, arg1) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        return DiagnosticMessage.create(code, DiagnosticCategory.ERROR, arg0, arg1);
    };
    /** Adds a source range to this message. */
    DiagnosticMessage.prototype.withRange = function (range) {
        this.range = range;
        return this;
    };
    /** Adds a related source range to this message. */
    DiagnosticMessage.prototype.withRelatedRange = function (range) {
        this.relatedRange = range;
        return this;
    };
    /** Converts this message to a string. */
    DiagnosticMessage.prototype.toString = function () {
        if (this.range) {
            return (diagnosticCategoryToString(this.category) +
                " " +
                this.code.toString(10) +
                ": \"" +
                this.message +
                "\" in " +
                this.range.source.normalizedPath +
                ":" +
                this.range.line.toString(10) +
                ":" +
                this.range.column.toString(10));
        }
        return (diagnosticCategoryToString(this.category) +
            " " +
            this.code.toString(10) +
            ": " +
            this.message);
    };
    return DiagnosticMessage;
}());
exports.DiagnosticMessage = DiagnosticMessage;
/** Formats a diagnostic message, optionally with terminal colors and source context. */
function formatDiagnosticMessage(message, useColors, showContext) {
    if (useColors === void 0) { useColors = false; }
    if (showContext === void 0) { showContext = false; }
    // general information
    var sb = [];
    if (useColors)
        sb.push(diagnosticCategoryToColor(message.category));
    sb.push(diagnosticCategoryToString(message.category));
    if (useColors)
        sb.push(exports.COLOR_RESET);
    sb.push(message.code < 1000 ? " AS" : " TS");
    sb.push(message.code.toString(10));
    sb.push(": ");
    sb.push(message.message);
    // include range information if available
    if (message.range) {
        // include context information if requested
        var range = message.range;
        if (showContext) {
            sb.push("\n");
            sb.push(formatDiagnosticContext(range, useColors));
        }
        sb.push("\n");
        sb.push(" in ");
        sb.push(range.source.normalizedPath);
        sb.push("(");
        sb.push(range.line.toString(10));
        sb.push(",");
        sb.push(range.column.toString(10));
        sb.push(")");
        var relatedRange = message.relatedRange;
        if (relatedRange) {
            if (showContext) {
                sb.push("\n");
                sb.push(formatDiagnosticContext(relatedRange, useColors));
            }
            sb.push("\n");
            sb.push(" in ");
            sb.push(range.source.normalizedPath);
            sb.push("(");
            sb.push(range.line.toString(10));
            sb.push(",");
            sb.push(range.column.toString(10));
            sb.push(")");
        }
    }
    return sb.join("");
}
exports.formatDiagnosticMessage = formatDiagnosticMessage;
/** Formats the diagnostic context for the specified range, optionally with terminal colors. */
function formatDiagnosticContext(range, useColors) {
    if (useColors === void 0) { useColors = false; }
    var text = range.source.text;
    var len = text.length;
    var start = range.start;
    var end = range.end;
    while (start > 0 && !util_1.isLineBreak(text.charCodeAt(start - 1)))
        start--;
    while (end < len && !util_1.isLineBreak(text.charCodeAt(end)))
        end++;
    var sb = [
        "\n ",
        text.substring(start, end),
        "\n "
    ];
    while (start < range.start) {
        sb.push(" ");
        start++;
    }
    if (useColors)
        sb.push(exports.COLOR_RED);
    if (range.start == range.end) {
        sb.push("^");
    }
    else {
        while (start++ < range.end) {
            if (util_1.isLineBreak(text.charCodeAt(start))) {
                sb.push(start == range.start + 1 ? "^" : "~");
                break;
            }
            sb.push("~");
        }
    }
    if (useColors)
        sb.push(exports.COLOR_RESET);
    return sb.join("");
}
exports.formatDiagnosticContext = formatDiagnosticContext;
/** Base class of all diagnostic emitters. */
var DiagnosticEmitter = /** @class */ (function () {
    /** Initializes this diagnostic emitter. */
    function DiagnosticEmitter(diagnostics) {
        if (diagnostics === void 0) { diagnostics = null; }
        this.diagnostics = diagnostics ? diagnostics : new Array();
    }
    /** Emits a diagnostic message of the specified category. */
    DiagnosticEmitter.prototype.emitDiagnostic = function (code, category, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        var message = DiagnosticMessage.create(code, category, arg0, arg1, arg2).withRange(range);
        if (relatedRange)
            message.relatedRange = relatedRange;
        this.diagnostics.push(message);
        // console.log(formatDiagnosticMessage(message, true, true) + "\n"); // temporary
        // console.log(<string>new Error("stack").stack);
    };
    /** Emits an informatory diagnostic message. */
    DiagnosticEmitter.prototype.info = function (code, range, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.INFO, range, null, arg0, arg1, arg2);
    };
    /** Emits an informatory diagnostic message with a related range. */
    DiagnosticEmitter.prototype.infoRelated = function (code, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.INFO, range, relatedRange, arg0, arg1, arg2);
    };
    /** Emits a warning diagnostic message. */
    DiagnosticEmitter.prototype.warning = function (code, range, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.WARNING, range, null, arg0, arg1, arg2);
    };
    /** Emits a warning diagnostic message with a related range. */
    DiagnosticEmitter.prototype.warningRelated = function (code, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.WARNING, range, relatedRange, arg0, arg1, arg2);
    };
    /** Emits an error diagnostic message. */
    DiagnosticEmitter.prototype.error = function (code, range, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.ERROR, range, null, arg0, arg1, arg2);
    };
    /** Emits an error diagnostic message with a related range. */
    DiagnosticEmitter.prototype.errorRelated = function (code, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.ERROR, range, relatedRange, arg0, arg1, arg2);
    };
    return DiagnosticEmitter;
}());
exports.DiagnosticEmitter = DiagnosticEmitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlhZ25vc3RpY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUcsQ0FBQSxLQUFLOztBQU1SLCtFQUd3QztBQUV4QywrQkFFZ0I7QUFFaEIsK0VBR3dDO0FBRnRDLHdEQUFBLGNBQWMsQ0FBQTtBQUNkLGdFQUFBLHNCQUFzQixDQUFBO0FBR3hCLDZEQUE2RDtBQUM3RCxJQUFZLGtCQU9YO0FBUEQsV0FBWSxrQkFBa0I7SUFDNUIsMkJBQTJCO0lBQzNCLDJEQUFJLENBQUE7SUFDSix1QkFBdUI7SUFDdkIsaUVBQU8sQ0FBQTtJQUNQLHFCQUFxQjtJQUNyQiw2REFBSyxDQUFBO0FBQ1AsQ0FBQyxFQVBXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBTzdCO0FBRUQsOEVBQThFO0FBQzlFLFNBQWdCLDBCQUEwQixDQUFDLFFBQTRCO0lBQ3JFLFFBQVEsUUFBUSxFQUFFO1FBQ2hCLEtBQUssa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUM7UUFDNUMsS0FBSyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQztRQUNsRCxLQUFLLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDWDtLQUNGO0FBQ0gsQ0FBQztBQVZELGdFQVVDO0FBRUQsZ0RBQWdEO0FBQ25DLFFBQUEsVUFBVSxHQUFXLFlBQVksQ0FBQztBQUMvQyxrREFBa0Q7QUFDckMsUUFBQSxZQUFZLEdBQVcsWUFBWSxDQUFDO0FBQ2pELCtDQUErQztBQUNsQyxRQUFBLFNBQVMsR0FBVyxZQUFZLENBQUM7QUFDOUMsMERBQTBEO0FBQzdDLFFBQUEsV0FBVyxH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SSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUEvRkQsSUErRkM7QUEvRnFCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2hhcmVkIGRpYWdub3N0aWMgaGFuZGxpbmcgaW5oZXJpdGVkIGJ5IHRoZSBwYXJzZXIgYW5kIHRoZSBjb21waWxlci5cbiAqIEBtb2R1bGUgZGlhZ25vc3RpY3NcbiAqIEBwcmVmZXJyZWRcbiAqLy8qKiovXG5cbmltcG9ydCB7XG4gIFJhbmdlXG59IGZyb20gXCIuL2FzdFwiO1xuXG5pbXBvcnQge1xuICBEaWFnbm9zdGljQ29kZSxcbiAgZGlhZ25vc3RpY0NvZGVUb1N0cmluZ1xufSBmcm9tIFwiLi9kaWFnbm9zdGljTWVzc2FnZXMuZ2VuZXJhdGVkXCI7XG5cbmltcG9ydCB7XG4gIGlzTGluZUJyZWFrLCBDaGFyQ29kZVxufSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCB7XG4gIERpYWdub3N0aWNDb2RlLFxuICBkaWFnbm9zdGljQ29kZVRvU3RyaW5nXG59IGZyb20gXCIuL2RpYWdub3N0aWNNZXNzYWdlcy5nZW5lcmF0ZWRcIjtcblxuLyoqIEluZGljYXRlcyB0aGUgY2F0ZWdvcnkgb2YgYSB7QGxpbmsgRGlhZ25vc3RpY01lc3NhZ2V9LiAqL1xuZXhwb3J0IGVudW0gRGlhZ25vc3RpY0NhdGVnb3J5IHtcbiAgLyoqIEluZm9ybWF0b3J5IG1lc3NhZ2UuICovXG4gIElORk8sXG4gIC8qKiBXYXJuaW5nIG1lc3NhZ2UuICovXG4gIFdBUk5JTkcsXG4gIC8qKiBFcnJvciBtZXNzYWdlLiAqL1xuICBFUlJPUlxufVxuXG4vKiogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgZGlhZ25vc3RpYyBjYXRlZ29yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWFnbm9zdGljQ2F0ZWdvcnlUb1N0cmluZyhjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5KTogc3RyaW5nIHtcbiAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5LklORk86IHJldHVybiBcIklORk9cIjtcbiAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5XQVJOSU5HOiByZXR1cm4gXCJXQVJOSU5HXCI7XG4gICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuRVJST1I6IHJldHVybiBcIkVSUk9SXCI7XG4gICAgZGVmYXVsdDoge1xuICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQU5TSSBlc2NhcGUgc2VxdWVuY2UgZm9yIGJsdWUgZm9yZWdyb3VuZC4gKi9cbmV4cG9ydCBjb25zdCBDT0xPUl9CTFVFOiBzdHJpbmcgPSBcIlxcdTAwMWJbOTZtXCI7XG4vKiogQU5TSSBlc2NhcGUgc2VxdWVuY2UgZm9yIHllbGxvdyBmb3JlZ3JvdW5kLiAqL1xuZXhwb3J0IGNvbnN0IENPTE9SX1lFTExPVzogc3RyaW5nID0gXCJcXHUwMDFiWzkzbVwiO1xuLyoqIEFOU0kgZXNjYXBlIHNlcXVlbmNlIGZvciByZWQgZm9yZWdyb3VuZC4gKi9cbmV4cG9ydCBjb25zdCBDT0xPUl9SRUQ6IHN0cmluZyA9IFwiXFx1MDAxYls5MW1cIjtcbi8qKiBBTlNJIGVzY2FwZSBzZXF1ZW5jZSB0byByZXNldCB0aGUgZm9yZWdyb3VuZCBjb2xvci4gKi9cbmV4cG9ydCBjb25zdCBDT0xPUl9SRVNFVDogc3RyaW5nID0gXCJcXHUwMDFiWzBtXCI7XG5cbi8qKiBSZXR1cm5zIHRoZSBBTlNJIGVzY2FwZSBzZXF1ZW5jZSBmb3IgdGhlIHNwZWNpZmllZCBjYXRlZ29yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWFnbm9zdGljQ2F0ZWdvcnlUb0NvbG9yKGNhdGVnb3J5OiBEaWFnbm9zdGljQ2F0ZWdvcnkpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGNhdGVnb3J5KSB7XG4gICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuSU5GTzogcmV0dXJuIENPTE9SX0JMVUU7XG4gICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuV0FSTklORzogcmV0dXJuIENPTE9SX1lFTExPVztcbiAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5FUlJPUjogcmV0dXJuIENPTE9SX1JFRDtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBhc3NlcnQoZmFsc2UpO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuZXhwb3J0IGNsYXNzIERpYWdub3N0aWNNZXNzYWdlIHtcblxuICAvKiogTWVzc2FnZSBjb2RlLiAqL1xuICBjb2RlOiBpMzI7XG4gIC8qKiBNZXNzYWdlIGNhdGVnb3J5LiAqL1xuICBjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5O1xuICAvKiogTWVzc2FnZSB0ZXh0LiAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIC8qKiBSZXNwZWN0aXZlIHNvdXJjZSByYW5nZSwgaWYgYW55LiAqL1xuICByYW5nZTogUmFuZ2UgfCBudWxsID0gbnVsbDtcbiAgLyoqIFJlbGF0ZWQgcmFuZ2UsIGlmIGFueS4gKi9cbiAgcmVsYXRlZFJhbmdlOiBSYW5nZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IGRpYWdub3N0aWMgbWVzc2FnZS4gKi9cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2RlOiBpMzIsIGNhdGVnb3J5OiBEaWFnbm9zdGljQ2F0ZWdvcnksIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyBkaWFnbm9zdGljIG1lc3NhZ2Ugb2YgdGhlIHNwZWNpZmllZCBjYXRlZ29yeS4gKi9cbiAgc3RhdGljIGNyZWF0ZShcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICBjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5LFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IERpYWdub3N0aWNNZXNzYWdlIHtcbiAgICB2YXIgbWVzc2FnZSA9IGRpYWdub3N0aWNDb2RlVG9TdHJpbmcoY29kZSk7XG4gICAgaWYgKGFyZzAgIT0gbnVsbCkgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZShcInswfVwiLCBhcmcwKTtcbiAgICBpZiAoYXJnMSAhPSBudWxsKSBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiezF9XCIsIGFyZzEpO1xuICAgIGlmIChhcmcyICE9IG51bGwpIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoXCJ7Mn1cIiwgYXJnMik7XG4gICAgcmV0dXJuIG5ldyBEaWFnbm9zdGljTWVzc2FnZShjb2RlLCBjYXRlZ29yeSwgbWVzc2FnZSk7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyBpbmZvcm1hdG9yeSBkaWFnbm9zdGljIG1lc3NhZ2UuICovXG4gIHN0YXRpYyBjcmVhdGVJbmZvKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IERpYWdub3N0aWNNZXNzYWdlIHtcbiAgICByZXR1cm4gRGlhZ25vc3RpY01lc3NhZ2UuY3JlYXRlKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5JTkZPLCBhcmcwLCBhcmcxKTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHdhcm5pbmcgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuICBzdGF0aWMgY3JlYXRlV2FybmluZyhcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiBEaWFnbm9zdGljTWVzc2FnZSB7XG4gICAgcmV0dXJuIERpYWdub3N0aWNNZXNzYWdlLmNyZWF0ZShjb2RlLCBEaWFnbm9zdGljQ2F0ZWdvcnkuV0FSTklORywgYXJnMCwgYXJnMSk7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyBlcnJvciBkaWFnbm9zdGljIG1lc3NhZ2UuICovXG4gIHN0YXRpYyBjcmVhdGVFcnJvcihcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiBEaWFnbm9zdGljTWVzc2FnZSB7XG4gICAgcmV0dXJuIERpYWdub3N0aWNNZXNzYWdlLmNyZWF0ZShjb2RlLCBEaWFnbm9zdGljQ2F0ZWdvcnkuRVJST1IsIGFyZzAsIGFyZzEpO1xuICB9XG5cbiAgLyoqIEFkZHMgYSBzb3VyY2UgcmFuZ2UgdG8gdGhpcyBtZXNzYWdlLiAqL1xuICB3aXRoUmFuZ2UocmFuZ2U6IFJhbmdlKTogdGhpcyB7XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEFkZHMgYSByZWxhdGVkIHNvdXJjZSByYW5nZSB0byB0aGlzIG1lc3NhZ2UuICovXG4gIHdpdGhSZWxhdGVkUmFuZ2UocmFuZ2U6IFJhbmdlKTogdGhpcyB7XG4gICAgdGhpcy5yZWxhdGVkUmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBDb252ZXJ0cyB0aGlzIG1lc3NhZ2UgdG8gYSBzdHJpbmcuICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGRpYWdub3N0aWNDYXRlZ29yeVRvU3RyaW5nKHRoaXMuY2F0ZWdvcnkpICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICB0aGlzLmNvZGUudG9TdHJpbmcoMTApICtcbiAgICAgICAgXCI6IFxcXCJcIiArXG4gICAgICAgIHRoaXMubWVzc2FnZSArXG4gICAgICAgIFwiXFxcIiBpbiBcIiArXG4gICAgICAgIHRoaXMucmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoICtcbiAgICAgICAgXCI6XCIgK1xuICAgICAgICB0aGlzLnJhbmdlLmxpbmUudG9TdHJpbmcoMTApICtcbiAgICAgICAgXCI6XCIgK1xuICAgICAgICB0aGlzLnJhbmdlLmNvbHVtbi50b1N0cmluZygxMClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBkaWFnbm9zdGljQ2F0ZWdvcnlUb1N0cmluZyh0aGlzLmNhdGVnb3J5KSArXG4gICAgICBcIiBcIiArXG4gICAgICB0aGlzLmNvZGUudG9TdHJpbmcoMTApICtcbiAgICAgIFwiOiBcIiArXG4gICAgICB0aGlzLm1lc3NhZ2VcbiAgICApO1xuICB9XG59XG5cbi8qKiBGb3JtYXRzIGEgZGlhZ25vc3RpYyBtZXNzYWdlLCBvcHRpb25hbGx5IHdpdGggdGVybWluYWwgY29sb3JzIGFuZCBzb3VyY2UgY29udGV4dC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaWFnbm9zdGljTWVzc2FnZShcbiAgbWVzc2FnZTogRGlhZ25vc3RpY01lc3NhZ2UsXG4gIHVzZUNvbG9yczogYm9vbCA9IGZhbHNlLFxuICBzaG93Q29udGV4dDogYm9vbCA9IGZhbHNlXG4pOiBzdHJpbmcge1xuXG4gIC8vIGdlbmVyYWwgaW5mb3JtYXRpb25cbiAgdmFyIHNiOiBzdHJpbmdbXSA9IFtdO1xuICBpZiAodXNlQ29sb3JzKSBzYi5wdXNoKGRpYWdub3N0aWNDYXRlZ29yeVRvQ29sb3IobWVzc2FnZS5jYXRlZ29yeSkpO1xuICBzYi5wdXNoKGRpYWdub3N0aWNDYXRlZ29yeVRvU3RyaW5nKG1lc3NhZ2UuY2F0ZWdvcnkpKTtcbiAgaWYgKHVzZUNvbG9ycykgc2IucHVzaChDT0xPUl9SRVNFVCk7XG4gIHNiLnB1c2gobWVzc2FnZS5jb2RlIDwgMTAwMCA/IFwiIEFTXCIgOiBcIiBUU1wiKTtcbiAgc2IucHVzaChtZXNzYWdlLmNvZGUudG9TdHJpbmcoMTApKTtcbiAgc2IucHVzaChcIjogXCIpO1xuICBzYi5wdXNoKG1lc3NhZ2UubWVzc2FnZSk7XG5cbiAgLy8gaW5jbHVkZSByYW5nZSBpbmZvcm1hdGlvbiBpZiBhdmFpbGFibGVcbiAgaWYgKG1lc3NhZ2UucmFuZ2UpIHtcblxuICAgIC8vIGluY2x1ZGUgY29udGV4dCBpbmZvcm1hdGlvbiBpZiByZXF1ZXN0ZWRcbiAgICBsZXQgcmFuZ2UgPSBtZXNzYWdlLnJhbmdlO1xuICAgIGlmIChzaG93Q29udGV4dCkge1xuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICAgIHNiLnB1c2goZm9ybWF0RGlhZ25vc3RpY0NvbnRleHQocmFuZ2UsIHVzZUNvbG9ycykpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgIHNiLnB1c2goXCIgaW4gXCIpO1xuICAgIHNiLnB1c2gocmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoKTtcbiAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICBzYi5wdXNoKHJhbmdlLmxpbmUudG9TdHJpbmcoMTApKTtcbiAgICBzYi5wdXNoKFwiLFwiKTtcbiAgICBzYi5wdXNoKHJhbmdlLmNvbHVtbi50b1N0cmluZygxMCkpO1xuICAgIHNiLnB1c2goXCIpXCIpO1xuXG4gICAgbGV0IHJlbGF0ZWRSYW5nZSA9IG1lc3NhZ2UucmVsYXRlZFJhbmdlO1xuICAgIGlmIChyZWxhdGVkUmFuZ2UpIHtcbiAgICAgIGlmIChzaG93Q29udGV4dCkge1xuICAgICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgICBzYi5wdXNoKGZvcm1hdERpYWdub3N0aWNDb250ZXh0KHJlbGF0ZWRSYW5nZSwgdXNlQ29sb3JzKSk7XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgc2IucHVzaChcIiBpbiBcIik7XG4gICAgICBzYi5wdXNoKHJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aCk7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICAgIHNiLnB1c2gocmFuZ2UubGluZS50b1N0cmluZygxMCkpO1xuICAgICAgc2IucHVzaChcIixcIik7XG4gICAgICBzYi5wdXNoKHJhbmdlLmNvbHVtbi50b1N0cmluZygxMCkpO1xuICAgICAgc2IucHVzaChcIilcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiBzYi5qb2luKFwiXCIpO1xufVxuXG4vKiogRm9ybWF0cyB0aGUgZGlhZ25vc3RpYyBjb250ZXh0IGZvciB0aGUgc3BlY2lmaWVkIHJhbmdlLCBvcHRpb25hbGx5IHdpdGggdGVybWluYWwgY29sb3JzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERpYWdub3N0aWNDb250ZXh0KHJhbmdlOiBSYW5nZSwgdXNlQ29sb3JzOiBib29sID0gZmFsc2UpOiBzdHJpbmcge1xuICB2YXIgdGV4dCA9IHJhbmdlLnNvdXJjZS50ZXh0O1xuICB2YXIgbGVuID0gdGV4dC5sZW5ndGg7XG4gIHZhciBzdGFydCA9IHJhbmdlLnN0YXJ0O1xuICB2YXIgZW5kID0gcmFuZ2UuZW5kO1xuICB3aGlsZSAoc3RhcnQgPiAwICYmICFpc0xpbmVCcmVhayh0ZXh0LmNoYXJDb2RlQXQoc3RhcnQgLSAxKSkpIHN0YXJ0LS07XG4gIHdoaWxlIChlbmQgPCBsZW4gJiYgIWlzTGluZUJyZWFrKHRleHQuY2hhckNvZGVBdChlbmQpKSkgZW5kKys7XG4gIHZhciBzYjogc3RyaW5nW10gPSBbXG4gICAgXCJcXG4gXCIsXG4gICAgdGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCksXG4gICAgXCJcXG4gXCJcbiAgXTtcbiAgd2hpbGUgKHN0YXJ0IDwgcmFuZ2Uuc3RhcnQpIHtcbiAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICBzdGFydCsrO1xuICB9XG4gIGlmICh1c2VDb2xvcnMpIHNiLnB1c2goQ09MT1JfUkVEKTtcbiAgaWYgKHJhbmdlLnN0YXJ0ID09IHJhbmdlLmVuZCkge1xuICAgIHNiLnB1c2goXCJeXCIpO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdGFydCsrIDwgcmFuZ2UuZW5kKSB7XG4gICAgICBpZiAoaXNMaW5lQnJlYWsodGV4dC5jaGFyQ29kZUF0KHN0YXJ0KSkpIHtcbiAgICAgICAgc2IucHVzaChzdGFydCA9PSByYW5nZS5zdGFydCArIDEgPyBcIl5cIiA6IFwiflwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiflwiKTtcbiAgICB9XG4gIH1cbiAgaWYgKHVzZUNvbG9ycykgc2IucHVzaChDT0xPUl9SRVNFVCk7XG4gIHJldHVybiBzYi5qb2luKFwiXCIpO1xufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgZGlhZ25vc3RpYyBlbWl0dGVycy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFnbm9zdGljRW1pdHRlciB7XG5cbiAgLyoqIERpYWdub3N0aWMgbWVzc2FnZXMgZW1pdHRlZCBzbyBmYXIuICovXG4gIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljTWVzc2FnZVtdO1xuXG4gIC8qKiBJbml0aWFsaXplcyB0aGlzIGRpYWdub3N0aWMgZW1pdHRlci4gKi9cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRpYWdub3N0aWNzOiBEaWFnbm9zdGljTWVzc2FnZVtdIHwgbnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLmRpYWdub3N0aWNzID0gZGlhZ25vc3RpY3MgPyA8RGlhZ25vc3RpY01lc3NhZ2VbXT5kaWFnbm9zdGljcyA6IG5ldyBBcnJheSgpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGEgZGlhZ25vc3RpYyBtZXNzYWdlIG9mIHRoZSBzcGVjaWZpZWQgY2F0ZWdvcnkuICovXG4gIGVtaXREaWFnbm9zdGljKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIGNhdGVnb3J5OiBEaWFnbm9zdGljQ2F0ZWdvcnksXG4gICAgcmFuZ2U6IFJhbmdlLFxuICAgIHJlbGF0ZWRSYW5nZTogUmFuZ2UgfCBudWxsLFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IHZvaWQge1xuICAgIHZhciBtZXNzYWdlID0gRGlhZ25vc3RpY01lc3NhZ2UuY3JlYXRlKGNvZGUsIGNhdGVnb3J5LCBhcmcwLCBhcmcxLCBhcmcyKS53aXRoUmFuZ2UocmFuZ2UpO1xuICAgIGlmIChyZWxhdGVkUmFuZ2UpIG1lc3NhZ2UucmVsYXRlZFJhbmdlID0gcmVsYXRlZFJhbmdlO1xuICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChtZXNzYWdlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JtYXREaWFnbm9zdGljTWVzc2FnZShtZXNzYWdlLCB0cnVlLCB0cnVlKSArIFwiXFxuXCIpOyAvLyB0ZW1wb3JhcnlcbiAgICAvLyBjb25zb2xlLmxvZyg8c3RyaW5nPm5ldyBFcnJvcihcInN0YWNrXCIpLnN0YWNrKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBpbmZvcm1hdG9yeSBkaWFnbm9zdGljIG1lc3NhZ2UuICovXG4gIGluZm8oXG4gICAgY29kZTogRGlhZ25vc3RpY0NvZGUsXG4gICAgcmFuZ2U6IFJhbmdlLFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZW1pdERpYWdub3N0aWMoY29kZSwgRGlhZ25vc3RpY0NhdGVnb3J5LklORk8sIHJhbmdlLCBudWxsLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBpbmZvcm1hdG9yeSBkaWFnbm9zdGljIG1lc3NhZ2Ugd2l0aCBhIHJlbGF0ZWQgcmFuZ2UuICovXG4gIGluZm9SZWxhdGVkKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICByZWxhdGVkUmFuZ2U6IFJhbmdlLFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZW1pdERpYWdub3N0aWMoY29kZSwgRGlhZ25vc3RpY0NhdGVnb3J5LklORk8sIHJhbmdlLCByZWxhdGVkUmFuZ2UsIGFyZzAsIGFyZzEsIGFyZzIpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGEgd2FybmluZyBkaWFnbm9zdGljIG1lc3NhZ2UuICovXG4gIHdhcm5pbmcoXG4gICAgY29kZTogRGlhZ25vc3RpY0NvZGUsXG4gICAgcmFuZ2U6IFJhbmdlLFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZW1pdERpYWdub3N0aWMoY29kZSwgRGlhZ25vc3RpY0NhdGVnb3J5LldBUk5JTkcsIHJhbmdlLCBudWxsLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhIHdhcm5pbmcgZGlhZ25vc3RpYyBtZXNzYWdlIHdpdGggYSByZWxhdGVkIHJhbmdlLiAqL1xuICB3YXJuaW5nUmVsYXRlZChcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICByYW5nZTogUmFuZ2UsXG4gICAgcmVsYXRlZFJhbmdlOiBSYW5nZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmVtaXREaWFnbm9zdGljKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5XQVJOSU5HLCByYW5nZSwgcmVsYXRlZFJhbmdlLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBlcnJvciBkaWFnbm9zdGljIG1lc3NhZ2UuICovXG4gIGVycm9yKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmVtaXREaWFnbm9zdGljKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5FUlJPUiwgcmFuZ2UsIG51bGwsIGFyZzAsIGFyZzEsIGFyZzIpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGFuIGVycm9yIGRpYWdub3N0aWMgbWVzc2FnZSB3aXRoIGEgcmVsYXRlZCByYW5nZS4gKi9cbiAgZXJyb3JSZWxhdGVkKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICByZWxhdGVkUmFuZ2U6IFJhbmdlLFxuICAgIGFyZzA6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzE6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGFyZzI6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuZW1pdERpYWdub3N0aWMoY29kZSwgRGlhZ25vc3RpY0NhdGVnb3J5LkVSUk9SLCByYW5nZSwgcmVsYXRlZFJhbmdlLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "../src/glue/js/float.js":
/*!*******************************!*\
  !*** ../src/glue/js/float.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const F64 = new Float64Array(1);
const F32 = new Float32Array(F64.buffer);
const I32 = new Int32Array(F64.buffer);

global.f32_as_i32 = function(value) {
  F32[0] = value;
  return I32[0];
};

global.i32_as_f32 = function(value) {
  I32[0] = value;
  return F32[0];
};

global.f64_as_i64 = function(value) {
  F64[0] = value;
  return i64_new(I32[0], I32[1]);
};

global.i64_as_f64 = function(value) {
  I32[0] = i64_low(value);
  I32[1] = i64_high(value);
  return F64[0];
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../bindings/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../src/glue/js/i64.js":
/*!*****************************!*\
  !*** ../src/glue/js/i64.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Long = global.Long || __webpack_require__(/*! long */ "../node_modules/long/src/long.js");

global.i64_zero = Long.ZERO;

global.i64_one = Long.ONE;

global.i64_new = function(lo, hi) {
  return Long.fromBits(lo, hi);
};

global.i64_low = function(value) {
  return value.low;
};

global.i64_high = function(value) {
  return value.high;
};

global.i64_add = function(left, right) {
  return left.add(right);
};

global.i64_sub = function(left, right) {
  return left.sub(right);
};

global.i64_mul = function(left, right) {
  return left.mul(right);
};

global.i64_div = function(left, right) {
  return left.div(right);
};

global.i64_div_u = function(left, right) {
  return left.toUnsigned().div(right.toUnsigned()).toSigned();
};

global.i64_rem = function(left, right) {
  return left.mod(right);
};

global.i64_rem_u = function(left, right) {
  return left.toUnsigned().mod(right.toUnsigned()).toSigned();
};

global.i64_and = function(left, right) {
  return left.and(right);
};

global.i64_or = function(left, right) {
  return left.or(right);
};

global.i64_xor = function(left, right) {
  return left.xor(right);
};

global.i64_shl = function(left, right) {
  return left.shl(right);
};

global.i64_shr = function(left, right) {
  return left.shr(right);
};

global.i64_shr_u = function(left, right) {
  return left.shru(right);
};

global.i64_not = function(value) {
  return value.not();
};

global.i64_eq = function(left, right) {
  return left.eq(right);
};

global.i64_ne = function(left, right) {
  return left.ne(right);
};

global.i64_align = function(value, alignment) {
  assert(alignment && (alignment & (alignment - 1)) == 0);
  var mask = Long.fromInt(alignment - 1);
  return value.add(mask).and(mask.not());
};

global.i64_is_i8 = function(value) {
  return value.high === 0 && (value.low >= 0 && value.low <= i8.MAX_VALUE)
      || value.high === -1 && (value.low >= i8.MIN_VALUE && value.low < 0);
};

global.i64_is_i16 = function(value) {
  return value.high === 0 && (value.low >= 0 && value.low <= i16.MAX_VALUE)
      || value.high === -1 && (value.low >= i16.MIN_VALUE && value.low < 0);
};

global.i64_is_i32 = function(value) {
  return (value.high === 0 && value.low >= 0)
      || (value.high === -1 && value.low < 0);
};

global.i64_is_u8 = function(value) {
  return value.high === 0 && value.low >= 0 && value.low <= u8.MAX_VALUE;
};

global.i64_is_u16 = function(value) {
  return value.high === 0 && value.low >= 0 && value.low <= u16.MAX_VALUE;
};

global.i64_is_u32 = function(value) {
  return value.high === 0;
};

global.i64_is_bool = function(value) {
  return value.high === 0 && (value.low === 0 || value.low === 1);
};

const minSafeF32 = Long.fromNumber(f32.MIN_SAFE_INTEGER);
const maxSafeF32 = Long.fromNumber(f32.MAX_SAFE_INTEGER);

global.i64_is_f32 = function(value) {
  return value.gte(minSafeF32) && value.lte(maxSafeF32);
};

const minSafeF64 = Long.fromNumber(f64.MIN_SAFE_INTEGER);
const maxSafeF64 = Long.fromNumber(f64.MAX_SAFE_INTEGER);

global.i64_is_f64 = function(value) {
  return value.gte(minSafeF64) && value.lte(maxSafeF64);
};

global.i64_to_f32 = function(value) {
  return global.Math.fround(value.toNumber());
};

global.i64_to_f64 = function(value) {
  return value.toNumber();
};

global.i64_to_string = function(value, unsigned) {
  return (unsigned ? value.toUnsigned() : value).toString(10);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../bindings/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../src/tokenizer.ts":
/*!***************************!*\
  !*** ../src/tokenizer.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A TypeScript tokenizer modified for AssemblyScript.
 *
 * Skips over trivia and provides a general mark/reset mechanism for the parser to utilize on
 * ambiguous tokens.
 *
 * @module tokenizer
 */ /***/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var diagnostics_1 = __webpack_require__(/*! ./diagnostics */ "../src/diagnostics.ts");
var ast_1 = __webpack_require__(/*! ./ast */ "../src/ast.ts");
var util_1 = __webpack_require__(/*! ./util */ "../src/util/index.ts");
/** Named token types. */
var Token;
(function (Token) {
    // keywords
    // discarded: ANY, BOOLEAN, NEVER, NUMBER, STRING, SYMBOL, UNDEFINED, LESSTHAN_SLASH
    Token[Token["ABSTRACT"] = 0] = "ABSTRACT";
    Token[Token["AS"] = 1] = "AS";
    Token[Token["ASYNC"] = 2] = "ASYNC";
    Token[Token["AWAIT"] = 3] = "AWAIT";
    Token[Token["BREAK"] = 4] = "BREAK";
    Token[Token["CASE"] = 5] = "CASE";
    Token[Token["CATCH"] = 6] = "CATCH";
    Token[Token["CLASS"] = 7] = "CLASS";
    Token[Token["CONST"] = 8] = "CONST";
    Token[Token["CONTINUE"] = 9] = "CONTINUE";
    Token[Token["CONSTRUCTOR"] = 10] = "CONSTRUCTOR";
    Token[Token["DEBUGGER"] = 11] = "DEBUGGER";
    Token[Token["DECLARE"] = 12] = "DECLARE";
    Token[Token["DEFAULT"] = 13] = "DEFAULT";
    Token[Token["DELETE"] = 14] = "DELETE";
    Token[Token["DO"] = 15] = "DO";
    Token[Token["ELSE"] = 16] = "ELSE";
    Token[Token["ENUM"] = 17] = "ENUM";
    Token[Token["EXPORT"] = 18] = "EXPORT";
    Token[Token["EXTENDS"] = 19] = "EXTENDS";
    Token[Token["FALSE"] = 20] = "FALSE";
    Token[Token["FINALLY"] = 21] = "FINALLY";
    Token[Token["FOR"] = 22] = "FOR";
    Token[Token["FROM"] = 23] = "FROM";
    Token[Token["FUNCTION"] = 24] = "FUNCTION";
    Token[Token["GET"] = 25] = "GET";
    Token[Token["IF"] = 26] = "IF";
    Token[Token["IMPLEMENTS"] = 27] = "IMPLEMENTS";
    Token[Token["IMPORT"] = 28] = "IMPORT";
    Token[Token["IN"] = 29] = "IN";
    Token[Token["INSTANCEOF"] = 30] = "INSTANCEOF";
    Token[Token["INTERFACE"] = 31] = "INTERFACE";
    Token[Token["IS"] = 32] = "IS";
    Token[Token["KEYOF"] = 33] = "KEYOF";
    Token[Token["LET"] = 34] = "LET";
    Token[Token["MODULE"] = 35] = "MODULE";
    Token[Token["NAMESPACE"] = 36] = "NAMESPACE";
    Token[Token["NEW"] = 37] = "NEW";
    Token[Token["NULL"] = 38] = "NULL";
    Token[Token["OF"] = 39] = "OF";
    Token[Token["PACKAGE"] = 40] = "PACKAGE";
    Token[Token["PRIVATE"] = 41] = "PRIVATE";
    Token[Token["PROTECTED"] = 42] = "PROTECTED";
    Token[Token["PUBLIC"] = 43] = "PUBLIC";
    Token[Token["READONLY"] = 44] = "READONLY";
    Token[Token["RETURN"] = 45] = "RETURN";
    Token[Token["SET"] = 46] = "SET";
    Token[Token["STATIC"] = 47] = "STATIC";
    Token[Token["SUPER"] = 48] = "SUPER";
    Token[Token["SWITCH"] = 49] = "SWITCH";
    Token[Token["THIS"] = 50] = "THIS";
    Token[Token["THROW"] = 51] = "THROW";
    Token[Token["TRUE"] = 52] = "TRUE";
    Token[Token["TRY"] = 53] = "TRY";
    Token[Token["TYPE"] = 54] = "TYPE";
    Token[Token["TYPEOF"] = 55] = "TYPEOF";
    Token[Token["VAR"] = 56] = "VAR";
    Token[Token["VOID"] = 57] = "VOID";
    Token[Token["WHILE"] = 58] = "WHILE";
    Token[Token["WITH"] = 59] = "WITH";
    Token[Token["YIELD"] = 60] = "YIELD";
    // punctuation
    Token[Token["OPENBRACE"] = 61] = "OPENBRACE";
    Token[Token["CLOSEBRACE"] = 62] = "CLOSEBRACE";
    Token[Token["OPENPAREN"] = 63] = "OPENPAREN";
    Token[Token["CLOSEPAREN"] = 64] = "CLOSEPAREN";
    Token[Token["OPENBRACKET"] = 65] = "OPENBRACKET";
    Token[Token["CLOSEBRACKET"] = 66] = "CLOSEBRACKET";
    Token[Token["DOT"] = 67] = "DOT";
    Token[Token["DOT_DOT_DOT"] = 68] = "DOT_DOT_DOT";
    Token[Token["SEMICOLON"] = 69] = "SEMICOLON";
    Token[Token["COMMA"] = 70] = "COMMA";
    Token[Token["LESSTHAN"] = 71] = "LESSTHAN";
    Token[Token["GREATERTHAN"] = 72] = "GREATERTHAN";
    Token[Token["LESSTHAN_EQUALS"] = 73] = "LESSTHAN_EQUALS";
    Token[Token["GREATERTHAN_EQUALS"] = 74] = "GREATERTHAN_EQUALS";
    Token[Token["EQUALS_EQUALS"] = 75] = "EQUALS_EQUALS";
    Token[Token["EXCLAMATION_EQUALS"] = 76] = "EXCLAMATION_EQUALS";
    Token[Token["EQUALS_EQUALS_EQUALS"] = 77] = "EQUALS_EQUALS_EQUALS";
    Token[Token["EXCLAMATION_EQUALS_EQUALS"] = 78] = "EXCLAMATION_EQUALS_EQUALS";
    Token[Token["EQUALS_GREATERTHAN"] = 79] = "EQUALS_GREATERTHAN";
    Token[Token["PLUS"] = 80] = "PLUS";
    Token[Token["MINUS"] = 81] = "MINUS";
    Token[Token["ASTERISK_ASTERISK"] = 82] = "ASTERISK_ASTERISK";
    Token[Token["ASTERISK"] = 83] = "ASTERISK";
    Token[Token["SLASH"] = 84] = "SLASH";
    Token[Token["PERCENT"] = 85] = "PERCENT";
    Token[Token["PLUS_PLUS"] = 86] = "PLUS_PLUS";
    Token[Token["MINUS_MINUS"] = 87] = "MINUS_MINUS";
    Token[Token["LESSTHAN_LESSTHAN"] = 88] = "LESSTHAN_LESSTHAN";
    Token[Token["GREATERTHAN_GREATERTHAN"] = 89] = "GREATERTHAN_GREATERTHAN";
    Token[Token["GREATERTHAN_GREATERTHAN_GREATERTHAN"] = 90] = "GREATERTHAN_GREATERTHAN_GREATERTHAN";
    Token[Token["AMPERSAND"] = 91] = "AMPERSAND";
    Token[Token["BAR"] = 92] = "BAR";
    Token[Token["CARET"] = 93] = "CARET";
    Token[Token["EXCLAMATION"] = 94] = "EXCLAMATION";
    Token[Token["TILDE"] = 95] = "TILDE";
    Token[Token["AMPERSAND_AMPERSAND"] = 96] = "AMPERSAND_AMPERSAND";
    Token[Token["BAR_BAR"] = 97] = "BAR_BAR";
    Token[Token["QUESTION"] = 98] = "QUESTION";
    Token[Token["COLON"] = 99] = "COLON";
    Token[Token["EQUALS"] = 100] = "EQUALS";
    Token[Token["PLUS_EQUALS"] = 101] = "PLUS_EQUALS";
    Token[Token["MINUS_EQUALS"] = 102] = "MINUS_EQUALS";
    Token[Token["ASTERISK_EQUALS"] = 103] = "ASTERISK_EQUALS";
    Token[Token["ASTERISK_ASTERISK_EQUALS"] = 104] = "ASTERISK_ASTERISK_EQUALS";
    Token[Token["SLASH_EQUALS"] = 105] = "SLASH_EQUALS";
    Token[Token["PERCENT_EQUALS"] = 106] = "PERCENT_EQUALS";
    Token[Token["LESSTHAN_LESSTHAN_EQUALS"] = 107] = "LESSTHAN_LESSTHAN_EQUALS";
    Token[Token["GREATERTHAN_GREATERTHAN_EQUALS"] = 108] = "GREATERTHAN_GREATERTHAN_EQUALS";
    Token[Token["GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS"] = 109] = "GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS";
    Token[Token["AMPERSAND_EQUALS"] = 110] = "AMPERSAND_EQUALS";
    Token[Token["BAR_EQUALS"] = 111] = "BAR_EQUALS";
    Token[Token["CARET_EQUALS"] = 112] = "CARET_EQUALS";
    Token[Token["AT"] = 113] = "AT";
    // literals
    Token[Token["IDENTIFIER"] = 114] = "IDENTIFIER";
    Token[Token["STRINGLITERAL"] = 115] = "STRINGLITERAL";
    Token[Token["INTEGERLITERAL"] = 116] = "INTEGERLITERAL";
    Token[Token["FLOATLITERAL"] = 117] = "FLOATLITERAL";
    // meta
    Token[Token["INVALID"] = 118] = "INVALID";
    Token[Token["ENDOFFILE"] = 119] = "ENDOFFILE";
})(Token = exports.Token || (exports.Token = {}));
var IdentifierHandling;
(function (IdentifierHandling) {
    IdentifierHandling[IdentifierHandling["DEFAULT"] = 0] = "DEFAULT";
    IdentifierHandling[IdentifierHandling["PREFER"] = 1] = "PREFER";
    IdentifierHandling[IdentifierHandling["ALWAYS"] = 2] = "ALWAYS";
})(IdentifierHandling = exports.IdentifierHandling || (exports.IdentifierHandling = {}));
function tokenFromKeyword(text) {
    assert(text.length);
    switch (text.charCodeAt(0)) {
        case 97 /* a */: {
            switch (text) {
                case "abstract": return Token.ABSTRACT;
                case "as": return Token.AS;
                case "async": return Token.ASYNC;
                case "await": return Token.AWAIT;
            }
            break;
        }
        case 98 /* b */: {
            switch (text) {
                case "break": return Token.BREAK;
            }
            break;
        }
        case 99 /* c */: {
            switch (text) {
                case "case": return Token.CASE;
                case "catch": return Token.CATCH;
                case "class": return Token.CLASS;
                case "continue": return Token.CONTINUE;
                case "const": return Token.CONST;
                case "constructor": return Token.CONSTRUCTOR;
            }
            break;
        }
        case 100 /* d */: {
            switch (text) {
                case "debugger": return Token.DEBUGGER;
                case "declare": return Token.DECLARE;
                case "default": return Token.DEFAULT;
                case "delete": return Token.DELETE;
                case "do": return Token.DO;
            }
            break;
        }
        case 101 /* e */: {
            switch (text) {
                case "else": return Token.ELSE;
                case "enum": return Token.ENUM;
                case "export": return Token.EXPORT;
                case "extends": return Token.EXTENDS;
            }
            break;
        }
        case 102 /* f */: {
            switch (text) {
                case "false": return Token.FALSE;
                case "finally": return Token.FINALLY;
                case "for": return Token.FOR;
                case "from": return Token.FROM;
                case "function": return Token.FUNCTION;
            }
            break;
        }
        case 103 /* g */: {
            switch (text) {
                case "get": return Token.GET;
            }
            break;
        }
        case 105 /* i */: {
            switch (text) {
                case "if": return Token.IF;
                case "implements": return Token.IMPLEMENTS;
                case "import": return Token.IMPORT;
                case "in": return Token.IN;
                case "instanceof": return Token.INSTANCEOF;
                case "interface": return Token.INTERFACE;
                case "is": return Token.IS;
            }
            break;
        }
        case 107 /* k */: {
            switch (text) {
                case "keyof": return Token.KEYOF;
            }
            break;
        }
        case 108 /* l */: {
            switch (text) {
                case "let": return Token.LET;
            }
            break;
        }
        case 109 /* m */: {
            switch (text) {
                case "module": return Token.MODULE;
            }
            break;
        }
        case 110 /* n */: {
            switch (text) {
                case "namespace": return Token.NAMESPACE;
                case "new": return Token.NEW;
                case "null": return Token.NULL;
            }
            break;
        }
        case 111 /* o */: {
            switch (text) {
                case "of": return Token.OF;
            }
            break;
        }
        case 112 /* p */: {
            switch (text) {
                case "package": return Token.PACKAGE;
                case "private": return Token.PRIVATE;
                case "protected": return Token.PROTECTED;
                case "public": return Token.PUBLIC;
            }
            break;
        }
        case 114 /* r */: {
            switch (text) {
                case "readonly": return Token.READONLY;
                case "return": return Token.RETURN;
            }
            break;
        }
        case 115 /* s */: {
            switch (text) {
                case "set": return Token.SET;
                case "static": return Token.STATIC;
                case "super": return Token.SUPER;
                case "switch": return Token.SWITCH;
            }
            break;
        }
        case 116 /* t */: {
            switch (text) {
                case "this": return Token.THIS;
                case "throw": return Token.THROW;
                case "true": return Token.TRUE;
                case "try": return Token.TRY;
                case "type": return Token.TYPE;
                case "typeof": return Token.TYPEOF;
            }
            break;
        }
        case 118 /* v */: {
            switch (text) {
                case "var": return Token.VAR;
                case "void": return Token.VOID;
            }
            break;
        }
        case 119 /* w */: {
            switch (text) {
                case "while": return Token.WHILE;
                case "with": return Token.WITH;
            }
            break;
        }
        case 121 /* y */: {
            switch (text) {
                case "yield": return Token.YIELD;
            }
            break;
        }
    }
    return Token.INVALID;
}
exports.tokenFromKeyword = tokenFromKeyword;
function tokenIsAlsoIdentifier(token) {
    switch (token) {
        case Token.ABSTRACT:
        case Token.AS:
        case Token.CONSTRUCTOR:
        case Token.DECLARE:
        case Token.DELETE:
        case Token.FROM:
        case Token.FOR:
        case Token.GET:
        case Token.INSTANCEOF:
        case Token.IS:
        case Token.KEYOF:
        case Token.MODULE:
        case Token.NAMESPACE:
        case Token.NULL:
        case Token.READONLY:
        case Token.SET:
        case Token.TYPE:
        case Token.VOID: return true;
        default: return false;
    }
}
exports.tokenIsAlsoIdentifier = tokenIsAlsoIdentifier;
function isIllegalVariableIdentifier(name) {
    assert(name.length);
    switch (name.charCodeAt(0)) {
        case 100 /* d */: return name == "delete";
        case 102 /* f */: return name == "for";
        case 105 /* i */: return name == "instanceof";
        case 110 /* n */: return name == "null";
        case 118 /* v */: return name == "void";
    }
    return false;
}
exports.isIllegalVariableIdentifier = isIllegalVariableIdentifier;
function operatorTokenToString(token) {
    switch (token) {
        case Token.DELETE: return "delete";
        case Token.IN: return "in";
        case Token.INSTANCEOF: return "instanceof";
        case Token.NEW: return "new";
        case Token.TYPEOF: return "typeof";
        case Token.VOID: return "void";
        case Token.YIELD: return "yield";
        case Token.DOT_DOT_DOT: return "...";
        case Token.COMMA: return ",";
        case Token.LESSTHAN: return "<";
        case Token.GREATERTHAN: return ">";
        case Token.LESSTHAN_EQUALS: return "<=";
        case Token.GREATERTHAN_EQUALS: return ">=";
        case Token.EQUALS_EQUALS: return "==";
        case Token.EXCLAMATION_EQUALS: return "!=";
        case Token.EQUALS_EQUALS_EQUALS: return "===";
        case Token.EXCLAMATION_EQUALS_EQUALS: return "!==";
        case Token.PLUS: return "+";
        case Token.MINUS: return "-";
        case Token.ASTERISK_ASTERISK: return "**";
        case Token.ASTERISK: return "*";
        case Token.SLASH: return "/";
        case Token.PERCENT: return "%";
        case Token.PLUS_PLUS: return "++";
        case Token.MINUS_MINUS: return "--";
        case Token.LESSTHAN_LESSTHAN: return "<<";
        case Token.GREATERTHAN_GREATERTHAN: return ">>";
        case Token.GREATERTHAN_GREATERTHAN_GREATERTHAN: return ">>>";
        case Token.AMPERSAND: return "&";
        case Token.BAR: return "|";
        case Token.CARET: return "^";
        case Token.EXCLAMATION: return "!";
        case Token.TILDE: return "~";
        case Token.AMPERSAND_AMPERSAND: return "&&";
        case Token.BAR_BAR: return "||";
        case Token.EQUALS: return "=";
        case Token.PLUS_EQUALS: return "+=";
        case Token.MINUS_EQUALS: return "-=";
        case Token.ASTERISK_EQUALS: return "*=";
        case Token.ASTERISK_ASTERISK_EQUALS: return "**=";
        case Token.SLASH_EQUALS: return "/=";
        case Token.PERCENT_EQUALS: return "%=";
        case Token.LESSTHAN_LESSTHAN_EQUALS: return "<<=";
        case Token.GREATERTHAN_GREATERTHAN_EQUALS: return ">>=";
        case Token.GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS: return ">>>=";
        case Token.AMPERSAND_EQUALS: return "&=";
        case Token.BAR_EQUALS: return "|=";
        case Token.CARET_EQUALS: return "^=";
        default: {
            assert(false);
            return "";
        }
    }
}
exports.operatorTokenToString = operatorTokenToString;
var Range = /** @class */ (function () {
    // TODO: set these while tokenizing
    // line: i32;
    // column: i32;
    function Range(source, start, end) {
        this.debugInfoRef = 0;
        this.source = source;
        this.start = start;
        this.end = end;
    }
    Range.join = function (a, b) {
        if (a.source != b.source)
            throw new Error("source mismatch");
        return new Range(a.source, a.start < b.start ? a.start : b.start, a.end > b.end ? a.end : b.end);
    };
    Object.defineProperty(Range.prototype, "atStart", {
        get: function () {
            return new Range(this.source, this.start, this.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "atEnd", {
        get: function () {
            return new Range(this.source, this.end, this.end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "line", {
        get: function () {
            var text = this.source.text;
            var line = 1;
            for (var pos = this.start; pos >= 0; --pos) {
                if (text.charCodeAt(pos) == 10 /* LINEFEED */)
                    line++;
            }
            return line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "column", {
        get: function () {
            var text = this.source.text;
            var column = 0;
            for (var pos = this.start - 1; pos >= 0; --pos) {
                if (text.charCodeAt(pos) == 10 /* LINEFEED */)
                    break;
                ++column;
            }
            return column;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.toString = function () {
        return this.source.text.substring(this.start, this.end);
    };
    return Range;
}());
exports.Range = Range;
/** Tokenizes a source to individual {@link Token}s. */
var Tokenizer = /** @class */ (function (_super) {
    __extends(Tokenizer, _super);
    /** Constructs a new tokenizer. */
    function Tokenizer(source, diagnostics) {
        if (diagnostics === void 0) { diagnostics = null; }
        var _this = _super.call(this, diagnostics) || this;
        _this.end = 0;
        _this.pos = 0;
        _this.token = -1;
        _this.tokenPos = 0;
        _this.nextToken = -1;
        _this.nextTokenPos = 0;
        _this.nextTokenOnNewLine = false;
        _this.onComment = null;
        _this.source = source;
        _this.pos = 0;
        _this.end = source.text.length;
        _this.diagnostics = diagnostics || new Array();
        var end = _this.end;
        var text = source.text;
        // skip bom
        if (_this.pos < end &&
            text.charCodeAt(_this.pos) == 65279 /* BYTEORDERMARK */) {
            ++_this.pos;
        }
        // skip shebang
        if (_this.pos + 1 < end &&
            text.charCodeAt(_this.pos) == 35 /* HASH */ &&
            text.charCodeAt(_this.pos + 1) == 33 /* EXCLAMATION */) {
            _this.pos += 2;
            while (_this.pos < end &&
                text.charCodeAt(_this.pos) != 10 /* LINEFEED */) {
                ++_this.pos;
            }
            // 'next' now starts at lf or eof
        }
        return _this;
    }
    Tokenizer.prototype.next = function (identifierHandling) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        this.nextToken = -1;
        return this.token = this.unsafeNext(identifierHandling);
    };
    Tokenizer.prototype.unsafeNext = function (identifierHandling, maxTokenLength) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        if (maxTokenLength === void 0) { maxTokenLength = i32.MAX_VALUE; }
        var end = this.end;
        var text = this.source.text;
        while (this.pos < end) {
            this.tokenPos = this.pos;
            var c = text.charCodeAt(this.pos);
            switch (c) {
                case 13 /* CARRIAGERETURN */: {
                    if (!(++this.pos < end &&
                        text.charCodeAt(this.pos) == 10 /* LINEFEED */))
                        break;
                    // otherwise fall-through
                }
                case 10 /* LINEFEED */:
                case 9 /* TAB */:
                case 11 /* VERTICALTAB */:
                case 12 /* FORMFEED */:
                case 32 /* SPACE */: {
                    ++this.pos;
                    break;
                }
                case 33 /* EXCLAMATION */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end &&
                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                        ++this.pos;
                        if (maxTokenLength > 2 && this.pos < end &&
                            text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.EXCLAMATION_EQUALS_EQUALS;
                        }
                        return Token.EXCLAMATION_EQUALS;
                    }
                    return Token.EXCLAMATION;
                }
                case 34 /* DOUBLEQUOTE */:
                case 39 /* SINGLEQUOTE */:
                case 96 /* BACKTICK */: { // TODO
                    return Token.STRINGLITERAL; // expects a call to readString
                }
                case 37 /* PERCENT */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end &&
                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                        ++this.pos;
                        return Token.PERCENT_EQUALS;
                    }
                    return Token.PERCENT;
                }
                case 38 /* AMPERSAND */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 38 /* AMPERSAND */) {
                            ++this.pos;
                            return Token.AMPERSAND_AMPERSAND;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.AMPERSAND_EQUALS;
                        }
                    }
                    return Token.AMPERSAND;
                }
                case 40 /* OPENPAREN */: {
                    ++this.pos;
                    return Token.OPENPAREN;
                }
                case 41 /* CLOSEPAREN */: {
                    ++this.pos;
                    return Token.CLOSEPAREN;
                }
                case 42 /* ASTERISK */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.ASTERISK_EQUALS;
                        }
                        if (chr == 42 /* ASTERISK */) {
                            ++this.pos;
                            if (maxTokenLength > 2 && this.pos < end &&
                                text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                ++this.pos;
                                return Token.ASTERISK_ASTERISK_EQUALS;
                            }
                            return Token.ASTERISK_ASTERISK;
                        }
                    }
                    return Token.ASTERISK;
                }
                case 43 /* PLUS */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 43 /* PLUS */) {
                            ++this.pos;
                            return Token.PLUS_PLUS;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.PLUS_EQUALS;
                        }
                    }
                    return Token.PLUS;
                }
                case 44 /* COMMA */: {
                    ++this.pos;
                    return Token.COMMA;
                }
                case 45 /* MINUS */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 45 /* MINUS */) {
                            ++this.pos;
                            return Token.MINUS_MINUS;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.MINUS_EQUALS;
                        }
                    }
                    return Token.MINUS;
                }
                case 46 /* DOT */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (util_1.isDecimalDigit(chr)) {
                            --this.pos;
                            return Token.FLOATLITERAL; // expects a call to readFloat
                        }
                        if (maxTokenLength > 2 && this.pos + 1 < end &&
                            chr == 46 /* DOT */ &&
                            text.charCodeAt(this.pos + 1) == 46 /* DOT */) {
                            this.pos += 2;
                            return Token.DOT_DOT_DOT;
                        }
                    }
                    return Token.DOT;
                }
                case 47 /* SLASH */: {
                    var commentStartPos = this.pos;
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 47 /* SLASH */) { // single-line
                            var commentKind = ast_1.CommentKind.LINE;
                            if (this.pos + 1 < end &&
                                text.charCodeAt(this.pos + 1) == 47 /* SLASH */) {
                                ++this.pos;
                                commentKind = ast_1.CommentKind.TRIPLE;
                            }
                            while (++this.pos < end) {
                                if (text.charCodeAt(this.pos) == 10 /* LINEFEED */) {
                                    ++this.pos;
                                    break;
                                }
                            }
                            if (this.onComment) {
                                this.onComment(commentKind, text.substring(commentStartPos, this.pos), this.range(commentStartPos, this.pos));
                            }
                            break;
                        }
                        if (chr == 42 /* ASTERISK */) { // multi-line
                            var closed = false;
                            while (++this.pos < end) {
                                c = text.charCodeAt(this.pos);
                                if (c == 42 /* ASTERISK */ &&
                                    this.pos + 1 < end &&
                                    text.charCodeAt(this.pos + 1) == 47 /* SLASH */) {
                                    this.pos += 2;
                                    closed = true;
                                    break;
                                }
                            }
                            if (!closed) {
                                this.error(diagnostics_1.DiagnosticCode._0_expected, this.range(this.pos), "*/");
                            }
                            else if (this.onComment) {
                                this.onComment(ast_1.CommentKind.BLOCK, text.substring(commentStartPos, this.pos), this.range(commentStartPos, this.pos));
                            }
                            break;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.SLASH_EQUALS;
                        }
                    }
                    return Token.SLASH;
                }
                case 48 /* _0 */:
                case 49 /* _1 */:
                case 50 /* _2 */:
                case 51 /* _3 */:
                case 52 /* _4 */:
                case 53 /* _5 */:
                case 54 /* _6 */:
                case 55 /* _7 */:
                case 56 /* _8 */:
                case 57 /* _9 */: {
                    return this.testInteger()
                        ? Token.INTEGERLITERAL // expects a call to readInteger
                        : Token.FLOATLITERAL; // expects a call to readFloat
                }
                case 58 /* COLON */: {
                    ++this.pos;
                    return Token.COLON;
                }
                case 59 /* SEMICOLON */: {
                    ++this.pos;
                    return Token.SEMICOLON;
                }
                case 60 /* LESSTHAN */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 60 /* LESSTHAN */) {
                            ++this.pos;
                            if (maxTokenLength > 2 &&
                                this.pos < end &&
                                text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                ++this.pos;
                                return Token.LESSTHAN_LESSTHAN_EQUALS;
                            }
                            return Token.LESSTHAN_LESSTHAN;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.LESSTHAN_EQUALS;
                        }
                    }
                    return Token.LESSTHAN;
                }
                case 61 /* EQUALS */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            if (maxTokenLength > 2 &&
                                this.pos < end &&
                                text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                ++this.pos;
                                return Token.EQUALS_EQUALS_EQUALS;
                            }
                            return Token.EQUALS_EQUALS;
                        }
                        if (chr == 62 /* GREATERTHAN */) {
                            ++this.pos;
                            return Token.EQUALS_GREATERTHAN;
                        }
                    }
                    return Token.EQUALS;
                }
                case 62 /* GREATERTHAN */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 62 /* GREATERTHAN */) {
                            ++this.pos;
                            if (maxTokenLength > 2 && this.pos < end) {
                                chr = text.charCodeAt(this.pos);
                                if (chr == 62 /* GREATERTHAN */) {
                                    ++this.pos;
                                    if (maxTokenLength > 3 && this.pos < end &&
                                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                        ++this.pos;
                                        return Token.GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS;
                                    }
                                    return Token.GREATERTHAN_GREATERTHAN_GREATERTHAN;
                                }
                                if (chr == 61 /* EQUALS */) {
                                    ++this.pos;
                                    return Token.GREATERTHAN_GREATERTHAN_EQUALS;
                                }
                            }
                            return Token.GREATERTHAN_GREATERTHAN;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.GREATERTHAN_EQUALS;
                        }
                    }
                    return Token.GREATERTHAN;
                }
                case 63 /* QUESTION */: {
                    ++this.pos;
                    return Token.QUESTION;
                }
                case 91 /* OPENBRACKET */: {
                    ++this.pos;
                    return Token.OPENBRACKET;
                }
                case 93 /* CLOSEBRACKET */: {
                    ++this.pos;
                    return Token.CLOSEBRACKET;
                }
                case 94 /* CARET */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end &&
                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                        ++this.pos;
                        return Token.CARET_EQUALS;
                    }
                    return Token.CARET;
                }
                case 123 /* OPENBRACE */: {
                    ++this.pos;
                    return Token.OPENBRACE;
                }
                case 124 /* BAR */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 124 /* BAR */) {
                            ++this.pos;
                            return Token.BAR_BAR;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.BAR_EQUALS;
                        }
                    }
                    return Token.BAR;
                }
                case 125 /* CLOSEBRACE */: {
                    ++this.pos;
                    return Token.CLOSEBRACE;
                }
                case 126 /* TILDE */: {
                    ++this.pos;
                    return Token.TILDE;
                }
                case 64 /* AT */: {
                    ++this.pos;
                    return Token.AT;
                }
                default: {
                    if (util_1.isIdentifierStart(c)) {
                        if (util_1.isKeywordCharacter(c)) {
                            var posBefore = this.pos;
                            while (++this.pos < end &&
                                util_1.isIdentifierPart(c = text.charCodeAt(this.pos))) {
                                if (!util_1.isKeywordCharacter(c)) {
                                    this.pos = posBefore;
                                    return Token.IDENTIFIER;
                                }
                            }
                            var keywordText = text.substring(posBefore, this.pos);
                            var keywordToken = tokenFromKeyword(keywordText);
                            if (keywordToken !== Token.INVALID &&
                                identifierHandling !== IdentifierHandling.ALWAYS &&
                                !(identifierHandling === IdentifierHandling.PREFER &&
                                    tokenIsAlsoIdentifier(keywordToken))) {
                                return keywordToken;
                            }
                            this.pos = posBefore;
                        }
                        return Token.IDENTIFIER; // expects a call to readIdentifier
                    }
                    else if (util_1.isWhiteSpace(c)) {
                        ++this.pos;
                        break;
                    }
                    this.error(diagnostics_1.DiagnosticCode.Invalid_character, this.range(this.pos, this.pos + 1));
                    ++this.pos;
                    return Token.INVALID;
                }
            }
        }
        return Token.ENDOFFILE;
    };
    Tokenizer.prototype.peek = function (checkOnNewLine, identifierHandling, maxCompoundLength) {
        if (checkOnNewLine === void 0) { checkOnNewLine = false; }
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        if (maxCompoundLength === void 0) { maxCompoundLength = i32.MAX_VALUE; }
        var text = this.source.text;
        if (this.nextToken < 0) {
            var posBefore = this.pos;
            var tokenBefore = this.token;
            var tokenPosBefore = this.tokenPos;
            this.nextToken = this.unsafeNext(identifierHandling, maxCompoundLength);
            this.nextTokenPos = this.tokenPos;
            if (checkOnNewLine) {
                this.nextTokenOnNewLine = false;
                for (var pos = posBefore, end = this.nextTokenPos; pos < end; ++pos) {
                    if (util_1.isLineBreak(text.charCodeAt(pos))) {
                        this.nextTokenOnNewLine = true;
                        break;
                    }
                }
            }
            this.pos = posBefore;
            this.token = tokenBefore;
            this.tokenPos = tokenPosBefore;
        }
        return this.nextToken;
    };
    Tokenizer.prototype.skipIdentifier = function (identifierHandling) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.PREFER; }
        return this.skip(Token.IDENTIFIER, identifierHandling);
    };
    Tokenizer.prototype.skip = function (token, identifierHandling) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        var posBefore = this.pos;
        var tokenBefore = this.token;
        var tokenPosBefore = this.tokenPos;
        var maxCompoundLength = i32.MAX_VALUE;
        switch (token) {
            case Token.GREATERTHAN: { // where parsing type arguments
                maxCompoundLength = 1;
                break;
            }
        }
        this.token = this.unsafeNext(identifierHandling, maxCompoundLength);
        if (this.token == token) {
            this.nextToken = -1;
            return true;
        }
        else {
            this.pos = posBefore;
            this.token = tokenBefore;
            this.tokenPos = tokenPosBefore;
            return false;
        }
    };
    Tokenizer.prototype.mark = function () {
        var state;
        if (reusableState) {
            state = reusableState;
            reusableState = null;
        }
        else {
            state = new State();
        }
        state.pos = this.pos;
        state.token = this.token;
        state.tokenPos = this.tokenPos;
        return state;
    };
    Tokenizer.prototype.discard = function (state) {
        reusableState = state;
    };
    Tokenizer.prototype.reset = function (state) {
        this.pos = state.pos;
        this.token = state.token;
        this.tokenPos = state.tokenPos;
        this.nextToken = -1;
    };
    Tokenizer.prototype.range = function (start, end) {
        if (start === void 0) { start = -1; }
        if (end === void 0) { end = -1; }
        if (start < 0) {
            start = this.tokenPos;
            end = this.pos;
        }
        else if (end < 0) {
            end = start;
        }
        return new Range(this.source, start, end);
    };
    Tokenizer.prototype.readIdentifier = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        while (++this.pos < end &&
            util_1.isIdentifierPart(text.charCodeAt(this.pos)))
            ;
        return text.substring(start, this.pos);
    };
    Tokenizer.prototype.readString = function () {
        var text = this.source.text;
        var quote = text.charCodeAt(this.pos++);
        var start = this.pos;
        var end = this.end;
        var result = "";
        while (true) {
            if (this.pos >= end) {
                result += text.substring(start, this.pos);
                this.error(diagnostics_1.DiagnosticCode.Unterminated_string_literal, this.range(start - 1, end));
                break;
            }
            var c = text.charCodeAt(this.pos);
            if (c == quote) {
                result += text.substring(start, this.pos++);
                break;
            }
            if (c == 92 /* BACKSLASH */) {
                result += text.substring(start, this.pos);
                result += this.readEscapeSequence();
                start = this.pos;
                continue;
            }
            if (util_1.isLineBreak(c) && quote != 96 /* BACKTICK */) {
                result += text.substring(start, this.pos);
                this.error(diagnostics_1.DiagnosticCode.Unterminated_string_literal, this.range(start - 1, this.pos));
                break;
            }
            ++this.pos;
        }
        return result;
    };
    Tokenizer.prototype.readEscapeSequence = function () {
        var end = this.end;
        if (++this.pos >= end) {
            this.error(diagnostics_1.DiagnosticCode.Unexpected_end_of_text, this.range(end));
            return "";
        }
        var text = this.source.text;
        var c = text.charCodeAt(this.pos++);
        switch (c) {
            case 48 /* _0 */: return "\0";
            case 98 /* b */: return "\b";
            case 116 /* t */: return "\t";
            case 110 /* n */: return "\n";
            case 118 /* v */: return "\v";
            case 102 /* f */: return "\f";
            case 114 /* r */: return "\r";
            case 39 /* SINGLEQUOTE */: return "'";
            case 34 /* DOUBLEQUOTE */: return "\"";
            case 117 /* u */: {
                if (this.pos < end &&
                    text.charCodeAt(this.pos) == 123 /* OPENBRACE */) {
                    ++this.pos;
                    return this.readExtendedUnicodeEscape(); // \u{DDDDDDDD}
                }
                return this.readUnicodeEscape(); // \uDDDD
            }
            case 13 /* CARRIAGERETURN */: {
                if (this.pos < end &&
                    text.charCodeAt(this.pos) == 10 /* LINEFEED */) {
                    ++this.pos;
                }
                // fall through
            }
            case 10 /* LINEFEED */:
            case 8232 /* LINESEPARATOR */:
            case 8233 /* PARAGRAPHSEPARATOR */: return "";
            default: return String.fromCharCode(c);
        }
    };
    Tokenizer.prototype.readRegexpPattern = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        var escaped = false;
        while (true) {
            if (this.pos >= end) {
                this.error(diagnostics_1.DiagnosticCode.Unterminated_regular_expression_literal, this.range(start, end));
                break;
            }
            if (text.charCodeAt(this.pos) == 92 /* BACKSLASH */) {
                ++this.pos;
                escaped = true;
                continue;
            }
            var c = text.charCodeAt(this.pos);
            if (!escaped && c == 47 /* SLASH */)
                break;
            if (util_1.isLineBreak(c)) {
                this.error(diagnostics_1.DiagnosticCode.Unterminated_regular_expression_literal, this.range(start, this.pos));
                break;
            }
            ++this.pos;
            escaped = false;
        }
        return text.substring(start, this.pos);
    };
    Tokenizer.prototype.readRegexpFlags = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        var flags = 0;
        while (this.pos < end) {
            var c = text.charCodeAt(this.pos);
            if (!util_1.isIdentifierPart(c))
                break;
            ++this.pos;
            // make sure each supported flag is unique
            switch (c) {
                case 103 /* g */: {
                    flags |= flags & 1 ? -1 : 1;
                    break;
                }
                case 105 /* i */: {
                    flags |= flags & 2 ? -1 : 2;
                    break;
                }
                case 109 /* m */: {
                    flags |= flags & 4 ? -1 : 4;
                    break;
                }
                default: {
                    flags = -1;
                    break;
                }
            }
        }
        if (flags == -1) {
            this.error(diagnostics_1.DiagnosticCode.Invalid_regular_expression_flags, this.range(start, this.pos));
        }
        return text.substring(start, this.pos);
    };
    Tokenizer.prototype.testInteger = function () {
        var end = this.end;
        var text = this.source.text;
        if (this.pos + 1 < end && text.charCodeAt(this.pos) == 48 /* _0 */) {
            switch (text.charCodeAt(this.pos + 2)) {
                case 120 /* x */:
                case 88 /* X */:
                case 98 /* b */:
                case 66 /* B */:
                case 111 /* o */:
                case 79 /* O */: return true;
            }
        }
        var pos = this.pos;
        while (pos < end) {
            var c = text.charCodeAt(pos);
            if (c == 46 /* DOT */ || c == 101 /* e */ || c == 69 /* E */)
                return false;
            if ((c < 48 /* _0 */ || c > 57 /* _9 */) && c != 95 /* _ */)
                break;
            // does not validate separator placement (this is done in readXYInteger)
            pos++;
        }
        return true;
    };
    Tokenizer.prototype.readInteger = function () {
        var text = this.source.text;
        if (this.pos + 2 < this.end && text.charCodeAt(this.pos) == 48 /* _0 */) {
            switch (text.charCodeAt(this.pos + 1)) {
                case 120 /* x */:
                case 88 /* X */: {
                    this.pos += 2;
                    return this.readHexInteger();
                }
                case 98 /* b */:
                case 66 /* B */: {
                    this.pos += 2;
                    return this.readBinaryInteger();
                }
                case 111 /* o */:
                case 79 /* O */: {
                    this.pos += 2;
                    return this.readOctalInteger();
                }
            }
            if (util_1.isOctalDigit(text.charCodeAt(this.pos + 1))) {
                var start = this.pos;
                ++this.pos;
                var value = this.readOctalInteger();
                this.error(diagnostics_1.DiagnosticCode.Octal_literals_are_not_allowed_in_strict_mode, this.range(start, this.pos));
                return value;
            }
        }
        return this.readDecimalInteger();
    };
    Tokenizer.prototype.readHexInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var value = i64_new(0);
        var i64_4 = i64_new(4);
        var sepEnd = start;
        var end = this.end;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c >= 48 /* _0 */ && c <= 57 /* _9 */) {
                // value = (value << 4) + c - CharCode._0;
                value = i64_add(i64_shl(value, i64_4), i64_new(c - 48 /* _0 */));
            }
            else if (c >= 65 /* A */ && c <= 70 /* F */) {
                // value = (value << 4) + 10 + c - CharCode.A;
                value = i64_add(i64_shl(value, i64_4), i64_new(10 + c - 65 /* A */));
            }
            else if (c >= 97 /* a */ && c <= 102 /* f */) {
                // value = (value << 4) + 10 + c - CharCode.a;
                value = i64_add(i64_shl(value, i64_4), i64_new(10 + c - 97 /* a */));
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            this.pos = pos + 1;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Hexadecimal_digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readDecimalInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        var value = i64_new(0);
        var i64_10 = i64_new(10);
        var sepEnd = start;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c >= 48 /* _0 */ && c <= 57 /* _9 */) {
                // value = value * 10 + c - CharCode._0;
                value = i64_add(i64_mul(value, i64_10), i64_new(c - 48 /* _0 */));
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            this.pos = pos + 1;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readOctalInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var value = i64_new(0);
        var i64_3 = i64_new(3);
        var sepEnd = start;
        var end = this.end;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c >= 48 /* _0 */ && c <= 55 /* _7 */) {
                // value = (value << 3) + c - CharCode._0;
                value = i64_add(i64_shl(value, i64_3), i64_new(c - 48 /* _0 */));
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            ++this.pos;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Octal_digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readBinaryInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var value = i64_new(0);
        var i64_1 = i64_new(1);
        var sepEnd = start;
        var end = this.end;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c == 48 /* _0 */) {
                // value = (value << 1);
                value = i64_shl(value, i64_1);
            }
            else if (c == 49 /* _1 */) {
                // value = (value << 1) + 1;
                value = i64_add(i64_shl(value, i64_1), i64_1);
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            this.pos = pos + 1;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Binary_digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readFloat = function () {
        // var text = this.source.text;
        // if (text.charCodeAt(this.pos) == CharCode._0 && this.pos + 2 < this.end) {
        //   switch (text.charCodeAt(this.pos + 1)) {
        //     case CharCode.X:
        //     case CharCode.x: {
        //       this.pos += 2;
        //       return this.readHexFloat();
        //     }
        //   }
        // }
        return this.readDecimalFloat();
    };
    Tokenizer.prototype.readDecimalFloat = function () {
        // TODO: numeric separators (parseFloat can't handle these)
        var start = this.pos;
        var end = this.end;
        var text = this.source.text;
        while (this.pos < end && util_1.isDecimalDigit(text.charCodeAt(this.pos))) {
            ++this.pos;
        }
        if (this.pos < end && text.charCodeAt(this.pos) == 46 /* DOT */) {
            ++this.pos;
            while (this.pos < end && util_1.isDecimalDigit(text.charCodeAt(this.pos))) {
                ++this.pos;
            }
        }
        if (this.pos < end) {
            var c = text.charCodeAt(this.pos);
            if (c == 101 /* e */ || c == 69 /* E */) {
                if (++this.pos < end &&
                    (c = text.charCodeAt(this.pos)) == 45 /* MINUS */ || c == 43 /* PLUS */ &&
                    util_1.isDecimalDigit(text.charCodeAt(this.pos + 1))) {
                    ++this.pos;
                }
                while (this.pos < end && util_1.isDecimalDigit(text.charCodeAt(this.pos))) {
                    ++this.pos;
                }
            }
        }
        return parseFloat(text.substring(start, this.pos));
    };
    Tokenizer.prototype.readHexFloat = function () {
        throw new Error("not implemented"); // TBD
    };
    Tokenizer.prototype.readUnicodeEscape = function () {
        var remain = 4;
        var value = 0;
        var end = this.end;
        var text = this.source.text;
        while (this.pos < end) {
            var c = text.charCodeAt(this.pos++);
            if (c >= 48 /* _0 */ && c <= 57 /* _9 */) {
                value = (value << 4) + c - 48 /* _0 */;
            }
            else if (c >= 65 /* A */ && c <= 70 /* F */) {
                value = (value << 4) + c + (10 - 65 /* A */);
            }
            else if (c >= 97 /* a */ && c <= 102 /* f */) {
                value = (value << 4) + c + (10 - 97 /* a */);
            }
            else {
                this.error(diagnostics_1.DiagnosticCode.Hexadecimal_digit_expected, this.range(this.pos - 1, this.pos));
                return "";
            }
            if (--remain == 0)
                break;
        }
        if (remain) {
            this.error(diagnostics_1.DiagnosticCode.Unexpected_end_of_text, this.range(this.pos));
            return "";
        }
        return String.fromCharCode(value);
    };
    Tokenizer.prototype.readExtendedUnicodeEscape = function () {
        var start = this.pos;
        var value = this.readHexInteger();
        var value32 = i64_low(value);
        var invalid = false;
        assert(!i64_high(value));
        if (value32 > 0x10FFFF) {
            this.error(diagnostics_1.DiagnosticCode.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive, this.range(start, this.pos));
            invalid = true;
        }
        var end = this.end;
        var text = this.source.text;
        if (this.pos >= end) {
            this.error(diagnostics_1.DiagnosticCode.Unexpected_end_of_text, this.range(start, end));
            invalid = true;
        }
        else if (text.charCodeAt(this.pos) == 125 /* CLOSEBRACE */) {
            ++this.pos;
        }
        else {
            this.error(diagnostics_1.DiagnosticCode.Unterminated_Unicode_escape_sequence, this.range(start, this.pos));
            invalid = true;
        }
        if (invalid)
            return "";
        return value32 < 65536
            ? String.fromCharCode(value32)
            : String.fromCharCode(((value32 - 65536) >>> 10) + 0xD800, ((value32 - 65536) & 1023) + 0xDC00);
    };
    Tokenizer.prototype.finish = function () {
    };
    return Tokenizer;
}(diagnostics_1.DiagnosticEmitter));
exports.Tokenizer = Tokenizer;
/** Tokenizer state as returned by {@link Tokenizer#mark} and consumed by {@link Tokenizer#reset}. */
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
exports.State = State;
// Reusable state object to reduce allocations
var reusableState = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5pemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rva2VuaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRyxDQUFBLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLDZDQUl1QjtBQUV2Qiw2QkFHZTtBQUVmLCtCQVNnQjtBQUVoQix5QkFBeUI7QUFDekIsSUFBWSxLQXNJWDtBQXRJRCxXQUFZLEtBQUs7SUFFZixXQUFXO0lBQ1gsb0ZBQW9GO0lBRXBGLHlDQUFRLENBQUE7SUFDUiw2QkFBRSxDQUFBO0lBQ0YsbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wsaUNBQUksQ0FBQTtJQUNKLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wsbUNBQUssQ0FBQTtJQUNMLHlDQUFRLENBQUE7SUFDUixnREFBVyxDQUFBO0lBQ1gsMENBQVEsQ0FBQTtJQUNSLHdDQUFPLENBQUE7SUFDUCx3Q0FBTyxDQUFBO0lBQ1Asc0NBQU0sQ0FBQTtJQUNOLDhCQUFFLENBQUE7SUFDRixrQ0FBSSxDQUFBO0lBQ0osa0NBQUksQ0FBQTtJQUNKLHNDQUFNLENBQUE7SUFDTix3Q0FBTyxDQUFBO0lBQ1Asb0NBQUssQ0FBQTtJQUNMLHdDQUFPLENBQUE7SUFDUCxnQ0FBRyxDQUFBO0lBQ0gsa0NBQUksQ0FBQTtJQUNKLDBDQUFRLENBQUE7SUFDUixnQ0FBRyxDQUFBO0lBQ0gsOEJBQUUsQ0FBQTtJQUNGLDhDQUFVLENBQUE7SUFDVixzQ0FBTSxDQUFBO0lBQ04sOEJBQUUsQ0FBQTtJQUNGLDhDQUFVLENBQUE7SUFDViw0Q0FBUyxDQUFBO0lBQ1QsOEJBQUUsQ0FBQTtJQUNGLG9DQUFLLENBQUE7SUFDTCxnQ0FBRyxDQUFBO0lBQ0gsc0NBQU0sQ0FBQTtJQUNOLDRDQUFTLENBQUE7SUFDVCxnQ0FBRyxDQUFBO0lBQ0gsa0NBQUksQ0FBQTtJQUNKLDhCQUFFLENBQUE7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QUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxzQkFBSztBQVNsQiw4Q0FBOEM7QUFDOUMsSUFBSSxhQUFhLEdBQWlCLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBUeXBlU2NyaXB0IHRva2VuaXplciBtb2RpZmllZCBmb3IgQXNzZW1ibHlTY3JpcHQuXG4gKlxuICogU2tpcHMgb3ZlciB0cml2aWEgYW5kIHByb3ZpZGVzIGEgZ2VuZXJhbCBtYXJrL3Jlc2V0IG1lY2hhbmlzbSBmb3IgdGhlIHBhcnNlciB0byB1dGlsaXplIG9uXG4gKiBhbWJpZ3VvdXMgdG9rZW5zLlxuICpcbiAqIEBtb2R1bGUgdG9rZW5pemVyXG4gKi8vKioqL1xuXG5pbXBvcnQge1xuICBEaWFnbm9zdGljQ29kZSxcbiAgRGlhZ25vc3RpY01lc3NhZ2UsXG4gIERpYWdub3N0aWNFbWl0dGVyXG59IGZyb20gXCIuL2RpYWdub3N0aWNzXCI7XG5cbmltcG9ydCB7XG4gIFNvdXJjZSxcbiAgQ29tbWVudEtpbmRcbn0gZnJvbSBcIi4vYXN0XCI7XG5cbmltcG9ydCB7XG4gIENoYXJDb2RlLFxuICBpc0xpbmVCcmVhayxcbiAgaXNXaGl0ZVNwYWNlLFxuICBpc0lkZW50aWZpZXJTdGFydCxcbiAgaXNJZGVudGlmaWVyUGFydCxcbiAgaXNEZWNpbWFsRGlnaXQsXG4gIGlzT2N0YWxEaWdpdCxcbiAgaXNLZXl3b3JkQ2hhcmFjdGVyXG59IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqIE5hbWVkIHRva2VuIHR5cGVzLiAqL1xuZXhwb3J0IGVudW0gVG9rZW4ge1xuXG4gIC8vIGtleXdvcmRzXG4gIC8vIGRpc2NhcmRlZDogQU5ZLCBCT09MRUFOLCBORVZFUiwgTlVNQkVSLCBTVFJJTkcsIFNZTUJPTCwgVU5ERUZJTkVELCBMRVNTVEhBTl9TTEFTSFxuXG4gIEFCU1RSQUNULFxuICBBUyxcbiAgQVNZTkMsXG4gIEFXQUlULCAgICAgICAgLy8gRVMyMDE3XG4gIEJSRUFLLCAgICAgICAgLy8gRVMyMDE3XG4gIENBU0UsICAgICAgICAgLy8gRVMyMDE3XG4gIENBVENILCAgICAgICAgLy8gRVMyMDE3XG4gIENMQVNTLCAgICAgICAgLy8gRVMyMDE3XG4gIENPTlNULCAgICAgICAgLy8gRVMyMDE3XG4gIENPTlRJTlVFLCAgICAgLy8gRVMyMDE3XG4gIENPTlNUUlVDVE9SLFxuICBERUJVR0dFUiwgICAgIC8vIEVTMjAxN1xuICBERUNMQVJFLFxuICBERUZBVUxULCAgICAgIC8vIEVTMjAxN1xuICBERUxFVEUsICAgICAgIC8vIEVTMjAxN1xuICBETywgICAgICAgICAgIC8vIEVTMjAxN1xuICBFTFNFLCAgICAgICAgIC8vIEVTMjAxN1xuICBFTlVNLCAgICAgICAgIC8vIEVTMjAxNyBmdXR1cmVcbiAgRVhQT1JULCAgICAgICAvLyBFUzIwMTdcbiAgRVhURU5EUywgICAgICAvLyBFUzIwMTdcbiAgRkFMU0UsICAgICAgICAvLyBFU1xuICBGSU5BTExZLCAgICAgIC8vIEVTMjAxN1xuICBGT1IsICAgICAgICAgIC8vIEVTMjAxN1xuICBGUk9NLCAgICAgICAgIC8vIEFTIHBvc3NpYmxlIGlkZW50aWZpZXJcbiAgRlVOQ1RJT04sICAgICAvLyBFUzIwMTdcbiAgR0VULFxuICBJRiwgICAgICAgICAgIC8vIEVTMjAxN1xuICBJTVBMRU1FTlRTLCAgIC8vIEVTMjAxNyBub24tbGV4aWNhbFxuICBJTVBPUlQsICAgICAgIC8vIEVTMjAxN1xuICBJTiwgICAgICAgICAgIC8vIEVTMjAxN1xuICBJTlNUQU5DRU9GLCAgIC8vIEVTMjAxN1xuICBJTlRFUkZBQ0UsICAgIC8vIEVTMjAxNyBub24tbGV4aWNhbFxuICBJUyxcbiAgS0VZT0YsXG4gIExFVCwgICAgICAgICAgLy8gRVMyMDE3IG5vbi1sZXhpY2FsXG4gIE1PRFVMRSwgICAgICAgLy8gQVMgcG9zc2libGUgaWRlbnRpZmllclxuICBOQU1FU1BBQ0UsICAgIC8vIEFTIHBvc3NpYmxlIGlkZW50aWZpZXJcbiAgTkVXLCAgICAgICAgICAvLyBFUzIwMTdcbiAgTlVMTCwgICAgICAgICAvLyBFU1xuICBPRixcbiAgUEFDS0FHRSwgICAgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgUFJJVkFURSwgICAgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgUFJPVEVDVEVELCAgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgUFVCTElDLCAgICAgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgUkVBRE9OTFksXG4gIFJFVFVSTiwgICAgICAgLy8gRVMyMDE3XG4gIFNFVCxcbiAgU1RBVElDLCAgICAgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgU1VQRVIsICAgICAgICAvLyBFUzIwMTdcbiAgU1dJVENILCAgICAgICAvLyBFUzIwMTdcbiAgVEhJUywgICAgICAgICAvLyBFUzIwMTdcbiAgVEhST1csICAgICAgICAvLyBFUzIwMTdcbiAgVFJVRSwgICAgICAgICAvLyBFU1xuICBUUlksICAgICAgICAgIC8vIEVTMjAxN1xuICBUWVBFLCAgICAgICAgIC8vIEFTIHBvc3NpYmxlIGlkZW50aWZpZXJcbiAgVFlQRU9GLCAgICAgICAvLyBFUzIwMTdcbiAgVkFSLCAgICAgICAgICAvLyBFUzIwMTdcbiAgVk9JRCwgICAgICAgICAvLyBFUzIwMTdcbiAgV0hJTEUsICAgICAgICAvLyBFUzIwMTdcbiAgV0lUSCwgICAgICAgICAvLyBFUzIwMTdcbiAgWUlFTEQsICAgICAgICAvLyBFUzIwMTdcblxuICAvLyBwdW5jdHVhdGlvblxuXG4gIE9QRU5CUkFDRSxcbiAgQ0xPU0VCUkFDRSxcbiAgT1BFTlBBUkVOLFxuICBDTE9TRVBBUkVOLFxuICBPUEVOQlJBQ0tFVCxcbiAgQ0xPU0VCUkFDS0VULFxuICBET1QsXG4gIERPVF9ET1RfRE9ULFxuICBTRU1JQ09MT04sXG4gIENPTU1BLFxuICBMRVNTVEhBTixcbiAgR1JFQVRFUlRIQU4sXG4gIExFU1NUSEFOX0VRVUFMUyxcbiAgR1JFQVRFUlRIQU5fRVFVQUxTLFxuICBFUVVBTFNfRVFVQUxTLFxuICBFWENMQU1BVElPTl9FUVVBTFMsXG4gIEVRVUFMU19FUVVBTFNfRVFVQUxTLFxuICBFWENMQU1BVElPTl9FUVVBTFNfRVFVQUxTLFxuICBFUVVBTFNfR1JFQVRFUlRIQU4sXG4gIFBMVVMsXG4gIE1JTlVTLFxuICBBU1RFUklTS19BU1RFUklTSyxcbiAgQVNURVJJU0ssXG4gIFNMQVNILFxuICBQRVJDRU5ULFxuICBQTFVTX1BMVVMsXG4gIE1JTlVTX01JTlVTLFxuICBMRVNTVEhBTl9MRVNTVEhBTixcbiAgR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU4sXG4gIEdSRUFURVJUSEFOX0dSRUFURVJUSEFOX0dSRUFURVJUSEFOLFxuICBBTVBFUlNBTkQsXG4gIEJBUixcbiAgQ0FSRVQsXG4gIEVYQ0xBTUFUSU9OLFxuICBUSUxERSxcbiAgQU1QRVJTQU5EX0FNUEVSU0FORCxcbiAgQkFSX0JBUixcbiAgUVVFU1RJT04sXG4gIENPTE9OLFxuICBFUVVBTFMsXG4gIFBMVVNfRVFVQUxTLFxuICBNSU5VU19FUVVBTFMsXG4gIEFTVEVSSVNLX0VRVUFMUyxcbiAgQVNURVJJU0tfQVNURVJJU0tfRVFVQUxTLFxuICBTTEFTSF9FUVVBTFMsXG4gIFBFUkNFTlRfRVFVQUxTLFxuICBMRVNTVEhBTl9MRVNTVEhBTl9FUVVBTFMsXG4gIEdSRUFURVJUSEFOX0dSRUFURVJUSEFOX0VRVUFMUyxcbiAgR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fRVFVQUxTLFxuICBBTVBFUlNBTkRfRVFVQUxTLFxuICBCQVJfRVFVQUxTLFxuICBDQVJFVF9FUVVBTFMsXG4gIEFULFxuXG4gIC8vIGxpdGVyYWxzXG5cbiAgSURFTlRJRklFUixcbiAgU1RSSU5HTElURVJBTCxcbiAgSU5URUdFUkxJVEVSQUwsXG4gIEZMT0FUTElURVJBTCxcblxuICAvLyBtZXRhXG5cbiAgSU5WQUxJRCxcbiAgRU5ET0ZGSUxFXG59XG5cbmV4cG9ydCBlbnVtIElkZW50aWZpZXJIYW5kbGluZyB7XG4gIERFRkFVTFQsXG4gIFBSRUZFUixcbiAgQUxXQVlTXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbkZyb21LZXl3b3JkKHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgYXNzZXJ0KHRleHQubGVuZ3RoKTtcbiAgc3dpdGNoICh0ZXh0LmNoYXJDb2RlQXQoMCkpIHtcbiAgICBjYXNlIENoYXJDb2RlLmE6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwiYWJzdHJhY3RcIjogcmV0dXJuIFRva2VuLkFCU1RSQUNUO1xuICAgICAgICBjYXNlIFwiYXNcIjogcmV0dXJuIFRva2VuLkFTO1xuICAgICAgICBjYXNlIFwiYXN5bmNcIjogcmV0dXJuIFRva2VuLkFTWU5DO1xuICAgICAgICBjYXNlIFwiYXdhaXRcIjogcmV0dXJuIFRva2VuLkFXQUlUO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuYjoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJicmVha1wiOiByZXR1cm4gVG9rZW4uQlJFQUs7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5jOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcImNhc2VcIjogcmV0dXJuIFRva2VuLkNBU0U7XG4gICAgICAgIGNhc2UgXCJjYXRjaFwiOiByZXR1cm4gVG9rZW4uQ0FUQ0g7XG4gICAgICAgIGNhc2UgXCJjbGFzc1wiOiByZXR1cm4gVG9rZW4uQ0xBU1M7XG4gICAgICAgIGNhc2UgXCJjb250aW51ZVwiOiByZXR1cm4gVG9rZW4uQ09OVElOVUU7XG4gICAgICAgIGNhc2UgXCJjb25zdFwiOiByZXR1cm4gVG9rZW4uQ09OU1Q7XG4gICAgICAgIGNhc2UgXCJjb25zdHJ1Y3RvclwiOiByZXR1cm4gVG9rZW4uQ09OU1RSVUNUT1I7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5kOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcImRlYnVnZ2VyXCI6IHJldHVybiBUb2tlbi5ERUJVR0dFUjtcbiAgICAgICAgY2FzZSBcImRlY2xhcmVcIjogcmV0dXJuIFRva2VuLkRFQ0xBUkU7XG4gICAgICAgIGNhc2UgXCJkZWZhdWx0XCI6IHJldHVybiBUb2tlbi5ERUZBVUxUO1xuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6IHJldHVybiBUb2tlbi5ERUxFVEU7XG4gICAgICAgIGNhc2UgXCJkb1wiOiByZXR1cm4gVG9rZW4uRE87XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5lOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcImVsc2VcIjogcmV0dXJuIFRva2VuLkVMU0U7XG4gICAgICAgIGNhc2UgXCJlbnVtXCI6IHJldHVybiBUb2tlbi5FTlVNO1xuICAgICAgICBjYXNlIFwiZXhwb3J0XCI6IHJldHVybiBUb2tlbi5FWFBPUlQ7XG4gICAgICAgIGNhc2UgXCJleHRlbmRzXCI6IHJldHVybiBUb2tlbi5FWFRFTkRTO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuZjoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJmYWxzZVwiOiByZXR1cm4gVG9rZW4uRkFMU0U7XG4gICAgICAgIGNhc2UgXCJmaW5hbGx5XCI6IHJldHVybiBUb2tlbi5GSU5BTExZO1xuICAgICAgICBjYXNlIFwiZm9yXCI6IHJldHVybiBUb2tlbi5GT1I7XG4gICAgICAgIGNhc2UgXCJmcm9tXCI6IHJldHVybiBUb2tlbi5GUk9NO1xuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjogcmV0dXJuIFRva2VuLkZVTkNUSU9OO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuZzoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJnZXRcIjogcmV0dXJuIFRva2VuLkdFVDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLmk6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwiaWZcIjogcmV0dXJuIFRva2VuLklGO1xuICAgICAgICBjYXNlIFwiaW1wbGVtZW50c1wiOiByZXR1cm4gVG9rZW4uSU1QTEVNRU5UUztcbiAgICAgICAgY2FzZSBcImltcG9ydFwiOiByZXR1cm4gVG9rZW4uSU1QT1JUO1xuICAgICAgICBjYXNlIFwiaW5cIjogcmV0dXJuIFRva2VuLklOO1xuICAgICAgICBjYXNlIFwiaW5zdGFuY2VvZlwiOiByZXR1cm4gVG9rZW4uSU5TVEFOQ0VPRjtcbiAgICAgICAgY2FzZSBcImludGVyZmFjZVwiOiByZXR1cm4gVG9rZW4uSU5URVJGQUNFO1xuICAgICAgICBjYXNlIFwiaXNcIjogcmV0dXJuIFRva2VuLklTO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuazoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJrZXlvZlwiOiByZXR1cm4gVG9rZW4uS0VZT0Y7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5sOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcImxldFwiOiByZXR1cm4gVG9rZW4uTEVUO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUubToge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJtb2R1bGVcIjogcmV0dXJuIFRva2VuLk1PRFVMRTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLm46IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwibmFtZXNwYWNlXCI6IHJldHVybiBUb2tlbi5OQU1FU1BBQ0U7XG4gICAgICAgIGNhc2UgXCJuZXdcIjogcmV0dXJuIFRva2VuLk5FVztcbiAgICAgICAgY2FzZSBcIm51bGxcIjogcmV0dXJuIFRva2VuLk5VTEw7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5vOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcIm9mXCI6IHJldHVybiBUb2tlbi5PRjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLnA6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwicGFja2FnZVwiOiByZXR1cm4gVG9rZW4uUEFDS0FHRTtcbiAgICAgICAgY2FzZSBcInByaXZhdGVcIjogcmV0dXJuIFRva2VuLlBSSVZBVEU7XG4gICAgICAgIGNhc2UgXCJwcm90ZWN0ZWRcIjogcmV0dXJuIFRva2VuLlBST1RFQ1RFRDtcbiAgICAgICAgY2FzZSBcInB1YmxpY1wiOiByZXR1cm4gVG9rZW4uUFVCTElDO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUucjoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJyZWFkb25seVwiOiByZXR1cm4gVG9rZW4uUkVBRE9OTFk7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjogcmV0dXJuIFRva2VuLlJFVFVSTjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLnM6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwic2V0XCI6IHJldHVybiBUb2tlbi5TRVQ7XG4gICAgICAgIGNhc2UgXCJzdGF0aWNcIjogcmV0dXJuIFRva2VuLlNUQVRJQztcbiAgICAgICAgY2FzZSBcInN1cGVyXCI6IHJldHVybiBUb2tlbi5TVVBFUjtcbiAgICAgICAgY2FzZSBcInN3aXRjaFwiOiByZXR1cm4gVG9rZW4uU1dJVENIO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUudDoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJ0aGlzXCI6IHJldHVybiBUb2tlbi5USElTO1xuICAgICAgICBjYXNlIFwidGhyb3dcIjogcmV0dXJuIFRva2VuLlRIUk9XO1xuICAgICAgICBjYXNlIFwidHJ1ZVwiOiByZXR1cm4gVG9rZW4uVFJVRTtcbiAgICAgICAgY2FzZSBcInRyeVwiOiByZXR1cm4gVG9rZW4uVFJZO1xuICAgICAgICBjYXNlIFwidHlwZVwiOiByZXR1cm4gVG9rZW4uVFlQRTtcbiAgICAgICAgY2FzZSBcInR5cGVvZlwiOiByZXR1cm4gVG9rZW4uVFlQRU9GO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUudjoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJ2YXJcIjogcmV0dXJuIFRva2VuLlZBUjtcbiAgICAgICAgY2FzZSBcInZvaWRcIjogcmV0dXJuIFRva2VuLlZPSUQ7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS53OiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcIndoaWxlXCI6IHJldHVybiBUb2tlbi5XSElMRTtcbiAgICAgICAgY2FzZSBcIndpdGhcIjogcmV0dXJuIFRva2VuLldJVEg7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS55OiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcInlpZWxkXCI6IHJldHVybiBUb2tlbi5ZSUVMRDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVG9rZW4uSU5WQUxJRDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuSXNBbHNvSWRlbnRpZmllcih0b2tlbjogVG9rZW4pOiBib29sIHtcbiAgc3dpdGNoICh0b2tlbikge1xuICAgIGNhc2UgVG9rZW4uQUJTVFJBQ1Q6XG4gICAgY2FzZSBUb2tlbi5BUzpcbiAgICBjYXNlIFRva2VuLkNPTlNUUlVDVE9SOlxuICAgIGNhc2UgVG9rZW4uREVDTEFSRTpcbiAgICBjYXNlIFRva2VuLkRFTEVURTpcbiAgICBjYXNlIFRva2VuLkZST006XG4gICAgY2FzZSBUb2tlbi5GT1I6XG4gICAgY2FzZSBUb2tlbi5HRVQ6XG4gICAgY2FzZSBUb2tlbi5JTlNUQU5DRU9GOlxuICAgIGNhc2UgVG9rZW4uSVM6XG4gICAgY2FzZSBUb2tlbi5LRVlPRjpcbiAgICBjYXNlIFRva2VuLk1PRFVMRTpcbiAgICBjYXNlIFRva2VuLk5BTUVTUEFDRTpcbiAgICBjYXNlIFRva2VuLk5VTEw6XG4gICAgY2FzZSBUb2tlbi5SRUFET05MWTpcbiAgICBjYXNlIFRva2VuLlNFVDpcbiAgICBjYXNlIFRva2VuLlRZUEU6XG4gICAgY2FzZSBUb2tlbi5WT0lEOiByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWxsZWdhbFZhcmlhYmxlSWRlbnRpZmllcihuYW1lOiBzdHJpbmcpOiBib29sIHtcbiAgYXNzZXJ0KG5hbWUubGVuZ3RoKTtcbiAgc3dpdGNoIChuYW1lLmNoYXJDb2RlQXQoMCkpIHtcbiAgICBjYXNlIENoYXJDb2RlLmQ6IHJldHVybiBuYW1lID09IFwiZGVsZXRlXCI7XG4gICAgY2FzZSBDaGFyQ29kZS5mOiByZXR1cm4gbmFtZSA9PSBcImZvclwiO1xuICAgIGNhc2UgQ2hhckNvZGUuaTogcmV0dXJuIG5hbWUgPT0gXCJpbnN0YW5jZW9mXCI7XG4gICAgY2FzZSBDaGFyQ29kZS5uOiByZXR1cm4gbmFtZSA9PSBcIm51bGxcIjtcbiAgICBjYXNlIENoYXJDb2RlLnY6IHJldHVybiBuYW1lID09IFwidm9pZFwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdG9yVG9rZW5Ub1N0cmluZyh0b2tlbjogVG9rZW4pOiBzdHJpbmcge1xuICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgY2FzZSBUb2tlbi5ERUxFVEU6IHJldHVybiBcImRlbGV0ZVwiO1xuICAgIGNhc2UgVG9rZW4uSU46IHJldHVybiBcImluXCI7XG4gICAgY2FzZSBUb2tlbi5JTlNUQU5DRU9GOiByZXR1cm4gXCJpbnN0YW5jZW9mXCI7XG4gICAgY2FzZSBUb2tlbi5ORVc6IHJldHVybiBcIm5ld1wiO1xuICAgIGNhc2UgVG9rZW4uVFlQRU9GOiByZXR1cm4gXCJ0eXBlb2ZcIjtcbiAgICBjYXNlIFRva2VuLlZPSUQ6IHJldHVybiBcInZvaWRcIjtcbiAgICBjYXNlIFRva2VuLllJRUxEOiByZXR1cm4gXCJ5aWVsZFwiO1xuICAgIGNhc2UgVG9rZW4uRE9UX0RPVF9ET1Q6IHJldHVybiBcIi4uLlwiO1xuICAgIGNhc2UgVG9rZW4uQ09NTUE6IHJldHVybiBcIixcIjtcbiAgICBjYXNlIFRva2VuLkxFU1NUSEFOOiByZXR1cm4gXCI8XCI7XG4gICAgY2FzZSBUb2tlbi5HUkVBVEVSVEhBTjogcmV0dXJuIFwiPlwiO1xuICAgIGNhc2UgVG9rZW4uTEVTU1RIQU5fRVFVQUxTOiByZXR1cm4gXCI8PVwiO1xuICAgIGNhc2UgVG9rZW4uR1JFQVRFUlRIQU5fRVFVQUxTOiByZXR1cm4gXCI+PVwiO1xuICAgIGNhc2UgVG9rZW4uRVFVQUxTX0VRVUFMUzogcmV0dXJuIFwiPT1cIjtcbiAgICBjYXNlIFRva2VuLkVYQ0xBTUFUSU9OX0VRVUFMUzogcmV0dXJuIFwiIT1cIjtcbiAgICBjYXNlIFRva2VuLkVRVUFMU19FUVVBTFNfRVFVQUxTOiByZXR1cm4gXCI9PT1cIjtcbiAgICBjYXNlIFRva2VuLkVYQ0xBTUFUSU9OX0VRVUFMU19FUVVBTFM6IHJldHVybiBcIiE9PVwiO1xuICAgIGNhc2UgVG9rZW4uUExVUzogcmV0dXJuIFwiK1wiO1xuICAgIGNhc2UgVG9rZW4uTUlOVVM6IHJldHVybiBcIi1cIjtcbiAgICBjYXNlIFRva2VuLkFTVEVSSVNLX0FTVEVSSVNLOiByZXR1cm4gXCIqKlwiO1xuICAgIGNhc2UgVG9rZW4uQVNURVJJU0s6IHJldHVybiBcIipcIjtcbiAgICBjYXNlIFRva2VuLlNMQVNIOiByZXR1cm4gXCIvXCI7XG4gICAgY2FzZSBUb2tlbi5QRVJDRU5UOiByZXR1cm4gXCIlXCI7XG4gICAgY2FzZSBUb2tlbi5QTFVTX1BMVVM6IHJldHVybiBcIisrXCI7XG4gICAgY2FzZSBUb2tlbi5NSU5VU19NSU5VUzogcmV0dXJuIFwiLS1cIjtcbiAgICBjYXNlIFRva2VuLkxFU1NUSEFOX0xFU1NUSEFOOiByZXR1cm4gXCI8PFwiO1xuICAgIGNhc2UgVG9rZW4uR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU46IHJldHVybiBcIj4+XCI7XG4gICAgY2FzZSBUb2tlbi5HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTjogcmV0dXJuIFwiPj4+XCI7XG4gICAgY2FzZSBUb2tlbi5BTVBFUlNBTkQ6IHJldHVybiBcIiZcIjtcbiAgICBjYXNlIFRva2VuLkJBUjogcmV0dXJuIFwifFwiO1xuICAgIGNhc2UgVG9rZW4uQ0FSRVQ6IHJldHVybiBcIl5cIjtcbiAgICBjYXNlIFRva2VuLkVYQ0xBTUFUSU9OOiByZXR1cm4gXCIhXCI7XG4gICAgY2FzZSBUb2tlbi5USUxERTogcmV0dXJuIFwiflwiO1xuICAgIGNhc2UgVG9rZW4uQU1QRVJTQU5EX0FNUEVSU0FORDogcmV0dXJuIFwiJiZcIjtcbiAgICBjYXNlIFRva2VuLkJBUl9CQVI6IHJldHVybiBcInx8XCI7XG4gICAgY2FzZSBUb2tlbi5FUVVBTFM6IHJldHVybiBcIj1cIjtcbiAgICBjYXNlIFRva2VuLlBMVVNfRVFVQUxTOiByZXR1cm4gXCIrPVwiO1xuICAgIGNhc2UgVG9rZW4uTUlOVVNfRVFVQUxTOiByZXR1cm4gXCItPVwiO1xuICAgIGNhc2UgVG9rZW4uQVNURVJJU0tfRVFVQUxTOiByZXR1cm4gXCIqPVwiO1xuICAgIGNhc2UgVG9rZW4uQVNURVJJU0tfQVNURVJJU0tfRVFVQUxTOiByZXR1cm4gXCIqKj1cIjtcbiAgICBjYXNlIFRva2VuLlNMQVNIX0VRVUFMUzogcmV0dXJuIFwiLz1cIjtcbiAgICBjYXNlIFRva2VuLlBFUkNFTlRfRVFVQUxTOiByZXR1cm4gXCIlPVwiO1xuICAgIGNhc2UgVG9rZW4uTEVTU1RIQU5fTEVTU1RIQU5fRVFVQUxTOiByZXR1cm4gXCI8PD1cIjtcbiAgICBjYXNlIFRva2VuLkdSRUFURVJUSEFOX0dSRUFURVJUSEFOX0VRVUFMUzogcmV0dXJuIFwiPj49XCI7XG4gICAgY2FzZSBUb2tlbi5HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9FUVVBTFM6IHJldHVybiBcIj4+Pj1cIjtcbiAgICBjYXNlIFRva2VuLkFNUEVSU0FORF9FUVVBTFM6IHJldHVybiBcIiY9XCI7XG4gICAgY2FzZSBUb2tlbi5CQVJfRVFVQUxTOiByZXR1cm4gXCJ8PVwiO1xuICAgIGNhc2UgVG9rZW4uQ0FSRVRfRVFVQUxTOiByZXR1cm4gXCJePVwiO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhbmdlIHtcblxuICBzb3VyY2U6IFNvdXJjZTtcbiAgc3RhcnQ6IGkzMjtcbiAgZW5kOiBpMzI7XG5cbiAgLy8gVE9ETzogc2V0IHRoZXNlIHdoaWxlIHRva2VuaXppbmdcbiAgLy8gbGluZTogaTMyO1xuICAvLyBjb2x1bW46IGkzMjtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgc3RhcnQ6IGkzMiwgZW5kOiBpMzIpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmQ7XG4gIH1cblxuICBzdGF0aWMgam9pbihhOiBSYW5nZSwgYjogUmFuZ2UpOiBSYW5nZSB7XG4gICAgaWYgKGEuc291cmNlICE9IGIuc291cmNlKSB0aHJvdyBuZXcgRXJyb3IoXCJzb3VyY2UgbWlzbWF0Y2hcIik7XG4gICAgcmV0dXJuIG5ldyBSYW5nZShhLnNvdXJjZSxcbiAgICAgIGEuc3RhcnQgPCBiLnN0YXJ0ID8gYS5zdGFydCA6IGIuc3RhcnQsXG4gICAgICBhLmVuZCA+IGIuZW5kID8gYS5lbmQgOiBiLmVuZFxuICAgICk7XG4gIH1cblxuICBnZXQgYXRTdGFydCgpOiBSYW5nZSB7XG4gICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLnNvdXJjZSwgdGhpcy5zdGFydCwgdGhpcy5zdGFydCk7XG4gIH1cblxuICBnZXQgYXRFbmQoKTogUmFuZ2Uge1xuICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy5zb3VyY2UsIHRoaXMuZW5kLCB0aGlzLmVuZCk7XG4gIH1cblxuICBnZXQgbGluZSgpOiBpMzIge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgbGluZSA9IDE7XG4gICAgZm9yIChsZXQgcG9zID0gdGhpcy5zdGFydDsgcG9zID49IDA7IC0tcG9zKSB7XG4gICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHBvcykgPT0gQ2hhckNvZGUuTElORUZFRUQpIGxpbmUrKztcbiAgICB9XG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cblxuICBnZXQgY29sdW1uKCk6IGkzMiB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBjb2x1bW4gPSAwO1xuICAgIGZvciAobGV0IHBvcyA9IHRoaXMuc3RhcnQgLSAxOyBwb3MgPj0gMDsgLS1wb3MpIHtcbiAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQocG9zKSA9PSBDaGFyQ29kZS5MSU5FRkVFRCkgYnJlYWs7XG4gICAgICArK2NvbHVtbjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnRleHQuc3Vic3RyaW5nKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcbiAgfVxuXG4gIGRlYnVnSW5mb1JlZjogdXNpemUgPSAwO1xufVxuXG5kZWNsYXJlIGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyOiBzdHJpbmcpOiBmNjQ7XG5cbi8qKiBIYW5kbGVyIGZvciBpbnRlcmNlcHRpbmcgY29tbWVudHMgd2hpbGUgdG9rZW5pemluZy4gKi9cbmV4cG9ydCB0eXBlIENvbW1lbnRIYW5kbGVyID0gKGtpbmQ6IENvbW1lbnRLaW5kLCB0ZXh0OiBzdHJpbmcsIHJhbmdlOiBSYW5nZSkgPT4gdm9pZDtcblxuLyoqIFRva2VuaXplcyBhIHNvdXJjZSB0byBpbmRpdmlkdWFsIHtAbGluayBUb2tlbn1zLiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuaXplciBleHRlbmRzIERpYWdub3N0aWNFbWl0dGVyIHtcblxuICBzb3VyY2U6IFNvdXJjZTtcbiAgZW5kOiBpMzIgPSAwO1xuXG4gIHBvczogaTMyID0gMDtcbiAgdG9rZW46IFRva2VuID0gLTE7XG4gIHRva2VuUG9zOiBpMzIgPSAwO1xuXG4gIG5leHRUb2tlbjogVG9rZW4gPSAtMTtcbiAgbmV4dFRva2VuUG9zOiBpMzIgPSAwO1xuICBuZXh0VG9rZW5Pbk5ld0xpbmU6IGJvb2wgPSBmYWxzZTtcblxuICBvbkNvbW1lbnQ6IENvbW1lbnRIYW5kbGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIENvbnN0cnVjdHMgYSBuZXcgdG9rZW5pemVyLiAqL1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgZGlhZ25vc3RpY3M6IERpYWdub3N0aWNNZXNzYWdlW10gfCBudWxsID0gbnVsbCkge1xuICAgIHN1cGVyKGRpYWdub3N0aWNzKTtcblxuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLmVuZCA9IHNvdXJjZS50ZXh0Lmxlbmd0aDtcbiAgICB0aGlzLmRpYWdub3N0aWNzID0gZGlhZ25vc3RpY3MgfHwgbmV3IEFycmF5KCk7XG5cbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHRleHQgPSBzb3VyY2UudGV4dDtcblxuICAgIC8vIHNraXAgYm9tXG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuQllURU9SREVSTUFSS1xuICAgICkge1xuICAgICAgKyt0aGlzLnBvcztcbiAgICB9XG5cbiAgICAvLyBza2lwIHNoZWJhbmdcbiAgICBpZiAoXG4gICAgICB0aGlzLnBvcyArIDEgPCBlbmQgJiZcbiAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuSEFTSCAmJlxuICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkgPT0gQ2hhckNvZGUuRVhDTEFNQVRJT05cbiAgICApIHtcbiAgICAgIHRoaXMucG9zICs9IDI7XG4gICAgICB3aGlsZSAoXG4gICAgICAgIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgIT0gQ2hhckNvZGUuTElORUZFRURcbiAgICAgICkge1xuICAgICAgICArK3RoaXMucG9zO1xuICAgICAgfVxuICAgICAgLy8gJ25leHQnIG5vdyBzdGFydHMgYXQgbGYgb3IgZW9mXG4gICAgfVxuICB9XG5cbiAgbmV4dChpZGVudGlmaWVySGFuZGxpbmc6IElkZW50aWZpZXJIYW5kbGluZyA9IElkZW50aWZpZXJIYW5kbGluZy5ERUZBVUxUKTogVG9rZW4ge1xuICAgIHRoaXMubmV4dFRva2VuID0gLTE7XG4gICAgcmV0dXJuIHRoaXMudG9rZW4gPSB0aGlzLnVuc2FmZU5leHQoaWRlbnRpZmllckhhbmRsaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zYWZlTmV4dChcbiAgICBpZGVudGlmaWVySGFuZGxpbmc6IElkZW50aWZpZXJIYW5kbGluZyA9IElkZW50aWZpZXJIYW5kbGluZy5ERUZBVUxULFxuICAgIG1heFRva2VuTGVuZ3RoOiBpMzIgPSBpMzIuTUFYX1ZBTFVFXG4gICk6IFRva2VuIHtcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgdGhpcy50b2tlblBvcyA9IHRoaXMucG9zO1xuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ0FSUklBR0VSRVRVUk46IHtcbiAgICAgICAgICBpZiAoIShcbiAgICAgICAgICAgICsrdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuTElORUZFRURcbiAgICAgICAgICApKSBicmVhaztcbiAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbC10aHJvdWdoXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5MSU5FRkVFRDpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5UQUI6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuVkVSVElDQUxUQUI6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRk9STUZFRUQ6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuU1BBQ0U6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRVhDTEFNQVRJT046IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1heFRva2VuTGVuZ3RoID4gMSAmJiB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5FUVVBTFNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG1heFRva2VuTGVuZ3RoID4gMiAmJiB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkVRVUFMU1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5FWENMQU1BVElPTl9FUVVBTFNfRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFRva2VuLkVYQ0xBTUFUSU9OX0VRVUFMUztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkVYQ0xBTUFUSU9OO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRE9VQkxFUVVPVEU6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuU0lOR0xFUVVPVEU6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQkFDS1RJQ0s6IHsgLy8gVE9ET1xuICAgICAgICAgIHJldHVybiBUb2tlbi5TVFJJTkdMSVRFUkFMOyAvLyBleHBlY3RzIGEgY2FsbCB0byByZWFkU3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5QRVJDRU5UOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRVFVQUxTXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgcmV0dXJuIFRva2VuLlBFUkNFTlRfRVFVQUxTO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uUEVSQ0VOVDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkFNUEVSU0FORDoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgaWYgKG1heFRva2VuTGVuZ3RoID4gMSAmJiB0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgbGV0IGNociA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkFNUEVSU0FORCkge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uQU1QRVJTQU5EX0FNUEVSU0FORDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuRVFVQUxTKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5BTVBFUlNBTkRfRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uQU1QRVJTQU5EO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuT1BFTlBBUkVOOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uT1BFTlBBUkVOO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ0xPU0VQQVJFTjoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkNMT1NFUEFSRU47XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5BU1RFUklTSzoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgaWYgKG1heFRva2VuTGVuZ3RoID4gMSAmJiB0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgbGV0IGNociA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uQVNURVJJU0tfRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5BU1RFUklTSykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbWF4VG9rZW5MZW5ndGggPiAyICYmIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5FUVVBTFNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uQVNURVJJU0tfQVNURVJJU0tfRVFVQUxTO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5BU1RFUklTS19BU1RFUklTSztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkFTVEVSSVNLO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuUExVUzoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgaWYgKG1heFRva2VuTGVuZ3RoID4gMSAmJiB0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgbGV0IGNociA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLlBMVVMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLlBMVVNfUExVUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuRVFVQUxTKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5QTFVTX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLlBMVVM7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5DT01NQToge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkNPTU1BO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTUlOVVM6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5NSU5VUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uTUlOVVNfTUlOVVM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uTUlOVVNfRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uTUlOVVM7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5ET1Q6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGlzRGVjaW1hbERpZ2l0KGNocikpIHtcbiAgICAgICAgICAgICAgLS10aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkZMT0FUTElURVJBTDsgLy8gZXhwZWN0cyBhIGNhbGwgdG8gcmVhZEZsb2F0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG1heFRva2VuTGVuZ3RoID4gMiAmJiB0aGlzLnBvcyArIDEgPCBlbmQgJiZcbiAgICAgICAgICAgICAgY2hyID09IENoYXJDb2RlLkRPVCAmJlxuICAgICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKSA9PSBDaGFyQ29kZS5ET1RcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLnBvcyArPSAyO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uRE9UX0RPVF9ET1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5ET1Q7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5TTEFTSDoge1xuICAgICAgICAgIGxldCBjb21tZW50U3RhcnRQb3MgPSB0aGlzLnBvcztcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5TTEFTSCkgeyAvLyBzaW5nbGUtbGluZVxuICAgICAgICAgICAgICBsZXQgY29tbWVudEtpbmQgPSBDb21tZW50S2luZC5MSU5FO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgKyAxIDwgZW5kICYmXG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkgPT0gQ2hhckNvZGUuU0xBU0hcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICBjb21tZW50S2luZCA9IENvbW1lbnRLaW5kLlRSSVBMRTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aGlsZSAoKyt0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkxJTkVGRUVEKSB7XG4gICAgICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9uQ29tbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Db21tZW50KFxuICAgICAgICAgICAgICAgICAgY29tbWVudEtpbmQsXG4gICAgICAgICAgICAgICAgICB0ZXh0LnN1YnN0cmluZyhjb21tZW50U3RhcnRQb3MsIHRoaXMucG9zKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMucmFuZ2UoY29tbWVudFN0YXJ0UG9zLCB0aGlzLnBvcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5BU1RFUklTSykgeyAvLyBtdWx0aS1saW5lXG4gICAgICAgICAgICAgIGxldCBjbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgd2hpbGUgKCsrdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBjID09IENoYXJDb2RlLkFTVEVSSVNLICYmXG4gICAgICAgICAgICAgICAgICB0aGlzLnBvcyArIDEgPCBlbmQgJiZcbiAgICAgICAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpID09IENoYXJDb2RlLlNMQVNIXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBvcyArPSAyO1xuICAgICAgICAgICAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICBEaWFnbm9zdGljQ29kZS5fMF9leHBlY3RlZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMucmFuZ2UodGhpcy5wb3MpLCBcIiovXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25Db21tZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbW1lbnQoXG4gICAgICAgICAgICAgICAgICBDb21tZW50S2luZC5CTE9DSyxcbiAgICAgICAgICAgICAgICAgIHRleHQuc3Vic3RyaW5nKGNvbW1lbnRTdGFydFBvcywgdGhpcy5wb3MpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5yYW5nZShjb21tZW50U3RhcnRQb3MsIHRoaXMucG9zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uU0xBU0hfRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uU0xBU0g7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fMDpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fMTpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fMjpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fMzpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fNDpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fNTpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fNjpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fNzpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fODpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5fOToge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnRlZ2VyKClcbiAgICAgICAgICAgID8gVG9rZW4uSU5URUdFUkxJVEVSQUwgLy8gZXhwZWN0cyBhIGNhbGwgdG8gcmVhZEludGVnZXJcbiAgICAgICAgICAgIDogVG9rZW4uRkxPQVRMSVRFUkFMOyAgLy8gZXhwZWN0cyBhIGNhbGwgdG8gcmVhZEZsb2F0XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5DT0xPTjoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkNPTE9OO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuU0VNSUNPTE9OOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uU0VNSUNPTE9OO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTEVTU1RIQU46IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5MRVNTVEhBTikge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbWF4VG9rZW5MZW5ndGggPiAyICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkVRVUFMU1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbi5MRVNTVEhBTl9MRVNTVEhBTl9FUVVBTFM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkxFU1NUSEFOX0xFU1NUSEFOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5FUVVBTFMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkxFU1NUSEFOX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkxFU1NUSEFOO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRVFVQUxTOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuRVFVQUxTKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRVFVQUxTXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkVRVUFMU19FUVVBTFNfRVFVQUxTO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5FUVVBTFNfRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5HUkVBVEVSVEhBTikge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uRVFVQUxTX0dSRUFURVJUSEFOO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uRVFVQUxTO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuR1JFQVRFUlRIQU46IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5HUkVBVEVSVEhBTikge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAyICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkdSRUFURVJUSEFOKSB7XG4gICAgICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDMgJiYgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5FUVVBTFNcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fRVFVQUxTO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkdSRUFURVJUSEFOX0dSRUFURVJUSEFOX0dSRUFURVJUSEFOO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbi5HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9FUVVBTFM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuRVFVQUxTKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5HUkVBVEVSVEhBTl9FUVVBTFM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5HUkVBVEVSVEhBTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLlFVRVNUSU9OOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uUVVFU1RJT047XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5PUEVOQlJBQ0tFVDoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLk9QRU5CUkFDS0VUO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ0xPU0VCUkFDS0VUOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uQ0xPU0VCUkFDS0VUO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ0FSRVQ6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1heFRva2VuTGVuZ3RoID4gMSAmJiB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5FUVVBTFNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICByZXR1cm4gVG9rZW4uQ0FSRVRfRVFVQUxTO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uQ0FSRVQ7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5PUEVOQlJBQ0U6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5PUEVOQlJBQ0U7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQVI6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5CQVIpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkJBUl9CQVI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uQkFSX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkJBUjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkNMT1NFQlJBQ0U6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5DTE9TRUJSQUNFO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuVElMREU6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5USUxERTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkFUOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uQVQ7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGlmIChpc0lkZW50aWZpZXJTdGFydChjKSkge1xuICAgICAgICAgICAgaWYgKGlzS2V5d29yZENoYXJhY3RlcihjKSkge1xuICAgICAgICAgICAgICBsZXQgcG9zQmVmb3JlID0gdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgICArK3RoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgICAgICAgaXNJZGVudGlmaWVyUGFydChjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0tleXdvcmRDaGFyYWN0ZXIoYykpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9zID0gcG9zQmVmb3JlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLklERU5USUZJRVI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBrZXl3b3JkVGV4dCA9IHRleHQuc3Vic3RyaW5nKHBvc0JlZm9yZSwgdGhpcy5wb3MpO1xuICAgICAgICAgICAgICBsZXQga2V5d29yZFRva2VuID0gdG9rZW5Gcm9tS2V5d29yZChrZXl3b3JkVGV4dCk7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBrZXl3b3JkVG9rZW4gIT09IFRva2VuLklOVkFMSUQgJiZcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVySGFuZGxpbmcgIT09IElkZW50aWZpZXJIYW5kbGluZy5BTFdBWVMgJiZcbiAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgaWRlbnRpZmllckhhbmRsaW5nID09PSBJZGVudGlmaWVySGFuZGxpbmcuUFJFRkVSICYmXG4gICAgICAgICAgICAgICAgICB0b2tlbklzQWxzb0lkZW50aWZpZXIoa2V5d29yZFRva2VuKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXdvcmRUb2tlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnBvcyA9IHBvc0JlZm9yZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBUb2tlbi5JREVOVElGSUVSOyAvLyBleHBlY3RzIGEgY2FsbCB0byByZWFkSWRlbnRpZmllclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZVNwYWNlKGMpKSB7XG4gICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICBEaWFnbm9zdGljQ29kZS5JbnZhbGlkX2NoYXJhY3RlcixcbiAgICAgICAgICAgIHRoaXMucmFuZ2UodGhpcy5wb3MsIHRoaXMucG9zICsgMSlcbiAgICAgICAgICApO1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLklOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFRva2VuLkVORE9GRklMRTtcbiAgfVxuXG4gIHBlZWsoXG4gICAgY2hlY2tPbk5ld0xpbmU6IGJvb2wgPSBmYWxzZSxcbiAgICBpZGVudGlmaWVySGFuZGxpbmc6IElkZW50aWZpZXJIYW5kbGluZyA9IElkZW50aWZpZXJIYW5kbGluZy5ERUZBVUxULFxuICAgIG1heENvbXBvdW5kTGVuZ3RoOiBpMzIgPSBpMzIuTUFYX1ZBTFVFXG4gICk6IFRva2VuIHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgaWYgKHRoaXMubmV4dFRva2VuIDwgMCkge1xuICAgICAgbGV0IHBvc0JlZm9yZSA9IHRoaXMucG9zO1xuICAgICAgbGV0IHRva2VuQmVmb3JlID0gdGhpcy50b2tlbjtcbiAgICAgIGxldCB0b2tlblBvc0JlZm9yZSA9IHRoaXMudG9rZW5Qb3M7XG4gICAgICB0aGlzLm5leHRUb2tlbiA9IHRoaXMudW5zYWZlTmV4dChpZGVudGlmaWVySGFuZGxpbmcsIG1heENvbXBvdW5kTGVuZ3RoKTtcbiAgICAgIHRoaXMubmV4dFRva2VuUG9zID0gdGhpcy50b2tlblBvcztcbiAgICAgIGlmIChjaGVja09uTmV3TGluZSkge1xuICAgICAgICB0aGlzLm5leHRUb2tlbk9uTmV3TGluZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBwb3MgPSBwb3NCZWZvcmUsIGVuZCA9IHRoaXMubmV4dFRva2VuUG9zOyBwb3MgPCBlbmQ7ICsrcG9zKSB7XG4gICAgICAgICAgaWYgKGlzTGluZUJyZWFrKHRleHQuY2hhckNvZGVBdChwb3MpKSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0VG9rZW5Pbk5ld0xpbmUgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnBvcyA9IHBvc0JlZm9yZTtcbiAgICAgIHRoaXMudG9rZW4gPSB0b2tlbkJlZm9yZTtcbiAgICAgIHRoaXMudG9rZW5Qb3MgPSB0b2tlblBvc0JlZm9yZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmV4dFRva2VuO1xuICB9XG5cbiAgc2tpcElkZW50aWZpZXIoaWRlbnRpZmllckhhbmRsaW5nOiBJZGVudGlmaWVySGFuZGxpbmcgPSBJZGVudGlmaWVySGFuZGxpbmcuUFJFRkVSKTogYm9vbCB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcChUb2tlbi5JREVOVElGSUVSLCBpZGVudGlmaWVySGFuZGxpbmcpO1xuICB9XG5cbiAgc2tpcCh0b2tlbjogVG9rZW4sIGlkZW50aWZpZXJIYW5kbGluZzogSWRlbnRpZmllckhhbmRsaW5nID0gSWRlbnRpZmllckhhbmRsaW5nLkRFRkFVTFQpOiBib29sIHtcbiAgICB2YXIgcG9zQmVmb3JlID0gdGhpcy5wb3M7XG4gICAgdmFyIHRva2VuQmVmb3JlID0gdGhpcy50b2tlbjtcbiAgICB2YXIgdG9rZW5Qb3NCZWZvcmUgPSB0aGlzLnRva2VuUG9zO1xuICAgIHZhciBtYXhDb21wb3VuZExlbmd0aCA9IGkzMi5NQVhfVkFMVUU7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBUb2tlbi5HUkVBVEVSVEhBTjogeyAvLyB3aGVyZSBwYXJzaW5nIHR5cGUgYXJndW1lbnRzXG4gICAgICAgIG1heENvbXBvdW5kTGVuZ3RoID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9rZW4gPSB0aGlzLnVuc2FmZU5leHQoaWRlbnRpZmllckhhbmRsaW5nLCBtYXhDb21wb3VuZExlbmd0aCk7XG4gICAgaWYgKHRoaXMudG9rZW4gPT0gdG9rZW4pIHtcbiAgICAgIHRoaXMubmV4dFRva2VuID0gLTE7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3MgPSBwb3NCZWZvcmU7XG4gICAgICB0aGlzLnRva2VuID0gdG9rZW5CZWZvcmU7XG4gICAgICB0aGlzLnRva2VuUG9zID0gdG9rZW5Qb3NCZWZvcmU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbWFyaygpOiBTdGF0ZSB7XG4gICAgdmFyIHN0YXRlOiBTdGF0ZTtcbiAgICBpZiAocmV1c2FibGVTdGF0ZSkge1xuICAgICAgc3RhdGUgPSByZXVzYWJsZVN0YXRlO1xuICAgICAgcmV1c2FibGVTdGF0ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gbmV3IFN0YXRlKCk7XG4gICAgfVxuICAgIHN0YXRlLnBvcyA9IHRoaXMucG9zO1xuICAgIHN0YXRlLnRva2VuID0gdGhpcy50b2tlbjtcbiAgICBzdGF0ZS50b2tlblBvcyA9IHRoaXMudG9rZW5Qb3M7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgZGlzY2FyZChzdGF0ZTogU3RhdGUpOiB2b2lkIHtcbiAgICByZXVzYWJsZVN0YXRlID0gc3RhdGU7XG4gIH1cblxuICByZXNldChzdGF0ZTogU3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnBvcyA9IHN0YXRlLnBvcztcbiAgICB0aGlzLnRva2VuID0gc3RhdGUudG9rZW47XG4gICAgdGhpcy50b2tlblBvcyA9IHN0YXRlLnRva2VuUG9zO1xuICAgIHRoaXMubmV4dFRva2VuID0gLTE7XG4gIH1cblxuICByYW5nZShzdGFydDogaTMyID0gLTEsIGVuZDogaTMyID0gLTEpOiBSYW5nZSB7XG4gICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgc3RhcnQgPSB0aGlzLnRva2VuUG9zO1xuICAgICAgZW5kID0gdGhpcy5wb3M7XG4gICAgfSBlbHNlIGlmIChlbmQgPCAwKSB7XG4gICAgICBlbmQgPSBzdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLnNvdXJjZSwgc3RhcnQsIGVuZCk7XG4gIH1cblxuICByZWFkSWRlbnRpZmllcigpOiBzdHJpbmcge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgd2hpbGUgKFxuICAgICAgKyt0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgaXNJZGVudGlmaWVyUGFydCh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpKVxuICAgICk7XG4gICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLnBvcyk7XG4gIH1cblxuICByZWFkU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBxdW90ZSA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcysrKTtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLnBvcyA+PSBlbmQpIHtcbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLnBvcyk7XG4gICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW50ZXJtaW5hdGVkX3N0cmluZ19saXRlcmFsLFxuICAgICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQgLSAxLCBlbmQpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgaWYgKGMgPT0gcXVvdGUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLnBvcysrKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoYyA9PSBDaGFyQ29kZS5CQUNLU0xBU0gpIHtcbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLnBvcyk7XG4gICAgICAgIHJlc3VsdCArPSB0aGlzLnJlYWRFc2NhcGVTZXF1ZW5jZSgpO1xuICAgICAgICBzdGFydCA9IHRoaXMucG9zO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0xpbmVCcmVhayhjKSAmJiBxdW90ZSAhPSBDaGFyQ29kZS5CQUNLVElDSykge1xuICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMucG9zKTtcbiAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICBEaWFnbm9zdGljQ29kZS5VbnRlcm1pbmF0ZWRfc3RyaW5nX2xpdGVyYWwsXG4gICAgICAgICAgdGhpcy5yYW5nZShzdGFydCAtIDEsIHRoaXMucG9zKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgICsrdGhpcy5wb3M7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWFkRXNjYXBlU2VxdWVuY2UoKTogc3RyaW5nIHtcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgaWYgKCsrdGhpcy5wb3MgPj0gZW5kKSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5VbmV4cGVjdGVkX2VuZF9vZl90ZXh0LFxuICAgICAgICB0aGlzLnJhbmdlKGVuZClcbiAgICAgICk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgdmFyIGMgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MrKyk7XG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlIENoYXJDb2RlLl8wOiByZXR1cm4gXCJcXDBcIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUuYjogcmV0dXJuIFwiXFxiXCI7XG4gICAgICBjYXNlIENoYXJDb2RlLnQ6IHJldHVybiBcIlxcdFwiO1xuICAgICAgY2FzZSBDaGFyQ29kZS5uOiByZXR1cm4gXCJcXG5cIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUudjogcmV0dXJuIFwiXFx2XCI7XG4gICAgICBjYXNlIENoYXJDb2RlLmY6IHJldHVybiBcIlxcZlwiO1xuICAgICAgY2FzZSBDaGFyQ29kZS5yOiByZXR1cm4gXCJcXHJcIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUuU0lOR0xFUVVPVEU6IHJldHVybiBcIidcIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUuRE9VQkxFUVVPVEU6IHJldHVybiBcIlxcXCJcIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUudToge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLk9QRU5CUkFDRVxuICAgICAgICApIHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRFeHRlbmRlZFVuaWNvZGVFc2NhcGUoKTsgLy8gXFx1e0REREREREREfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRVbmljb2RlRXNjYXBlKCk7IC8vIFxcdURERERcbiAgICAgIH1cbiAgICAgIGNhc2UgQ2hhckNvZGUuQ0FSUklBR0VSRVRVUk46IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5MSU5FRkVFRFxuICAgICAgICApIHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgICAgfVxuICAgICAgY2FzZSBDaGFyQ29kZS5MSU5FRkVFRDpcbiAgICAgIGNhc2UgQ2hhckNvZGUuTElORVNFUEFSQVRPUjpcbiAgICAgIGNhc2UgQ2hhckNvZGUuUEFSQUdSQVBIU0VQQVJBVE9SOiByZXR1cm4gXCJcIjtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgIH1cbiAgfVxuXG4gIHJlYWRSZWdleHBQYXR0ZXJuKCk6IHN0cmluZyB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5wb3MgPj0gZW5kKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW50ZXJtaW5hdGVkX3JlZ3VsYXJfZXhwcmVzc2lvbl9saXRlcmFsLFxuICAgICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIGVuZClcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5CQUNLU0xBU0gpIHtcbiAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgaWYgKCFlc2NhcGVkICYmIGMgPT0gQ2hhckNvZGUuU0xBU0gpIGJyZWFrO1xuICAgICAgaWYgKGlzTGluZUJyZWFrKGMpKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW50ZXJtaW5hdGVkX3JlZ3VsYXJfZXhwcmVzc2lvbl9saXRlcmFsLFxuICAgICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIHRoaXMucG9zKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgICsrdGhpcy5wb3M7XG4gICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5wb3MpO1xuICB9XG5cbiAgcmVhZFJlZ2V4cEZsYWdzKCk6IHN0cmluZyB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgZmxhZ3MgPSAwO1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgbGV0IGM6IGkzMiA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICBpZiAoIWlzSWRlbnRpZmllclBhcnQoYykpIGJyZWFrO1xuICAgICAgKyt0aGlzLnBvcztcblxuICAgICAgLy8gbWFrZSBzdXJlIGVhY2ggc3VwcG9ydGVkIGZsYWcgaXMgdW5pcXVlXG4gICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5nOiB7XG4gICAgICAgICAgZmxhZ3MgfD0gZmxhZ3MgJiAxID8gLTEgOiAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuaToge1xuICAgICAgICAgIGZsYWdzIHw9IGZsYWdzICYgMiA/IC0xIDogMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLm06IHtcbiAgICAgICAgICBmbGFncyB8PSBmbGFncyAmIDQgPyAtMSA6IDQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGZsYWdzID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZsYWdzID09IC0xKSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5JbnZhbGlkX3JlZ3VsYXJfZXhwcmVzc2lvbl9mbGFncyxcbiAgICAgICAgdGhpcy5yYW5nZShzdGFydCwgdGhpcy5wb3MpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMucG9zKTtcbiAgfVxuXG4gIHRlc3RJbnRlZ2VyKCk6IGJvb2wge1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgaWYgKHRoaXMucG9zICsgMSA8IGVuZCAmJiB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLl8wKSB7XG4gICAgICBzd2l0Y2ggKHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUueDpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5YOlxuICAgICAgICBjYXNlIENoYXJDb2RlLmI6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQjpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5vOlxuICAgICAgICBjYXNlIENoYXJDb2RlLk86IHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcG9zID0gdGhpcy5wb3M7XG4gICAgd2hpbGUgKHBvcyA8IGVuZCkge1xuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjID09IENoYXJDb2RlLkRPVCB8fCBjID09IENoYXJDb2RlLmUgfHwgYyA9PSBDaGFyQ29kZS5FKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoKGMgPCBDaGFyQ29kZS5fMCB8fCBjID4gQ2hhckNvZGUuXzkpICYmIGMgIT0gQ2hhckNvZGUuXykgYnJlYWs7XG4gICAgICAvLyBkb2VzIG5vdCB2YWxpZGF0ZSBzZXBhcmF0b3IgcGxhY2VtZW50ICh0aGlzIGlzIGRvbmUgaW4gcmVhZFhZSW50ZWdlcilcbiAgICAgIHBvcysrO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlYWRJbnRlZ2VyKCk6IEk2NCB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIGlmICh0aGlzLnBvcyArIDIgPCB0aGlzLmVuZCAmJiB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLl8wKSB7XG4gICAgICBzd2l0Y2ggKHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUueDpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5YOiB7XG4gICAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkSGV4SW50ZWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuYjpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5COiB7XG4gICAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkQmluYXJ5SW50ZWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUubzpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5POiB7XG4gICAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkT2N0YWxJbnRlZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc09jdGFsRGlnaXQodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkpKSB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMucG9zO1xuICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRPY3RhbEludGVnZXIoKTtcbiAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICBEaWFnbm9zdGljQ29kZS5PY3RhbF9saXRlcmFsc19hcmVfbm90X2FsbG93ZWRfaW5fc3RyaWN0X21vZGUsXG4gICAgICAgICAgdGhpcy5yYW5nZShzdGFydCwgdGhpcy5wb3MpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVhZERlY2ltYWxJbnRlZ2VyKCk7XG4gIH1cblxuICByZWFkSGV4SW50ZWdlcigpOiBJNjQge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgdmFsdWUgPSBpNjRfbmV3KDApO1xuICAgIHZhciBpNjRfNCA9IGk2NF9uZXcoNCk7XG4gICAgdmFyIHNlcEVuZCA9IHN0YXJ0O1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgIGxldCBwb3MgPSB0aGlzLnBvcztcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoYyA+PSBDaGFyQ29kZS5fMCAmJiBjIDw9IENoYXJDb2RlLl85KSB7XG4gICAgICAgIC8vIHZhbHVlID0gKHZhbHVlIDw8IDQpICsgYyAtIENoYXJDb2RlLl8wO1xuICAgICAgICB2YWx1ZSA9IGk2NF9hZGQoXG4gICAgICAgICAgaTY0X3NobCh2YWx1ZSwgaTY0XzQpLFxuICAgICAgICAgIGk2NF9uZXcoYyAtIENoYXJDb2RlLl8wKVxuICAgICAgICApO1xuICAgICAgIH0gZWxzZSBpZiAoYyA+PSBDaGFyQ29kZS5BICYmIGMgPD0gQ2hhckNvZGUuRikge1xuICAgICAgICAvLyB2YWx1ZSA9ICh2YWx1ZSA8PCA0KSArIDEwICsgYyAtIENoYXJDb2RlLkE7XG4gICAgICAgIHZhbHVlID0gaTY0X2FkZChcbiAgICAgICAgICBpNjRfc2hsKHZhbHVlLCBpNjRfNCksXG4gICAgICAgICAgaTY0X25ldygxMCArIGMgLSBDaGFyQ29kZS5BKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjID49IENoYXJDb2RlLmEgJiYgYyA8PSBDaGFyQ29kZS5mKSB7XG4gICAgICAgIC8vIHZhbHVlID0gKHZhbHVlIDw8IDQpICsgMTAgKyBjIC0gQ2hhckNvZGUuYTtcbiAgICAgICAgdmFsdWUgPSBpNjRfYWRkKFxuICAgICAgICAgIGk2NF9zaGwodmFsdWUsIGk2NF80KSxcbiAgICAgICAgICBpNjRfbmV3KDEwICsgYyAtIENoYXJDb2RlLmEpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGMgPT0gQ2hhckNvZGUuXykge1xuICAgICAgICBpZiAoc2VwRW5kID09IHBvcykge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICBzZXBFbmQgPT0gc3RhcnRcbiAgICAgICAgICAgICAgPyBEaWFnbm9zdGljQ29kZS5OdW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9hbGxvd2VkX2hlcmVcbiAgICAgICAgICAgICAgOiBEaWFnbm9zdGljQ29kZS5NdWx0aXBsZV9jb25zZWN1dGl2ZV9udW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9wZXJtaXR0ZWQsXG4gICAgICAgICAgICB0aGlzLnJhbmdlKHBvcylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHNlcEVuZCA9IHBvcyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMucG9zID0gcG9zICsgMTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zID09IHN0YXJ0KSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5IZXhhZGVjaW1hbF9kaWdpdF9leHBlY3RlZCxcbiAgICAgICAgdGhpcy5yYW5nZShzdGFydClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChzZXBFbmQgPT0gdGhpcy5wb3MpIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLk51bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X2FsbG93ZWRfaGVyZSxcbiAgICAgICAgdGhpcy5yYW5nZShzZXBFbmQgLSAxKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVhZERlY2ltYWxJbnRlZ2VyKCk6IEk2NCB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgdmFsdWUgPSBpNjRfbmV3KDApO1xuICAgIHZhciBpNjRfMTAgPSBpNjRfbmV3KDEwKTtcbiAgICB2YXIgc2VwRW5kID0gc3RhcnQ7XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICBsZXQgcG9zID0gdGhpcy5wb3M7XG4gICAgICBsZXQgYyA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGMgPj0gQ2hhckNvZGUuXzAgJiYgYyA8PSBDaGFyQ29kZS5fOSkge1xuICAgICAgICAvLyB2YWx1ZSA9IHZhbHVlICogMTAgKyBjIC0gQ2hhckNvZGUuXzA7XG4gICAgICAgIHZhbHVlID0gaTY0X2FkZChcbiAgICAgICAgICBpNjRfbXVsKHZhbHVlLCBpNjRfMTApLFxuICAgICAgICAgIGk2NF9uZXcoYyAtIENoYXJDb2RlLl8wKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjID09IENoYXJDb2RlLl8pIHtcbiAgICAgICAgaWYgKHNlcEVuZCA9PSBwb3MpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgc2VwRW5kID09IHN0YXJ0XG4gICAgICAgICAgICAgID8gRGlhZ25vc3RpY0NvZGUuTnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfYWxsb3dlZF9oZXJlXG4gICAgICAgICAgICAgIDogRGlhZ25vc3RpY0NvZGUuTXVsdGlwbGVfY29uc2VjdXRpdmVfbnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfcGVybWl0dGVkLFxuICAgICAgICAgICAgdGhpcy5yYW5nZShwb3MpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBzZXBFbmQgPSBwb3MgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnBvcyA9IHBvcyArIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcyA9PSBzdGFydCkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuRGlnaXRfZXhwZWN0ZWQsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoc2VwRW5kID09IHRoaXMucG9zKSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5OdW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9hbGxvd2VkX2hlcmUsXG4gICAgICAgIHRoaXMucmFuZ2Uoc2VwRW5kIC0gMSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlYWRPY3RhbEludGVnZXIoKTogSTY0IHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgdmFyIHZhbHVlID0gaTY0X25ldygwKTtcbiAgICB2YXIgaTY0XzMgPSBpNjRfbmV3KDMpO1xuICAgIHZhciBzZXBFbmQgPSBzdGFydDtcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICBsZXQgcG9zID0gdGhpcy5wb3M7XG4gICAgICBsZXQgYyA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGMgPj0gQ2hhckNvZGUuXzAgJiYgYyA8PSBDaGFyQ29kZS5fNykge1xuICAgICAgICAvLyB2YWx1ZSA9ICh2YWx1ZSA8PCAzKSArIGMgLSBDaGFyQ29kZS5fMDtcbiAgICAgICAgdmFsdWUgPSBpNjRfYWRkKFxuICAgICAgICAgIGk2NF9zaGwodmFsdWUsIGk2NF8zKSxcbiAgICAgICAgICBpNjRfbmV3KGMgLSBDaGFyQ29kZS5fMClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSBDaGFyQ29kZS5fKSB7XG4gICAgICAgIGlmIChzZXBFbmQgPT0gcG9zKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgIHNlcEVuZCA9PSBzdGFydFxuICAgICAgICAgICAgICA/IERpYWdub3N0aWNDb2RlLk51bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X2FsbG93ZWRfaGVyZVxuICAgICAgICAgICAgICA6IERpYWdub3N0aWNDb2RlLk11bHRpcGxlX2NvbnNlY3V0aXZlX251bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X3Blcm1pdHRlZCxcbiAgICAgICAgICAgIHRoaXMucmFuZ2UocG9zKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VwRW5kID0gcG9zICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgKyt0aGlzLnBvcztcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zID09IHN0YXJ0KSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5PY3RhbF9kaWdpdF9leHBlY3RlZCxcbiAgICAgICAgdGhpcy5yYW5nZShzdGFydClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChzZXBFbmQgPT0gdGhpcy5wb3MpIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLk51bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X2FsbG93ZWRfaGVyZSxcbiAgICAgICAgdGhpcy5yYW5nZShzZXBFbmQgLSAxKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVhZEJpbmFyeUludGVnZXIoKTogSTY0IHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgdmFyIHZhbHVlID0gaTY0X25ldygwKTtcbiAgICB2YXIgaTY0XzEgPSBpNjRfbmV3KDEpO1xuICAgIHZhciBzZXBFbmQgPSBzdGFydDtcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICBsZXQgcG9zID0gdGhpcy5wb3M7XG4gICAgICBsZXQgYyA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGMgPT0gQ2hhckNvZGUuXzApIHtcbiAgICAgICAgLy8gdmFsdWUgPSAodmFsdWUgPDwgMSk7XG4gICAgICAgIHZhbHVlID0gaTY0X3NobCh2YWx1ZSwgaTY0XzEpO1xuICAgICAgfSBlbHNlIGlmIChjID09IENoYXJDb2RlLl8xKSB7XG4gICAgICAgIC8vIHZhbHVlID0gKHZhbHVlIDw8IDEpICsgMTtcbiAgICAgICAgdmFsdWUgPSBpNjRfYWRkKFxuICAgICAgICAgIGk2NF9zaGwodmFsdWUsIGk2NF8xKSxcbiAgICAgICAgICBpNjRfMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjID09IENoYXJDb2RlLl8pIHtcbiAgICAgICAgaWYgKHNlcEVuZCA9PSBwb3MpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgc2VwRW5kID09IHN0YXJ0XG4gICAgICAgICAgICAgID8gRGlhZ25vc3RpY0NvZGUuTnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfYWxsb3dlZF9oZXJlXG4gICAgICAgICAgICAgIDogRGlhZ25vc3RpY0NvZGUuTXVsdGlwbGVfY29uc2VjdXRpdmVfbnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfcGVybWl0dGVkLFxuICAgICAgICAgICAgdGhpcy5yYW5nZShwb3MpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBzZXBFbmQgPSBwb3MgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnBvcyA9IHBvcyArIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcyA9PSBzdGFydCkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuQmluYXJ5X2RpZ2l0X2V4cGVjdGVkLFxuICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHNlcEVuZCA9PSB0aGlzLnBvcykge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuTnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfYWxsb3dlZF9oZXJlLFxuICAgICAgICB0aGlzLnJhbmdlKHNlcEVuZCAtIDEpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWFkRmxvYXQoKTogZjY0IHtcbiAgICAvLyB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgLy8gaWYgKHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuXzAgJiYgdGhpcy5wb3MgKyAyIDwgdGhpcy5lbmQpIHtcbiAgICAvLyAgIHN3aXRjaCAodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkpIHtcbiAgICAvLyAgICAgY2FzZSBDaGFyQ29kZS5YOlxuICAgIC8vICAgICBjYXNlIENoYXJDb2RlLng6IHtcbiAgICAvLyAgICAgICB0aGlzLnBvcyArPSAyO1xuICAgIC8vICAgICAgIHJldHVybiB0aGlzLnJlYWRIZXhGbG9hdCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHJldHVybiB0aGlzLnJlYWREZWNpbWFsRmxvYXQoKTtcbiAgfVxuXG4gIHJlYWREZWNpbWFsRmxvYXQoKTogZjY0IHtcbiAgICAvLyBUT0RPOiBudW1lcmljIHNlcGFyYXRvcnMgKHBhcnNlRmxvYXQgY2FuJ3QgaGFuZGxlIHRoZXNlKVxuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kICYmIGlzRGVjaW1hbERpZ2l0KHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykpKSB7XG4gICAgICArK3RoaXMucG9zO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3MgPCBlbmQgJiYgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5ET1QpIHtcbiAgICAgICsrdGhpcy5wb3M7XG4gICAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQgJiYgaXNEZWNpbWFsRGlnaXQodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSkpIHtcbiAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICBsZXQgYyA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICBpZiAoYyA9PSBDaGFyQ29kZS5lIHx8IGMgPT0gQ2hhckNvZGUuRSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKyt0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgIChjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSkgPT0gQ2hhckNvZGUuTUlOVVMgfHwgYyA9PSBDaGFyQ29kZS5QTFVTICYmXG4gICAgICAgICAgaXNEZWNpbWFsRGlnaXQodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkpXG4gICAgICAgICkge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kICYmIGlzRGVjaW1hbERpZ2l0KHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykpKSB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0ZXh0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5wb3MpKTtcbiAgfVxuXG4gIHJlYWRIZXhGbG9hdCgpOiBmNjQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTsgLy8gVEJEXG4gIH1cblxuICByZWFkVW5pY29kZUVzY2FwZSgpOiBzdHJpbmcge1xuICAgIHZhciByZW1haW4gPSA0O1xuICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKyspO1xuICAgICAgaWYgKGMgPj0gQ2hhckNvZGUuXzAgJiYgYyA8PSBDaGFyQ29kZS5fOSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA8PCA0KSArIGMgLSBDaGFyQ29kZS5fMDtcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSBDaGFyQ29kZS5BICYmIGMgPD0gQ2hhckNvZGUuRikge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA8PCA0KSArIGMgKyAoMTAgLSBDaGFyQ29kZS5BKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSBDaGFyQ29kZS5hICYmIGMgPD0gQ2hhckNvZGUuZikge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA8PCA0KSArIGMgKyAoMTAgLSBDaGFyQ29kZS5hKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgRGlhZ25vc3RpY0NvZGUuSGV4YWRlY2ltYWxfZGlnaXRfZXhwZWN0ZWQsXG4gICAgICAgICAgdGhpcy5yYW5nZSh0aGlzLnBvcyAtIDEsIHRoaXMucG9zKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICAgIGlmICgtLXJlbWFpbiA9PSAwKSBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlbWFpbikge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW5leHBlY3RlZF9lbmRfb2ZfdGV4dCxcbiAgICAgICAgdGhpcy5yYW5nZSh0aGlzLnBvcylcbiAgICAgICk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkRXh0ZW5kZWRVbmljb2RlRXNjYXBlKCk6IHN0cmluZyB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5yZWFkSGV4SW50ZWdlcigpO1xuICAgIHZhciB2YWx1ZTMyID0gaTY0X2xvdyh2YWx1ZSk7XG4gICAgdmFyIGludmFsaWQgPSBmYWxzZTtcblxuICAgIGFzc2VydCghaTY0X2hpZ2godmFsdWUpKTtcbiAgICBpZiAodmFsdWUzMiA+IDB4MTBGRkZGKSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5Bbl9leHRlbmRlZF9Vbmljb2RlX2VzY2FwZV92YWx1ZV9tdXN0X2JlX2JldHdlZW5fMHgwX2FuZF8weDEwRkZGRl9pbmNsdXNpdmUsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIHRoaXMucG9zKVxuICAgICAgKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgaWYgKHRoaXMucG9zID49IGVuZCkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW5leHBlY3RlZF9lbmRfb2ZfdGV4dCxcbiAgICAgICAgdGhpcy5yYW5nZShzdGFydCwgZW5kKVxuICAgICAgKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5DTE9TRUJSQUNFKSB7XG4gICAgICArK3RoaXMucG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5VbnRlcm1pbmF0ZWRfVW5pY29kZV9lc2NhcGVfc2VxdWVuY2UsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIHRoaXMucG9zKVxuICAgICAgKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gdmFsdWUzMiA8IDY1NTM2XG4gICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUodmFsdWUzMilcbiAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgKCh2YWx1ZTMyIC0gNjU1MzYpID4+PiAxMCkgKyAweEQ4MDAsXG4gICAgICAgICgodmFsdWUzMiAtIDY1NTM2KSAmIDEwMjMpICsgMHhEQzAwXG4gICAgICApO1xuICB9XG5cbiAgZmluaXNoKCk6IHZvaWQge1xuICB9XG59XG5cbi8qKiBUb2tlbml6ZXIgc3RhdGUgYXMgcmV0dXJuZWQgYnkge0BsaW5rIFRva2VuaXplciNtYXJrfSBhbmQgY29uc3VtZWQgYnkge0BsaW5rIFRva2VuaXplciNyZXNldH0uICovXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuICAvKiogQ3VycmVudCBwb3NpdGlvbi4gKi9cbiAgcG9zOiBpMzI7XG4gIC8qKiBDdXJyZW50IHRva2VuLiAqL1xuICB0b2tlbjogVG9rZW47XG4gIC8qKiBDdXJyZW50IHRva2VuJ3MgcG9zaXRpb24uICovXG4gIHRva2VuUG9zOiBpMzI7XG59XG5cbi8vIFJldXNhYmxlIHN0YXRlIG9iamVjdCB0byByZWR1Y2UgYWxsb2NhdGlvbnNcbnZhciByZXVzYWJsZVN0YXRlOiBTdGF0ZSB8IG51bGwgPSBudWxsO1xuIl19

/***/ }),

/***/ "../src/util/binary.ts":
/*!*****************************!*\
  !*** ../src/util/binary.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** Reads an 8-bit integer from the specified buffer. */
function readI8(buffer, offset) {
    return buffer[offset];
}
exports.readI8 = readI8;
/** Writes an 8-bit integer to the specified buffer. */
function writeI8(value, buffer, offset) {
    buffer[offset] = value;
}
exports.writeI8 = writeI8;
/** Reads a 16-bit integer from the specified buffer. */
function readI16(buffer, offset) {
    return buffer[offset]
        | buffer[offset + 1] << 8;
}
exports.readI16 = readI16;
/** Writes a 16-bit integer to the specified buffer. */
function writeI16(value, buffer, offset) {
    buffer[offset] = value;
    buffer[offset + 1] = value >>> 8;
}
exports.writeI16 = writeI16;
/** Reads a 32-bit integer from the specified buffer. */
function readI32(buffer, offset) {
    return buffer[offset]
        | buffer[offset + 1] << 8
        | buffer[offset + 2] << 16
        | buffer[offset + 3] << 24;
}
exports.readI32 = readI32;
/** Writes a 32-bit integer to the specified buffer. */
function writeI32(value, buffer, offset) {
    buffer[offset] = value;
    buffer[offset + 1] = value >>> 8;
    buffer[offset + 2] = value >>> 16;
    buffer[offset + 3] = value >>> 24;
}
exports.writeI32 = writeI32;
/** Reads a 64-bit integer from the specified buffer. */
function readI64(buffer, offset) {
    var lo = readI32(buffer, offset);
    var hi = readI32(buffer, offset + 4);
    return i64_new(lo, hi);
}
exports.readI64 = readI64;
/** Writes a 64-bit integer to the specified buffer. */
function writeI64(value, buffer, offset) {
    writeI32(i64_low(value), buffer, offset);
    writeI32(i64_high(value), buffer, offset + 4);
}
exports.writeI64 = writeI64;
/** Reads a 32-bit float from the specified buffer. */
function readF32(buffer, offset) {
    return i32_as_f32(readI32(buffer, offset));
}
exports.readF32 = readF32;
/** Writes a 32-bit float to the specified buffer. */
function writeF32(value, buffer, offset) {
    writeI32(f32_as_i32(value), buffer, offset);
}
exports.writeF32 = writeF32;
/** Reads a 64-bit float from the specified buffer. */
function readF64(buffer, offset) {
    return i64_as_f64(readI64(buffer, offset));
}
exports.readF64 = readF64;
/** Writes a 64-bit float to the specified buffer. */
function writeF64(value, buffer, offset) {
    var valueI64 = f64_as_i64(value);
    writeI32(i64_low(valueI64), buffer, offset);
    writeI32(i64_high(valueI64), buffer, offset + 4);
}
exports.writeF64 = writeF64;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvYmluYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBbUIsQ0FBQSxLQUFLOztBQUV4Qix3REFBd0Q7QUFDeEQsU0FBZ0IsTUFBTSxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNwRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRkQsd0JBRUM7QUFFRCx1REFBdUQ7QUFDdkQsU0FBZ0IsT0FBTyxDQUFDLEtBQVUsRUFBRSxNQUFrQixFQUFFLE1BQVc7SUFDakUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6QixDQUFDO0FBRkQsMEJBRUM7QUFFRCx3REFBd0Q7QUFDeEQsU0FBZ0IsT0FBTyxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNyRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUs7VUFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUhELDBCQUdDO0FBRUQsdURBQXVEO0FBQ3ZELFNBQWdCLFFBQVEsQ0FBQyxLQUFVLEVBQUUsTUFBa0IsRUFBRSxNQUFXO0lBQ2xFLE1BQU0sQ0FBQyxNQUFNLENBQUssR0FBRyxLQUFLLENBQUM7SUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCw0QkFHQztBQUVELHdEQUF3RDtBQUN4RCxTQUFnQixPQUFPLENBQUMsTUFBa0IsRUFBRSxNQUFXO0lBQ3JELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBSztVQUNsQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7VUFDdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO1VBQ3hCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xDLENBQUM7QUFMRCwwQkFLQztBQUVELHVEQUF1RDtBQUN2RCxTQUFnQixRQUFRLENBQUMsS0FBVSxFQUFFLE1BQWtCLEVBQUUsTUFBVztJQUNsRSxNQUFNLENBQUMsTUFBTSxDQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDbEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFMRCw0QkFLQztBQUVELHdEQUF3RDtBQUN4RCxTQUFnQixPQUFPLENBQUMsTUFBa0IsRUFBRSxNQUFXO0lBQ3JELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsT0FBTyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFKRCwwQkFJQztBQUVELHVEQUF1RDtBQUN2RCxTQUFnQixRQUFRLENBQUMsS0FBVSxFQUFFLE1BQWtCLEVBQUUsTUFBVztJQUNsRSxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUhELDRCQUdDO0FBRUQsc0RBQXNEO0FBQ3RELFNBQWdCLE9BQU8sQ0FBQyxNQUFrQixFQUFFLE1BQVc7SUFDckQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCwwQkFFQztBQUVELHFEQUFxRDtBQUNyRCxTQUFnQixRQUFRLENBQUMsS0FBVSxFQUFFLE1BQWtCLEVBQUUsTUFBVztJQUNsRSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxzREFBc0Q7QUFDdEQsU0FBZ0IsT0FBTyxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNyRCxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELDBCQUVDO0FBRUQscURBQXFEO0FBQ3JELFNBQWdCLFFBQVEsQ0FBQyxLQUFVLEVBQUUsTUFBa0IsRUFBRSxNQUFXO0lBQ2xFLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUpELDRCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgdXRpbCAqLy8qKiovXG5cbi8qKiBSZWFkcyBhbiA4LWJpdCBpbnRlZ2VyIGZyb20gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEk4KGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiBpMzIge1xuICByZXR1cm4gYnVmZmVyW29mZnNldF07XG59XG5cbi8qKiBXcml0ZXMgYW4gOC1iaXQgaW50ZWdlciB0byB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUk4KHZhbHVlOiBpMzIsIGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiB2b2lkIHtcbiAgYnVmZmVyW29mZnNldF0gPSB2YWx1ZTtcbn1cblxuLyoqIFJlYWRzIGEgMTYtYml0IGludGVnZXIgZnJvbSB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkSTE2KGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiBpMzIge1xuICByZXR1cm4gYnVmZmVyW29mZnNldCAgICBdXG4gICAgICAgfCBidWZmZXJbb2Zmc2V0ICsgMV0gPDwgODtcbn1cblxuLyoqIFdyaXRlcyBhIDE2LWJpdCBpbnRlZ2VyIHRvIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSTE2KHZhbHVlOiBpMzIsIGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiB2b2lkIHtcbiAgYnVmZmVyW29mZnNldCAgICBdID0gdmFsdWU7XG4gIGJ1ZmZlcltvZmZzZXQgKyAxXSA9IHZhbHVlID4+PiA4O1xufVxuXG4vKiogUmVhZHMgYSAzMi1iaXQgaW50ZWdlciBmcm9tIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRJMzIoYnVmZmVyOiBVaW50OEFycmF5LCBvZmZzZXQ6IGkzMik6IGkzMiB7XG4gIHJldHVybiBidWZmZXJbb2Zmc2V0ICAgIF1cbiAgICAgICB8IGJ1ZmZlcltvZmZzZXQgKyAxXSA8PCA4XG4gICAgICAgfCBidWZmZXJbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICAgICB8IGJ1ZmZlcltvZmZzZXQgKyAzXSA8PCAyNDtcbn1cblxuLyoqIFdyaXRlcyBhIDMyLWJpdCBpbnRlZ2VyIHRvIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSTMyKHZhbHVlOiBpMzIsIGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiB2b2lkIHtcbiAgYnVmZmVyW29mZnNldCAgICBdID0gdmFsdWU7XG4gIGJ1ZmZlcltvZmZzZXQgKyAxXSA9IHZhbHVlID4+PiA4O1xuICBidWZmZXJbb2Zmc2V0ICsgMl0gPSB2YWx1ZSA+Pj4gMTY7XG4gIGJ1ZmZlcltvZmZzZXQgKyAzXSA9IHZhbHVlID4+PiAyNDtcbn1cblxuLyoqIFJlYWRzIGEgNjQtYml0IGludGVnZXIgZnJvbSB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkSTY0KGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiBJNjQge1xuICB2YXIgbG8gPSByZWFkSTMyKGJ1ZmZlciwgb2Zmc2V0KTtcbiAgdmFyIGhpID0gcmVhZEkzMihidWZmZXIsIG9mZnNldCArIDQpO1xuICByZXR1cm4gaTY0X25ldyhsbywgaGkpO1xufVxuXG4vKiogV3JpdGVzIGEgNjQtYml0IGludGVnZXIgdG8gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVJNjQodmFsdWU6IEk2NCwgYnVmZmVyOiBVaW50OEFycmF5LCBvZmZzZXQ6IGkzMik6IHZvaWQge1xuICB3cml0ZUkzMihpNjRfbG93KHZhbHVlKSwgYnVmZmVyLCBvZmZzZXQpO1xuICB3cml0ZUkzMihpNjRfaGlnaCh2YWx1ZSksIGJ1ZmZlciwgb2Zmc2V0ICsgNCk7XG59XG5cbi8qKiBSZWFkcyBhIDMyLWJpdCBmbG9hdCBmcm9tIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGMzIoYnVmZmVyOiBVaW50OEFycmF5LCBvZmZzZXQ6IGkzMik6IGYzMiB7XG4gIHJldHVybiBpMzJfYXNfZjMyKHJlYWRJMzIoYnVmZmVyLCBvZmZzZXQpKTtcbn1cblxuLyoqIFdyaXRlcyBhIDMyLWJpdCBmbG9hdCB0byB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUYzMih2YWx1ZTogZjMyLCBidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogdm9pZCB7XG4gIHdyaXRlSTMyKGYzMl9hc19pMzIodmFsdWUpLCBidWZmZXIsIG9mZnNldCk7XG59XG5cbi8qKiBSZWFkcyBhIDY0LWJpdCBmbG9hdCBmcm9tIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGNjQoYnVmZmVyOiBVaW50OEFycmF5LCBvZmZzZXQ6IGkzMik6IGY2NCB7XG4gIHJldHVybiBpNjRfYXNfZjY0KHJlYWRJNjQoYnVmZmVyLCBvZmZzZXQpKTtcbn1cblxuLyoqIFdyaXRlcyBhIDY0LWJpdCBmbG9hdCB0byB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUY2NCh2YWx1ZTogZjY0LCBidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogdm9pZCB7XG4gIHZhciB2YWx1ZUk2NCA9IGY2NF9hc19pNjQodmFsdWUpO1xuICB3cml0ZUkzMihpNjRfbG93KHZhbHVlSTY0KSwgYnVmZmVyLCBvZmZzZXQpO1xuICB3cml0ZUkzMihpNjRfaGlnaCh2YWx1ZUk2NCksIGJ1ZmZlciwgb2Zmc2V0ICsgNCk7XG59XG4iXX0=

/***/ }),

/***/ "../src/util/bitset.ts":
/*!*****************************!*\
  !*** ../src/util/bitset.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** Tests if the bit at the specified index is set within a 64-bit map. */
function bitsetIs(map, index) {
    assert(index >= 0 && index < 64);
    return i64_ne(i64_and(map, i64_shl(i64_one, i64_new(index))), i64_zero);
}
exports.bitsetIs = bitsetIs;
/** Sets or unsets the bit at the specified index within a 64-bit map and returns the new map. */
function bitsetSet(map, index, isSet) {
    assert(index >= 0 && index < 64);
    return isSet
        ? i64_or(map, i64_shl(i64_one, i64_new(index)))
        : i64_and(map, i64_not(i64_shl(i64_one, i64_new(index))));
}
exports.bitsetSet = bitsetSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYml0c2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvYml0c2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBbUIsQ0FBQSxLQUFLOztBQUV4QiwwRUFBMEU7QUFDMUUsU0FBZ0IsUUFBUSxDQUFDLEdBQVEsRUFBRSxLQUFVO0lBQzNDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxPQUFPLE1BQU0sQ0FDWCxPQUFPLENBQ0wsR0FBRyxFQUNILE9BQU8sQ0FDTCxPQUFPLEVBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUNmLENBQ0YsRUFDRCxRQUFRLENBQ1QsQ0FBQztBQUNKLENBQUM7QUFaRCw0QkFZQztBQUVELGlHQUFpRztBQUNqRyxTQUFnQixTQUFTLENBQUMsR0FBUSxFQUFFLEtBQVUsRUFBRSxLQUFXO0lBQ3pELE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxPQUFPLEtBQUs7UUFDVixDQUFDLENBQUMsTUFBTSxDQUNKLEdBQUcsRUFDSCxPQUFPLENBQ0wsT0FBTyxFQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDZixDQUNGO1FBQ0gsQ0FBQyxDQUFDLE9BQU8sQ0FDTCxHQUFHLEVBQ0gsT0FBTyxDQUNMLE9BQU8sQ0FDTCxPQUFPLEVBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUNmLENBQ0YsQ0FDRixDQUFDO0FBQ1IsQ0FBQztBQW5CRCw4QkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSB1dGlsICovLyoqKi9cblxuLyoqIFRlc3RzIGlmIHRoZSBiaXQgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBzZXQgd2l0aGluIGEgNjQtYml0IG1hcC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaXRzZXRJcyhtYXA6IEk2NCwgaW5kZXg6IGkzMik6IGJvb2wge1xuICBhc3NlcnQoaW5kZXggPj0gMCAmJiBpbmRleCA8IDY0KTtcbiAgcmV0dXJuIGk2NF9uZShcbiAgICBpNjRfYW5kKFxuICAgICAgbWFwLFxuICAgICAgaTY0X3NobChcbiAgICAgICAgaTY0X29uZSxcbiAgICAgICAgaTY0X25ldyhpbmRleClcbiAgICAgIClcbiAgICApLFxuICAgIGk2NF96ZXJvXG4gICk7XG59XG5cbi8qKiBTZXRzIG9yIHVuc2V0cyB0aGUgYml0IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggd2l0aGluIGEgNjQtYml0IG1hcCBhbmQgcmV0dXJucyB0aGUgbmV3IG1hcC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaXRzZXRTZXQobWFwOiBJNjQsIGluZGV4OiBpMzIsIGlzU2V0OiBib29sKTogSTY0IHtcbiAgYXNzZXJ0KGluZGV4ID49IDAgJiYgaW5kZXggPCA2NCk7XG4gIHJldHVybiBpc1NldFxuICAgID8gaTY0X29yKFxuICAgICAgICBtYXAsXG4gICAgICAgIGk2NF9zaGwoXG4gICAgICAgICAgaTY0X29uZSxcbiAgICAgICAgICBpNjRfbmV3KGluZGV4KVxuICAgICAgICApXG4gICAgICApXG4gICAgOiBpNjRfYW5kKFxuICAgICAgICBtYXAsXG4gICAgICAgIGk2NF9ub3QoXG4gICAgICAgICAgaTY0X3NobChcbiAgICAgICAgICAgIGk2NF9vbmUsXG4gICAgICAgICAgICBpNjRfbmV3KGluZGV4KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbn1cbiJdfQ==

/***/ }),

/***/ "../src/util/charcode.ts":
/*!*******************************!*\
  !*** ../src/util/charcode.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** An enum of named character codes. */
var CharCode;
(function (CharCode) {
    CharCode[CharCode["NULL"] = 0] = "NULL";
    CharCode[CharCode["LINEFEED"] = 10] = "LINEFEED";
    CharCode[CharCode["CARRIAGERETURN"] = 13] = "CARRIAGERETURN";
    CharCode[CharCode["LINESEPARATOR"] = 8232] = "LINESEPARATOR";
    CharCode[CharCode["PARAGRAPHSEPARATOR"] = 8233] = "PARAGRAPHSEPARATOR";
    CharCode[CharCode["NEXTLINE"] = 133] = "NEXTLINE";
    CharCode[CharCode["SPACE"] = 32] = "SPACE";
    CharCode[CharCode["NONBREAKINGSPACE"] = 160] = "NONBREAKINGSPACE";
    CharCode[CharCode["ENQUAD"] = 8192] = "ENQUAD";
    CharCode[CharCode["EMQUAD"] = 8193] = "EMQUAD";
    CharCode[CharCode["ENSPACE"] = 8194] = "ENSPACE";
    CharCode[CharCode["EMSPACE"] = 8195] = "EMSPACE";
    CharCode[CharCode["THREEPEREMSPACE"] = 8196] = "THREEPEREMSPACE";
    CharCode[CharCode["FOURPEREMSPACE"] = 8197] = "FOURPEREMSPACE";
    CharCode[CharCode["SIXPEREMSPACE"] = 8198] = "SIXPEREMSPACE";
    CharCode[CharCode["FIGURESPACE"] = 8199] = "FIGURESPACE";
    CharCode[CharCode["PUNCTUATIONSPACE"] = 8200] = "PUNCTUATIONSPACE";
    CharCode[CharCode["THINSPACE"] = 8201] = "THINSPACE";
    CharCode[CharCode["HAIRSPACE"] = 8202] = "HAIRSPACE";
    CharCode[CharCode["ZEROWIDTHSPACE"] = 8203] = "ZEROWIDTHSPACE";
    CharCode[CharCode["NARROWNOBREAKSPACE"] = 8239] = "NARROWNOBREAKSPACE";
    CharCode[CharCode["IDEOGRAPHICSPACE"] = 12288] = "IDEOGRAPHICSPACE";
    CharCode[CharCode["MATHEMATICALSPACE"] = 8287] = "MATHEMATICALSPACE";
    CharCode[CharCode["OGHAM"] = 5760] = "OGHAM";
    CharCode[CharCode["_"] = 95] = "_";
    CharCode[CharCode["_0"] = 48] = "_0";
    CharCode[CharCode["_1"] = 49] = "_1";
    CharCode[CharCode["_2"] = 50] = "_2";
    CharCode[CharCode["_3"] = 51] = "_3";
    CharCode[CharCode["_4"] = 52] = "_4";
    CharCode[CharCode["_5"] = 53] = "_5";
    CharCode[CharCode["_6"] = 54] = "_6";
    CharCode[CharCode["_7"] = 55] = "_7";
    CharCode[CharCode["_8"] = 56] = "_8";
    CharCode[CharCode["_9"] = 57] = "_9";
    CharCode[CharCode["a"] = 97] = "a";
    CharCode[CharCode["b"] = 98] = "b";
    CharCode[CharCode["c"] = 99] = "c";
    CharCode[CharCode["d"] = 100] = "d";
    CharCode[CharCode["e"] = 101] = "e";
    CharCode[CharCode["f"] = 102] = "f";
    CharCode[CharCode["g"] = 103] = "g";
    CharCode[CharCode["h"] = 104] = "h";
    CharCode[CharCode["i"] = 105] = "i";
    CharCode[CharCode["j"] = 106] = "j";
    CharCode[CharCode["k"] = 107] = "k";
    CharCode[CharCode["l"] = 108] = "l";
    CharCode[CharCode["m"] = 109] = "m";
    CharCode[CharCode["n"] = 110] = "n";
    CharCode[CharCode["o"] = 111] = "o";
    CharCode[CharCode["p"] = 112] = "p";
    CharCode[CharCode["q"] = 113] = "q";
    CharCode[CharCode["r"] = 114] = "r";
    CharCode[CharCode["s"] = 115] = "s";
    CharCode[CharCode["t"] = 116] = "t";
    CharCode[CharCode["u"] = 117] = "u";
    CharCode[CharCode["v"] = 118] = "v";
    CharCode[CharCode["w"] = 119] = "w";
    CharCode[CharCode["x"] = 120] = "x";
    CharCode[CharCode["y"] = 121] = "y";
    CharCode[CharCode["z"] = 122] = "z";
    CharCode[CharCode["A"] = 65] = "A";
    CharCode[CharCode["B"] = 66] = "B";
    CharCode[CharCode["C"] = 67] = "C";
    CharCode[CharCode["D"] = 68] = "D";
    CharCode[CharCode["E"] = 69] = "E";
    CharCode[CharCode["F"] = 70] = "F";
    CharCode[CharCode["G"] = 71] = "G";
    CharCode[CharCode["H"] = 72] = "H";
    CharCode[CharCode["I"] = 73] = "I";
    CharCode[CharCode["J"] = 74] = "J";
    CharCode[CharCode["K"] = 75] = "K";
    CharCode[CharCode["L"] = 76] = "L";
    CharCode[CharCode["M"] = 77] = "M";
    CharCode[CharCode["N"] = 78] = "N";
    CharCode[CharCode["O"] = 79] = "O";
    CharCode[CharCode["P"] = 80] = "P";
    CharCode[CharCode["Q"] = 81] = "Q";
    CharCode[CharCode["R"] = 82] = "R";
    CharCode[CharCode["S"] = 83] = "S";
    CharCode[CharCode["T"] = 84] = "T";
    CharCode[CharCode["U"] = 85] = "U";
    CharCode[CharCode["V"] = 86] = "V";
    CharCode[CharCode["W"] = 87] = "W";
    CharCode[CharCode["X"] = 88] = "X";
    CharCode[CharCode["Y"] = 89] = "Y";
    CharCode[CharCode["Z"] = 90] = "Z";
    CharCode[CharCode["AMPERSAND"] = 38] = "AMPERSAND";
    CharCode[CharCode["ASTERISK"] = 42] = "ASTERISK";
    CharCode[CharCode["AT"] = 64] = "AT";
    CharCode[CharCode["BACKSLASH"] = 92] = "BACKSLASH";
    CharCode[CharCode["BACKTICK"] = 96] = "BACKTICK";
    CharCode[CharCode["BAR"] = 124] = "BAR";
    CharCode[CharCode["CARET"] = 94] = "CARET";
    CharCode[CharCode["CLOSEBRACE"] = 125] = "CLOSEBRACE";
    CharCode[CharCode["CLOSEBRACKET"] = 93] = "CLOSEBRACKET";
    CharCode[CharCode["CLOSEPAREN"] = 41] = "CLOSEPAREN";
    CharCode[CharCode["COLON"] = 58] = "COLON";
    CharCode[CharCode["COMMA"] = 44] = "COMMA";
    CharCode[CharCode["DOLLAR"] = 36] = "DOLLAR";
    CharCode[CharCode["DOT"] = 46] = "DOT";
    CharCode[CharCode["DOUBLEQUOTE"] = 34] = "DOUBLEQUOTE";
    CharCode[CharCode["EQUALS"] = 61] = "EQUALS";
    CharCode[CharCode["EXCLAMATION"] = 33] = "EXCLAMATION";
    CharCode[CharCode["GREATERTHAN"] = 62] = "GREATERTHAN";
    CharCode[CharCode["HASH"] = 35] = "HASH";
    CharCode[CharCode["LESSTHAN"] = 60] = "LESSTHAN";
    CharCode[CharCode["MINUS"] = 45] = "MINUS";
    CharCode[CharCode["OPENBRACE"] = 123] = "OPENBRACE";
    CharCode[CharCode["OPENBRACKET"] = 91] = "OPENBRACKET";
    CharCode[CharCode["OPENPAREN"] = 40] = "OPENPAREN";
    CharCode[CharCode["PERCENT"] = 37] = "PERCENT";
    CharCode[CharCode["PLUS"] = 43] = "PLUS";
    CharCode[CharCode["QUESTION"] = 63] = "QUESTION";
    CharCode[CharCode["SEMICOLON"] = 59] = "SEMICOLON";
    CharCode[CharCode["SINGLEQUOTE"] = 39] = "SINGLEQUOTE";
    CharCode[CharCode["SLASH"] = 47] = "SLASH";
    CharCode[CharCode["TILDE"] = 126] = "TILDE";
    CharCode[CharCode["BACKSPACE"] = 8] = "BACKSPACE";
    CharCode[CharCode["FORMFEED"] = 12] = "FORMFEED";
    CharCode[CharCode["BYTEORDERMARK"] = 65279] = "BYTEORDERMARK";
    CharCode[CharCode["TAB"] = 9] = "TAB";
    CharCode[CharCode["VERTICALTAB"] = 11] = "VERTICALTAB";
})(CharCode = exports.CharCode || (exports.CharCode = {}));
/** Tests if the specified character code is some sort of line break. */
function isLineBreak(c) {
    switch (c) {
        case 10 /* LINEFEED */:
        case 13 /* CARRIAGERETURN */:
        case 8232 /* LINESEPARATOR */:
        case 8233 /* PARAGRAPHSEPARATOR */: {
            return true;
        }
        default: {
            return false;
        }
    }
}
exports.isLineBreak = isLineBreak;
/** Tests if the specified character code is some sort of white space. */
function isWhiteSpace(c) {
    switch (c) {
        case 32 /* SPACE */:
        case 9 /* TAB */:
        case 11 /* VERTICALTAB */:
        case 12 /* FORMFEED */:
        case 160 /* NONBREAKINGSPACE */:
        case 133 /* NEXTLINE */:
        case 5760 /* OGHAM */:
        case 8239 /* NARROWNOBREAKSPACE */:
        case 8287 /* MATHEMATICALSPACE */:
        case 12288 /* IDEOGRAPHICSPACE */:
        case 65279 /* BYTEORDERMARK */: {
            return true;
        }
        default: {
            return c >= 8192 /* ENQUAD */ && c <= 8203 /* ZEROWIDTHSPACE */;
        }
    }
}
exports.isWhiteSpace = isWhiteSpace;
/** Tests if the specified character code is a valid decimal digit. */
function isDecimalDigit(c) {
    return c >= 48 /* _0 */ && c <= 57 /* _9 */;
}
exports.isDecimalDigit = isDecimalDigit;
/** Tests if the specified character code is a valid octal digit. */
function isOctalDigit(c) {
    return c >= 48 /* _0 */ && c <= 55 /* _7 */;
}
exports.isOctalDigit = isOctalDigit;
/** Tests if the specified character code is a valid start of an identifier. */
function isIdentifierStart(c) {
    return c >= 97 /* a */ && c <= 122 /* z */
        || c >= 65 /* A */ && c <= 90 /* Z */
        || c == 95 /* _ */
        || c == 36 /* DOLLAR */
        || c > 0x7f && isUnicodeIdentifierStart(c);
}
exports.isIdentifierStart = isIdentifierStart;
/** Tests if the specified character code is a valid keyword character. */
function isKeywordCharacter(c) {
    return c >= 97 /* a */ && c <= 122 /* z */;
}
exports.isKeywordCharacter = isKeywordCharacter;
/** Tests if the specified character code is a valid part of an identifier. */
function isIdentifierPart(c) {
    return c >= 97 /* a */ && c <= 122 /* z */
        || c >= 65 /* A */ && c <= 90 /* Z */
        || c >= 48 /* _0 */ && c <= 57 /* _9 */
        || c == 95 /* _ */
        || c == 36 /* DOLLAR */
        || c > 0x7f && isUnicodeIdentifierPart(c);
}
exports.isIdentifierPart = isIdentifierPart;
// storing as u16 to save memory
var unicodeIdentifierStart = [
    170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736,
    740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906,
    908, 908, 910, 929, 931,
    1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514,
    1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774,
    1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969,
    1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088,
    2088, 2112, 2136, 2208, 2208, 2210, 2220, 2308, 2361, 2365, 2365, 2384, 2384,
    2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474,
    2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529,
    2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613,
    2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705,
    2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784,
    2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873,
    2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958,
    2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986,
    2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125,
    3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240,
    3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333,
    3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455,
    3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634,
    3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725,
    3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757,
    3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840,
    3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186,
    4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293,
    4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696,
    4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798,
    4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992,
    5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872,
    5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016,
    6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389,
    6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688,
    6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141,
    7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7413, 7414, 7424,
    7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025,
    8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130,
    8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188,
    8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469,
    8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505,
    8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584,
    11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520,
    11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670,
    11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720,
    11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329,
    12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540,
    12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893,
    19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538,
    42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888,
    42891, 42894, 42896, 42899, 42912, 42922, 43000, 43009, 43011, 43013, 43015,
    43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259,
    43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520,
    43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695,
    43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739,
    43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798,
    43808, 43814, 43816, 43822, 43968, 44002, 44032, 55203, 55216, 55238, 55243,
    55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285,
    64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323,
    64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019,
    65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474,
    65479, 65482, 65487, 65490, 65495, 65498, 65500,
];
var unicodeIdentifierPart = [
    170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736,
    740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 902, 902, 904, 906,
    908, 908, 910, 929, 931,
    1013, 1015, 1153, 1155, 1159, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415,
    1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1520,
    1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788,
    1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2048, 2093, 2112,
    2139, 2208, 2208, 2210, 2220, 2276, 2302, 2304, 2403, 2406, 2415, 2417, 2423,
    2425, 2431, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482,
    2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525,
    2527, 2531, 2534, 2545, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602,
    2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632,
    2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693,
    2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757,
    2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2817, 2819, 2821,
    2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884,
    2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929,
    2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972,
    2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018,
    3021, 3024, 3024, 3031, 3031, 3046, 3055, 3073, 3075, 3077, 3084, 3086, 3088,
    3090, 3112, 3114, 3123, 3125, 3129, 3133, 3140, 3142, 3144, 3146, 3149, 3157,
    3158, 3160, 3161, 3168, 3171, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216,
    3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285,
    3286, 3294, 3294, 3296, 3299, 3302, 3311, 3313, 3314, 3330, 3331, 3333, 3340,
    3342, 3344, 3346, 3386, 3389, 3396, 3398, 3400, 3402, 3406, 3415, 3415, 3424,
    3427, 3430, 3439, 3450, 3455, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515,
    3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570,
    3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720,
    3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751,
    3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789,
    3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895,
    3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028,
    4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304,
    4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744,
    4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808,
    4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4992, 5007, 5024, 5108,
    5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902,
    5908, 5920, 5940, 5952, 5971, 5984, 5996, 5998, 6000, 6002, 6003, 6016, 6099,
    6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6160, 6169, 6176, 6263, 6272,
    6314, 6320, 6389, 6400, 6428, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516,
    6528, 6571, 6576, 6601, 6608, 6617, 6656, 6683, 6688, 6750, 6752, 6780, 6783,
    6793, 6800, 6809, 6823, 6823, 6912, 6987, 6992, 7001, 7019, 7027, 7040, 7155,
    7168, 7223, 7232, 7241, 7245, 7293, 7376, 7378, 7380, 7414, 7424, 7654, 7676,
    7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027,
    8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134,
    8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205,
    8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417,
    8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477,
    8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517,
    8521, 8526, 8526, 8544, 8584,
    11264, 11310, 11312, 11358, 11360, 11492, 11499, 11507, 11520, 11557, 11559,
    11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686,
    11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728,
    11734, 11736, 11742, 11744, 11775, 11823, 11823, 12293, 12295, 12321, 12335,
    12337, 12341, 12344, 12348, 12353, 12438, 12441, 12442, 12445, 12447, 12449,
    12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799,
    13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512,
    42539, 42560, 42607, 42612, 42621, 42623, 42647, 42655, 42737, 42775, 42783,
    42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43047, 43072,
    43123, 43136, 43204, 43216, 43225, 43232, 43255, 43259, 43259, 43264, 43309,
    43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43520, 43574, 43584,
    43597, 43600, 43609, 43616, 43638, 43642, 43643, 43648, 43714, 43739, 43741,
    43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808,
    43814, 43816, 43822, 43968, 44010, 44012, 44013, 44016, 44025, 44032, 55203,
    55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275,
    64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321,
    64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008,
    65019, 65024, 65039, 65056, 65062, 65075, 65076, 65101, 65103, 65136, 65140,
    65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65382,
    65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,
];
function lookupInUnicodeMap(code, map) {
    if (code < map[0])
        return false;
    var lo = 0;
    var hi = map.length;
    var mid;
    var midVal;
    while (lo + 1 < hi) {
        mid = lo + ((hi - lo) >> 1);
        mid -= (mid & 1);
        midVal = map[mid];
        if (midVal <= code && code <= map[mid + 1]) {
            return true;
        }
        if (code < midVal) {
            hi = mid;
        }
        else {
            lo = mid + 2;
        }
    }
    return false;
}
function isUnicodeIdentifierStart(code) {
    return code < 0 || code > 0xffff ? false
        : lookupInUnicodeMap(code, unicodeIdentifierStart);
}
function isUnicodeIdentifierPart(code) {
    return code < 0 || code > 0xffff ? false
        : lookupInUnicodeMap(code, unicodeIdentifierPart);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9jaGFyY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1CLENBQUEsS0FBSzs7QUFFeEIsd0NBQXdDO0FBQ3hDLElBQWtCLFFBb0lqQjtBQXBJRCxXQUFrQixRQUFRO0lBRXhCLHVDQUFRLENBQUE7SUFDUixnREFBZSxDQUFBO0lBQ2YsNERBQXFCLENBQUE7SUFDckIsNERBQXNCLENBQUE7SUFDdEIsc0VBQTJCLENBQUE7SUFDM0IsaURBQWlCLENBQUE7SUFFakIsMENBQVksQ0FBQTtJQUNaLGlFQUF1QixDQUFBO0lBQ3ZCLDhDQUFlLENBQUE7SUFDZiw4Q0FBZSxDQUFBO0lBQ2YsZ0RBQWdCLENBQUE7SUFDaEIsZ0RBQWdCLENBQUE7SUFDaEIsZ0VBQXdCLENBQUE7SUFDeEIsOERBQXVCLENBQUE7SUFDdkIsNERBQXNCLENBQUE7SUFDdEIsd0RBQW9CLENBQUE7SUFDcEIsa0VBQXlCLENBQUE7SUFDekIsb0RBQWtCLENBQUE7SUFDbEIsb0RBQWtCLENBQUE7SUFDbEIsOERBQXVCLENBQUE7SUFDdkIsc0VBQTJCLENBQUE7SUFDM0IsbUVBQXlCLENBQUE7SUFDekIsb0VBQTBCLENBQUE7SUFDMUIsNENBQWMsQ0FBQTtJQUVkLGtDQUFRLENBQUE7SUFFUixvQ0FBUyxDQUFBO0lBQ1Qsb0NBQVMsQ0FBQTtJQUNULG9DQUFTLENBQUE7SUFDVCxvQ0FBUyxDQUFBO0lBQ1Qsb0NBQVMsQ0FBQTtJQUNULG9DQUFTLENBQUE7SUFDVCxvQ0FBUyxDQUFBO0lBQ1Qsb0NBQVMsQ0FBQTtJQUNULG9DQUFTLENBQUE7SUFDVCxvQ0FBUyxDQUFBO0lBRVQsa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FB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NENBT0M7QUFFRCxnQ0FBZ0M7QUFDaEMsSUFBTSxzQkFBc0IsR0FBVTtJQUNwQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDekUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ3pFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ3ZCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDOUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztDQUNoRCxDQUFDO0FBQ0YsSUFBTSxxQkFBcUIsR0FBVTtJQUNuQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDekUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ3pFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ3ZCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUIsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDM0UsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0NBQzlELENBQUM7QUFFRixTQUFTLGtCQUFrQixDQUFDLElBQVMsRUFBRSxHQUFVO0lBQy9DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUVoQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3BCLElBQUksR0FBUSxDQUFDO0lBQ2IsSUFBSSxNQUFXLENBQUM7SUFFaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNsQixHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUIsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksR0FBRyxNQUFNLEVBQUU7WUFDakIsRUFBRSxHQUFHLEdBQUcsQ0FBQztTQUNWO2FBQU07WUFDTCxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLHdCQUF3QixDQUFDLElBQVM7SUFDekMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDbkMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQVcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLElBQVM7SUFDeEMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDbkMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSB1dGlsICovLyoqKi9cblxuLyoqIEFuIGVudW0gb2YgbmFtZWQgY2hhcmFjdGVyIGNvZGVzLiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gQ2hhckNvZGUge1xuXG4gIE5VTEwgPSAwLFxuICBMSU5FRkVFRCA9IDB4MEEsXG4gIENBUlJJQUdFUkVUVVJOID0gMHgwRCxcbiAgTElORVNFUEFSQVRPUiA9IDB4MjAyOCxcbiAgUEFSQUdSQVBIU0VQQVJBVE9SID0gMHgyMDI5LFxuICBORVhUTElORSA9IDB4MDA4NSxcblxuICBTUEFDRSA9IDB4MjAsXG4gIE5PTkJSRUFLSU5HU1BBQ0UgPSAweEEwLFxuICBFTlFVQUQgPSAweDIwMDAsXG4gIEVNUVVBRCA9IDB4MjAwMSxcbiAgRU5TUEFDRSA9IDB4MjAwMixcbiAgRU1TUEFDRSA9IDB4MjAwMyxcbiAgVEhSRUVQRVJFTVNQQUNFID0gMHgyMDA0LFxuICBGT1VSUEVSRU1TUEFDRSA9IDB4MjAwNSxcbiAgU0lYUEVSRU1TUEFDRSA9IDB4MjAwNixcbiAgRklHVVJFU1BBQ0UgPSAweDIwMDcsXG4gIFBVTkNUVUFUSU9OU1BBQ0UgPSAweDIwMDgsXG4gIFRISU5TUEFDRSA9IDB4MjAwOSxcbiAgSEFJUlNQQUNFID0gMHgyMDBBLFxuICBaRVJPV0lEVEhTUEFDRSA9IDB4MjAwQixcbiAgTkFSUk9XTk9CUkVBS1NQQUNFID0gMHgyMDJGLFxuICBJREVPR1JBUEhJQ1NQQUNFID0gMHgzMDAwLFxuICBNQVRIRU1BVElDQUxTUEFDRSA9IDB4MjA1RixcbiAgT0dIQU0gPSAweDE2ODAsXG5cbiAgXyA9IDB4NUYsXG5cbiAgXzAgPSAweDMwLFxuICBfMSA9IDB4MzEsXG4gIF8yID0gMHgzMixcbiAgXzMgPSAweDMzLFxuICBfNCA9IDB4MzQsXG4gIF81ID0gMHgzNSxcbiAgXzYgPSAweDM2LFxuICBfNyA9IDB4MzcsXG4gIF84ID0gMHgzOCxcbiAgXzkgPSAweDM5LFxuXG4gIGEgPSAweDYxLFxuICBiID0gMHg2MixcbiAgYyA9IDB4NjMsXG4gIGQgPSAweDY0LFxuICBlID0gMHg2NSxcbiAgZiA9IDB4NjYsXG4gIGcgPSAweDY3LFxuICBoID0gMHg2OCxcbiAgaSA9IDB4NjksXG4gIGogPSAweDZBLFxuICBrID0gMHg2QixcbiAgbCA9IDB4NkMsXG4gIG0gPSAweDZELFxuICBuID0gMHg2RSxcbiAgbyA9IDB4NkYsXG4gIHAgPSAweDcwLFxuICBxID0gMHg3MSxcbiAgciA9IDB4NzIsXG4gIHMgPSAweDczLFxuICB0ID0gMHg3NCxcbiAgdSA9IDB4NzUsXG4gIHYgPSAweDc2LFxuICB3ID0gMHg3NyxcbiAgeCA9IDB4NzgsXG4gIHkgPSAweDc5LFxuICB6ID0gMHg3QSxcblxuICBBID0gMHg0MSxcbiAgQiA9IDB4NDIsXG4gIEMgPSAweDQzLFxuICBEID0gMHg0NCxcbiAgRSA9IDB4NDUsXG4gIEYgPSAweDQ2LFxuICBHID0gMHg0NyxcbiAgSCA9IDB4NDgsXG4gIEkgPSAweDQ5LFxuICBKID0gMHg0QSxcbiAgSyA9IDB4NEIsXG4gIEwgPSAweDRDLFxuICBNID0gMHg0RCxcbiAgTiA9IDB4NEUsXG4gIE8gPSAweDRGLFxuICBQID0gMHg1MCxcbiAgUSA9IDB4NTEsXG4gIFIgPSAweDUyLFxuICBTID0gMHg1MyxcbiAgVCA9IDB4NTQsXG4gIFUgPSAweDU1LFxuICBWID0gMHg1NixcbiAgVyA9IDB4NTcsXG4gIFggPSAweDU4LFxuICBZID0gMHg1OSxcbiAgWiA9IDB4NWEsXG5cbiAgQU1QRVJTQU5EID0gMHgyNixcbiAgQVNURVJJU0sgPSAweDJBLFxuICBBVCA9IDB4NDAsXG4gIEJBQ0tTTEFTSCA9IDB4NUMsXG4gIEJBQ0tUSUNLID0gMHg2MCxcbiAgQkFSID0gMHg3QyxcbiAgQ0FSRVQgPSAweDVFLFxuICBDTE9TRUJSQUNFID0gMHg3RCxcbiAgQ0xPU0VCUkFDS0VUID0gMHg1RCxcbiAgQ0xPU0VQQVJFTiA9IDB4MjksXG4gIENPTE9OID0gMHgzQSxcbiAgQ09NTUEgPSAweDJDLFxuICBET0xMQVIgPSAweDI0LFxuICBET1QgPSAweDJFLFxuICBET1VCTEVRVU9URSA9IDB4MjIsXG4gIEVRVUFMUyA9IDB4M0QsXG4gIEVYQ0xBTUFUSU9OID0gMHgyMSxcbiAgR1JFQVRFUlRIQU4gPSAweDNFLFxuICBIQVNIID0gMHgyMyxcbiAgTEVTU1RIQU4gPSAweDNDLFxuICBNSU5VUyA9IDB4MkQsXG4gIE9QRU5CUkFDRSA9IDB4N0IsXG4gIE9QRU5CUkFDS0VUID0gMHg1QixcbiAgT1BFTlBBUkVOID0gMHgyOCxcbiAgUEVSQ0VOVCA9IDB4MjUsXG4gIFBMVVMgPSAweDJCLFxuICBRVUVTVElPTiA9IDB4M0YsXG4gIFNFTUlDT0xPTiA9IDB4M0IsXG4gIFNJTkdMRVFVT1RFID0gMHgyNyxcbiAgU0xBU0ggPSAweDJGLFxuICBUSUxERSA9IDB4N0UsXG5cbiAgQkFDS1NQQUNFID0gMHgwOCxcbiAgRk9STUZFRUQgPSAweDBDLFxuICBCWVRFT1JERVJNQVJLID0gMHhGRUZGLFxuICBUQUIgPSAweDA5LFxuICBWRVJUSUNBTFRBQiA9IDB4MEJcbn1cblxuLyoqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyIGNvZGUgaXMgc29tZSBzb3J0IG9mIGxpbmUgYnJlYWsuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMaW5lQnJlYWsoYzogQ2hhckNvZGUpOiBib29sIHtcbiAgc3dpdGNoIChjKSB7XG4gICAgY2FzZSBDaGFyQ29kZS5MSU5FRkVFRDpcbiAgICBjYXNlIENoYXJDb2RlLkNBUlJJQUdFUkVUVVJOOlxuICAgIGNhc2UgQ2hhckNvZGUuTElORVNFUEFSQVRPUjpcbiAgICBjYXNlIENoYXJDb2RlLlBBUkFHUkFQSFNFUEFSQVRPUjoge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyIGNvZGUgaXMgc29tZSBzb3J0IG9mIHdoaXRlIHNwYWNlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzV2hpdGVTcGFjZShjOiBpMzIpOiBib29sIHtcbiAgc3dpdGNoIChjKSB7XG4gICAgY2FzZSBDaGFyQ29kZS5TUEFDRTpcbiAgICBjYXNlIENoYXJDb2RlLlRBQjpcbiAgICBjYXNlIENoYXJDb2RlLlZFUlRJQ0FMVEFCOlxuICAgIGNhc2UgQ2hhckNvZGUuRk9STUZFRUQ6XG4gICAgY2FzZSBDaGFyQ29kZS5OT05CUkVBS0lOR1NQQUNFOlxuICAgIGNhc2UgQ2hhckNvZGUuTkVYVExJTkU6XG4gICAgY2FzZSBDaGFyQ29kZS5PR0hBTTpcbiAgICBjYXNlIENoYXJDb2RlLk5BUlJPV05PQlJFQUtTUEFDRTpcbiAgICBjYXNlIENoYXJDb2RlLk1BVEhFTUFUSUNBTFNQQUNFOlxuICAgIGNhc2UgQ2hhckNvZGUuSURFT0dSQVBISUNTUEFDRTpcbiAgICBjYXNlIENoYXJDb2RlLkJZVEVPUkRFUk1BUks6IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYyA+PSBDaGFyQ29kZS5FTlFVQUQgJiYgYyA8PSBDaGFyQ29kZS5aRVJPV0lEVEhTUEFDRTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyIGNvZGUgaXMgYSB2YWxpZCBkZWNpbWFsIGRpZ2l0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjaW1hbERpZ2l0KGM6IGkzMik6IGJvb2wge1xuICByZXR1cm4gYyA+PSBDaGFyQ29kZS5fMCAmJiBjIDw9IENoYXJDb2RlLl85O1xufVxuXG4vKiogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCBjaGFyYWN0ZXIgY29kZSBpcyBhIHZhbGlkIG9jdGFsIGRpZ2l0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2N0YWxEaWdpdChjOiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIGMgPj0gQ2hhckNvZGUuXzAgJiYgYyA8PSBDaGFyQ29kZS5fNztcbn1cblxuLyoqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyIGNvZGUgaXMgYSB2YWxpZCBzdGFydCBvZiBhbiBpZGVudGlmaWVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclN0YXJ0KGM6IGkzMik6IGJvb2wge1xuICByZXR1cm4gYyA+PSBDaGFyQ29kZS5hICYmIGMgPD0gQ2hhckNvZGUuelxuICAgICAgfHwgYyA+PSBDaGFyQ29kZS5BICYmIGMgPD0gQ2hhckNvZGUuWlxuICAgICAgfHwgYyA9PSBDaGFyQ29kZS5fXG4gICAgICB8fCBjID09IENoYXJDb2RlLkRPTExBUlxuICAgICAgfHwgYyA+IDB4N2YgJiYgaXNVbmljb2RlSWRlbnRpZmllclN0YXJ0KGMpO1xufVxuXG4vKiogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCBjaGFyYWN0ZXIgY29kZSBpcyBhIHZhbGlkIGtleXdvcmQgY2hhcmFjdGVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzS2V5d29yZENoYXJhY3RlcihjOiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIGMgPj0gQ2hhckNvZGUuYSAmJiBjIDw9IENoYXJDb2RlLno7XG59XG5cbi8qKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIGNoYXJhY3RlciBjb2RlIGlzIGEgdmFsaWQgcGFydCBvZiBhbiBpZGVudGlmaWVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclBhcnQoYzogaTMyKTogYm9vbCB7XG4gIHJldHVybiBjID49IENoYXJDb2RlLmEgJiYgYyA8PSBDaGFyQ29kZS56XG4gICAgICB8fCBjID49IENoYXJDb2RlLkEgJiYgYyA8PSBDaGFyQ29kZS5aXG4gICAgICB8fCBjID49IENoYXJDb2RlLl8wICYmIGMgPD0gQ2hhckNvZGUuXzlcbiAgICAgIHx8IGMgPT0gQ2hhckNvZGUuX1xuICAgICAgfHwgYyA9PSBDaGFyQ29kZS5ET0xMQVJcbiAgICAgIHx8IGMgPiAweDdmICYmIGlzVW5pY29kZUlkZW50aWZpZXJQYXJ0KGMpO1xufVxuXG4vLyBzdG9yaW5nIGFzIHUxNiB0byBzYXZlIG1lbW9yeVxuY29uc3QgdW5pY29kZUlkZW50aWZpZXJTdGFydDogdTE2W10gPSBbXG4gIDE3MCwgMTcwLCAxODEsIDE4MSwgMTg2LCAxODYsIDE5MiwgMjE0LCAyMTYsIDI0NiwgMjQ4LCA3MDUsIDcxMCwgNzIxLCA3MzYsXG4gIDc0MCwgNzQ4LCA3NDgsIDc1MCwgNzUwLCA4ODAsIDg4NCwgODg2LCA4ODcsIDg5MCwgODkzLCA5MDIsIDkwMiwgOTA0LCA5MDYsXG4gIDkwOCwgOTA4LCA5MTAsIDkyOSwgOTMxLFxuICAxMDEzLCAxMDE1LCAxMTUzLCAxMTYyLCAxMzE5LCAxMzI5LCAxMzY2LCAxMzY5LCAxMzY5LCAxMzc3LCAxNDE1LCAxNDg4LCAxNTE0LFxuICAxNTIwLCAxNTIyLCAxNTY4LCAxNjEwLCAxNjQ2LCAxNjQ3LCAxNjQ5LCAxNzQ3LCAxNzQ5LCAxNzQ5LCAxNzY1LCAxNzY2LCAxNzc0LFxuICAxNzc1LCAxNzg2LCAxNzg4LCAxNzkxLCAxNzkxLCAxODA4LCAxODA4LCAxODEwLCAxODM5LCAxODY5LCAxOTU3LCAxOTY5LCAxOTY5LFxuICAxOTk0LCAyMDI2LCAyMDM2LCAyMDM3LCAyMDQyLCAyMDQyLCAyMDQ4LCAyMDY5LCAyMDc0LCAyMDc0LCAyMDg0LCAyMDg0LCAyMDg4LFxuICAyMDg4LCAyMTEyLCAyMTM2LCAyMjA4LCAyMjA4LCAyMjEwLCAyMjIwLCAyMzA4LCAyMzYxLCAyMzY1LCAyMzY1LCAyMzg0LCAyMzg0LFxuICAyMzkyLCAyNDAxLCAyNDE3LCAyNDIzLCAyNDI1LCAyNDMxLCAyNDM3LCAyNDQ0LCAyNDQ3LCAyNDQ4LCAyNDUxLCAyNDcyLCAyNDc0LFxuICAyNDgwLCAyNDgyLCAyNDgyLCAyNDg2LCAyNDg5LCAyNDkzLCAyNDkzLCAyNTEwLCAyNTEwLCAyNTI0LCAyNTI1LCAyNTI3LCAyNTI5LFxuICAyNTQ0LCAyNTQ1LCAyNTY1LCAyNTcwLCAyNTc1LCAyNTc2LCAyNTc5LCAyNjAwLCAyNjAyLCAyNjA4LCAyNjEwLCAyNjExLCAyNjEzLFxuICAyNjE0LCAyNjE2LCAyNjE3LCAyNjQ5LCAyNjUyLCAyNjU0LCAyNjU0LCAyNjc0LCAyNjc2LCAyNjkzLCAyNzAxLCAyNzAzLCAyNzA1LFxuICAyNzA3LCAyNzI4LCAyNzMwLCAyNzM2LCAyNzM4LCAyNzM5LCAyNzQxLCAyNzQ1LCAyNzQ5LCAyNzQ5LCAyNzY4LCAyNzY4LCAyNzg0LFxuICAyNzg1LCAyODIxLCAyODI4LCAyODMxLCAyODMyLCAyODM1LCAyODU2LCAyODU4LCAyODY0LCAyODY2LCAyODY3LCAyODY5LCAyODczLFxuICAyODc3LCAyODc3LCAyOTA4LCAyOTA5LCAyOTExLCAyOTEzLCAyOTI5LCAyOTI5LCAyOTQ3LCAyOTQ3LCAyOTQ5LCAyOTU0LCAyOTU4LFxuICAyOTYwLCAyOTYyLCAyOTY1LCAyOTY5LCAyOTcwLCAyOTcyLCAyOTcyLCAyOTc0LCAyOTc1LCAyOTc5LCAyOTgwLCAyOTg0LCAyOTg2LFxuICAyOTkwLCAzMDAxLCAzMDI0LCAzMDI0LCAzMDc3LCAzMDg0LCAzMDg2LCAzMDg4LCAzMDkwLCAzMTEyLCAzMTE0LCAzMTIzLCAzMTI1LFxuICAzMTI5LCAzMTMzLCAzMTMzLCAzMTYwLCAzMTYxLCAzMTY4LCAzMTY5LCAzMjA1LCAzMjEyLCAzMjE0LCAzMjE2LCAzMjE4LCAzMjQwLFxuICAzMjQyLCAzMjUxLCAzMjUzLCAzMjU3LCAzMjYxLCAzMjYxLCAzMjk0LCAzMjk0LCAzMjk2LCAzMjk3LCAzMzEzLCAzMzE0LCAzMzMzLFxuICAzMzQwLCAzMzQyLCAzMzQ0LCAzMzQ2LCAzMzg2LCAzMzg5LCAzMzg5LCAzNDA2LCAzNDA2LCAzNDI0LCAzNDI1LCAzNDUwLCAzNDU1LFxuICAzNDYxLCAzNDc4LCAzNDgyLCAzNTA1LCAzNTA3LCAzNTE1LCAzNTE3LCAzNTE3LCAzNTIwLCAzNTI2LCAzNTg1LCAzNjMyLCAzNjM0LFxuICAzNjM1LCAzNjQ4LCAzNjU0LCAzNzEzLCAzNzE0LCAzNzE2LCAzNzE2LCAzNzE5LCAzNzIwLCAzNzIyLCAzNzIyLCAzNzI1LCAzNzI1LFxuICAzNzMyLCAzNzM1LCAzNzM3LCAzNzQzLCAzNzQ1LCAzNzQ3LCAzNzQ5LCAzNzQ5LCAzNzUxLCAzNzUxLCAzNzU0LCAzNzU1LCAzNzU3LFxuICAzNzYwLCAzNzYyLCAzNzYzLCAzNzczLCAzNzczLCAzNzc2LCAzNzgwLCAzNzgyLCAzNzgyLCAzODA0LCAzODA3LCAzODQwLCAzODQwLFxuICAzOTA0LCAzOTExLCAzOTEzLCAzOTQ4LCAzOTc2LCAzOTgwLCA0MDk2LCA0MTM4LCA0MTU5LCA0MTU5LCA0MTc2LCA0MTgxLCA0MTg2LFxuICA0MTg5LCA0MTkzLCA0MTkzLCA0MTk3LCA0MTk4LCA0MjA2LCA0MjA4LCA0MjEzLCA0MjI1LCA0MjM4LCA0MjM4LCA0MjU2LCA0MjkzLFxuICA0Mjk1LCA0Mjk1LCA0MzAxLCA0MzAxLCA0MzA0LCA0MzQ2LCA0MzQ4LCA0NjgwLCA0NjgyLCA0Njg1LCA0Njg4LCA0Njk0LCA0Njk2LFxuICA0Njk2LCA0Njk4LCA0NzAxLCA0NzA0LCA0NzQ0LCA0NzQ2LCA0NzQ5LCA0NzUyLCA0Nzg0LCA0Nzg2LCA0Nzg5LCA0NzkyLCA0Nzk4LFxuICA0ODAwLCA0ODAwLCA0ODAyLCA0ODA1LCA0ODA4LCA0ODIyLCA0ODI0LCA0ODgwLCA0ODgyLCA0ODg1LCA0ODg4LCA0OTU0LCA0OTkyLFxuICA1MDA3LCA1MDI0LCA1MTA4LCA1MTIxLCA1NzQwLCA1NzQzLCA1NzU5LCA1NzYxLCA1Nzg2LCA1NzkyLCA1ODY2LCA1ODcwLCA1ODcyLFxuICA1ODg4LCA1OTAwLCA1OTAyLCA1OTA1LCA1OTIwLCA1OTM3LCA1OTUyLCA1OTY5LCA1OTg0LCA1OTk2LCA1OTk4LCA2MDAwLCA2MDE2LFxuICA2MDY3LCA2MTAzLCA2MTAzLCA2MTA4LCA2MTA4LCA2MTc2LCA2MjYzLCA2MjcyLCA2MzEyLCA2MzE0LCA2MzE0LCA2MzIwLCA2Mzg5LFxuICA2NDAwLCA2NDI4LCA2NDgwLCA2NTA5LCA2NTEyLCA2NTE2LCA2NTI4LCA2NTcxLCA2NTkzLCA2NTk5LCA2NjU2LCA2Njc4LCA2Njg4LFxuICA2NzQwLCA2ODIzLCA2ODIzLCA2OTE3LCA2OTYzLCA2OTgxLCA2OTg3LCA3MDQzLCA3MDcyLCA3MDg2LCA3MDg3LCA3MDk4LCA3MTQxLFxuICA3MTY4LCA3MjAzLCA3MjQ1LCA3MjQ3LCA3MjU4LCA3MjkzLCA3NDAxLCA3NDA0LCA3NDA2LCA3NDA5LCA3NDEzLCA3NDE0LCA3NDI0LFxuICA3NjE1LCA3NjgwLCA3OTU3LCA3OTYwLCA3OTY1LCA3OTY4LCA4MDA1LCA4MDA4LCA4MDEzLCA4MDE2LCA4MDIzLCA4MDI1LCA4MDI1LFxuICA4MDI3LCA4MDI3LCA4MDI5LCA4MDI5LCA4MDMxLCA4MDYxLCA4MDY0LCA4MTE2LCA4MTE4LCA4MTI0LCA4MTI2LCA4MTI2LCA4MTMwLFxuICA4MTMyLCA4MTM0LCA4MTQwLCA4MTQ0LCA4MTQ3LCA4MTUwLCA4MTU1LCA4MTYwLCA4MTcyLCA4MTc4LCA4MTgwLCA4MTgyLCA4MTg4LFxuICA4MzA1LCA4MzA1LCA4MzE5LCA4MzE5LCA4MzM2LCA4MzQ4LCA4NDUwLCA4NDUwLCA4NDU1LCA4NDU1LCA4NDU4LCA4NDY3LCA4NDY5LFxuICA4NDY5LCA4NDczLCA4NDc3LCA4NDg0LCA4NDg0LCA4NDg2LCA4NDg2LCA4NDg4LCA4NDg4LCA4NDkwLCA4NDkzLCA4NDk1LCA4NTA1LFxuICA4NTA4LCA4NTExLCA4NTE3LCA4NTIxLCA4NTI2LCA4NTI2LCA4NTQ0LCA4NTg0LFxuICAxMTI2NCwgMTEzMTAsIDExMzEyLCAxMTM1OCwgMTEzNjAsIDExNDkyLCAxMTQ5OSwgMTE1MDIsIDExNTA2LCAxMTUwNywgMTE1MjAsXG4gIDExNTU3LCAxMTU1OSwgMTE1NTksIDExNTY1LCAxMTU2NSwgMTE1NjgsIDExNjIzLCAxMTYzMSwgMTE2MzEsIDExNjQ4LCAxMTY3MCxcbiAgMTE2ODAsIDExNjg2LCAxMTY4OCwgMTE2OTQsIDExNjk2LCAxMTcwMiwgMTE3MDQsIDExNzEwLCAxMTcxMiwgMTE3MTgsIDExNzIwLFxuICAxMTcyNiwgMTE3MjgsIDExNzM0LCAxMTczNiwgMTE3NDIsIDExODIzLCAxMTgyMywgMTIyOTMsIDEyMjk1LCAxMjMyMSwgMTIzMjksXG4gIDEyMzM3LCAxMjM0MSwgMTIzNDQsIDEyMzQ4LCAxMjM1MywgMTI0MzgsIDEyNDQ1LCAxMjQ0NywgMTI0NDksIDEyNTM4LCAxMjU0MCxcbiAgMTI1NDMsIDEyNTQ5LCAxMjU4OSwgMTI1OTMsIDEyNjg2LCAxMjcwNCwgMTI3MzAsIDEyNzg0LCAxMjc5OSwgMTMzMTIsIDE5ODkzLFxuICAxOTk2OCwgNDA5MDgsIDQwOTYwLCA0MjEyNCwgNDIxOTIsIDQyMjM3LCA0MjI0MCwgNDI1MDgsIDQyNTEyLCA0MjUyNywgNDI1MzgsXG4gIDQyNTM5LCA0MjU2MCwgNDI2MDYsIDQyNjIzLCA0MjY0NywgNDI2NTYsIDQyNzM1LCA0Mjc3NSwgNDI3ODMsIDQyNzg2LCA0Mjg4OCxcbiAgNDI4OTEsIDQyODk0LCA0Mjg5NiwgNDI4OTksIDQyOTEyLCA0MjkyMiwgNDMwMDAsIDQzMDA5LCA0MzAxMSwgNDMwMTMsIDQzMDE1LFxuICA0MzAxOCwgNDMwMjAsIDQzMDQyLCA0MzA3MiwgNDMxMjMsIDQzMTM4LCA0MzE4NywgNDMyNTAsIDQzMjU1LCA0MzI1OSwgNDMyNTksXG4gIDQzMjc0LCA0MzMwMSwgNDMzMTIsIDQzMzM0LCA0MzM2MCwgNDMzODgsIDQzMzk2LCA0MzQ0MiwgNDM0NzEsIDQzNDcxLCA0MzUyMCxcbiAgNDM1NjAsIDQzNTg0LCA0MzU4NiwgNDM1ODgsIDQzNTk1LCA0MzYxNiwgNDM2MzgsIDQzNjQyLCA0MzY0MiwgNDM2NDgsIDQzNjk1LFxuICA0MzY5NywgNDM2OTcsIDQzNzAxLCA0MzcwMiwgNDM3MDUsIDQzNzA5LCA0MzcxMiwgNDM3MTIsIDQzNzE0LCA0MzcxNCwgNDM3MzksXG4gIDQzNzQxLCA0Mzc0NCwgNDM3NTQsIDQzNzYyLCA0Mzc2NCwgNDM3NzcsIDQzNzgyLCA0Mzc4NSwgNDM3OTAsIDQzNzkzLCA0Mzc5OCxcbiAgNDM4MDgsIDQzODE0LCA0MzgxNiwgNDM4MjIsIDQzOTY4LCA0NDAwMiwgNDQwMzIsIDU1MjAzLCA1NTIxNiwgNTUyMzgsIDU1MjQzLFxuICA1NTI5MSwgNjM3NDQsIDY0MTA5LCA2NDExMiwgNjQyMTcsIDY0MjU2LCA2NDI2MiwgNjQyNzUsIDY0Mjc5LCA2NDI4NSwgNjQyODUsXG4gIDY0Mjg3LCA2NDI5NiwgNjQyOTgsIDY0MzEwLCA2NDMxMiwgNjQzMTYsIDY0MzE4LCA2NDMxOCwgNjQzMjAsIDY0MzIxLCA2NDMyMyxcbiAgNjQzMjQsIDY0MzI2LCA2NDQzMywgNjQ0NjcsIDY0ODI5LCA2NDg0OCwgNjQ5MTEsIDY0OTE0LCA2NDk2NywgNjUwMDgsIDY1MDE5LFxuICA2NTEzNiwgNjUxNDAsIDY1MTQyLCA2NTI3NiwgNjUzMTMsIDY1MzM4LCA2NTM0NSwgNjUzNzAsIDY1MzgyLCA2NTQ3MCwgNjU0NzQsXG4gIDY1NDc5LCA2NTQ4MiwgNjU0ODcsIDY1NDkwLCA2NTQ5NSwgNjU0OTgsIDY1NTAwLFxuXTtcbmNvbnN0IHVuaWNvZGVJZGVudGlmaWVyUGFydDogdTE2W10gPSBbXG4gIDE3MCwgMTcwLCAxODEsIDE4MSwgMTg2LCAxODYsIDE5MiwgMjE0LCAyMTYsIDI0NiwgMjQ4LCA3MDUsIDcxMCwgNzIxLCA3MzYsXG4gIDc0MCwgNzQ4LCA3NDgsIDc1MCwgNzUwLCA3NjgsIDg4NCwgODg2LCA4ODcsIDg5MCwgODkzLCA5MDIsIDkwMiwgOTA0LCA5MDYsXG4gIDkwOCwgOTA4LCA5MTAsIDkyOSwgOTMxLFxuICAxMDEzLCAxMDE1LCAxMTUzLCAxMTU1LCAxMTU5LCAxMTYyLCAxMzE5LCAxMzI5LCAxMzY2LCAxMzY5LCAxMzY5LCAxMzc3LCAxNDE1LFxuICAxNDI1LCAxNDY5LCAxNDcxLCAxNDcxLCAxNDczLCAxNDc0LCAxNDc2LCAxNDc3LCAxNDc5LCAxNDc5LCAxNDg4LCAxNTE0LCAxNTIwLFxuICAxNTIyLCAxNTUyLCAxNTYyLCAxNTY4LCAxNjQxLCAxNjQ2LCAxNzQ3LCAxNzQ5LCAxNzU2LCAxNzU5LCAxNzY4LCAxNzcwLCAxNzg4LFxuICAxNzkxLCAxNzkxLCAxODA4LCAxODY2LCAxODY5LCAxOTY5LCAxOTg0LCAyMDM3LCAyMDQyLCAyMDQyLCAyMDQ4LCAyMDkzLCAyMTEyLFxuICAyMTM5LCAyMjA4LCAyMjA4LCAyMjEwLCAyMjIwLCAyMjc2LCAyMzAyLCAyMzA0LCAyNDAzLCAyNDA2LCAyNDE1LCAyNDE3LCAyNDIzLFxuICAyNDI1LCAyNDMxLCAyNDMzLCAyNDM1LCAyNDM3LCAyNDQ0LCAyNDQ3LCAyNDQ4LCAyNDUxLCAyNDcyLCAyNDc0LCAyNDgwLCAyNDgyLFxuICAyNDgyLCAyNDg2LCAyNDg5LCAyNDkyLCAyNTAwLCAyNTAzLCAyNTA0LCAyNTA3LCAyNTEwLCAyNTE5LCAyNTE5LCAyNTI0LCAyNTI1LFxuICAyNTI3LCAyNTMxLCAyNTM0LCAyNTQ1LCAyNTYxLCAyNTYzLCAyNTY1LCAyNTcwLCAyNTc1LCAyNTc2LCAyNTc5LCAyNjAwLCAyNjAyLFxuICAyNjA4LCAyNjEwLCAyNjExLCAyNjEzLCAyNjE0LCAyNjE2LCAyNjE3LCAyNjIwLCAyNjIwLCAyNjIyLCAyNjI2LCAyNjMxLCAyNjMyLFxuICAyNjM1LCAyNjM3LCAyNjQxLCAyNjQxLCAyNjQ5LCAyNjUyLCAyNjU0LCAyNjU0LCAyNjYyLCAyNjc3LCAyNjg5LCAyNjkxLCAyNjkzLFxuICAyNzAxLCAyNzAzLCAyNzA1LCAyNzA3LCAyNzI4LCAyNzMwLCAyNzM2LCAyNzM4LCAyNzM5LCAyNzQxLCAyNzQ1LCAyNzQ4LCAyNzU3LFxuICAyNzU5LCAyNzYxLCAyNzYzLCAyNzY1LCAyNzY4LCAyNzY4LCAyNzg0LCAyNzg3LCAyNzkwLCAyNzk5LCAyODE3LCAyODE5LCAyODIxLFxuICAyODI4LCAyODMxLCAyODMyLCAyODM1LCAyODU2LCAyODU4LCAyODY0LCAyODY2LCAyODY3LCAyODY5LCAyODczLCAyODc2LCAyODg0LFxuICAyODg3LCAyODg4LCAyODkxLCAyODkzLCAyOTAyLCAyOTAzLCAyOTA4LCAyOTA5LCAyOTExLCAyOTE1LCAyOTE4LCAyOTI3LCAyOTI5LFxuICAyOTI5LCAyOTQ2LCAyOTQ3LCAyOTQ5LCAyOTU0LCAyOTU4LCAyOTYwLCAyOTYyLCAyOTY1LCAyOTY5LCAyOTcwLCAyOTcyLCAyOTcyLFxuICAyOTc0LCAyOTc1LCAyOTc5LCAyOTgwLCAyOTg0LCAyOTg2LCAyOTkwLCAzMDAxLCAzMDA2LCAzMDEwLCAzMDE0LCAzMDE2LCAzMDE4LFxuICAzMDIxLCAzMDI0LCAzMDI0LCAzMDMxLCAzMDMxLCAzMDQ2LCAzMDU1LCAzMDczLCAzMDc1LCAzMDc3LCAzMDg0LCAzMDg2LCAzMDg4LFxuICAzMDkwLCAzMTEyLCAzMTE0LCAzMTIzLCAzMTI1LCAzMTI5LCAzMTMzLCAzMTQwLCAzMTQyLCAzMTQ0LCAzMTQ2LCAzMTQ5LCAzMTU3LFxuICAzMTU4LCAzMTYwLCAzMTYxLCAzMTY4LCAzMTcxLCAzMTc0LCAzMTgzLCAzMjAyLCAzMjAzLCAzMjA1LCAzMjEyLCAzMjE0LCAzMjE2LFxuICAzMjE4LCAzMjQwLCAzMjQyLCAzMjUxLCAzMjUzLCAzMjU3LCAzMjYwLCAzMjY4LCAzMjcwLCAzMjcyLCAzMjc0LCAzMjc3LCAzMjg1LFxuICAzMjg2LCAzMjk0LCAzMjk0LCAzMjk2LCAzMjk5LCAzMzAyLCAzMzExLCAzMzEzLCAzMzE0LCAzMzMwLCAzMzMxLCAzMzMzLCAzMzQwLFxuICAzMzQyLCAzMzQ0LCAzMzQ2LCAzMzg2LCAzMzg5LCAzMzk2LCAzMzk4LCAzNDAwLCAzNDAyLCAzNDA2LCAzNDE1LCAzNDE1LCAzNDI0LFxuICAzNDI3LCAzNDMwLCAzNDM5LCAzNDUwLCAzNDU1LCAzNDU4LCAzNDU5LCAzNDYxLCAzNDc4LCAzNDgyLCAzNTA1LCAzNTA3LCAzNTE1LFxuICAzNTE3LCAzNTE3LCAzNTIwLCAzNTI2LCAzNTMwLCAzNTMwLCAzNTM1LCAzNTQwLCAzNTQyLCAzNTQyLCAzNTQ0LCAzNTUxLCAzNTcwLFxuICAzNTcxLCAzNTg1LCAzNjQyLCAzNjQ4LCAzNjYyLCAzNjY0LCAzNjczLCAzNzEzLCAzNzE0LCAzNzE2LCAzNzE2LCAzNzE5LCAzNzIwLFxuICAzNzIyLCAzNzIyLCAzNzI1LCAzNzI1LCAzNzMyLCAzNzM1LCAzNzM3LCAzNzQzLCAzNzQ1LCAzNzQ3LCAzNzQ5LCAzNzQ5LCAzNzUxLFxuICAzNzUxLCAzNzU0LCAzNzU1LCAzNzU3LCAzNzY5LCAzNzcxLCAzNzczLCAzNzc2LCAzNzgwLCAzNzgyLCAzNzgyLCAzNzg0LCAzNzg5LFxuICAzNzkyLCAzODAxLCAzODA0LCAzODA3LCAzODQwLCAzODQwLCAzODY0LCAzODY1LCAzODcyLCAzODgxLCAzODkzLCAzODkzLCAzODk1LFxuICAzODk1LCAzODk3LCAzODk3LCAzOTAyLCAzOTExLCAzOTEzLCAzOTQ4LCAzOTUzLCAzOTcyLCAzOTc0LCAzOTkxLCAzOTkzLCA0MDI4LFxuICA0MDM4LCA0MDM4LCA0MDk2LCA0MTY5LCA0MTc2LCA0MjUzLCA0MjU2LCA0MjkzLCA0Mjk1LCA0Mjk1LCA0MzAxLCA0MzAxLCA0MzA0LFxuICA0MzQ2LCA0MzQ4LCA0NjgwLCA0NjgyLCA0Njg1LCA0Njg4LCA0Njk0LCA0Njk2LCA0Njk2LCA0Njk4LCA0NzAxLCA0NzA0LCA0NzQ0LFxuICA0NzQ2LCA0NzQ5LCA0NzUyLCA0Nzg0LCA0Nzg2LCA0Nzg5LCA0NzkyLCA0Nzk4LCA0ODAwLCA0ODAwLCA0ODAyLCA0ODA1LCA0ODA4LFxuICA0ODIyLCA0ODI0LCA0ODgwLCA0ODgyLCA0ODg1LCA0ODg4LCA0OTU0LCA0OTU3LCA0OTU5LCA0OTkyLCA1MDA3LCA1MDI0LCA1MTA4LFxuICA1MTIxLCA1NzQwLCA1NzQzLCA1NzU5LCA1NzYxLCA1Nzg2LCA1NzkyLCA1ODY2LCA1ODcwLCA1ODcyLCA1ODg4LCA1OTAwLCA1OTAyLFxuICA1OTA4LCA1OTIwLCA1OTQwLCA1OTUyLCA1OTcxLCA1OTg0LCA1OTk2LCA1OTk4LCA2MDAwLCA2MDAyLCA2MDAzLCA2MDE2LCA2MDk5LFxuICA2MTAzLCA2MTAzLCA2MTA4LCA2MTA5LCA2MTEyLCA2MTIxLCA2MTU1LCA2MTU3LCA2MTYwLCA2MTY5LCA2MTc2LCA2MjYzLCA2MjcyLFxuICA2MzE0LCA2MzIwLCA2Mzg5LCA2NDAwLCA2NDI4LCA2NDMyLCA2NDQzLCA2NDQ4LCA2NDU5LCA2NDcwLCA2NTA5LCA2NTEyLCA2NTE2LFxuICA2NTI4LCA2NTcxLCA2NTc2LCA2NjAxLCA2NjA4LCA2NjE3LCA2NjU2LCA2NjgzLCA2Njg4LCA2NzUwLCA2NzUyLCA2NzgwLCA2NzgzLFxuICA2NzkzLCA2ODAwLCA2ODA5LCA2ODIzLCA2ODIzLCA2OTEyLCA2OTg3LCA2OTkyLCA3MDAxLCA3MDE5LCA3MDI3LCA3MDQwLCA3MTU1LFxuICA3MTY4LCA3MjIzLCA3MjMyLCA3MjQxLCA3MjQ1LCA3MjkzLCA3Mzc2LCA3Mzc4LCA3MzgwLCA3NDE0LCA3NDI0LCA3NjU0LCA3Njc2LFxuICA3OTU3LCA3OTYwLCA3OTY1LCA3OTY4LCA4MDA1LCA4MDA4LCA4MDEzLCA4MDE2LCA4MDIzLCA4MDI1LCA4MDI1LCA4MDI3LCA4MDI3LFxuICA4MDI5LCA4MDI5LCA4MDMxLCA4MDYxLCA4MDY0LCA4MTE2LCA4MTE4LCA4MTI0LCA4MTI2LCA4MTI2LCA4MTMwLCA4MTMyLCA4MTM0LFxuICA4MTQwLCA4MTQ0LCA4MTQ3LCA4MTUwLCA4MTU1LCA4MTYwLCA4MTcyLCA4MTc4LCA4MTgwLCA4MTgyLCA4MTg4LCA4MjA0LCA4MjA1LFxuICA4MjU1LCA4MjU2LCA4Mjc2LCA4Mjc2LCA4MzA1LCA4MzA1LCA4MzE5LCA4MzE5LCA4MzM2LCA4MzQ4LCA4NDAwLCA4NDEyLCA4NDE3LFxuICA4NDE3LCA4NDIxLCA4NDMyLCA4NDUwLCA4NDUwLCA4NDU1LCA4NDU1LCA4NDU4LCA4NDY3LCA4NDY5LCA4NDY5LCA4NDczLCA4NDc3LFxuICA4NDg0LCA4NDg0LCA4NDg2LCA4NDg2LCA4NDg4LCA4NDg4LCA4NDkwLCA4NDkzLCA4NDk1LCA4NTA1LCA4NTA4LCA4NTExLCA4NTE3LFxuICA4NTIxLCA4NTI2LCA4NTI2LCA4NTQ0LCA4NTg0LFxuICAxMTI2NCwgMTEzMTAsIDExMzEyLCAxMTM1OCwgMTEzNjAsIDExNDkyLCAxMTQ5OSwgMTE1MDcsIDExNTIwLCAxMTU1NywgMTE1NTksXG4gIDExNTU5LCAxMTU2NSwgMTE1NjUsIDExNTY4LCAxMTYyMywgMTE2MzEsIDExNjMxLCAxMTY0NywgMTE2NzAsIDExNjgwLCAxMTY4NixcbiAgMTE2ODgsIDExNjk0LCAxMTY5NiwgMTE3MDIsIDExNzA0LCAxMTcxMCwgMTE3MTIsIDExNzE4LCAxMTcyMCwgMTE3MjYsIDExNzI4LFxuICAxMTczNCwgMTE3MzYsIDExNzQyLCAxMTc0NCwgMTE3NzUsIDExODIzLCAxMTgyMywgMTIyOTMsIDEyMjk1LCAxMjMyMSwgMTIzMzUsXG4gIDEyMzM3LCAxMjM0MSwgMTIzNDQsIDEyMzQ4LCAxMjM1MywgMTI0MzgsIDEyNDQxLCAxMjQ0MiwgMTI0NDUsIDEyNDQ3LCAxMjQ0OSxcbiAgMTI1MzgsIDEyNTQwLCAxMjU0MywgMTI1NDksIDEyNTg5LCAxMjU5MywgMTI2ODYsIDEyNzA0LCAxMjczMCwgMTI3ODQsIDEyNzk5LFxuICAxMzMxMiwgMTk4OTMsIDE5OTY4LCA0MDkwOCwgNDA5NjAsIDQyMTI0LCA0MjE5MiwgNDIyMzcsIDQyMjQwLCA0MjUwOCwgNDI1MTIsXG4gIDQyNTM5LCA0MjU2MCwgNDI2MDcsIDQyNjEyLCA0MjYyMSwgNDI2MjMsIDQyNjQ3LCA0MjY1NSwgNDI3MzcsIDQyNzc1LCA0Mjc4MyxcbiAgNDI3ODYsIDQyODg4LCA0Mjg5MSwgNDI4OTQsIDQyODk2LCA0Mjg5OSwgNDI5MTIsIDQyOTIyLCA0MzAwMCwgNDMwNDcsIDQzMDcyLFxuICA0MzEyMywgNDMxMzYsIDQzMjA0LCA0MzIxNiwgNDMyMjUsIDQzMjMyLCA0MzI1NSwgNDMyNTksIDQzMjU5LCA0MzI2NCwgNDMzMDksXG4gIDQzMzEyLCA0MzM0NywgNDMzNjAsIDQzMzg4LCA0MzM5MiwgNDM0NTYsIDQzNDcxLCA0MzQ4MSwgNDM1MjAsIDQzNTc0LCA0MzU4NCxcbiAgNDM1OTcsIDQzNjAwLCA0MzYwOSwgNDM2MTYsIDQzNjM4LCA0MzY0MiwgNDM2NDMsIDQzNjQ4LCA0MzcxNCwgNDM3MzksIDQzNzQxLFxuICA0Mzc0NCwgNDM3NTksIDQzNzYyLCA0Mzc2NiwgNDM3NzcsIDQzNzgyLCA0Mzc4NSwgNDM3OTAsIDQzNzkzLCA0Mzc5OCwgNDM4MDgsXG4gIDQzODE0LCA0MzgxNiwgNDM4MjIsIDQzOTY4LCA0NDAxMCwgNDQwMTIsIDQ0MDEzLCA0NDAxNiwgNDQwMjUsIDQ0MDMyLCA1NTIwMyxcbiAgNTUyMTYsIDU1MjM4LCA1NTI0MywgNTUyOTEsIDYzNzQ0LCA2NDEwOSwgNjQxMTIsIDY0MjE3LCA2NDI1NiwgNjQyNjIsIDY0Mjc1LFxuICA2NDI3OSwgNjQyODUsIDY0Mjk2LCA2NDI5OCwgNjQzMTAsIDY0MzEyLCA2NDMxNiwgNjQzMTgsIDY0MzE4LCA2NDMyMCwgNjQzMjEsXG4gIDY0MzIzLCA2NDMyNCwgNjQzMjYsIDY0NDMzLCA2NDQ2NywgNjQ4MjksIDY0ODQ4LCA2NDkxMSwgNjQ5MTQsIDY0OTY3LCA2NTAwOCxcbiAgNjUwMTksIDY1MDI0LCA2NTAzOSwgNjUwNTYsIDY1MDYyLCA2NTA3NSwgNjUwNzYsIDY1MTAxLCA2NTEwMywgNjUxMzYsIDY1MTQwLFxuICA2NTE0MiwgNjUyNzYsIDY1Mjk2LCA2NTMwNSwgNjUzMTMsIDY1MzM4LCA2NTM0MywgNjUzNDMsIDY1MzQ1LCA2NTM3MCwgNjUzODIsXG4gIDY1NDcwLCA2NTQ3NCwgNjU0NzksIDY1NDgyLCA2NTQ4NywgNjU0OTAsIDY1NDk1LCA2NTQ5OCwgNjU1MDAsXG5dO1xuXG5mdW5jdGlvbiBsb29rdXBJblVuaWNvZGVNYXAoY29kZTogdTE2LCBtYXA6IHUxNltdKTogYm9vbCB7XG4gIGlmIChjb2RlIDwgbWFwWzBdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxvID0gMDtcbiAgdmFyIGhpID0gbWFwLmxlbmd0aDtcbiAgdmFyIG1pZDogaTMyO1xuICB2YXIgbWlkVmFsOiB1MTY7XG5cbiAgd2hpbGUgKGxvICsgMSA8IGhpKSB7XG4gICAgbWlkID0gbG8gKyAoKGhpIC0gbG8pID4+IDEpO1xuICAgIG1pZCAtPSAobWlkICYgMSk7XG4gICAgbWlkVmFsID0gbWFwW21pZF07XG4gICAgaWYgKG1pZFZhbCA8PSBjb2RlICYmIGNvZGUgPD0gbWFwW21pZCArIDFdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPCBtaWRWYWwpIHtcbiAgICAgIGhpID0gbWlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBsbyA9IG1pZCArIDI7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVbmljb2RlSWRlbnRpZmllclN0YXJ0KGNvZGU6IGkzMik6IGJvb2wge1xuICByZXR1cm4gY29kZSA8IDAgfHwgY29kZSA+IDB4ZmZmZiA/IGZhbHNlXG4gICAgICAgOiBsb29rdXBJblVuaWNvZGVNYXAoY29kZSBhcyB1MTYsIHVuaWNvZGVJZGVudGlmaWVyU3RhcnQpO1xufVxuXG5mdW5jdGlvbiBpc1VuaWNvZGVJZGVudGlmaWVyUGFydChjb2RlOiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIGNvZGUgPCAwIHx8IGNvZGUgPiAweGZmZmYgPyBmYWxzZVxuICAgICAgIDogbG9va3VwSW5Vbmljb2RlTWFwKGNvZGUgYXMgdTE2LCB1bmljb2RlSWRlbnRpZmllclBhcnQpO1xufVxuIl19

/***/ }),

/***/ "../src/util/collections.ts":
/*!**********************************!*\
  !*** ../src/util/collections.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function makeArray(original) {
    if (original === void 0) { original = null; }
    if (original) {
        var cloned = new Array(original.length);
        for (var i = 0, k = original.length; i < k; ++i)
            unchecked(cloned[i] = original[i]);
        return cloned;
    }
    return new Array();
}
exports.makeArray = makeArray;
function makeSet(original) {
    var e_1, _a;
    if (original === void 0) { original = null; }
    if (original) {
        var cloned = new Set();
        try {
            for (var original_1 = __values(original), original_1_1 = original_1.next(); !original_1_1.done; original_1_1 = original_1.next()) {
                var v = original_1_1.value;
                cloned.add(v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (original_1_1 && !original_1_1.done && (_a = original_1.return)) _a.call(original_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return cloned;
    }
    return new Set();
}
exports.makeSet = makeSet;
function makeMap(original, overrides) {
    var e_2, _a, e_3, _b, e_4, _c;
    if (original === void 0) { original = null; }
    if (overrides === void 0) { overrides = null; }
    var cloned = new Map();
    if (original) {
        try {
            for (var original_2 = __values(original), original_2_1 = original_2.next(); !original_2_1.done; original_2_1 = original_2.next()) {
                var _d = __read(original_2_1.value, 2), k = _d[0], v = _d[1];
                cloned.set(k, v);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (original_2_1 && !original_2_1.done && (_a = original_2.return)) _a.call(original_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (overrides)
            try {
                for (var overrides_1 = __values(overrides), overrides_1_1 = overrides_1.next(); !overrides_1_1.done; overrides_1_1 = overrides_1.next()) {
                    var _e = __read(overrides_1_1.value, 2), k = _e[0], v = _e[1];
                    cloned.set(k, v);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (overrides_1_1 && !overrides_1_1.done && (_b = overrides_1.return)) _b.call(overrides_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
    }
    else if (overrides) {
        try {
            for (var overrides_2 = __values(overrides), overrides_2_1 = overrides_2.next(); !overrides_2_1.done; overrides_2_1 = overrides_2.next()) {
                var _f = __read(overrides_2_1.value, 2), k = _f[0], v = _f[1];
                cloned.set(k, v);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (overrides_2_1 && !overrides_2_1.done && (_c = overrides_2.return)) _c.call(overrides_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    return cloned;
}
exports.makeMap = makeMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9jb2xsZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsU0FBUyxDQUFJLFFBQWdDO0lBQWhDLHlCQUFBLEVBQUEsZUFBZ0M7SUFDM0QsSUFBSSxRQUFRLEVBQUU7UUFDWixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7WUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLElBQUksS0FBSyxFQUFLLENBQUM7QUFDeEIsQ0FBQztBQVBELDhCQU9DO0FBRUQsU0FBZ0IsT0FBTyxDQUFJLFFBQThCOztJQUE5Qix5QkFBQSxFQUFBLGVBQThCO0lBQ3ZELElBQUksUUFBUSxFQUFFO1FBQ1osSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUssQ0FBQzs7WUFDMUIsS0FBYyxJQUFBLGFBQUEsU0FBQSxRQUFRLENBQUEsa0NBQUE7Z0JBQWpCLElBQUksQ0FBQyxxQkFBQTtnQkFBYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUE7Ozs7Ozs7OztRQUN0QyxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxJQUFJLEdBQUcsRUFBSyxDQUFDO0FBQ3RCLENBQUM7QUFQRCwwQkFPQztBQUVELFNBQWdCLE9BQU8sQ0FBTSxRQUFnQyxFQUFFLFNBQWlDOztJQUFuRSx5QkFBQSxFQUFBLGVBQWdDO0lBQUUsMEJBQUEsRUFBQSxnQkFBaUM7SUFDOUYsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztJQUM1QixJQUFJLFFBQVEsRUFBRTs7WUFDWixLQUFtQixJQUFBLGFBQUEsU0FBQSxRQUFRLENBQUEsa0NBQUE7Z0JBQWxCLElBQUEsa0NBQU0sRUFBTCxTQUFDLEVBQUUsU0FBQztnQkFBZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUFBOzs7Ozs7Ozs7UUFDOUMsSUFBSSxTQUFTOztnQkFBRSxLQUFtQixJQUFBLGNBQUEsU0FBQSxTQUFTLENBQUEsb0NBQUE7b0JBQW5CLElBQUEsbUNBQU0sRUFBTCxTQUFDLEVBQUUsU0FBQztvQkFBZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQUE7Ozs7Ozs7O2FBQUE7S0FDL0Q7U0FBTSxJQUFJLFNBQVMsRUFBRTs7WUFDcEIsS0FBbUIsSUFBQSxjQUFBLFNBQUEsU0FBUyxDQUFBLG9DQUFBO2dCQUFuQixJQUFBLG1DQUFNLEVBQUwsU0FBQyxFQUFFLFNBQUM7Z0JBQWdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQUE7Ozs7Ozs7OztLQUNoRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCwwQkFTQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtYWtlQXJyYXk8Vj4ob3JpZ2luYWw6IEFycmF5PFY+IHwgbnVsbCA9IG51bGwpOiBBcnJheTxWPiB7XG4gIGlmIChvcmlnaW5hbCkge1xuICAgIGxldCBjbG9uZWQgPSBuZXcgQXJyYXk8Vj4ob3JpZ2luYWwubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IG9yaWdpbmFsLmxlbmd0aDsgaSA8IGs7ICsraSkgdW5jaGVja2VkKGNsb25lZFtpXSA9IG9yaWdpbmFsW2ldKTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG4gIHJldHVybiBuZXcgQXJyYXk8Vj4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXQ8Vj4ob3JpZ2luYWw6IFNldDxWPiB8IG51bGwgPSBudWxsKTogU2V0PFY+IHtcbiAgaWYgKG9yaWdpbmFsKSB7XG4gICAgbGV0IGNsb25lZCA9IG5ldyBTZXQ8Vj4oKTtcbiAgICBmb3IgKGxldCB2IG9mIG9yaWdpbmFsKSBjbG9uZWQuYWRkKHYpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBTZXQ8Vj4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYXA8SyxWPihvcmlnaW5hbDogTWFwPEssVj4gfCBudWxsID0gbnVsbCwgb3ZlcnJpZGVzOiBNYXA8SyxWPiB8IG51bGwgPSBudWxsKTogTWFwPEssVj4ge1xuICB2YXIgY2xvbmVkID0gbmV3IE1hcDxLLFY+KCk7XG4gIGlmIChvcmlnaW5hbCkge1xuICAgIGZvciAobGV0IFtrLCB2XSBvZiBvcmlnaW5hbCkgY2xvbmVkLnNldChrLCB2KTtcbiAgICBpZiAob3ZlcnJpZGVzKSBmb3IgKGxldCBbaywgdl0gb2Ygb3ZlcnJpZGVzKSBjbG9uZWQuc2V0KGssIHYpO1xuICB9IGVsc2UgaWYgKG92ZXJyaWRlcykge1xuICAgIGZvciAobGV0IFtrLCB2XSBvZiBvdmVycmlkZXMpIGNsb25lZC5zZXQoaywgdik7XG4gIH1cbiAgcmV0dXJuIGNsb25lZDtcbn1cbiJdfQ==

/***/ }),

/***/ "../src/util/index.ts":
/*!****************************!*\
  !*** ../src/util/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Various compiler utilities.
 * @module util
 * @preferred
 */ /***/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./bitset */ "../src/util/bitset.ts"));
__export(__webpack_require__(/*! ./charcode */ "../src/util/charcode.ts"));
__export(__webpack_require__(/*! ./collections */ "../src/util/collections.ts"));
__export(__webpack_require__(/*! ./path */ "../src/util/path.ts"));
__export(__webpack_require__(/*! ./text */ "../src/util/text.ts"));
__export(__webpack_require__(/*! ./binary */ "../src/util/binary.ts"));
/** Tests if `x` is a power of two. */
function isPowerOf2(x) {
    return x != 0 && (x & (x - 1)) == 0;
}
exports.isPowerOf2 = isPowerOf2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRyxDQUFBLEtBQUs7Ozs7O0FBRVIsOEJBQXlCO0FBQ3pCLGdDQUEyQjtBQUMzQixtQ0FBOEI7QUFDOUIsNEJBQXVCO0FBQ3ZCLDRCQUF1QjtBQUN2Qiw4QkFBeUI7QUFFekIsc0NBQXNDO0FBQ3RDLFNBQWdCLFVBQVUsQ0FBQyxDQUFNO0lBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRkQsZ0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhcmlvdXMgY29tcGlsZXIgdXRpbGl0aWVzLlxuICogQG1vZHVsZSB1dGlsXG4gKiBAcHJlZmVycmVkXG4gKi8vKioqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9iaXRzZXRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NoYXJjb2RlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGF0aFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGV4dFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vYmluYXJ5XCI7XG5cbi8qKiBUZXN0cyBpZiBgeGAgaXMgYSBwb3dlciBvZiB0d28uICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb3dlck9mMih4OiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIHggIT0gMCAmJiAoeCAmICh4IC0gMSkpID09IDA7XG59XG4iXX0=

/***/ }),

/***/ "../src/util/path.ts":
/*!***************************!*\
  !*** ../src/util/path.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../common */ "../src/common.ts");
var separator = 47 /* SLASH */;
/**
 * Normalizes the specified path, removing interior placeholders.
 * Expects a posix-compatible relative path (not Windows compatible).
 */
function normalizePath(path) {
    var pos = 0;
    var len = path.length;
    // trim leading './'
    while (pos + 1 < len &&
        path.charCodeAt(pos) == 46 /* DOT */ &&
        path.charCodeAt(pos + 1) == separator) {
        pos += 2;
    }
    if (pos > 0 || len < path.length) {
        path = path.substring(pos, len);
        len -= pos;
        pos = 0;
    }
    var atEnd;
    while (pos + 1 < len) {
        atEnd = false;
        // we are only interested in '/.' sequences ...
        if (path.charCodeAt(pos) == separator &&
            path.charCodeAt(pos + 1) == 46 /* DOT */) {
            // '/.' ( '/' | $ )
            atEnd = pos + 2 == len;
            if (atEnd ||
                pos + 2 < len &&
                    path.charCodeAt(pos + 2) == separator) {
                path = atEnd
                    ? path.substring(0, pos)
                    : path.substring(0, pos) + path.substring(pos + 2);
                len -= 2;
                continue;
            }
            // '/.' ( './' | '.' $ )
            atEnd = pos + 3 == len;
            if (atEnd && path.charCodeAt(pos + 2) == 46 /* DOT */ ||
                pos + 3 < len &&
                    path.charCodeAt(pos + 2) == 46 /* DOT */ &&
                    path.charCodeAt(pos + 3) == separator) {
                // find preceeding '/'
                var ipos = pos;
                while (--ipos >= 0) {
                    if (path.charCodeAt(ipos) == separator) {
                        if (pos - ipos != 3 ||
                            path.charCodeAt(ipos + 1) != 46 /* DOT */ ||
                            path.charCodeAt(ipos + 2) != 46 /* DOT */) { // exclude '..' itself
                            path = atEnd
                                ? path.substring(0, ipos)
                                : path.substring(0, ipos) + path.substring(pos + 3);
                            len -= pos + 3 - ipos;
                            pos = ipos - 1; // incremented again at end of loop
                        }
                        break;
                    }
                }
                // if there's no preceeding '/', trim start if non-empty
                if (ipos < 0 && pos > 0) {
                    if (pos != 2 ||
                        path.charCodeAt(0) != 46 /* DOT */ ||
                        path.charCodeAt(1) != 46 /* DOT */) { // exclude '..' itself
                        path = path.substring(pos + 4);
                        len = path.length;
                        continue;
                    }
                }
            }
        }
        pos++;
    }
    return len > 0 ? path : ".";
}
exports.normalizePath = normalizePath;
/** Resolves the specified path relative to the specified origin. */
function resolvePath(normalizedPath, origin) {
    if (normalizedPath.startsWith("std/")) {
        return normalizedPath;
    }
    return normalizePath(dirname(origin) + common_1.PATH_DELIMITER + normalizedPath);
}
exports.resolvePath = resolvePath;
/** Obtains the directory portion of a normalized path. */
function dirname(normalizedPath) {
    var pos = normalizedPath.length;
    if (pos <= 1) {
        if (pos == 0)
            return ".";
        if (normalizedPath.charCodeAt(0) == separator) {
            return normalizedPath;
        }
    }
    while (--pos > 0) {
        if (normalizedPath.charCodeAt(pos) == separator) {
            return normalizedPath.substring(0, pos);
        }
    }
    return ".";
}
exports.dirname = dirname;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsL3BhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQixDQUFBLEtBQUs7O0FBTXhCLG9DQUVtQjtBQUVuQixJQUFNLFNBQVMsaUJBQWlCLENBQUM7QUFFakM7OztHQUdHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLElBQVk7SUFDeEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUV0QixvQkFBb0I7SUFDcEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFDckM7UUFDQSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDWCxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7SUFFRCxJQUFJLEtBQVcsQ0FBQztJQUNoQixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFZCwrQ0FBK0M7UUFDL0MsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUN4QztZQUNBLG1CQUFtQjtZQUNuQixLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMs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QUM7S0FDdkI7SUFDRCxPQUFPLGFBQWEsQ0FDbEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLHVCQUFjLEdBQUcsY0FBYyxDQUNsRCxDQUFDO0FBQ0osQ0FBQztBQVBELGtDQU9DO0FBRUQsMERBQTBEO0FBQzFELFNBQWdCLE9BQU8sQ0FBQyxjQUFzQjtJQUM1QyxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNaLElBQUksR0FBRyxJQUFJLENBQUM7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN6QixJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO1lBQzdDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNoQixJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUyxFQUFFO1lBQy9DLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQWRELDBCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgdXRpbCAqLy8qKiovXG5cbmltcG9ydCB7XG4gIENoYXJDb2RlXG59IGZyb20gXCIuL2NoYXJjb2RlXCI7XG5cbmltcG9ydCB7XG4gIFBBVEhfREVMSU1JVEVSXG59IGZyb20gXCIuLi9jb21tb25cIjtcblxuY29uc3Qgc2VwYXJhdG9yID0gQ2hhckNvZGUuU0xBU0g7XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgc3BlY2lmaWVkIHBhdGgsIHJlbW92aW5nIGludGVyaW9yIHBsYWNlaG9sZGVycy5cbiAqIEV4cGVjdHMgYSBwb3NpeC1jb21wYXRpYmxlIHJlbGF0aXZlIHBhdGggKG5vdCBXaW5kb3dzIGNvbXBhdGlibGUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICB2YXIgcG9zID0gMDtcbiAgdmFyIGxlbiA9IHBhdGgubGVuZ3RoO1xuXG4gIC8vIHRyaW0gbGVhZGluZyAnLi8nXG4gIHdoaWxlIChwb3MgKyAxIDwgbGVuICYmXG4gICAgcGF0aC5jaGFyQ29kZUF0KHBvcykgPT0gQ2hhckNvZGUuRE9UICYmXG4gICAgcGF0aC5jaGFyQ29kZUF0KHBvcyArIDEpID09IHNlcGFyYXRvclxuICApIHtcbiAgICBwb3MgKz0gMjtcbiAgfVxuXG4gIGlmIChwb3MgPiAwIHx8IGxlbiA8IHBhdGgubGVuZ3RoKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKHBvcywgbGVuKTtcbiAgICBsZW4gLT0gcG9zO1xuICAgIHBvcyA9IDA7XG4gIH1cblxuICB2YXIgYXRFbmQ6IGJvb2w7XG4gIHdoaWxlIChwb3MgKyAxIDwgbGVuKSB7XG4gICAgYXRFbmQgPSBmYWxzZTtcblxuICAgIC8vIHdlIGFyZSBvbmx5IGludGVyZXN0ZWQgaW4gJy8uJyBzZXF1ZW5jZXMgLi4uXG4gICAgaWYgKFxuICAgICAgcGF0aC5jaGFyQ29kZUF0KHBvcykgPT0gc2VwYXJhdG9yICYmXG4gICAgICBwYXRoLmNoYXJDb2RlQXQocG9zICsgMSkgPT0gQ2hhckNvZGUuRE9UXG4gICAgKSB7XG4gICAgICAvLyAnLy4nICggJy8nIHwgJCApXG4gICAgICBhdEVuZCA9IHBvcyArIDIgPT0gbGVuO1xuICAgICAgaWYgKGF0RW5kIHx8XG4gICAgICAgIHBvcyArIDIgPCBsZW4gJiZcbiAgICAgICAgcGF0aC5jaGFyQ29kZUF0KHBvcyArIDIpID09IHNlcGFyYXRvclxuICAgICAgKSB7XG4gICAgICAgIHBhdGggPSBhdEVuZFxuICAgICAgICAgID8gcGF0aC5zdWJzdHJpbmcoMCwgcG9zKVxuICAgICAgICAgIDogcGF0aC5zdWJzdHJpbmcoMCwgcG9zKSArIHBhdGguc3Vic3RyaW5nKHBvcyArIDIpO1xuICAgICAgICBsZW4gLT0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vICcvLicgKCAnLi8nIHwgJy4nICQgKVxuICAgICAgYXRFbmQgPSBwb3MgKyAzID09IGxlbjtcbiAgICAgIGlmIChhdEVuZCAmJiBwYXRoLmNoYXJDb2RlQXQocG9zICsgMikgPT0gQ2hhckNvZGUuRE9UIHx8XG4gICAgICAgIHBvcyArIDMgPCBsZW4gJiZcbiAgICAgICAgcGF0aC5jaGFyQ29kZUF0KHBvcyArIDIpID09IENoYXJDb2RlLkRPVCAmJlxuICAgICAgICBwYXRoLmNoYXJDb2RlQXQocG9zICsgMykgPT0gc2VwYXJhdG9yXG4gICAgICApIHtcbiAgICAgICAgLy8gZmluZCBwcmVjZWVkaW5nICcvJ1xuICAgICAgICBsZXQgaXBvcyA9IHBvcztcbiAgICAgICAgd2hpbGUgKC0taXBvcyA+PSAwKSB7XG4gICAgICAgICAgaWYgKHBhdGguY2hhckNvZGVBdChpcG9zKSA9PSBzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgIGlmIChwb3MgLSBpcG9zICE9IDMgfHxcbiAgICAgICAgICAgICAgcGF0aC5jaGFyQ29kZUF0KGlwb3MgKyAxKSAhPSBDaGFyQ29kZS5ET1QgfHxcbiAgICAgICAgICAgICAgcGF0aC5jaGFyQ29kZUF0KGlwb3MgKyAyKSAhPSBDaGFyQ29kZS5ET1RcbiAgICAgICAgICAgICkgeyAvLyBleGNsdWRlICcuLicgaXRzZWxmXG4gICAgICAgICAgICAgIHBhdGggPSBhdEVuZFxuICAgICAgICAgICAgICAgID8gcGF0aC5zdWJzdHJpbmcoMCwgaXBvcylcbiAgICAgICAgICAgICAgICA6IHBhdGguc3Vic3RyaW5nKDAsIGlwb3MpICsgcGF0aC5zdWJzdHJpbmcocG9zICsgMyk7XG4gICAgICAgICAgICAgIGxlbiAtPSBwb3MgKyAzIC0gaXBvcztcbiAgICAgICAgICAgICAgcG9zID0gaXBvcyAtIDE7IC8vIGluY3JlbWVudGVkIGFnYWluIGF0IGVuZCBvZiBsb29wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHByZWNlZWRpbmcgJy8nLCB0cmltIHN0YXJ0IGlmIG5vbi1lbXB0eVxuICAgICAgICBpZiAoaXBvcyA8IDAgJiYgcG9zID4gMCkge1xuICAgICAgICAgIGlmIChwb3MgIT0gMiB8fFxuICAgICAgICAgICAgcGF0aC5jaGFyQ29kZUF0KDApICE9IENoYXJDb2RlLkRPVCB8fFxuICAgICAgICAgICAgcGF0aC5jaGFyQ29kZUF0KDEpICE9IENoYXJDb2RlLkRPVFxuICAgICAgICAgICkgeyAvLyBleGNsdWRlICcuLicgaXRzZWxmXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcocG9zICsgNCk7XG4gICAgICAgICAgICBsZW4gPSBwYXRoLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwb3MrKztcbiAgfVxuICByZXR1cm4gbGVuID4gMCA/IHBhdGggOiBcIi5cIjtcbn1cblxuLyoqIFJlc29sdmVzIHRoZSBzcGVjaWZpZWQgcGF0aCByZWxhdGl2ZSB0byB0aGUgc3BlY2lmaWVkIG9yaWdpbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUGF0aChub3JtYWxpemVkUGF0aDogc3RyaW5nLCBvcmlnaW46IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChub3JtYWxpemVkUGF0aC5zdGFydHNXaXRoKFwic3RkL1wiKSkge1xuICAgIHJldHVybiBub3JtYWxpemVkUGF0aDtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplUGF0aChcbiAgICBkaXJuYW1lKG9yaWdpbikgKyBQQVRIX0RFTElNSVRFUiArIG5vcm1hbGl6ZWRQYXRoXG4gICk7XG59XG5cbi8qKiBPYnRhaW5zIHRoZSBkaXJlY3RvcnkgcG9ydGlvbiBvZiBhIG5vcm1hbGl6ZWQgcGF0aC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXJuYW1lKG5vcm1hbGl6ZWRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICB2YXIgcG9zID0gbm9ybWFsaXplZFBhdGgubGVuZ3RoO1xuICBpZiAocG9zIDw9IDEpIHtcbiAgICBpZiAocG9zID09IDApIHJldHVybiBcIi5cIjtcbiAgICBpZiAobm9ybWFsaXplZFBhdGguY2hhckNvZGVBdCgwKSA9PSBzZXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVkUGF0aDtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKC0tcG9zID4gMCkge1xuICAgIGlmIChub3JtYWxpemVkUGF0aC5jaGFyQ29kZUF0KHBvcykgPT0gc2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplZFBhdGguc3Vic3RyaW5nKDAsIHBvcyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIi5cIjtcbn1cbiJdfQ==

/***/ }),

/***/ "../src/util/text.ts":
/*!***************************!*\
  !*** ../src/util/text.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
var indentX1 = "  ";
var indentX2 = "    ";
var indentX4 = "        ";
/** Creates an indentation matching the number of specified levels. */
function indent(sb, level) {
    while (level >= 4) {
        sb.push(indentX4);
        level -= 4;
    }
    if (level >= 2) {
        sb.push(indentX2);
        level -= 2;
    }
    if (level) {
        sb.push(indentX1);
    }
}
exports.indent = indent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsL3RleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQixDQUFBLEtBQUs7O0FBRXhCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDeEIsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBRTVCLHNFQUFzRTtBQUN0RSxTQUFnQixNQUFNLENBQUMsRUFBWSxFQUFFLEtBQVU7SUFDN0MsT0FBTyxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUNaO0lBQ0QsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxDQUFDO0tBQ1o7SUFDRCxJQUFJLEtBQUssRUFBRTtRQUNULEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbkI7QUFDSCxDQUFDO0FBWkQsd0JBWUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSB1dGlsICovLyoqKi9cblxuY29uc3QgaW5kZW50WDEgPSBcIiAgXCI7XG5jb25zdCBpbmRlbnRYMiA9IFwiICAgIFwiO1xuY29uc3QgaW5kZW50WDQgPSBcIiAgICAgICAgXCI7XG5cbi8qKiBDcmVhdGVzIGFuIGluZGVudGF0aW9uIG1hdGNoaW5nIHRoZSBudW1iZXIgb2Ygc3BlY2lmaWVkIGxldmVscy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoc2I6IHN0cmluZ1tdLCBsZXZlbDogaTMyKTogdm9pZCB7XG4gIHdoaWxlIChsZXZlbCA+PSA0KSB7XG4gICAgc2IucHVzaChpbmRlbnRYNCk7XG4gICAgbGV2ZWwgLT0gNDtcbiAgfVxuICBpZiAobGV2ZWwgPj0gMikge1xuICAgIHNiLnB1c2goaW5kZW50WDIpO1xuICAgIGxldmVsIC09IDI7XG4gIH1cbiAgaWYgKGxldmVsKSB7XG4gICAgc2IucHVzaChpbmRlbnRYMSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "../std/assembly/shared/feature.ts":
/*!*****************************************!*\
  !*** ../std/assembly/shared/feature.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file is shared with the compiler and must remain portable
Object.defineProperty(exports, "__esModule", { value: true });
/** Indicates specific features to activate. */
var Feature;
(function (Feature) {
    /** No additional features. */
    Feature[Feature["NONE"] = 0] = "NONE";
    /** Sign extension operations. */
    Feature[Feature["SIGN_EXTENSION"] = 1] = "SIGN_EXTENSION";
    /** Mutable global imports and exports. */
    Feature[Feature["MUTABLE_GLOBAL"] = 2] = "MUTABLE_GLOBAL";
    /** Bulk memory operations. */
    Feature[Feature["BULK_MEMORY"] = 4] = "BULK_MEMORY";
    /** SIMD types and operations. */
    Feature[Feature["SIMD"] = 8] = "SIMD";
    /** Threading and atomic operations. */
    Feature[Feature["THREADS"] = 16] = "THREADS"; // see: https://github.com/WebAssembly/threads
})(Feature = exports.Feature || (exports.Feature = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0ZC9hc3NlbWJseS9zaGFyZWQvZmVhdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQWlFOztBQUVqRSwrQ0FBK0M7QUFDL0MsSUFBa0IsT0FhakI7QUFiRCxXQUFrQixPQUFPO0lBQ3ZCLDhCQUE4QjtJQUM5QixxQ0FBUSxDQUFBO0lBQ1IsaUNBQWlDO0lBQ2pDLHlEQUF1QixDQUFBO0lBQ3ZCLDBDQUEwQztJQUMxQyx5REFBdUIsQ0FBQTtJQUN2Qiw4QkFBOEI7SUFDOUIsbURBQW9CLENBQUE7SUFDcEIsaUNBQWlDO0lBQ2pDLHFDQUFhLENBQUE7SUFDYix1Q0FBdUM7SUFDdkMsNENBQWdCLENBQUEsQ0FBQyw4Q0FBOEM7QUFDakUsQ0FBQyxFQWJpQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFheEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgc2hhcmVkIHdpdGggdGhlIGNvbXBpbGVyIGFuZCBtdXN0IHJlbWFpbiBwb3J0YWJsZVxuXG4vKiogSW5kaWNhdGVzIHNwZWNpZmljIGZlYXR1cmVzIHRvIGFjdGl2YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gRmVhdHVyZSB7XG4gIC8qKiBObyBhZGRpdGlvbmFsIGZlYXR1cmVzLiAqL1xuICBOT05FID0gMCxcbiAgLyoqIFNpZ24gZXh0ZW5zaW9uIG9wZXJhdGlvbnMuICovXG4gIFNJR05fRVhURU5TSU9OID0gMSA8PCAwLCAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJBc3NlbWJseS9zaWduLWV4dGVuc2lvbi1vcHNcbiAgLyoqIE11dGFibGUgZ2xvYmFsIGltcG9ydHMgYW5kIGV4cG9ydHMuICovXG4gIE1VVEFCTEVfR0xPQkFMID0gMSA8PCAxLCAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJBc3NlbWJseS9tdXRhYmxlLWdsb2JhbFxuICAvKiogQnVsayBtZW1vcnkgb3BlcmF0aW9ucy4gKi9cbiAgQlVMS19NRU1PUlkgPSAxIDw8IDIsIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL1dlYkFzc2VtYmx5L2J1bGstbWVtb3J5LW9wZXJhdGlvbnNcbiAgLyoqIFNJTUQgdHlwZXMgYW5kIG9wZXJhdGlvbnMuICovXG4gIFNJTUQgPSAxIDw8IDMsIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL1dlYkFzc2VtYmx5L3NpbWRcbiAgLyoqIFRocmVhZGluZyBhbmQgYXRvbWljIG9wZXJhdGlvbnMuICovXG4gIFRIUkVBRFMgPSAxIDw8IDQgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvdGhyZWFkc1xufVxuIl19

/***/ }),

/***/ "../std/assembly/shared/target.ts":
/*!****************************************!*\
  !*** ../std/assembly/shared/target.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file is shared with the compiler and must remain portable
Object.defineProperty(exports, "__esModule", { value: true });
/** Compilation target. */
var Target;
(function (Target) {
    /** WebAssembly with 32-bit pointers. */
    Target[Target["WASM32"] = 0] = "WASM32";
    /** WebAssembly with 64-bit pointers. Experimental and not supported by any runtime yet. */
    Target[Target["WASM64"] = 1] = "WASM64";
    /** Portable. */
    Target[Target["JS"] = 2] = "JS";
})(Target = exports.Target || (exports.Target = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3RkL2Fzc2VtYmx5L3NoYXJlZC90YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlFQUFpRTs7QUFFakUsMEJBQTBCO0FBQzFCLElBQVksTUFPWDtBQVBELFdBQVksTUFBTTtJQUNoQix3Q0FBd0M7SUFDeEMsdUNBQU0sQ0FBQTtJQUNOLDJGQUEyRjtJQUMzRix1Q0FBTSxDQUFBO0lBQ04sZ0JBQWdCO0lBQ2hCLCtCQUFFLENBQUE7QUFDSixDQUFDLEVBUFcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBT2pCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHNoYXJlZCB3aXRoIHRoZSBjb21waWxlciBhbmQgbXVzdCByZW1haW4gcG9ydGFibGVcblxuLyoqIENvbXBpbGF0aW9uIHRhcmdldC4gKi9cbmV4cG9ydCBlbnVtIFRhcmdldCB7XG4gIC8qKiBXZWJBc3NlbWJseSB3aXRoIDMyLWJpdCBwb2ludGVycy4gKi9cbiAgV0FTTTMyLFxuICAvKiogV2ViQXNzZW1ibHkgd2l0aCA2NC1iaXQgcG9pbnRlcnMuIEV4cGVyaW1lbnRhbCBhbmQgbm90IHN1cHBvcnRlZCBieSBhbnkgcnVudGltZSB5ZXQuICovXG4gIFdBU002NCxcbiAgLyoqIFBvcnRhYmxlLiAqL1xuICBKU1xufVxuIl19

/***/ }),

/***/ "../std/assembly/shared/typeinfo.ts":
/*!******************************************!*\
  !*** ../std/assembly/shared/typeinfo.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file is shared with the compiler and must remain portable
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ╒═══════════════════ Typeinfo interpretation ═══════════════════╕
//    3                   2                   1
//  1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0  bits
// ├─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┤ ◄─ __rtti_base
// │                             count                             │
// ╞═══════════════════════════════════════════════════════════════╡ ┐
// │                      Typeinfo#flags [id=0]                    │ id < count
// ├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤
// │                      Typeinfo#base  [id=0]                    │
// ├───────────────────────────────────────────────────────────────┤
// │                              ...                              │
/** Runtime type information data structure. */
var Typeinfo = /** @class */ (function () {
    function Typeinfo() {
    }
    Typeinfo = __decorate([
        (()=>{})
    ], Typeinfo);
    return Typeinfo;
}());
exports.Typeinfo = Typeinfo;
/** Runtime type information flags. */
var TypeinfoFlags;
(function (TypeinfoFlags) {
    /** No specific flags. */
    TypeinfoFlags[TypeinfoFlags["NONE"] = 0] = "NONE";
    /** Type is an `ArrayBufferView`. */
    TypeinfoFlags[TypeinfoFlags["ARRAYBUFFERVIEW"] = 1] = "ARRAYBUFFERVIEW";
    /** Type is an `Array`. */
    TypeinfoFlags[TypeinfoFlags["ARRAY"] = 2] = "ARRAY";
    /** Type is a `Set`. */
    TypeinfoFlags[TypeinfoFlags["SET"] = 4] = "SET";
    /** Type is a `Map`. */
    TypeinfoFlags[TypeinfoFlags["MAP"] = 8] = "MAP";
    /** Type is inherently acyclic. */
    TypeinfoFlags[TypeinfoFlags["ACYCLIC"] = 16] = "ACYCLIC";
    /** Value alignment of 1 byte. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_0"] = 32] = "VALUE_ALIGN_0";
    /** Value alignment of 2 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_1"] = 64] = "VALUE_ALIGN_1";
    /** Value alignment of 4 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_2"] = 128] = "VALUE_ALIGN_2";
    /** Value alignment of 8 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_3"] = 256] = "VALUE_ALIGN_3";
    /** Value alignment of 16 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_4"] = 512] = "VALUE_ALIGN_4";
    /** Value is a signed type. */
    TypeinfoFlags[TypeinfoFlags["VALUE_SIGNED"] = 1024] = "VALUE_SIGNED";
    /** Value is a float type. */
    TypeinfoFlags[TypeinfoFlags["VALUE_FLOAT"] = 2048] = "VALUE_FLOAT";
    /** Value type is nullable. */
    TypeinfoFlags[TypeinfoFlags["VALUE_NULLABLE"] = 4096] = "VALUE_NULLABLE";
    /** Value type is managed. */
    TypeinfoFlags[TypeinfoFlags["VALUE_MANAGED"] = 8192] = "VALUE_MANAGED";
    /** Key alignment of 1 byte. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_0"] = 16384] = "KEY_ALIGN_0";
    /** Key alignment of 2 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_1"] = 32768] = "KEY_ALIGN_1";
    /** Key alignment of 4 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_2"] = 65536] = "KEY_ALIGN_2";
    /** Key alignment of 8 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_3"] = 131072] = "KEY_ALIGN_3";
    /** Key alignment of 16 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_4"] = 262144] = "KEY_ALIGN_4";
    /** Key is a signed type. */
    TypeinfoFlags[TypeinfoFlags["KEY_SIGNED"] = 524288] = "KEY_SIGNED";
    /** Key is a float type. */
    TypeinfoFlags[TypeinfoFlags["KEY_FLOAT"] = 1048576] = "KEY_FLOAT";
    /** Key type is nullable. */
    TypeinfoFlags[TypeinfoFlags["KEY_NULLABLE"] = 2097152] = "KEY_NULLABLE";
    /** Key type is managed. */
    TypeinfoFlags[TypeinfoFlags["KEY_MANAGED"] = 4194304] = "KEY_MANAGED";
})(TypeinfoFlags = exports.TypeinfoFlags || (exports.TypeinfoFlags = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zdGQvYXNzZW1ibHkvc2hhcmVkL3R5cGVpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpRUFBaUU7Ozs7Ozs7O0FBRWpFLG9FQUFvRTtBQUNwRSwrQ0FBK0M7QUFDL0MseUVBQXlFO0FBQ3pFLG1GQUFtRjtBQUNuRixvRUFBb0U7QUFDcEUsc0VBQXNFO0FBQ3RFLCtFQUErRTtBQUMvRSxvRUFBb0U7QUFDcEUsb0VBQW9FO0FBQ3BFLG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFFcEUsK0NBQStDO0FBRS9DO0lBQUE7SUFLQSxDQUFDO0lBTFksUUFBUTtRQURwQixTQUFTO09BQ0csUUFBUSxDQUtwQjtJQUFELGVBQUM7Q0FBQSxBQUxELElBS0M7QUFMWSw0QkFBUTtBQU9yQixzQ0FBc0M7QUFDdEMsSUFBa0IsYUFpRGpCO0FBakRELFdBQWtCLGFBQWE7SUFDN0IseUJBQXlCO0lBQ3pCLGlEQUFRLENBQUE7SUFDUixvQ0FBb0M7SUFDcEMsdUVBQXdCLENBQUE7SUFDeEIsMEJBQTBCO0lBQzFCLG1EQUFjLENBQUE7SUFDZCx1QkFBdUI7SUFDdkIsK0NBQVksQ0FBQTtJQUNaLHVCQUF1QjtJQUN2QiwrQ0FBWSxDQUFBO0lBQ1osa0NBQWtDO0lBQ2xDLHdEQUFnQixDQUFBO0lBQ2hCLGlDQUFpQztJQUNqQyxvRUFBc0IsQ0FBQTtJQUN0QixrQ0FBa0M7SUFDbEMsb0VBQXNCLENBQUE7SUFDdEIsa0NBQWtDO0lBQ2xDLHFFQUFzQixDQUFBO0lBQ3RCLGtDQUFrQztJQUNsQyxxRUFBc0IsQ0FBQTtJQUN0QixtQ0FBbUM7SUFDbkMscUVBQXNCLENBQUE7SUFDdEIsOEJBQThCO0lBQzlCLG9FQUFzQixDQUFBO0lBQ3RCLDZCQUE2QjtJQUM3QixrRUFBcUIsQ0FBQTtJQUNyQiw4QkFBOEI7SUFDOUIsd0VBQXdCLENBQUE7SUFDeEIsNkJBQTZCO0lBQzdCLHNFQUF1QixDQUFBO0lBQ3ZCLCtCQUErQjtJQUMvQixtRUFBcUIsQ0FBQTtJQUNyQixnQ0FBZ0M7SUFDaEMsbUVBQXFCLENBQUE7SUFDckIsZ0NBQWdDO0lBQ2hDLG1FQUFxQixDQUFBO0lBQ3JCLGdDQUFnQztJQUNoQyxvRUFBcUIsQ0FBQTtJQUNyQixpQ0FBaUM7SUFDakMsb0VBQXFCLENBQUE7SUFDckIsNEJBQTRCO0lBQzVCLGtFQUFvQixDQUFBO0lBQ3BCLDJCQUEyQjtJQUMzQixpRUFBbUIsQ0FBQTtJQUNuQiw0QkFBNEI7SUFDNUIsdUVBQXNCLENBQUE7SUFDdEIsMkJBQTJCO0lBQzNCLHFFQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFqRGlCLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBaUQ5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBzaGFyZWQgd2l0aCB0aGUgY29tcGlsZXIgYW5kIG11c3QgcmVtYWluIHBvcnRhYmxlXG5cbi8vIOKVkuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkCBUeXBlaW5mbyBpbnRlcnByZXRhdGlvbiDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZVcbi8vICAgIDMgICAgICAgICAgICAgICAgICAgMiAgICAgICAgICAgICAgICAgICAxXG4vLyAgMSAwIDkgOCA3IDYgNSA0IDMgMiAxIDAgOSA4IDcgNiA1IDQgMyAyIDEgMCA5IDggNyA2IDUgNCAzIDIgMSAwICBiaXRzXG4vLyDilJzilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilLTilIDilKQg4peE4pSAIF9fcnR0aV9iYXNlXG4vLyDilIIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcbi8vIOKVnuKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVoSDilJBcbi8vIOKUgiAgICAgICAgICAgICAgICAgICAgICBUeXBlaW5mbyNmbGFncyBbaWQ9MF0gICAgICAgICAgICAgICAgICAgIOKUgiBpZCA8IGNvdW50XG4vLyDilJwg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUpFxuLy8g4pSCICAgICAgICAgICAgICAgICAgICAgIFR5cGVpbmZvI2Jhc2UgIFtpZD0wXSAgICAgICAgICAgICAgICAgICAg4pSCXG4vLyDilJzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilKRcbi8vIOKUgiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUglxuXG4vKiogUnVudGltZSB0eXBlIGluZm9ybWF0aW9uIGRhdGEgc3RydWN0dXJlLiAqL1xuQHVubWFuYWdlZFxuZXhwb3J0IGNsYXNzIFR5cGVpbmZvIHtcbiAgLyoqIEZsYWdzIGRlc2NyaWJpbmcgdGhlIHNoYXBlIG9mIHRoaXMgY2xhc3MgdHlwZS4gKi9cbiAgZmxhZ3M6IFR5cGVpbmZvRmxhZ3M7XG4gIC8qKiBCYXNlIGNsYXNzIGlkIG9yIGAwYCBpZiBub25lLiAqL1xuICBiYXNlOiB1MzI7XG59XG5cbi8qKiBSdW50aW1lIHR5cGUgaW5mb3JtYXRpb24gZmxhZ3MuICovXG5leHBvcnQgY29uc3QgZW51bSBUeXBlaW5mb0ZsYWdzIHtcbiAgLyoqIE5vIHNwZWNpZmljIGZsYWdzLiAqL1xuICBOT05FID0gMCxcbiAgLyoqIFR5cGUgaXMgYW4gYEFycmF5QnVmZmVyVmlld2AuICovXG4gIEFSUkFZQlVGRkVSVklFVyA9IDEgPDwgMCxcbiAgLyoqIFR5cGUgaXMgYW4gYEFycmF5YC4gKi9cbiAgQVJSQVkgPSAxIDw8IDEsXG4gIC8qKiBUeXBlIGlzIGEgYFNldGAuICovXG4gIFNFVCA9IDEgPDwgMixcbiAgLyoqIFR5cGUgaXMgYSBgTWFwYC4gKi9cbiAgTUFQID0gMSA8PCAzLFxuICAvKiogVHlwZSBpcyBpbmhlcmVudGx5IGFjeWNsaWMuICovXG4gIEFDWUNMSUMgPSAxIDw8IDQsXG4gIC8qKiBWYWx1ZSBhbGlnbm1lbnQgb2YgMSBieXRlLiAqL1xuICBWQUxVRV9BTElHTl8wID0gMSA8PCA1LFxuICAvKiogVmFsdWUgYWxpZ25tZW50IG9mIDIgYnl0ZXMuICovXG4gIFZBTFVFX0FMSUdOXzEgPSAxIDw8IDYsXG4gIC8qKiBWYWx1ZSBhbGlnbm1lbnQgb2YgNCBieXRlcy4gKi9cbiAgVkFMVUVfQUxJR05fMiA9IDEgPDwgNyxcbiAgLyoqIFZhbHVlIGFsaWdubWVudCBvZiA4IGJ5dGVzLiAqL1xuICBWQUxVRV9BTElHTl8zID0gMSA8PCA4LFxuICAvKiogVmFsdWUgYWxpZ25tZW50IG9mIDE2IGJ5dGVzLiAqL1xuICBWQUxVRV9BTElHTl80ID0gMSA8PCA5LFxuICAvKiogVmFsdWUgaXMgYSBzaWduZWQgdHlwZS4gKi9cbiAgVkFMVUVfU0lHTkVEID0gMSA8PCAxMCxcbiAgLyoqIFZhbHVlIGlzIGEgZmxvYXQgdHlwZS4gKi9cbiAgVkFMVUVfRkxPQVQgPSAxIDw8IDExLFxuICAvKiogVmFsdWUgdHlwZSBpcyBudWxsYWJsZS4gKi9cbiAgVkFMVUVfTlVMTEFCTEUgPSAxIDw8IDEyLFxuICAvKiogVmFsdWUgdHlwZSBpcyBtYW5hZ2VkLiAqL1xuICBWQUxVRV9NQU5BR0VEID0gMSA8PCAxMyxcbiAgLyoqIEtleSBhbGlnbm1lbnQgb2YgMSBieXRlLiAqL1xuICBLRVlfQUxJR05fMCA9IDEgPDwgMTQsXG4gIC8qKiBLZXkgYWxpZ25tZW50IG9mIDIgYnl0ZXMuICovXG4gIEtFWV9BTElHTl8xID0gMSA8PCAxNSxcbiAgLyoqIEtleSBhbGlnbm1lbnQgb2YgNCBieXRlcy4gKi9cbiAgS0VZX0FMSUdOXzIgPSAxIDw8IDE2LFxuICAvKiogS2V5IGFsaWdubWVudCBvZiA4IGJ5dGVzLiAqL1xuICBLRVlfQUxJR05fMyA9IDEgPDwgMTcsXG4gIC8qKiBLZXkgYWxpZ25tZW50IG9mIDE2IGJ5dGVzLiAqL1xuICBLRVlfQUxJR05fNCA9IDEgPDwgMTgsXG4gIC8qKiBLZXkgaXMgYSBzaWduZWQgdHlwZS4gKi9cbiAgS0VZX1NJR05FRCA9IDEgPDwgMTksXG4gIC8qKiBLZXkgaXMgYSBmbG9hdCB0eXBlLiAqL1xuICBLRVlfRkxPQVQgPSAxIDw8IDIwLFxuICAvKiogS2V5IHR5cGUgaXMgbnVsbGFibGUuICovXG4gIEtFWV9OVUxMQUJMRSA9IDEgPDwgMjEsXG4gIC8qKiBLZXkgdHlwZSBpcyBtYW5hZ2VkLiAqL1xuICBLRVlfTUFOQUdFRCA9IDEgPDwgMjJcbn1cbiJdfQ==

/***/ }),

/***/ "../std/portable/index.js":
/*!********************************!*\
  !*** ../std/portable/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** @module std/portable *//***/

var globalScope = typeof window !== "undefined" && window || typeof global !== "undefined" && global || self;

globalScope.ASC_TARGET = 2; // Target.JS
globalScope.ASC_NO_ASSERT = false;
globalScope.ASC_MEMORY_BASE = 0;
globalScope.ASC_OPTIMIZE_LEVEL = 3;
globalScope.ASC_SHRINK_LEVEL = 0;
globalScope.ASC_FEATURE_MUTABLE_GLOBAL = false;
globalScope.ASC_FEATURE_SIGN_EXTENSION = false;
globalScope.ASC_FEATURE_BULK_MEMORY = false;
globalScope.ASC_FEATURE_SIMD = false;
globalScope.ASC_FEATURE_THREADS = false;

var F64 = new Float64Array(1);
var U64 = new Uint32Array(F64.buffer);

Object.defineProperties(
  globalScope["i8"] = function i8(value) { return value << 24 >> 24; }
, {
  "MIN_VALUE": { value: -128, writable: false },
  "MAX_VALUE": { value:  127, writable: false }
});

Object.defineProperties(
  globalScope["i16"] = function i16(value) { return value << 16 >> 16; }
, {
  "MIN_VALUE": { value: -32768, writable: false },
  "MAX_VALUE": { value:  32767, writable: false }
});

Object.defineProperties(
  globalScope["i32"] = globalScope["isize"] = function i32(value) { return value | 0; }
, {
  "MIN_VALUE": { value: -2147483648, writable: false },
  "MAX_VALUE": { value:  2147483647, writable: false }
});

Object.defineProperties(
  globalScope["u8"] = function u8(value) { return value & 0xff; }
, {
  "MIN_VALUE": { value:   0, writable: false },
  "MAX_VALUE": { value: 255, writable: false }
});

Object.defineProperties(
  globalScope["u16"] = function u16(value) { return value & 0xffff; }
, {
  "MIN_VALUE": { value:     0, writable: false },
  "MAX_VALUE": { value: 65535, writable: false }
});

Object.defineProperties(
  globalScope["u32"] = globalScope["usize"] = function u32(value) { return value >>> 0; }
, {
  "MIN_VALUE": { value:          0, writable: false },
  "MAX_VALUE": { value: 4294967295, writable: false }
});

Object.defineProperties(
  globalScope["bool"] = function bool(value) { return !!value; }
, {
  "MIN_VALUE": { value: false, writable: false },
  "MAX_VALUE": { value: true,  writable: false }
});

Object.defineProperties(
  globalScope["f32"] = function f32(value) { return Math.fround(value); }
, {
  "EPSILON":   { value: Math.fround(1.1920929e-07), writable: false },
  "MIN_VALUE": { value: Math.fround(1.4012985e-45), writable: false },
  "MAX_VALUE": { value: Math.fround(3.4028235e+38), writable: false },
  "MIN_NORMAL_VALUE":  { value:  Math.fround(1.17549435e-38), writable: false },
  "MIN_SAFE_INTEGER":  { value: -16777215, writable: false },
  "MAX_SAFE_INTEGER":  { value:  16777215, writable: false }
});

Object.defineProperties(
  globalScope["f64"] = function f64(value) { return +value; }
, {
  "EPSILON":   { value: 2.2204460492503131e-16,  writable: false },
  "MIN_VALUE": { value:                  5e-324, writable: false },
  "MAX_VALUE": { value: 1.7976931348623157e+308, writable: false },
  "MIN_NORMAL_VALUE":  { value: 2.2250738585072014e-308 , writable: false },
  "MIN_SAFE_INTEGER":  { value: -9007199254740991, writable: false },
  "MAX_SAFE_INTEGER":  { value:  9007199254740991, writable: false }
});

globalScope["clz"] = Math.clz32;

globalScope["ctz"] = function ctz(value) {
  var c = Math.clz32(value & -value);
  return value ? 31 - c : c;
};

globalScope["popcnt"] = function popcnt(value) {
  value -= value >>> 1 & 0x55555555;
  value = (value & 0x33333333) + (value >>> 2 & 0x33333333);
  return (((value + (value >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
};

globalScope["rotl"] = function rotl(value, shift) {
  shift &= 31;
  return (value << shift) | (value >>> (32 - shift));
};

globalScope["rotr"] = function rotr(value, shift) {
  shift &= 31;
  return (value >>> shift) | (value << (32 - shift));
};

globalScope["abs"] = Math.abs;

globalScope["max"] = Math.max;

globalScope["min"] = Math.min;

globalScope["ceil"] = Math.ceil;

globalScope["floor"] = Math.floor;

// Adopt code from https://github.com/rfk/wasm-polyfill
globalScope["nearest"] = function nearest(value) {
  if (Math.abs(value - Math.trunc(value)) === 0.5) {
    return 2.0 * Math.round(value * 0.5);
  }
  return Math.round(value);
};

globalScope["select"] = function select(ifTrue, ifFalse, condition) {
  return condition ? ifTrue : ifFalse;
};

globalScope["sqrt"] = Math.sqrt;

globalScope["trunc"] = Math.trunc;

globalScope["copysign"] = function copysign(x, y) {
  return Math.abs(x) * Math.sign(y);
};

globalScope["bswap"] = function bswap(value) {
  var a = value >> 8 & 0x00FF00FF;
  var b = (value & 0x00FF00FF) << 8;
  value = a | b;
  a = value >> 16 & 0x0000FFFF;
  b = (value & 0x0000FFFF) << 16;
  return a | b;
};

globalScope["bswap16"] = function bswap16(value) {
  return ((value << 8) & 0xFF00) | ((value >> 8) & 0x00FF) | (value & 0xFFFF0000);
};

function UnreachableError() {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, UnreachableError);
  } else {
    this.stack = this.name + ": " + this.message + "\n" + new Error().stack;
  }
}
UnreachableError.prototype = Object.create(Error.prototype);
UnreachableError.prototype.name = "UnreachableError";
UnreachableError.prototype.message = "unreachable";

globalScope["unreachable"] = function unreachable() {
  throw new UnreachableError();
};

function AssertionError(message) {
  this.message = message || "assertion failed";
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, AssertionError);
  } else {
    this.stack = this.name + ": " + this.message + "\n" + new Error().stack;
  }
}
AssertionError.prototype = Object.create(Error.prototype);
AssertionError.prototype.name = "AssertionError";

globalScope["assert"] = function assert(isTrueish, message) {
  if (isTrueish) return isTrueish;
  throw new AssertionError(message);
};

globalScope["changetype"] = function changetype(value) {
  return value;
};

String["fromCharCodes"] = function fromCharCodes(arr) {
  return String.fromCharCode.apply(String, arr);
};

String["fromCodePoints"] = function fromCodePoints(arr) {
  return String.fromCodePoint.apply(String, arr);
};

if (!String.prototype.replaceAll) {
  Object.defineProperty(String.prototype, "replaceAll", {
    value: function replaceAll(search, replacment) {
      var res = this.split(search).join(replacment);
      if (!search.length) res = replacment + res + replacment;
      return res;
    }
  });
}

globalScope["isInteger"] = Number.isInteger;

globalScope["isFloat"] = function isFloat(arg) {
  return typeof arg === "number";
};

globalScope["isNullable"] = function isNullable(arg) {
  return true;
}

globalScope["isReference"] = function isReference(arg) {
  return typeof arg === "object" || typeof arg === "string";
};

globalScope["isFunction"] = function isFunction(arg) {
  return typeof arg === "function";
}

globalScope["isString"] = function isString(arg) {
  return typeof arg === "string" || arg instanceof String;
};

globalScope["isArray"] = Array.isArray;
globalScope["isArrayLike"] = function isArrayLike(expr) {
  return expr
    && typeof expr === 'object'
    && typeof expr.length === 'number'
    && expr.length >= 0
    && Math.trunc(expr.length) === expr.length;
};

Array.create = function(capacity) {
  var arr = new Array(capacity);
  arr.length = 0;
  return arr;
};

globalScope["isDefined"] = function isDefined(expr) {
  return typeof expr !== "undefined";
}

globalScope["isConstant"] = function isConstant(expr) {
  return false;
};

globalScope["unchecked"] = function unchecked(expr) {
  return expr;
};

globalScope["fmod"] = function fmod(x, y) {
  return x % y;
};

globalScope["fmodf"] = function fmodf(x, y) {
  return Math.fround(x % y);
};

globalScope["JSMath"] = Math;

try {
Object.defineProperties(globalScope["JSMath"], {
  sincos_sin: { value: 0.0, writable: true },
  sincos_cos: { value: 0.0, writable: true },
  signbit: {
    value: function signbit(x) {
      F64[0] = x; return Boolean((U64[1] >>> 31) & (x == x));
    }
  },
  sincos: {
    value: function sincos(x) {
      this.sincos_sin = Math.sin(x);
      this.sincos_cos = Math.cos(x);
    }
  }
});
}catch (e) {}

globalScope["memory"] = (() => {
  var HEAP = new Uint8Array(0);
  var HEAP_OFFSET = 0;
  return {
    allocate: globalScope["__memory_allocate"] || function allocate(size) {
      if (!(size >>>= 0)) return 0;
      if (HEAP_OFFSET + size > HEAP.length) {
        var oldHeap = HEAP;
        HEAP = new Uint8Array(Math.max(65536, HEAP.length + size, HEAP.length * 2));
        HEAP.set(oldHeap);
      }
      var ptr = HEAP_OFFSET;
      if ((HEAP_OFFSET += size) & 7) HEAP_OFFSET = (HEAP_OFFSET | 7) + 1;
      return ptr;
    },
    fill: globalScope["__memory_fill"] || function fill(dest, value, size) {
      HEAP.fill(value, dest, dest + size);
    },
    free: globalScope["__memory_free"] || function free(ptr) { },
    copy: globalScope["__memory_copy"] || function copy(dest, src, size) {
      HEAP.copyWithin(dest, src, src + size);
    },
    reset: globalScope["__memory_reset"] || function reset() {
      HEAP = new Uint8Array(0);
      HEAP_OFFSET = 0;
    }
  };
})();

globalScope["store"] = globalScope["__store"] || function store(ptr, value, offset) {
  HEAP[(ptr | 0) + (offset | 0)] = value;
};

globalScope["load"] = globalScope["__load"] || function load(ptr, offset) {
  return HEAP[(ptr | 0) + (offset | 0)];
};

globalScope["unmanaged"] = function() {};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../bindings/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/base.ts":
/*!*********************!*\
  !*** ./src/base.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ast_1 = __webpack_require__(/*! ../../src/ast */ "../src/ast.ts");
var visitor_1 = __webpack_require__(/*! ./visitor */ "./src/visitor.ts");
var BaseVisitor = /** @class */ (function (_super) {
    __extends(BaseVisitor, _super);
    function BaseVisitor(writer) {
        var _this = _super.call(this, writer) || this;
        _this.depth = 0;
        return _this;
    }
    BaseVisitor.prototype._visit = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case ast_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case ast_1.NodeKind.TYPENAME: {
                this.visitTypeName(node);
            }
            case ast_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case ast_1.NodeKind.FALSE:
            case ast_1.NodeKind.NULL:
            case ast_1.NodeKind.SUPER:
            case ast_1.NodeKind.THIS:
            case ast_1.NodeKind.TRUE:
            case ast_1.NodeKind.CONSTRUCTOR:
            case ast_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case ast_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case ast_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case ast_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case ast_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case ast_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case ast_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case ast_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case ast_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case ast_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case ast_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case ast_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case ast_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case ast_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case ast_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case ast_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case ast_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case ast_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case ast_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case ast_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case ast_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case ast_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case ast_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case ast_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case ast_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case ast_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case ast_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case ast_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case ast_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case ast_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case ast_1.NodeKind.DECORATOR: {
                this.visitDecoratorNode(node);
                break;
            }
            case ast_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case ast_1.NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case ast_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            default: assert(false);
        }
    };
    BaseVisitor.prototype.visitSource = function (node) {
        var e_1, _a;
        try {
            for (var _b = __values(node.statements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var stmt = _c.value;
                this.depth++;
                this.visit(stmt);
                this.depth--;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BaseVisitor.prototype.visitTypeNode = function (node) { };
    BaseVisitor.prototype.visitTypeName = function (node) {
        this.visit(node.identifier);
        if (node.next) {
            this.visit(node);
        }
    };
    BaseVisitor.prototype.visitNamedTypeNode = function (node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    };
    BaseVisitor.prototype.visitFunctionTypeNode = function (node) {
        var e_2, _a;
        try {
            for (var _b = __values(node.parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var param = _c.value;
                this.visit(param);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.visit(node.returnType);
    };
    BaseVisitor.prototype.visitTypeParameter = function (node) {
        this.visit(node.name);
        if (node.extendsType)
            this.visit(node.extendsType);
        if (node.defaultType)
            this.visit(node.defaultType);
    };
    BaseVisitor.prototype.visitIdentifierExpression = function (node) { };
    BaseVisitor.prototype.visitArrayLiteralExpression = function (node) {
        var _this = this;
        node.elementExpressions.map(function (e) {
            if (e)
                _this.visit(e);
        });
    };
    BaseVisitor.prototype.visitObjectLiteralExpression = function (node) {
        if (node.values && node.names) {
            assert(node.values.length == node.names.length);
            for (var i = 0; i < node.values.length; i++) {
                this.visit(node.names[i]);
                this.visit(node.values[i]);
            }
        }
    };
    BaseVisitor.prototype.visitAssertionExpression = function (node) {
        if (node.toType)
            this.visit(node.toType);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitBinaryExpression = function (node) {
        this.visit(node.left);
        this.visit(node.right);
    };
    BaseVisitor.prototype.visitCallExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitClassExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitCommaExpression = function (node) {
        this.visit(node.expressions);
    };
    BaseVisitor.prototype.visitElementAccessExpression = function (node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFunctionExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitLiteralExpression = function (node) {
        // node.
    };
    BaseVisitor.prototype.visitFloatLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitInstanceOfExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.isType);
    };
    BaseVisitor.prototype.visitIntegerLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitStringLiteral = function (str, singleQuoted) { };
    BaseVisitor.prototype.visitStringLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitRegexpLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitNewExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitParenthesizedExpression = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitPropertyAccessExpression = function (node) {
        this.visit(node.property);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitTernaryExpression = function (node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    };
    BaseVisitor.prototype.visitUnaryExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPostfixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPrefixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitSuperExpression = function (node) { };
    BaseVisitor.prototype.visitFalseExpression = function (node) { };
    BaseVisitor.prototype.visitTrueExpression = function (node) { };
    BaseVisitor.prototype.visitThisExpression = function (node) { };
    BaseVisitor.prototype.visitNullExperssion = function (node) { };
    BaseVisitor.prototype.visitConstructorExpression = function (node) { };
    BaseVisitor.prototype.visitNodeAndTerminate = function (statement) { };
    BaseVisitor.prototype.visitBlockStatement = function (node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    };
    BaseVisitor.prototype.visitBreakStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitContinueStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitClassDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        assert(node.isGeneric ? node.typeParameters != null : node.typeParameters == null);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        if (node.extendsType) {
            this.visit(node.extendsType);
        }
        this.visit(node.implementsTypes);
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitDoStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitEmptyStatement = function (node) { };
    BaseVisitor.prototype.visitEnumDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    };
    BaseVisitor.prototype.visitEnumValueDeclaration = function (node) {
        this.visit(node.name);
        if (node.initializer) {
            this.visit(node.initializer);
        }
    };
    BaseVisitor.prototype.visitExportImportStatement = function (node) {
        this.visit(node.name);
        this.visit(node.externalName);
    };
    BaseVisitor.prototype.visitExportMember = function (node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    };
    BaseVisitor.prototype.visitExportStatement = function (node) {
        if (node.path) {
            this.visit(node.path);
        }
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitExportDefaultStatement = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitExpressionStatement = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFieldDeclaration = function (node) {
        this.visit(node.name);
        if (node.type) {
            this.visit(node.type);
        }
        if (node.initializer) {
            this.visit(node.initializer);
        }
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitForStatement = function (node) {
        if (node.initializer)
            this.visit(node.initializer);
        if (node.condition)
            this.visit(node.condition);
        if (node.incrementor)
            this.visit(node.incrementor);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitFunctionDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitFunctionCommon = function (node) {
        // this.visit(node.name)
    };
    BaseVisitor.prototype.visitIfStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        if (node.ifFalse)
            this.visit(node.ifFalse);
    };
    BaseVisitor.prototype.visitImportDeclaration = function (node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitImportStatement = function (node) {
        if (node.namespaceName)
            this.visit(node.namespaceName);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitIndexSignatureDeclaration = function (node) {
        // this.visit(node.name);
        // this.visit(node.keyType);
        // this.visit(node.valueType);
    };
    BaseVisitor.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.implementsTypes);
        if (node.extendsType)
            this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitMethodDeclaration = function (node) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitReturnStatement = function (node) {
        if (node.value)
            this.visit(node.value);
    };
    BaseVisitor.prototype.visitSwitchCase = function (node) {
        if (node.label)
            this.visit(node.label);
        this.visit(node.statements);
    };
    BaseVisitor.prototype.visitSwitchStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    };
    BaseVisitor.prototype.visitThrowStatement = function (node) {
        this.visit(node.value);
    };
    BaseVisitor.prototype.visitTryStatement = function (node) {
        this.visit(node.statements);
        if (node.catchVariable)
            this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    };
    BaseVisitor.prototype.visitTypeDeclaration = function (node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    };
    BaseVisitor.prototype.visitVariableDeclaration = function (node) {
        this.visit(node.name);
        if (node.type)
            this.visit(node.type);
        if (node.initializer)
            this.visit(node.initializer);
    };
    BaseVisitor.prototype.visitVariableStatement = function (node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitWhileStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.statement);
        this.depth--;
    };
    BaseVisitor.prototype.visitVoidStatement = function (node) { };
    BaseVisitor.prototype.visitComment = function (node) { };
    BaseVisitor.prototype.visitDecoratorNode = function (node) {
        this.visit(node.name);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitParameter = function (node) {
        this.visit(node.name);
        if (node.implicitFieldDeclaration) {
            this.visit(node.implicitFieldDeclaration);
        }
        if (node.initializer)
            this.visit(node.initializer);
        this.visit(node.type);
    };
    return BaseVisitor;
}(visitor_1.AbstractVisitor));
exports.BaseVisitor = BaseVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0E0RXVCO0FBRXZCLHFDQUFvRDtBQUVwRDtJQUFpQywrQkFBcUI7SUFHcEQscUJBQVksTUFBcUI7UUFBakMsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQUpELFdBQUssR0FBVyxDQUFDLENBQUM7O0lBSWxCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLGNBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsTUFBTTthQUNQO1lBRUQsUUFBUTtZQUVSLEtBQUssY0FBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLGNBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDbkQsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDcEM7WUFDRCxLQUFLLGNBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFvQixJQUFJLENBQUMsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBRUQsY0FBYztZQUVkLEtBQUssY0FBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLGNBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxjQUFRLENBQUMsS0FBSyxDQUFDO1lB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QUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsSUFBbUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBNW9CRCxDQUFpQyx5QkFBZSxHQTRvQi9DO0FBNW9CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNvdXJjZSxcbiAgVHlwZU5vZGUsXG4gIFR5cGVOYW1lLFxuICBOYW1lZFR5cGVOb2RlLFxuICBGdW5jdGlvblR5cGVOb2RlLFxuICBUeXBlUGFyYW1ldGVyTm9kZSxcbiAgSWRlbnRpZmllckV4cHJlc3Npb24sXG4gIEFycmF5TGl0ZXJhbEV4cHJlc3Npb24sXG4gIE9iamVjdExpdGVyYWxFeHByZXNzaW9uLFxuICBBc3NlcnRpb25FeHByZXNzaW9uLFxuICBCaW5hcnlFeHByZXNzaW9uLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgQ2xhc3NFeHByZXNzaW9uLFxuICBDb21tYUV4cHJlc3Npb24sXG4gIEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLFxuICBGdW5jdGlvbkV4cHJlc3Npb24sXG4gIExpdGVyYWxFeHByZXNzaW9uLFxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxuICBJbnN0YW5jZU9mRXhwcmVzc2lvbixcbiAgSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uLFxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcbiAgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24sXG4gIE5ld0V4cHJlc3Npb24sXG4gIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxuICBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXG4gIFRlcm5hcnlFeHByZXNzaW9uLFxuICBVbmFyeUV4cHJlc3Npb24sXG4gIFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24sXG4gIFVuYXJ5UHJlZml4RXhwcmVzc2lvbixcbiAgU3VwZXJFeHByZXNzaW9uLFxuICBGYWxzZUV4cHJlc3Npb24sXG4gIFRydWVFeHByZXNzaW9uLFxuICBUaGlzRXhwcmVzc2lvbixcbiAgTnVsbEV4cHJlc3Npb24sXG4gIENvbnN0cnVjdG9yRXhwcmVzc2lvbixcbiAgU3RhdGVtZW50LFxuICBCbG9ja1N0YXRlbWVudCxcbiAgQnJlYWtTdGF0ZW1lbnQsXG4gIENvbnRpbnVlU3RhdGVtZW50LFxuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBEb1N0YXRlbWVudCxcbiAgRW1wdHlTdGF0ZW1lbnQsXG4gIEVudW1EZWNsYXJhdGlvbixcbiAgRW51bVZhbHVlRGVjbGFyYXRpb24sXG4gIEV4cG9ydEltcG9ydFN0YXRlbWVudCxcbiAgRXhwb3J0TWVtYmVyLFxuICBFeHBvcnRTdGF0ZW1lbnQsXG4gIEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQsXG4gIEV4cHJlc3Npb25TdGF0ZW1lbnQsXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIEZvclN0YXRlbWVudCxcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgSWZTdGF0ZW1lbnQsXG4gIEltcG9ydERlY2xhcmF0aW9uLFxuICBJbXBvcnRTdGF0ZW1lbnQsXG4gIEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24sXG4gIEludGVyZmFjZURlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gIFJldHVyblN0YXRlbWVudCxcbiAgU3dpdGNoQ2FzZSxcbiAgU3dpdGNoU3RhdGVtZW50LFxuICBUaHJvd1N0YXRlbWVudCxcbiAgVHJ5U3RhdGVtZW50LFxuICBUeXBlRGVjbGFyYXRpb24sXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXG4gIFZhcmlhYmxlU3RhdGVtZW50LFxuICBXaGlsZVN0YXRlbWVudCxcbiAgVm9pZFN0YXRlbWVudCxcbiAgQ29tbWVudE5vZGUsXG4gIERlY29yYXRvck5vZGUsXG4gIFBhcmFtZXRlck5vZGUsXG4gIE5vZGUsXG4gIE5vZGVLaW5kLFxuICBFeHByZXNzaW9uXG59IGZyb20gXCIuLi8uLi9zcmMvYXN0XCI7XG5cbmltcG9ydCB7IEFic3RyYWN0VmlzaXRvciwgV3JpdGVyIH0gZnJvbSBcIi4vdmlzaXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdFZpc2l0b3I8Tm9kZT4ge1xuICBkZXB0aDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcih3cml0ZXI/OiBXcml0ZXI8Tm9kZT4pIHtcbiAgICBzdXBlcih3cml0ZXIpO1xuICB9XG5cbiAgX3Zpc2l0KG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5TT1VSQ0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdHlwZXNcblxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFTkFNRToge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5hbWUoPFR5cGVOYW1lPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cHJlc3Npb25zXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XG4gICAgICBjYXNlIE5vZGVLaW5kLlNVUEVSOlxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxuICAgICAgY2FzZSBOb2RlS2luZC5DT05TVFJVQ1RPUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQklOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0FMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09NTUE6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xuICAgICAgICB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XG4gICAgICAgIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oPFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUFJPUEVSVFlBQ0NFU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbig8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CUkVBSzoge1xuICAgICAgICB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OVElOVUU6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XG4gICAgICAgIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTVBUWToge1xuICAgICAgICB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoPEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRJTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudCg8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xuICAgICAgICB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKDxJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKDxJbnRlcmZhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk1FVEhPRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRNZXRob2REZWNsYXJhdGlvbig8TWV0aG9kRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oPE5hbWVzcGFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlRGVjbGFyYXRpb24oPFR5cGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlclxuXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xuICAgICAgICB0aGlzLnZpc2l0RGVjb3JhdG9yTm9kZSg8RGVjb3JhdG9yTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVE1FTUJFUjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKDxFeHBvcnRNZW1iZXI+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFBhcmFtZXRlcig8UGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSENBU0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoPFN3aXRjaENhc2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFNvdXJjZShub2RlOiBTb3VyY2UpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN0bXQgb2Ygbm9kZS5zdGF0ZW1lbnRzKSB7XG4gICAgICB0aGlzLmRlcHRoKys7XG4gICAgICB0aGlzLnZpc2l0KHN0bXQpO1xuICAgICAgdGhpcy5kZXB0aC0tO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiB2b2lkIHt9XG5cbiAgdmlzaXRUeXBlTmFtZShub2RlOiBUeXBlTmFtZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5pZGVudGlmaWVyKTtcbiAgICBpZiAobm9kZS5uZXh0KSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogdm9pZCB7XG4gICAgZm9yIChsZXQgcGFyYW0gb2Ygbm9kZS5wYXJhbWV0ZXJzKSB7XG4gICAgICB0aGlzLnZpc2l0KHBhcmFtKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLnJldHVyblR5cGUpO1xuICB9XG5cbiAgdmlzaXRUeXBlUGFyYW1ldGVyKG5vZGU6IFR5cGVQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmV4dGVuZHNUeXBlKSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIGlmIChub2RlLmRlZmF1bHRUeXBlKSB0aGlzLnZpc2l0KG5vZGUuZGVmYXVsdFR5cGUpO1xuICB9XG5cbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBJZGVudGlmaWVyRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zLm1hcCgoZTogRXhwcmVzc2lvbik6IHZvaWQgPT4ge1xuICAgICAgaWYgKGUpIHRoaXMudmlzaXQoZSk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgaWYgKG5vZGUudmFsdWVzICYmIG5vZGUubmFtZXMpIHtcbiAgICAgIGFzc2VydChub2RlLnZhbHVlcy5sZW5ndGggPT0gbm9kZS5uYW1lcy5sZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnZpc2l0KG5vZGUubmFtZXNbaV0pO1xuICAgICAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIGlmIChub2RlLnRvVHlwZSkgdGhpcy52aXNpdChub2RlLnRvVHlwZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRCaW5hcnlFeHByZXNzaW9uKG5vZGU6IEJpbmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubGVmdCk7XG4gICAgdGhpcy52aXNpdChub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5hcmd1bWVudHMpO1xuICB9XG5cbiAgdmlzaXRDbGFzc0V4cHJlc3Npb24obm9kZTogQ2xhc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWFFeHByZXNzaW9uKG5vZGU6IENvbW1hRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9ucyk7XG4gIH1cblxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmVsZW1lbnRFeHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbihub2RlOiBGdW5jdGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIC8vIG5vZGUuXG4gIH1cblxuICB2aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pc1R5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbChzdHI6IHN0cmluZywgc2luZ2xlUXVvdGVkPzogYm9vbGVhbik6IHZvaWQge31cblxuICB2aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXROZXdFeHByZXNzaW9uKG5vZGU6IE5ld0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5hcmd1bWVudHMpO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5wcm9wZXJ0eSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZlRoZW4pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZkVsc2UpO1xuICB9XG5cbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFN1cGVyRXhwcmVzc2lvbihub2RlOiBTdXBlckV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRGYWxzZUV4cHJlc3Npb24obm9kZTogRmFsc2VFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0VHJ1ZUV4cHJlc3Npb24obm9kZTogVHJ1ZUV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRUaGlzRXhwcmVzc2lvbihub2RlOiBUaGlzRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdE51bGxFeHBlcnNzaW9uKG5vZGU6IE51bGxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0Q29uc3RydWN0b3JFeHByZXNzaW9uKG5vZGU6IENvbnN0cnVjdG9yRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50OiBTdGF0ZW1lbnQpOiB2b2lkIHt9XG5cbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRCcmVha1N0YXRlbWVudChub2RlOiBCcmVha1N0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLmxhYmVsKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5sYWJlbCkge1xuICAgICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgaXNEZWZhdWx0PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIGFzc2VydChcbiAgICAgIG5vZGUuaXNHZW5lcmljID8gbm9kZS50eXBlUGFyYW1ldGVycyAhPSBudWxsIDogbm9kZS50eXBlUGFyYW1ldGVycyA9PSBudWxsXG4gICAgKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIGlmIChub2RlLmV4dGVuZHNUeXBlKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRFbXB0eVN0YXRlbWVudChub2RlOiBFbXB0eVN0YXRlbWVudCk6IHZvaWQge31cblxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZXMpO1xuICB9XG5cbiAgdmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlOiBFbnVtVmFsdWVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikge1xuICAgICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVybmFsTmFtZSk7XG4gIH1cblxuICB2aXNpdEV4cG9ydE1lbWJlcihub2RlOiBFeHBvcnRNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubG9jYWxOYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwb3J0ZWROYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLnBhdGgpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5wYXRoKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KG5vZGU6IEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KG5vZGU6IEV4cHJlc3Npb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS50eXBlKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgfVxuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gIH1cblxuICB2aXNpdEZvclN0YXRlbWVudChub2RlOiBGb3JTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICBpZiAobm9kZS5jb25kaXRpb24pIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIGlmIChub2RlLmluY3JlbWVudG9yKSB0aGlzLnZpc2l0KG5vZGUuaW5jcmVtZW50b3IpO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0PzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIGlmIChub2RlLmJvZHkpIHRoaXMudmlzaXQobm9kZS5ib2R5KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUubmFtZSlcbiAgfVxuXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKTtcbiAgICBpZiAobm9kZS5pZkZhbHNlKSB0aGlzLnZpc2l0KG5vZGUuaWZGYWxzZSk7XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmZvcmVpZ25OYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICB9XG5cbiAgdmlzaXRJbXBvcnRTdGF0ZW1lbnQobm9kZTogSW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUubmFtZXNwYWNlTmFtZSkgdGhpcy52aXNpdChub2RlLm5hbWVzcGFjZU5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKG5vZGU6IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgLy8gdGhpcy52aXNpdChub2RlLmtleVR5cGUpO1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS52YWx1ZVR5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbihcbiAgICBub2RlOiBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQ/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xuICAgIGlmIChub2RlLmV4dGVuZHNUeXBlKSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRNZXRob2REZWNsYXJhdGlvbihub2RlOiBNZXRob2REZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgaWYgKG5vZGUuYm9keSkgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0PzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIHZpc2l0UmV0dXJuU3RhdGVtZW50KG5vZGU6IFJldHVyblN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLnZhbHVlKSB0aGlzLnZpc2l0KG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRTd2l0Y2hDYXNlKG5vZGU6IFN3aXRjaENhc2UpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5sYWJlbCkgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gIH1cblxuICB2aXNpdFN3aXRjaFN0YXRlbWVudChub2RlOiBTd2l0Y2hTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLmNhc2VzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdFRocm93U3RhdGVtZW50KG5vZGU6IFRocm93U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgICBpZiAobm9kZS5jYXRjaFZhcmlhYmxlKSB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hWYXJpYWJsZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmZpbmFsbHlTdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS50eXBlKSB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdFZvaWRTdGF0ZW1lbnQobm9kZTogVm9pZFN0YXRlbWVudCk6IHZvaWQge31cblxuICB2aXNpdENvbW1lbnQobm9kZTogQ29tbWVudE5vZGUpOiB2b2lkIHt9XG5cbiAgdmlzaXREZWNvcmF0b3JOb2RlKG5vZGU6IERlY29yYXRvck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdFBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbikge1xuICAgICAgdGhpcy52aXNpdChub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgfVxuXG59XG4iXX0=

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-void-expression as-types as-variables
var ast_1 = __webpack_require__(/*! ../../src/ast */ "../src/ast.ts");
var common_1 = __webpack_require__(/*! ../../src/common */ "../src/common.ts");
var sourceBuilder_1 = __webpack_require__(/*! ./sourceBuilder */ "./src/sourceBuilder.ts");
var base_1 = __webpack_require__(/*! ./base */ "./src/base.ts");
var preamble_1 = __webpack_require__(/*! ./preamble */ "./src/preamble.ts");
function isComment(stmt) {
    return stmt.kind == ast_1.NodeKind.COMMENT;
}
function hasNearDecorator(stmt) {
    return stmt.text.includes("@nearfile");
}
function toString(node) {
    return sourceBuilder_1.ASTBuilder.build(node);
}
function isEntry(source) {
    var _source = ((source.kind == ast_1.NodeKind.SOURCE) ? source : source.range.source);
    return _source.sourceKind == ast_1.SourceKind.USER_ENTRY;
}
function isArrayType(type) {
    return !!((type.kind == ast_1.NodeKind.NAMEDTYPE) &&
        toString(type).startsWith("Array") &&
        type.typeArguments &&
        type.typeArguments.length > 0);
}
function isClass(type) {
    return type.kind == ast_1.NodeKind.CLASSDECLARATION;
}
function isField(mem) {
    return mem.kind == ast_1.NodeKind.FIELDDECLARATION;
}
function isReference(type) {
    var simpleTypes = [
        "i32",
        "u32",
        "string",
        "bool",
        "i64",
        "u64",
        "Uint8Array",
        "boolean"
    ];
    return !simpleTypes.includes(toString(type));
}
// TODO: Extract this into separate module, preferrable pluggable
var NEARBindingsBuilder = /** @class */ (function (_super) {
    __extends(NEARBindingsBuilder, _super);
    function NEARBindingsBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeMapping = {
            i32: "Integer",
            u32: "Integer",
            i64: "String",
            u64: "String",
            string: "String",
            bool: "Boolean",
            Uint8Array: "String",
        };
        _this.nonNullableTypes = ["i32", "u32", "i64", "u64", "bool", "boolean"];
        _this.sb = [];
        _this.exportedClasses = new Map();
        _this.wrappedFuncs = new Set();
        return _this;
    }
    NEARBindingsBuilder.build = function (parser, source) {
        return (new NEARBindingsBuilder().build(source));
    };
    NEARBindingsBuilder.nearFiles = function (parser) {
        return parser.program.sources.filter(hasNearDecorator);
    };
    NEARBindingsBuilder.prototype.visitClassDeclaration = function (node) {
        if (this.exportedClasses.has(toString(node.name)))
            return;
        this.generateHandler(node);
        this.exportedClasses.set(toString(node.name), node);
    };
    NEARBindingsBuilder.prototype.visitFunctionDeclaration = function (node) {
        if (this.wrappedFuncs.has(toString(node.name))
            || !(node.is(common_1.CommonFlags.EXPORT))) {
            _super.prototype.visitFunctionDeclaration.call(this, node);
            return;
        }
        this.generateArgsParser(node);
        this.generateWrapperFunction(node);
        // Change function to not be an export
        node.flags = node.flags ^ common_1.CommonFlags.EXPORT;
        this.wrappedFuncs.add(toString(node.name));
    };
    NEARBindingsBuilder.prototype.generateArgsParser = function (node) {
        var _this = this;
        var signature = node.signature;
        var name = toString(node.name);
        var args = signature.parameters.map(function (param) {
            var name = toString(param.name);
            var type = param.type;
            return { name: name,
                type: type,
                isGeneric: node.typeParameters != null && node.typeParameters.some(function (T) { return toString(T) == toString(type); })
            };
        });
        var _export = isEntry(node) ? "" : "export ";
        this.sb.push("\n" + _export + "class __near_ArgsParser_" + name + " extends ThrowingJSONHandler {\n  buffer: Uint8Array;\n  decoder: JSONDecoder<__near_ArgsParser_" + name + ">;\n  handledRoot: boolean = false;");
        if (args.length > 0) {
            args.forEach(function (arg) {
                _this.sb.push("  __near_param_" + arg.name + ": " + _this.typeName(arg.type) + ";");
            });
            this.generateHandlerMethods("this.__near_param_", args);
        }
        else {
            this.generateHandlerMethods("this.__near_param_", []);
        }
        this.sb.push("}");
    };
    /*
    Create a wrapper function that will be export in the function's place.
    */
    NEARBindingsBuilder.prototype.generateWrapperFunction = function (element) {
        var signature = element.signature;
        var params = signature.parameters;
        var returnType = signature.returnType;
        var name = element.name.symbol;
        this.sb.push("\n//@ts-ignore\nfunction __wrapper_" + name + "(): void {\n  // Reading input bytes.\n  input(0);\n  let json_len = register_len(0);\n  if (json_len == U32.MAX_VALUE) {\n    panic();\n  }\n  let json = new Uint8Array(json_len as u32);\n  read_register(0, <usize>json.buffer);\n\n  let handler = new __near_ArgsParser_" + name + "();\n  handler.buffer = json;\n  handler.decoder = new JSONDecoder<__near_ArgsParser_" + name + ">(handler);\n  handler.decoder.deserialize(json);");
        if (toString(returnType) !== "void") {
            this.sb.push("  let result: " + toString(returnType) + " = " + name + "(");
        }
        else {
            this.sb.push("  " + name + "(");
        }
        if (params.length > 0) {
            this.sb[this.sb.length - 1] += (params
                .map(function (paramName) { return "handler.__near_param_" + paramName.name.symbol; })
                .join(", "));
        }
        this.sb[this.sb.length - 1] += ");";
        if (toString(returnType) !== "void") {
            this.sb.push("\n  let encoder = new JSONEncoder();\n  let val = encode<" + toString(returnType) + ">(encoder, result).serialize();\n  value_return(val.byteLength, <usize>val.buffer);");
        }
        this.sb.push("}\n\nexport { __wrapper_" + name + " as " + name + " }\n");
    };
    NEARBindingsBuilder.prototype.generateHandlerMethods = function (valuePrefix, fields) {
        var _this = this;
        var fieldsWithTypes = function (types) {
            return fields.filter(function (field) {
                return types.indexOf(_this.typeName(field.type)) != -1 || field.isGeneric;
            });
        };
        this.generateBasicSetterHandlers(valuePrefix, "Integer", "i64", fieldsWithTypes(["i32", "u32"]));
        this.generateBasicSetterHandlers(valuePrefix, "String", "string", fieldsWithTypes(["string", "i64", "u64", "Uint8Array"]));
        this.generateBasicSetterHandlers(valuePrefix, "Boolean", "bool", fieldsWithTypes(["bool"]));
        var nonBasicFields = fields.filter(function (field) { return isReference(field.type) || field.isGeneric; });
        this.sb.push("  setNull(name: string): void {");
        nonBasicFields.forEach(function (field) {
            _this.sb.push("    if (name == \"" + field.name + "\") {");
            var setter = "" + valuePrefix + field.name + " = <" + _this.typeName(field.type) + ">null";
            if (field.isGeneric) {
                _this.sb.push("       if (isNullable<" + _this.typeName(field.type) + ">()){\n         " + setter + "\n          return;\n         }");
            }
            else {
                _this.sb.push("        " + setter + "\n         return;");
            }
            _this.sb.push("      }");
        });
        this.sb.push("\n    super.setNull(name);\n  }");
        this.sb.push("\n  pushObject(name: string): bool {");
        this.sb.push("if (!this.handledRoot) {\n      assert(name == null || name.length == 0);\n      this.handledRoot = true;\n      return true;\n    } else {\n      assert(name != null || name.length != 0);\n    }");
        this.generatePushHandler(valuePrefix, nonBasicFields.filter(function (field) { return !isArrayType(field.type); }));
        this.sb.push("\n    return super.pushObject(name);\n  }");
        this.sb.push("\n  pushArray(name: string): bool {");
        this.generatePushHandler(valuePrefix, nonBasicFields.filter(function (field) { return isArrayType(field.type); }));
        this.sb.push("\n    return super.pushArray(name);\n  }");
    };
    NEARBindingsBuilder.prototype.generateBasicSetterHandlers = function (valuePrefix, setterType, setterValueType, matchingFields) {
        var _this = this;
        if (matchingFields.length > 0) {
            this.sb.push("  set" + setterType + "(name: string, value: " + setterValueType + "): void {");
            matchingFields.forEach(function (field) {
                // tslint:disable-next-line: as-variables
                var fieldTypeName = _this.typeName(field.type);
                if (setterType == "String" && fieldTypeName != "string") {
                    if (fieldTypeName == "Uint8Array") {
                        _this.sb.push("    if (name == \"" + field.name + "\") {\n       " + valuePrefix + field.name + " = base64.decode(value);\n       return;\n     }");
                    }
                    else {
                        var className = _this.typeName(field.type) === "u64" ? "U64" : "I64";
                        _this.sb.push("    if (name == \"" + field.name + "\") {\n      " + valuePrefix + field.name + " = " + (field.isGeneric ? "<" + toString(field.type) + ">" : "") + className + ".parseInt(value);\n      return;\n     }");
                    }
                }
                else {
                    _this.sb.push("    if (name == \"" + field.name + "\") {\n      " + valuePrefix + field.name + " = <" + fieldTypeName + ">value;\n      return;\n     }");
                }
                if (field.isGeneric) {
                    _this.sb.push("    assert(is" + setterType + "<" + fieldTypeName + ">(), \"" + field.name + " is not a " + setterType + "\")");
                }
            });
            this.sb.push("    super.set" + setterType + "(name, value);\n    }");
        }
    };
    NEARBindingsBuilder.prototype.generatePushHandler = function (valuePrefix, fields) {
        var _this = this;
        fields.forEach(function (field) {
            if (!(_this.typeName(field.type) in _this.typeMapping)) {
                var referenceCheck = field.isGeneric ? " && isReference<" + _this.typeName(field.type) + ">()" : "";
                _this.sb.push("       if (name == \"" + field.name + "\"" + referenceCheck + ") {\n          " + valuePrefix + field.name + " = decode<" + toString(field.type) + ">(this.buffer, this.decoder.state);\n          return false;\n        }");
            }
        });
    };
    NEARBindingsBuilder.prototype.generateHandler = function (type) {
        if (isArrayType(type)) {
            return;
        }
        var typeName = this.typeName(type);
        this.sb
            .push("export class __near_JSONHandler_" + typeName + " extends ThrowingJSONHandler {\n  buffer: Uint8Array;\n  decoder: JSONDecoder<__near_JSONHandler_" + typeName + ">;\n  handledRoot: boolean = false;\n  value: " + this.typeName(type) + ";\n\n  constructor(value_: " + this.typeName(type) + ") {\n    super();\n    this.value = value_;\n  }\n      ");
        this.generateHandlerMethods("this.value.", this.getFields(type));
        this.sb.push("}\n");
    };
    NEARBindingsBuilder.prototype.typeName = function (type) {
        if (!isClass(type)) {
            return sourceBuilder_1.ASTBuilder.build(type);
        }
        type = (type);
        var className = toString(type.name);
        if (type.isGeneric) {
            className += "<" + type.typeParameters.map(toString).join(", ") + ">";
        }
        return className;
    };
    NEARBindingsBuilder.prototype.getFields = function (type) {
        var _class = ((isClass(type))
            ? type
            : this.exportedClasses.get(toString(type)));
        if (_class == null) {
            return [];
        }
        return _class.members
            .filter(function (member) { return member.kind == ast_1.NodeKind.FIELDDECLARATION; })
            .map(function (field) {
            return { name: toString(field.name), type: field.type, isGeneric: isGeneric(_class, field) };
        });
    };
    NEARBindingsBuilder.prototype.build = function (source) {
        var _this = this;
        this.sb = [preamble_1.preamble];
        this.visit(source);
        var sourceText = source.statements.map(function (stmt) {
            var str = sourceBuilder_1.ASTBuilder.build(stmt);
            if (isClass(stmt)) {
                var _class = stmt;
                str = str.slice(0, str.lastIndexOf("}"));
                var fields = _class.members.filter(isField).map(function (field) { return field; });
                if (fields.some(function (field) { return field.type == null; })) {
                    throw new Error("All Fields must have explict type declaration.");
                }
                var className = _this.typeName(_class);
                str += "\n  static decode(json: Uint8Array, state: DecoderState | null = null): " + className + " {\n    let value = instantiate<" + className + ">(); // Allocate without constructor\n    value.decode(json, state);\n    return value;\n  }\n\n  decode(json: Uint8Array, state: DecoderState | null): " + className + " {\n    let handler: __near_JSONHandler_" + className + " = new __near_JSONHandler_" + className + "(this);\n    handler.buffer = json;\n    let decoder = new JSONDecoder<__near_JSONHandler_" + className + ">(handler);\n    handler.decoder = decoder;\n    decoder.deserialize(json, state);\n    return this;\n  }\n\n  encode(_encoder: JSONEncoder | null = null, name: string | null = \"\"): JSONEncoder {\n    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;\n    encoder.pushObject(name);\n    " + createEncodeStatements(_class).join("\n    ") + "\n    encoder.popObject();\n    return encoder\n  }\n\n  serialize(): Uint8Array {\n    return this.encode().serialize();\n  }\n\n  toJSON(): string {\n    return this.encode().toString();\n  }\n}";
            }
            return str;
        });
        return this.sb.concat(sourceText).join("\n");
    };
    return NEARBindingsBuilder;
}(base_1.BaseVisitor));
function createEncodeStatements(_class) {
    return _class.members.filter(isField).map(function (field) {
        var T = toString(field.type);
        var name = toString(field.name);
        return "encode<" + T + ">(encoder, this." + name + ", \"" + name + "\");";
    });
}
// TODO: Make work for non-simple generics e.g. field: Array<T>
function isGeneric(_class, field) {
    if (_class.typeParameters == null) {
        return false;
    }
    return _class.typeParameters.some(function (param) { return toString(param.name) == toString(field.type); });
}
function afterParse(parser, writeFile, baseDir) {
    var files = NEARBindingsBuilder.nearFiles(parser);
    files.forEach(function (source) {
        var writeOut = source.text.substr(0, source.text.indexOf("\n")).includes("out");
        // Remove from logs in parser
        parser.donelog.delete(source.internalPath);
        parser.seenlog.delete(source.internalPath);
        // Remove from programs sources
        parser.program.sources = parser.program.sources.filter(function (_source) { return _source !== source; });
        // Build new Source
        var sourceText = NEARBindingsBuilder.build(parser, source);
        if (writeOut) {
            writeFile("out/" + source.normalizedPath, sourceText, baseDir);
        }
        // Parses file and any new imports added to the source
        parser.parseFile(sourceText, (isEntry(source) ? "" : "./") + source.normalizedPath, isEntry(source));
    });
}
exports.afterParse = afterParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTJEO0FBQzNELHFDQVl1QjtBQUN2QiwyQ0FBK0M7QUFHL0MsaURBQTZDO0FBQzdDLCtCQUFxQztBQUNyQyx1Q0FBc0M7QUFRdEMsU0FBUyxTQUFTLENBQUMsSUFBZTtJQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksY0FBUSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVU7SUFDMUIsT0FBTywwQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBcUI7SUFDcEMsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksY0FBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEYsT0FBTyxPQUFPLENBQUMsVUFBVSxJQUFJLGdCQUFVLENBQUMsVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFpQztJQUNwRCxPQUFPLENBQUMsQ0FBQyxDQUNQLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxjQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2xCLElBQUssQ0FBQyxhQUFhO1FBQ25CLElBQUssQ0FBQyxhQUFjLENBQUMsTUFBTSxHQUFHLENB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QUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRiw2QkFBNkI7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQywrQkFBK0I7UUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNwRCxVQUFDLE9BQWUsSUFBSyxPQUFBLE9BQU8sS0FBSyxNQUFNLEVBQWxCLENBQWtCLENBQ3hDLENBQUM7UUFDRixtQkFBbUI7UUFDbkIsSUFBSSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLFFBQVEsRUFBRTtZQUNiLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxzREFBc0Q7UUFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FDZCxVQUFVLEVBQ1YsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLGNBQWMsRUFDckQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDO0FBeEJELGdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBuby12b2lkLWV4cHJlc3Npb24gYXMtdHlwZXMgYXMtdmFyaWFibGVzXG5pbXBvcnQge1xuICBTb3VyY2UsXG4gIE5vZGVLaW5kLFxuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBUeXBlTm9kZSxcbiAgRmllbGREZWNsYXJhdGlvbixcbiAgU3RhdGVtZW50LFxuICBOb2RlLFxuICBOYW1lZFR5cGVOb2RlLFxuICBTb3VyY2VLaW5kLFxuICBEZWNsYXJhdGlvblN0YXRlbWVudFxufSBmcm9tIFwiLi4vLi4vc3JjL2FzdFwiO1xuaW1wb3J0IHsgQ29tbW9uRmxhZ3MgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vblwiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vbW9ja1R5cGVzXCI7XG5cbmltcG9ydCB7IEFTVEJ1aWxkZXIgfSBmcm9tIFwiLi9zb3VyY2VCdWlsZGVyXCI7XG5pbXBvcnQgeyBCYXNlVmlzaXRvciB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IHByZWFtYmxlIH0gZnJvbSBcIi4vcHJlYW1ibGVcIjtcblxuaW50ZXJmYWNlIFNpbXBsZUZpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlTm9kZTtcbiAgaXNHZW5lcmljOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBpc0NvbW1lbnQoc3RtdDogU3RhdGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBzdG10LmtpbmQgPT0gTm9kZUtpbmQuQ09NTUVOVDtcbn1cblxuZnVuY3Rpb24gaGFzTmVhckRlY29yYXRvcihzdG10OiBTb3VyY2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN0bXQudGV4dC5pbmNsdWRlcyhcIkBuZWFyZmlsZVwiKTtcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcobm9kZTogTm9kZSk6IHN0cmluZyB7XG4gIHJldHVybiBBU1RCdWlsZGVyLmJ1aWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5KHNvdXJjZTogU291cmNlIHwgTm9kZSk6IGJvb2xlYW4ge1xuICBsZXQgX3NvdXJjZSA9IDxTb3VyY2U+KChzb3VyY2Uua2luZCA9PSBOb2RlS2luZC5TT1VSQ0UpID8gc291cmNlIDogc291cmNlLnJhbmdlLnNvdXJjZSk7XG4gIHJldHVybiBfc291cmNlLnNvdXJjZUtpbmQgPT0gU291cmNlS2luZC5VU0VSX0VOVFJZO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5VHlwZSh0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24pOiBib29sZWFuIHtcbiAgcmV0dXJuICEhKFxuICAgICh0eXBlLmtpbmQgPT0gTm9kZUtpbmQuTkFNRURUWVBFKSAmJlxuICAgIHRvU3RyaW5nKHR5cGUpLnN0YXJ0c1dpdGgoXCJBcnJheVwiKSAmJlxuICAgICg8TmFtZWRUeXBlTm9kZT50eXBlKS50eXBlQXJndW1lbnRzICYmXG4gICAgKDxOYW1lZFR5cGVOb2RlPnR5cGUpLnR5cGVBcmd1bWVudHMhLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDbGFzcyh0eXBlOiBOb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlLmtpbmQgPT0gTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjtcbn1cblxuZnVuY3Rpb24gaXNGaWVsZChtZW06IERlY2xhcmF0aW9uU3RhdGVtZW50KSB7XG4gIHJldHVybiBtZW0ua2luZCA9PSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OO1xufVxuXG5mdW5jdGlvbiBpc1JlZmVyZW5jZSh0eXBlOiBUeXBlTm9kZSk6IGJvb2xlYW4ge1xuICBsZXQgc2ltcGxlVHlwZXMgPSBbXG4gICAgXCJpMzJcIixcbiAgICBcInUzMlwiLFxuICAgIFwic3RyaW5nXCIsXG4gICAgXCJib29sXCIsXG4gICAgXCJpNjRcIixcbiAgICBcInU2NFwiLFxuICAgIFwiVWludDhBcnJheVwiLFxuICAgIFwiYm9vbGVhblwiXG4gIF07XG4gIHJldHVybiAhc2ltcGxlVHlwZXMuaW5jbHVkZXModG9TdHJpbmcodHlwZSkpO1xufVxuXG4vLyBUT0RPOiBFeHRyYWN0IHRoaXMgaW50byBzZXBhcmF0ZSBtb2R1bGUsIHByZWZlcnJhYmxlIHBsdWdnYWJsZVxuY2xhc3MgTkVBUkJpbmRpbmdzQnVpbGRlciBleHRlbmRzIEJhc2VWaXNpdG9yIHtcbiAgcHJpdmF0ZSB0eXBlTWFwcGluZzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICBpMzI6IFwiSW50ZWdlclwiLFxuICAgIHUzMjogXCJJbnRlZ2VyXCIsXG4gICAgaTY0OiBcIlN0cmluZ1wiLFxuICAgIHU2NDogXCJTdHJpbmdcIixcbiAgICBzdHJpbmc6IFwiU3RyaW5nXCIsXG4gICAgYm9vbDogXCJCb29sZWFuXCIsXG4gICAgVWludDhBcnJheTogXCJTdHJpbmdcIixcbiAgfTtcblxuICBwcml2YXRlIG5vbk51bGxhYmxlVHlwZXMgPSBbXCJpMzJcIiwgXCJ1MzJcIiwgXCJpNjRcIiwgXCJ1NjRcIiwgXCJib29sXCIsIFwiYm9vbGVhblwiXTtcblxuICBwcml2YXRlIHNiOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGV4cG9ydGVkQ2xhc3NlczogTWFwPHN0cmluZywgQ2xhc3NEZWNsYXJhdGlvbj4gPSBuZXcgTWFwKCk7XG4gIHdyYXBwZWRGdW5jczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgc3RhdGljIGJ1aWxkKHBhcnNlcjogUGFyc2VyLCBzb3VyY2U6IFNvdXJjZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChuZXcgTkVBUkJpbmRpbmdzQnVpbGRlcigpLmJ1aWxkKHNvdXJjZSkpO1xuICB9XG5cbiAgc3RhdGljIG5lYXJGaWxlcyhwYXJzZXI6IFBhcnNlcik6IFNvdXJjZVtdIHtcbiAgICByZXR1cm4gcGFyc2VyLnByb2dyYW0uc291cmNlcy5maWx0ZXIoaGFzTmVhckRlY29yYXRvcik7XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cG9ydGVkQ2xhc3Nlcy5oYXModG9TdHJpbmcobm9kZS5uYW1lKSkpIHJldHVybjtcbiAgICB0aGlzLmdlbmVyYXRlSGFuZGxlcihub2RlKTtcbiAgICB0aGlzLmV4cG9ydGVkQ2xhc3Nlcy5zZXQodG9TdHJpbmcobm9kZS5uYW1lKSwgbm9kZSk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLndyYXBwZWRGdW5jcy5oYXModG9TdHJpbmcobm9kZS5uYW1lKSlcbiAgICAgICAgfHwgIShub2RlLmlzKENvbW1vbkZsYWdzLkVYUE9SVCkpKSB7XG4gICAgICAgIHN1cGVyLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdlbmVyYXRlQXJnc1BhcnNlcihub2RlKTtcbiAgICB0aGlzLmdlbmVyYXRlV3JhcHBlckZ1bmN0aW9uKG5vZGUpO1xuICAgIC8vIENoYW5nZSBmdW5jdGlvbiB0byBub3QgYmUgYW4gZXhwb3J0XG4gICAgbm9kZS5mbGFncyA9IG5vZGUuZmxhZ3MgXiBDb21tb25GbGFncy5FWFBPUlQ7XG4gICAgdGhpcy53cmFwcGVkRnVuY3MuYWRkKHRvU3RyaW5nKG5vZGUubmFtZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFyZ3NQYXJzZXIobm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBzaWduYXR1cmUgPSBub2RlLnNpZ25hdHVyZTtcbiAgICBsZXQgbmFtZSA9IHRvU3RyaW5nKG5vZGUubmFtZSk7XG4gICAgdmFyIGFyZ3M6IFNpbXBsZUZpZWxkW10gPSBzaWduYXR1cmUucGFyYW1ldGVycy5tYXAocGFyYW0gPT4ge1xuICAgICAgbGV0IG5hbWUgPSB0b1N0cmluZyhwYXJhbS5uYW1lKTtcbiAgICAgIGxldCB0eXBlID0gcGFyYW0udHlwZTtcbiAgICAgIHJldHVybiB7IG5hbWUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGlzR2VuZXJpYzogbm9kZS50eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIG5vZGUudHlwZVBhcmFtZXRlcnMuc29tZShUID0+IHRvU3RyaW5nKFQpID09IHRvU3RyaW5nKHR5cGUpKVxuICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgX2V4cG9ydCA9IGlzRW50cnkobm9kZSkgPyBcIlwiIDogXCJleHBvcnQgXCI7XG4gICAgdGhpcy5zYi5wdXNoKGBcbiR7X2V4cG9ydH1jbGFzcyBfX25lYXJfQXJnc1BhcnNlcl8ke25hbWV9IGV4dGVuZHMgVGhyb3dpbmdKU09OSGFuZGxlciB7XG4gIGJ1ZmZlcjogVWludDhBcnJheTtcbiAgZGVjb2RlcjogSlNPTkRlY29kZXI8X19uZWFyX0FyZ3NQYXJzZXJfJHtuYW1lfT47XG4gIGhhbmRsZWRSb290OiBib29sZWFuID0gZmFsc2U7YCk7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgYXJncy5mb3JFYWNoKGFyZyA9PiB7XG4gICAgICAgIHRoaXMuc2IucHVzaChcbmAgIF9fbmVhcl9wYXJhbV8ke2FyZy5uYW1lfTogJHt0aGlzLnR5cGVOYW1lKGFyZy50eXBlKX07YFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmdlbmVyYXRlSGFuZGxlck1ldGhvZHMoXCJ0aGlzLl9fbmVhcl9wYXJhbV9cIiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVIYW5kbGVyTWV0aG9kcyhcInRoaXMuX19uZWFyX3BhcmFtX1wiLCBbXSk7XG4gICAgfVxuICAgIHRoaXMuc2IucHVzaChgfWApO1xuICB9XG5cbiAgLyogXG4gIENyZWF0ZSBhIHdyYXBwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4cG9ydCBpbiB0aGUgZnVuY3Rpb24ncyBwbGFjZS5cbiAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVdyYXBwZXJGdW5jdGlvbihlbGVtZW50OiBGdW5jdGlvbkRlY2xhcmF0aW9uKSB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IGVsZW1lbnQuc2lnbmF0dXJlO1xuICAgIGxldCBwYXJhbXMgPSBzaWduYXR1cmUucGFyYW1ldGVycztcbiAgICBsZXQgcmV0dXJuVHlwZSA9IHNpZ25hdHVyZS5yZXR1cm5UeXBlO1xuICAgIGxldCBuYW1lID0gZWxlbWVudC5uYW1lLnN5bWJvbDtcbiAgICB0aGlzLnNiLnB1c2goYFxuLy9AdHMtaWdub3JlXG5mdW5jdGlvbiBfX3dyYXBwZXJfJHtuYW1lfSgpOiB2b2lkIHtcbiAgLy8gUmVhZGluZyBpbnB1dCBieXRlcy5cbiAgaW5wdXQoMCk7XG4gIGxldCBqc29uX2xlbiA9IHJlZ2lzdGVyX2xlbigwKTtcbiAgaWYgKGpzb25fbGVuID09IFUzMi5NQVhfVkFMVUUpIHtcbiAgICBwYW5pYygpO1xuICB9XG4gIGxldCBqc29uID0gbmV3IFVpbnQ4QXJyYXkoanNvbl9sZW4gYXMgdTMyKTtcbiAgcmVhZF9yZWdpc3RlcigwLCA8dXNpemU+anNvbi5idWZmZXIpO1xuXG4gIGxldCBoYW5kbGVyID0gbmV3IF9fbmVhcl9BcmdzUGFyc2VyXyR7bmFtZX0oKTtcbiAgaGFuZGxlci5idWZmZXIgPSBqc29uO1xuICBoYW5kbGVyLmRlY29kZXIgPSBuZXcgSlNPTkRlY29kZXI8X19uZWFyX0FyZ3NQYXJzZXJfJHtuYW1lfT4oaGFuZGxlcik7XG4gIGhhbmRsZXIuZGVjb2Rlci5kZXNlcmlhbGl6ZShqc29uKTtgKTtcbiAgICBpZiAodG9TdHJpbmcocmV0dXJuVHlwZSkgIT09IFwidm9pZFwiKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXG5gICBsZXQgcmVzdWx0OiAke3RvU3RyaW5nKHJldHVyblR5cGUpfSA9ICR7bmFtZX0oYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2IucHVzaChcbmAgICR7bmFtZX0oYCk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zYlt0aGlzLnNiLmxlbmd0aCAtIDFdICs9IChcbiAgICAgICAgcGFyYW1zXG4gICAgICAgICAgLm1hcChwYXJhbU5hbWUgPT4gYGhhbmRsZXIuX19uZWFyX3BhcmFtXyR7cGFyYW1OYW1lLm5hbWUuc3ltYm9sfWApXG4gICAgICAgICAgLmpvaW4oXCIsIFwiKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5zYlt0aGlzLnNiLmxlbmd0aCAtIDFdICs9IFwiKTtcIjtcbiAgICBpZiAodG9TdHJpbmcocmV0dXJuVHlwZSkgIT09IFwidm9pZFwiKSB7XG4gICAgICB0aGlzLnNiLnB1c2goYFxuICBsZXQgZW5jb2RlciA9IG5ldyBKU09ORW5jb2RlcigpO1xuICBsZXQgdmFsID0gZW5jb2RlPCR7dG9TdHJpbmcocmV0dXJuVHlwZSl9PihlbmNvZGVyLCByZXN1bHQpLnNlcmlhbGl6ZSgpO1xuICB2YWx1ZV9yZXR1cm4odmFsLmJ5dGVMZW5ndGgsIDx1c2l6ZT52YWwuYnVmZmVyKTtgKTtcbiAgICB9XG4gICAgdGhpcy5zYi5wdXNoKGB9XG5cbmV4cG9ydCB7IF9fd3JhcHBlcl8ke25hbWV9IGFzICR7bmFtZX0gfVxuYCk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlck1ldGhvZHMoXG4gICAgdmFsdWVQcmVmaXg6IHN0cmluZyxcbiAgICBmaWVsZHM6IFNpbXBsZUZpZWxkW11cbiAgKTogdm9pZCB7XG4gICAgdmFyIGZpZWxkc1dpdGhUeXBlcyA9ICh0eXBlczogc3RyaW5nW10pOiBTaW1wbGVGaWVsZFtdID0+XG4gICAgICBmaWVsZHMuZmlsdGVyKGZpZWxkID0+XG4gICAgICAgICAgICB0eXBlcy5pbmRleE9mKHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkpICE9IC0xIHx8IGZpZWxkLmlzR2VuZXJpYyk7XG5cbiAgICB0aGlzLmdlbmVyYXRlQmFzaWNTZXR0ZXJIYW5kbGVycyhcbiAgICAgIHZhbHVlUHJlZml4LFxuICAgICAgXCJJbnRlZ2VyXCIsXG4gICAgICBcImk2NFwiLFxuICAgICAgZmllbGRzV2l0aFR5cGVzKFtcImkzMlwiLCBcInUzMlwiXSlcbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVCYXNpY1NldHRlckhhbmRsZXJzKFxuICAgICAgdmFsdWVQcmVmaXgsXG4gICAgICBcIlN0cmluZ1wiLFxuICAgICAgXCJzdHJpbmdcIixcbiAgICAgIGZpZWxkc1dpdGhUeXBlcyhbXCJzdHJpbmdcIiwgXCJpNjRcIiwgXCJ1NjRcIiwgXCJVaW50OEFycmF5XCJdKVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUJhc2ljU2V0dGVySGFuZGxlcnMoXG4gICAgICB2YWx1ZVByZWZpeCxcbiAgICAgIFwiQm9vbGVhblwiLFxuICAgICAgXCJib29sXCIsXG4gICAgICBmaWVsZHNXaXRoVHlwZXMoW1wiYm9vbFwiXSlcbiAgICApO1xuXG4gICAgdmFyIG5vbkJhc2ljRmllbGRzID0gZmllbGRzLmZpbHRlcihmaWVsZCA9PiBpc1JlZmVyZW5jZShmaWVsZC50eXBlKSB8fCBmaWVsZC5pc0dlbmVyaWMpO1xuXG4gICAgdGhpcy5zYi5wdXNoKGAgIHNldE51bGwobmFtZTogc3RyaW5nKTogdm9pZCB7YCk7XG4gICAgbm9uQmFzaWNGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICB0aGlzLnNiLnB1c2goXG5gICAgIGlmIChuYW1lID09IFwiJHtmaWVsZC5uYW1lfVwiKSB7YCk7XG4gICAgICBsZXQgc2V0dGVyID0gYCR7dmFsdWVQcmVmaXh9JHtmaWVsZC5uYW1lfSA9IDwke3RoaXMudHlwZU5hbWUoZmllbGQudHlwZSl9Pm51bGxgO1xuICAgICAgaWYgKGZpZWxkLmlzR2VuZXJpYykge1xuICAgICAgICB0aGlzLnNiLnB1c2goXG5gICAgICAgIGlmIChpc051bGxhYmxlPCR7dGhpcy50eXBlTmFtZShmaWVsZC50eXBlKX0+KCkpe1xuICAgICAgICAgJHtzZXR0ZXJ9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfWApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgdGhpcy5zYi5wdXNoKFxuYCAgICAgICAgJHtzZXR0ZXJ9XG4gICAgICAgICByZXR1cm47YCk7XG4gICAgICAgIH1cbiAgICAgIHRoaXMuc2IucHVzaChcbmAgICAgICB9YCk7XG4gICAgfSk7XG4gICAgdGhpcy5zYi5wdXNoKGBcbiAgICBzdXBlci5zZXROdWxsKG5hbWUpO1xuICB9YCk7XG5cbiAgICB0aGlzLnNiLnB1c2goYFxuICBwdXNoT2JqZWN0KG5hbWU6IHN0cmluZyk6IGJvb2wge2ApO1xuICAgIHRoaXMuc2IucHVzaChcbiAgICBgaWYgKCF0aGlzLmhhbmRsZWRSb290KSB7XG4gICAgICBhc3NlcnQobmFtZSA9PSBudWxsIHx8IG5hbWUubGVuZ3RoID09IDApO1xuICAgICAgdGhpcy5oYW5kbGVkUm9vdCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0KG5hbWUgIT0gbnVsbCB8fCBuYW1lLmxlbmd0aCAhPSAwKTtcbiAgICB9YCk7XG4gICAgdGhpcy5nZW5lcmF0ZVB1c2hIYW5kbGVyKFxuICAgICAgdmFsdWVQcmVmaXgsXG4gICAgICBub25CYXNpY0ZpZWxkcy5maWx0ZXIoZmllbGQgPT4gIWlzQXJyYXlUeXBlKGZpZWxkLnR5cGUpKVxuICAgICk7XG4gICAgdGhpcy5zYi5wdXNoKGBcbiAgICByZXR1cm4gc3VwZXIucHVzaE9iamVjdChuYW1lKTtcbiAgfWApO1xuICAgIHRoaXMuc2IucHVzaChgXG4gIHB1c2hBcnJheShuYW1lOiBzdHJpbmcpOiBib29sIHtgKTtcbiAgICB0aGlzLmdlbmVyYXRlUHVzaEhhbmRsZXIoXG4gICAgICB2YWx1ZVByZWZpeCxcbiAgICAgIG5vbkJhc2ljRmllbGRzLmZpbHRlcihmaWVsZCA9PiBpc0FycmF5VHlwZShmaWVsZC50eXBlKSlcbiAgICApO1xuICAgIHRoaXMuc2IucHVzaChgXG4gICAgcmV0dXJuIHN1cGVyLnB1c2hBcnJheShuYW1lKTtcbiAgfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUJhc2ljU2V0dGVySGFuZGxlcnMoXG4gICAgdmFsdWVQcmVmaXg6IHN0cmluZyxcbiAgICBzZXR0ZXJUeXBlOiBzdHJpbmcsXG4gICAgc2V0dGVyVmFsdWVUeXBlOiBzdHJpbmcsXG4gICAgbWF0Y2hpbmdGaWVsZHM6IFNpbXBsZUZpZWxkW11cbiAgKSB7XG4gICAgaWYgKG1hdGNoaW5nRmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2IucHVzaChcbmAgIHNldCR7c2V0dGVyVHlwZX0obmFtZTogc3RyaW5nLCB2YWx1ZTogJHtzZXR0ZXJWYWx1ZVR5cGV9KTogdm9pZCB7YFxuICAgICAgKTtcbiAgICAgIG1hdGNoaW5nRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGFzLXZhcmlhYmxlc1xuICAgICAgICBsZXQgZmllbGRUeXBlTmFtZSA9IHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSk7XG4gICAgICAgIGlmIChzZXR0ZXJUeXBlID09IFwiU3RyaW5nXCIgJiYgZmllbGRUeXBlTmFtZSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgaWYgKGZpZWxkVHlwZU5hbWUgPT0gXCJVaW50OEFycmF5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2IucHVzaChcbmAgICAgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICAke3ZhbHVlUHJlZml4fSR7ZmllbGQubmFtZX0gPSBiYXNlNjQuZGVjb2RlKHZhbHVlKTtcbiAgICAgICByZXR1cm47XG4gICAgIH1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkgPT09IFwidTY0XCIgPyBcIlU2NFwiIDogXCJJNjRcIjtcbiAgICAgICAgICAgIHRoaXMuc2IucHVzaChcbmAgICAgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICR7dmFsdWVQcmVmaXh9JHtmaWVsZC5uYW1lfSA9ICR7ZmllbGQuaXNHZW5lcmljID8gXCI8XCIgKyB0b1N0cmluZyhmaWVsZC50eXBlKSArIFwiPlwiIDogXCJcIn0ke2NsYXNzTmFtZX0ucGFyc2VJbnQodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgICB9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2IucHVzaChcbmAgICAgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIpIHtcbiAgICAgICR7dmFsdWVQcmVmaXh9JHtmaWVsZC5uYW1lfSA9IDwke2ZpZWxkVHlwZU5hbWV9PnZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgICB9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkLmlzR2VuZXJpYykge1xuICAgICAgICAgIHRoaXMuc2IucHVzaChcbmAgICAgYXNzZXJ0KGlzJHtzZXR0ZXJUeXBlfTwke2ZpZWxkVHlwZU5hbWV9PigpLCBcIiR7ZmllbGQubmFtZX0gaXMgbm90IGEgJHtzZXR0ZXJUeXBlfVwiKWApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zYi5wdXNoKFxuYCAgICBzdXBlci5zZXQke3NldHRlclR5cGV9KG5hbWUsIHZhbHVlKTtcbiAgICB9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVB1c2hIYW5kbGVyKHZhbHVlUHJlZml4OiBzdHJpbmcsIGZpZWxkczogU2ltcGxlRmllbGRbXSkge1xuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGlmICghKHRoaXMudHlwZU5hbWUoZmllbGQudHlwZSkgaW4gdGhpcy50eXBlTWFwcGluZykpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNoZWNrID0gZmllbGQuaXNHZW5lcmljID8gYCAmJiBpc1JlZmVyZW5jZTwke3RoaXMudHlwZU5hbWUoZmllbGQudHlwZSl9PigpYCA6IFwiXCI7XG4gICAgICAgIHRoaXMuc2IucHVzaChcbmAgICAgICAgaWYgKG5hbWUgPT0gXCIke2ZpZWxkLm5hbWV9XCIke3JlZmVyZW5jZUNoZWNrfSkge1xuICAgICAgICAgICR7dmFsdWVQcmVmaXh9JHtmaWVsZC5uYW1lfSA9IGRlY29kZTwke3RvU3RyaW5nKGZpZWxkLnR5cGUpfT4odGhpcy5idWZmZXIsIHRoaXMuZGVjb2Rlci5zdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlcih0eXBlOiBUeXBlTm9kZSB8IENsYXNzRGVjbGFyYXRpb24pIHtcbiAgICBpZiAoaXNBcnJheVR5cGUodHlwZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHR5cGVOYW1lID0gdGhpcy50eXBlTmFtZSh0eXBlKTtcbiAgICB0aGlzLnNiXG4gICAgICAucHVzaChgZXhwb3J0IGNsYXNzIF9fbmVhcl9KU09OSGFuZGxlcl8ke3R5cGVOYW1lfSBleHRlbmRzIFRocm93aW5nSlNPTkhhbmRsZXIge1xuICBidWZmZXI6IFVpbnQ4QXJyYXk7XG4gIGRlY29kZXI6IEpTT05EZWNvZGVyPF9fbmVhcl9KU09OSGFuZGxlcl8ke3R5cGVOYW1lfT47XG4gIGhhbmRsZWRSb290OiBib29sZWFuID0gZmFsc2U7XG4gIHZhbHVlOiAke3RoaXMudHlwZU5hbWUodHlwZSl9O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlXzogJHt0aGlzLnR5cGVOYW1lKHR5cGUpfSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXztcbiAgfVxuICAgICAgYCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlSGFuZGxlck1ldGhvZHMoXCJ0aGlzLnZhbHVlLlwiLCB0aGlzLmdldEZpZWxkcyh0eXBlKSk7XG4gICAgdGhpcy5zYi5wdXNoKFwifVxcblwiKTtcbiAgfVxuXG4gIHByaXZhdGUgdHlwZU5hbWUodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzQ2xhc3ModHlwZSkpIHtcbiAgICAgIHJldHVybiBBU1RCdWlsZGVyLmJ1aWxkKHR5cGUpO1xuICAgIH1cbiAgICB0eXBlID0gPENsYXNzRGVjbGFyYXRpb24+KHR5cGUpO1xuICAgIGxldCBjbGFzc05hbWUgPSB0b1N0cmluZyh0eXBlLm5hbWUpO1xuICAgIGlmICh0eXBlLmlzR2VuZXJpYykge1xuICAgICAgY2xhc3NOYW1lICs9IFwiPFwiICsgdHlwZS50eXBlUGFyYW1ldGVycyEubWFwKHRvU3RyaW5nKS5qb2luKFwiLCBcIikgKyBcIj5cIjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmllbGRzKHR5cGU6IFR5cGVOb2RlIHwgQ2xhc3NEZWNsYXJhdGlvbik6IFNpbXBsZUZpZWxkW10ge1xuICAgIGxldCBfY2xhc3MgPSA8Q2xhc3NEZWNsYXJhdGlvbj4gKChpc0NsYXNzKHR5cGUpKVxuICAgICAgICA/IHR5cGVcbiAgICAgICAgOiB0aGlzLmV4cG9ydGVkQ2xhc3Nlcy5nZXQodG9TdHJpbmcodHlwZSkpKTtcbiAgICBpZiAoX2NsYXNzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NsYXNzLm1lbWJlcnNcbiAgICAgIC5maWx0ZXIobWVtYmVyID0+IG1lbWJlci5raW5kID09IE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT04pXG4gICAgICAubWFwKFxuICAgICAgICAoZmllbGQ6IEZpZWxkRGVjbGFyYXRpb24pOiBTaW1wbGVGaWVsZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogdG9TdHJpbmcoZmllbGQubmFtZSksIHR5cGU6IGZpZWxkLnR5cGUhLCBpc0dlbmVyaWM6IGlzR2VuZXJpYyhfY2xhc3MsIGZpZWxkKX07XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBidWlsZChzb3VyY2U6IFNvdXJjZSk6IHN0cmluZyB7XG4gICAgICB0aGlzLnNiID0gW3ByZWFtYmxlXTtcbiAgICAgIHRoaXMudmlzaXQoc291cmNlKTtcbiAgICAgIGxldCBzb3VyY2VUZXh0ID0gc291cmNlLnN0YXRlbWVudHMubWFwKHN0bXQgPT4ge1xuICAgICAgICBsZXQgc3RyID0gQVNUQnVpbGRlci5idWlsZChzdG10KTtcbiAgICAgICAgaWYgKGlzQ2xhc3Moc3RtdCkpIHtcbiAgICAgICAgICBsZXQgX2NsYXNzID0gPENsYXNzRGVjbGFyYXRpb24+IHN0bXQ7XG4gICAgICAgICAgc3RyID0gc3RyLnNsaWNlKDAsIHN0ci5sYXN0SW5kZXhPZihcIn1cIikpO1xuICAgICAgICAgIGxldCBmaWVsZHMgPSBfY2xhc3MubWVtYmVycy5maWx0ZXIoaXNGaWVsZCkubWFwKChmaWVsZDogRmllbGREZWNsYXJhdGlvbikgPT4gZmllbGQpO1xuICAgICAgICAgIGlmIChmaWVsZHMuc29tZShmaWVsZCA9PiBmaWVsZC50eXBlID09IG51bGwpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbGwgRmllbGRzIG11c3QgaGF2ZSBleHBsaWN0IHR5cGUgZGVjbGFyYXRpb24uXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy50eXBlTmFtZShfY2xhc3MpO1xuICAgICAgICAgIHN0ciArPSBgXG4gIHN0YXRpYyBkZWNvZGUoanNvbjogVWludDhBcnJheSwgc3RhdGU6IERlY29kZXJTdGF0ZSB8IG51bGwgPSBudWxsKTogJHtjbGFzc05hbWV9IHtcbiAgICBsZXQgdmFsdWUgPSBpbnN0YW50aWF0ZTwke2NsYXNzTmFtZX0+KCk7IC8vIEFsbG9jYXRlIHdpdGhvdXQgY29uc3RydWN0b3JcbiAgICB2YWx1ZS5kZWNvZGUoanNvbiwgc3RhdGUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGRlY29kZShqc29uOiBVaW50OEFycmF5LCBzdGF0ZTogRGVjb2RlclN0YXRlIHwgbnVsbCk6ICR7Y2xhc3NOYW1lfSB7XG4gICAgbGV0IGhhbmRsZXI6IF9fbmVhcl9KU09OSGFuZGxlcl8ke2NsYXNzTmFtZX0gPSBuZXcgX19uZWFyX0pTT05IYW5kbGVyXyR7Y2xhc3NOYW1lfSh0aGlzKTtcbiAgICBoYW5kbGVyLmJ1ZmZlciA9IGpzb247XG4gICAgbGV0IGRlY29kZXIgPSBuZXcgSlNPTkRlY29kZXI8X19uZWFyX0pTT05IYW5kbGVyXyR7Y2xhc3NOYW1lfT4oaGFuZGxlcik7XG4gICAgaGFuZGxlci5kZWNvZGVyID0gZGVjb2RlcjtcbiAgICBkZWNvZGVyLmRlc2VyaWFsaXplKGpzb24sIHN0YXRlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuY29kZShfZW5jb2RlcjogSlNPTkVuY29kZXIgfCBudWxsID0gbnVsbCwgbmFtZTogc3RyaW5nIHwgbnVsbCA9IFwiXCIpOiBKU09ORW5jb2RlciB7XG4gICAgbGV0IGVuY29kZXIgPSAoX2VuY29kZXIgIT0gbnVsbCA/IF9lbmNvZGVyIDogbmV3IEpTT05FbmNvZGVyKCkpITtcbiAgICBlbmNvZGVyLnB1c2hPYmplY3QobmFtZSk7XG4gICAgJHtjcmVhdGVFbmNvZGVTdGF0ZW1lbnRzKF9jbGFzcykuam9pbihcIlxcbiAgICBcIil9XG4gICAgZW5jb2Rlci5wb3BPYmplY3QoKTtcbiAgICByZXR1cm4gZW5jb2RlclxuICB9XG5cbiAgc2VyaWFsaXplKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLmVuY29kZSgpLnNlcmlhbGl6ZSgpO1xuICB9XG5cbiAgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlKCkudG9TdHJpbmcoKTtcbiAgfVxufWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zYi5jb25jYXQoc291cmNlVGV4dCkuam9pbihcIlxcblwiKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW5jb2RlU3RhdGVtZW50cyhfY2xhc3M6IENsYXNzRGVjbGFyYXRpb24pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBfY2xhc3MubWVtYmVycy5maWx0ZXIoaXNGaWVsZCkubWFwKFxuICAgIChmaWVsZDogRmllbGREZWNsYXJhdGlvbik6IHN0cmluZyAgPT4ge1xuICAgICAgbGV0IFQgPSB0b1N0cmluZyhmaWVsZC50eXBlISk7XG4gICAgICBsZXQgbmFtZSA9IHRvU3RyaW5nKGZpZWxkLm5hbWUpO1xuICAgICAgcmV0dXJuIGBlbmNvZGU8JHtUfT4oZW5jb2RlciwgdGhpcy4ke25hbWV9LCBcIiR7bmFtZX1cIik7YDtcbiAgICB9XG4gICk7XG59XG4vLyBUT0RPOiBNYWtlIHdvcmsgZm9yIG5vbi1zaW1wbGUgZ2VuZXJpY3MgZS5nLiBmaWVsZDogQXJyYXk8VD5cbmZ1bmN0aW9uIGlzR2VuZXJpYyhfY2xhc3M6IENsYXNzRGVjbGFyYXRpb24sIGZpZWxkOiBGaWVsZERlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gIGlmIChfY2xhc3MudHlwZVBhcmFtZXRlcnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gX2NsYXNzLnR5cGVQYXJhbWV0ZXJzLnNvbWUocGFyYW0gPT4gdG9TdHJpbmcocGFyYW0ubmFtZSkgPT0gdG9TdHJpbmcoZmllbGQudHlwZSEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyUGFyc2UocGFyc2VyOiBQYXJzZXIsIHdyaXRlRmlsZTogRmlsZVdyaXRlciwgYmFzZURpcjogc3RyaW5nKTogdm9pZCB7XG4gIGxldCBmaWxlcyA9IE5FQVJCaW5kaW5nc0J1aWxkZXIubmVhckZpbGVzKHBhcnNlcik7XG4gIGZpbGVzLmZvckVhY2goc291cmNlID0+IHtcbiAgICBsZXQgd3JpdGVPdXQgPSBzb3VyY2UudGV4dC5zdWJzdHIoMCwgc291cmNlLnRleHQuaW5kZXhPZihcIlxcblwiKSkuaW5jbHVkZXMoXCJvdXRcIik7XG4gICAgLy8gUmVtb3ZlIGZyb20gbG9ncyBpbiBwYXJzZXJcbiAgICBwYXJzZXIuZG9uZWxvZy5kZWxldGUoc291cmNlLmludGVybmFsUGF0aCk7XG4gICAgcGFyc2VyLnNlZW5sb2cuZGVsZXRlKHNvdXJjZS5pbnRlcm5hbFBhdGgpO1xuICAgIC8vIFJlbW92ZSBmcm9tIHByb2dyYW1zIHNvdXJjZXNcbiAgICBwYXJzZXIucHJvZ3JhbS5zb3VyY2VzID0gcGFyc2VyLnByb2dyYW0uc291cmNlcy5maWx0ZXIoXG4gICAgICAoX3NvdXJjZTogU291cmNlKSA9PiBfc291cmNlICE9PSBzb3VyY2VcbiAgICApO1xuICAgIC8vIEJ1aWxkIG5ldyBTb3VyY2VcbiAgICBsZXQgc291cmNlVGV4dCA9IE5FQVJCaW5kaW5nc0J1aWxkZXIuYnVpbGQocGFyc2VyLCBzb3VyY2UpO1xuICAgIGlmICh3cml0ZU91dCkge1xuICAgICB3cml0ZUZpbGUoXCJvdXQvXCIgKyBzb3VyY2Uubm9ybWFsaXplZFBhdGgsIHNvdXJjZVRleHQsIGJhc2VEaXIpO1xuICAgIH1cbiAgICAvLyBQYXJzZXMgZmlsZSBhbmQgYW55IG5ldyBpbXBvcnRzIGFkZGVkIHRvIHRoZSBzb3VyY2VcbiAgICBwYXJzZXIucGFyc2VGaWxlKFxuICAgICAgc291cmNlVGV4dCxcbiAgICAgIChpc0VudHJ5KHNvdXJjZSkgPyBcIlwiIDogXCIuL1wiKSArIHNvdXJjZS5ub3JtYWxpemVkUGF0aCxcbiAgICAgIGlzRW50cnkoc291cmNlKVxuICAgICk7XG4gIH0pO1xuXG59XG4iXX0=

/***/ }),

/***/ "./src/preamble.ts":
/*!*************************!*\
  !*** ./src/preamble.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.preamble = "import { storage, near, base64 } from \"near-runtime-ts\";\nimport { JSONEncoder } from \"assemblyscript-json\";\nimport { JSONDecoder, ThrowingJSONHandler, DecoderState } from \"assemblyscript-json\";\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYW1ibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJlYW1ibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDYSxRQUFBLFFBQVEsR0FBRyw2TUFHdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IHByZWFtYmxlID0gYGltcG9ydCB7IHN0b3JhZ2UsIG5lYXIsIGJhc2U2NCB9IGZyb20gXCJuZWFyLXJ1bnRpbWUtdHNcIjtcbmltcG9ydCB7IEpTT05FbmNvZGVyIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0LWpzb25cIjtcbmltcG9ydCB7IEpTT05EZWNvZGVyLCBUaHJvd2luZ0pTT05IYW5kbGVyLCBEZWNvZGVyU3RhdGUgfSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQtanNvblwiO1xuYDtcbiJdfQ==

/***/ }),

/***/ "./src/sourceBuilder.ts":
/*!******************************!*\
  !*** ./src/sourceBuilder.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ast_1 = __webpack_require__(/*! ../../src/ast */ "../src/ast.ts");
__webpack_require__(/*! ../../std/portable/index */ "../std/portable/index.js");
__webpack_require__(/*! ../../src/glue/js/float */ "../src/glue/js/float.js");
__webpack_require__(/*! ../../src/glue/js/i64 */ "../src/glue/js/i64.js");
var common_1 = __webpack_require__(/*! ../../src/common */ "../src/common.ts");
var util_1 = __webpack_require__(/*! ../../src/util */ "../src/util/index.ts");
var tokenizer_1 = __webpack_require__(/*! ../../src/tokenizer */ "../src/tokenizer.ts");
/** An AST builder. */
var ASTBuilder = /** @class */ (function () {
    function ASTBuilder() {
        this.sb = [];
        this.indentLevel = 0;
    }
    /** Rebuilds the textual source from the specified AST, as far as possible. */
    ASTBuilder.build = function (node) {
        var builder = new ASTBuilder();
        builder.visitNode(node);
        return builder.finish();
    };
    ASTBuilder.prototype.visitNode = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case ast_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case ast_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case ast_1.NodeKind.FALSE:
            case ast_1.NodeKind.NULL:
            case ast_1.NodeKind.SUPER:
            case ast_1.NodeKind.THIS:
            case ast_1.NodeKind.TRUE:
            case ast_1.NodeKind.CONSTRUCTOR:
            case ast_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case ast_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case ast_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case ast_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case ast_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case ast_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case ast_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case ast_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case ast_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case ast_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case ast_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case ast_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case ast_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case ast_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case ast_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case ast_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case ast_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case ast_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case ast_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case ast_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case ast_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case ast_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case ast_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case ast_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case ast_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case ast_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case ast_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case ast_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case ast_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case ast_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case ast_1.NodeKind.DECORATOR: {
                this.serializeDecorator(node);
                break;
            }
            case ast_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case ast_1.NodeKind.PARAMETER: {
                this.serializeParameter(node);
                break;
            }
            case ast_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitSource = function (source) {
        var statements = source.statements;
        for (var i = 0, k = statements.length; i < k; ++i) {
            this.visitNodeAndTerminate(statements[i]);
        }
    };
    // types
    ASTBuilder.prototype.visitTypeNode = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitTypeName = function (node) {
        this.visitIdentifierExpression(node.identifier);
        var sb = this.sb;
        var current = node.next;
        while (current) {
            sb.push(".");
            this.visitIdentifierExpression(current.identifier);
            current = current.next;
        }
    };
    ASTBuilder.prototype.visitNamedTypeNode = function (node) {
        this.visitTypeName(node.name);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            var numTypeArguments = typeArguments.length;
            var sb = this.sb;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (var i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">");
            }
            if (node.isNullable)
                sb.push(" | null");
        }
    };
    ASTBuilder.prototype.visitFunctionTypeNode = function (node) {
        var isNullable = node.isNullable;
        var sb = this.sb;
        sb.push(isNullable ? "((" : "(");
        var explicitThisType = node.explicitThisType;
        if (explicitThisType) {
            sb.push("this: ");
            this.visitTypeNode(explicitThisType);
        }
        var parameters = node.parameters;
        var numParameters = parameters.length;
        if (numParameters) {
            if (explicitThisType)
                sb.push(", ");
            this.serializeParameter(parameters[0]);
            for (var i = 1; i < numParameters; ++i) {
                sb.push(", ");
                this.serializeParameter(parameters[i]);
            }
        }
        var returnType = node.returnType;
        if (returnType) {
            sb.push(") => ");
            this.visitTypeNode(returnType);
        }
        else {
            sb.push(") => void");
        }
        if (isNullable)
            sb.push(") | null");
    };
    ASTBuilder.prototype.visitTypeParameter = function (node) {
        this.visitIdentifierExpression(node.name);
        var extendsType = node.extendsType;
        if (extendsType) {
            this.sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var defaultType = node.defaultType;
        if (defaultType) {
            this.sb.push("=");
            this.visitTypeNode(defaultType);
        }
    };
    // expressions
    ASTBuilder.prototype.visitIdentifierExpression = function (node) {
        if (node.isQuoted)
            this.visitStringLiteral(node.text);
        else
            this.sb.push(node.text);
    };
    ASTBuilder.prototype.visitArrayLiteralExpression = function (node) {
        var sb = this.sb;
        sb.push("[");
        var elements = node.elementExpressions;
        var numElements = elements.length;
        if (numElements) {
            if (elements[0])
                this.visitNode(elements[0]);
            for (var i = 1; i < numElements; ++i) {
                sb.push(", ");
                if (elements[i])
                    this.visitNode(elements[i]);
            }
        }
        sb.push("]");
    };
    ASTBuilder.prototype.visitObjectLiteralExpression = function (node) {
        var sb = this.sb;
        var names = node.names;
        var values = node.values;
        var numElements = names.length;
        assert(numElements == values.length);
        if (numElements) {
            sb.push("{\n");
            util_1.indent(sb, ++this.indentLevel);
            this.visitNode(names[0]);
            sb.push(": ");
            this.visitNode(values[0]);
            for (var i = 1; i < numElements; ++i) {
                sb.push(",\n");
                util_1.indent(sb, this.indentLevel);
                var name = names[i];
                var value = values[i];
                if (name === value) {
                    this.visitNode(name);
                }
                else {
                    this.visitNode(name);
                    sb.push(": ");
                    this.visitNode(value);
                }
            }
            sb.push("\n");
            util_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    };
    ASTBuilder.prototype.visitAssertionExpression = function (node) {
        var sb = this.sb;
        switch (node.assertionKind) {
            case ast_1.AssertionKind.PREFIX: {
                sb.push("<");
                this.visitTypeNode(assert(node.toType));
                sb.push(">");
                this.visitNode(node.expression);
                break;
            }
            case ast_1.AssertionKind.AS: {
                this.visitNode(node.expression);
                sb.push(" as ");
                this.visitTypeNode(assert(node.toType));
                break;
            }
            case ast_1.AssertionKind.NONNULL: {
                this.visitNode(node.expression);
                sb.push("!");
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitBinaryExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.left);
        sb.push(" ");
        sb.push(tokenizer_1.operatorTokenToString(node.operator));
        sb.push(" ");
        this.visitNode(node.right);
    };
    ASTBuilder.prototype.visitCallExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            var numTypeArguments = typeArguments.length;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (var i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">(");
            }
        }
        else {
            sb.push("(");
        }
        var args = node.arguments;
        var numArgs = args.length;
        if (numArgs) {
            this.visitNode(args[0]);
            for (var i = 1; i < numArgs; ++i) {
                sb.push(", ");
                this.visitNode(args[i]);
            }
        }
        sb.push(")");
    };
    ASTBuilder.prototype.visitClassExpression = function (node) {
        var declaration = node.declaration;
        this.visitClassDeclaration(declaration);
    };
    ASTBuilder.prototype.visitCommaExpression = function (node) {
        var expressions = node.expressions;
        var numExpressions = assert(expressions.length);
        this.visitNode(expressions[0]);
        var sb = this.sb;
        for (var i = 1; i < numExpressions; ++i) {
            sb.push(",");
            this.visitNode(expressions[i]);
        }
    };
    ASTBuilder.prototype.visitElementAccessExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        sb.push("[");
        this.visitNode(node.elementExpression);
        sb.push("]");
    };
    ASTBuilder.prototype.visitFunctionExpression = function (node) {
        var declaration = node.declaration;
        if (!declaration.arrowKind) {
            if (declaration.name.text.length) {
                this.sb.push("function ");
            }
            else {
                this.sb.push("function");
            }
        }
        else {
            assert(declaration.name.text.length == 0);
        }
        this.visitFunctionCommon(declaration);
    };
    ASTBuilder.prototype.visitLiteralExpression = function (node) {
        switch (node.literalKind) {
            case ast_1.LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.OBJECT: {
                this.visitObjectLiteralExpression(node);
                break;
            }
            default: {
                assert(false);
                break;
            }
        }
    };
    ASTBuilder.prototype.visitFloatLiteralExpression = function (node) {
        this.sb.push(node.value.toString(10));
    };
    ASTBuilder.prototype.visitInstanceOfExpression = function (node) {
        this.visitNode(node.expression);
        this.sb.push(" instanceof ");
        this.visitTypeNode(node.isType);
    };
    ASTBuilder.prototype.visitIntegerLiteralExpression = function (node) {
        this.sb.push(i64_to_string(node.value));
    };
    ASTBuilder.prototype.visitStringLiteral = function (str, singleQuoted) {
        if (singleQuoted === void 0) { singleQuoted = false; }
        var sb = this.sb;
        var off = 0;
        var quote = singleQuoted ? "'" : "\"";
        sb.push(quote);
        var i = 0;
        for (var k = str.length; i < k;) {
            switch (str.charCodeAt(i)) {
                case 0 /* NULL */: {
                    if (i > off)
                        sb.push(str.substring(off, off = i + 1));
                    sb.push("\\0");
                    off = ++i;
                    break;
                }
                case 8 /* BACKSPACE */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\b");
                    break;
                }
                case 9 /* TAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\t");
                    break;
                }
                case 10 /* LINEFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\n");
                    break;
                }
                case 11 /* VERTICALTAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\v");
                    break;
                }
                case 12 /* FORMFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\f");
                    break;
                }
                case 13 /* CARRIAGERETURN */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\r");
                    off = ++i;
                    break;
                }
                case 34 /* DOUBLEQUOTE */: {
                    if (!singleQuoted) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\\"");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 39 /* SINGLEQUOTE */: {
                    if (singleQuoted) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\'");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 92 /* BACKSLASH */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\\\");
                    off = ++i;
                    break;
                }
                default: {
                    ++i;
                    break;
                }
            }
        }
        if (i > off)
            sb.push(str.substring(off, i));
        sb.push(quote);
    };
    ASTBuilder.prototype.visitStringLiteralExpression = function (node) {
        this.visitStringLiteral(node.value);
    };
    ASTBuilder.prototype.visitRegexpLiteralExpression = function (node) {
        var sb = this.sb;
        sb.push("/");
        sb.push(node.pattern);
        sb.push("/");
        sb.push(node.patternFlags);
    };
    ASTBuilder.prototype.visitNewExpression = function (node) {
        this.sb.push("new ");
        this.visitCallExpression(node);
    };
    ASTBuilder.prototype.visitParenthesizedExpression = function (node) {
        var sb = this.sb;
        sb.push("(");
        this.visitNode(node.expression);
        sb.push(")");
    };
    ASTBuilder.prototype.visitPropertyAccessExpression = function (node) {
        this.visitNode(node.expression);
        this.sb.push(".");
        this.visitIdentifierExpression(node.property);
    };
    ASTBuilder.prototype.visitTernaryExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.condition);
        sb.push(" ? ");
        this.visitNode(node.ifThen);
        sb.push(" : ");
        this.visitNode(node.ifElse);
    };
    ASTBuilder.prototype.visitUnaryExpression = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitUnaryPostfixExpression = function (node) {
        this.visitNode(node.operand);
        this.sb.push(tokenizer_1.operatorTokenToString(node.operator));
    };
    ASTBuilder.prototype.visitUnaryPrefixExpression = function (node) {
        this.sb.push(tokenizer_1.operatorTokenToString(node.operator));
        this.visitNode(node.operand);
    };
    // statements
    ASTBuilder.prototype.visitNodeAndTerminate = function (statement) {
        this.visitNode(statement);
        var sb = this.sb;
        if (!sb.length || // leading EmptyStatement
            statement.kind == ast_1.NodeKind.VARIABLE || // potentially assigns a FunctionExpression
            statement.kind == ast_1.NodeKind.EXPRESSION // potentially assigns a FunctionExpression
        ) {
            sb.push(";\n");
        }
        else {
            var last = sb[sb.length - 1];
            var lastCharPos = last.length - 1;
            if (lastCharPos >= 0 && (last.charCodeAt(lastCharPos) == 125 /* CLOSEBRACE */ ||
                last.charCodeAt(lastCharPos) == 59 /* SEMICOLON */)) {
                sb.push("\n");
            }
            else {
                sb.push(";\n");
            }
        }
    };
    ASTBuilder.prototype.visitBlockStatement = function (node) {
        var sb = this.sb;
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            sb.push("{\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0; i < numStatements; ++i) {
                util_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            util_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    };
    ASTBuilder.prototype.visitBreakStatement = function (node) {
        var label = node.label;
        if (label) {
            this.sb.push("break ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("break");
        }
    };
    ASTBuilder.prototype.visitContinueStatement = function (node) {
        var label = node.label;
        if (label) {
            this.sb.push("continue ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("continue");
        }
    };
    ASTBuilder.prototype.visitClassDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(common_1.CommonFlags.ABSTRACT))
            sb.push("abstract ");
        if (node.name.text.length) {
            sb.push("class ");
            this.visitIdentifierExpression(node.name);
        }
        else {
            sb.push("class");
        }
        var typeParameters = node.typeParameters;
        if (typeParameters && typeParameters.length) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (var i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var implementsTypes = node.implementsTypes;
        if (implementsTypes) {
            var numImplementsTypes = implementsTypes.length;
            if (numImplementsTypes) {
                sb.push(" implements ");
                this.visitTypeNode(implementsTypes[0]);
                for (var i = 1; i < numImplementsTypes; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(implementsTypes[i]);
                }
            }
        }
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0, k = members.length; i < k; ++i) {
                var member = members[i];
                if (member.kind != ast_1.NodeKind.FIELDDECLARATION || member.parameterIndex < 0) {
                    util_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(member);
                }
            }
            util_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitDoStatement = function (node) {
        var sb = this.sb;
        sb.push("do ");
        this.visitNode(node.statement);
        if (node.statement.kind == ast_1.NodeKind.BLOCK) {
            sb.push(" while (");
        }
        else {
            sb.push(";\n");
            util_1.indent(sb, this.indentLevel);
            sb.push("while (");
        }
        this.visitNode(node.condition);
        sb.push(")");
    };
    ASTBuilder.prototype.visitEmptyStatement = function (node) {
    };
    ASTBuilder.prototype.visitEnumDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(common_1.CommonFlags.CONST))
            sb.push("const ");
        sb.push("enum ");
        this.visitIdentifierExpression(node.name);
        var values = node.values;
        var numValues = values.length;
        if (numValues) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            util_1.indent(sb, indentLevel);
            this.visitEnumValueDeclaration(node.values[0]);
            for (var i = 1; i < numValues; ++i) {
                sb.push(",\n");
                util_1.indent(sb, indentLevel);
                this.visitEnumValueDeclaration(node.values[i]);
            }
            sb.push("\n");
            util_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitEnumValueDeclaration = function (node) {
        this.visitIdentifierExpression(node.name);
        if (node.value) {
            this.sb.push(" = ");
            this.visitNode(node.value);
        }
    };
    ASTBuilder.prototype.visitExportImportStatement = function (node) {
        var sb = this.sb;
        sb.push("export import ");
        this.visitIdentifierExpression(node.externalName);
        sb.push(" = ");
        this.visitIdentifierExpression(node.name);
    };
    ASTBuilder.prototype.visitExportMember = function (node) {
        this.visitIdentifierExpression(node.localName);
        if (node.exportedName.text != node.localName.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(node.exportedName);
        }
    };
    ASTBuilder.prototype.visitExportStatement = function (node) {
        var sb = this.sb;
        if (node.isDeclare) {
            sb.push("declare ");
        }
        var members = node.members;
        if (members && members.length) {
            var numMembers = members.length;
            sb.push("export {\n");
            var indentLevel = ++this.indentLevel;
            util_1.indent(sb, indentLevel);
            this.visitExportMember(members[0]);
            for (var i = 1; i < numMembers; ++i) {
                sb.push(",\n");
                util_1.indent(sb, indentLevel);
                this.visitExportMember(members[i]);
            }
            --this.indentLevel;
            sb.push("\n}");
        }
        else {
            sb.push("export {}");
        }
        var path = node.path;
        if (path) {
            sb.push(" from ");
            this.visitStringLiteralExpression(path);
        }
        sb.push(";");
    };
    ASTBuilder.prototype.visitExportDefaultStatement = function (node) {
        var declaration = node.declaration;
        switch (declaration.kind) {
            case ast_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(declaration, true);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitExpressionStatement = function (node) {
        this.visitNode(node.expression);
    };
    ASTBuilder.prototype.visitFieldDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        this.visitIdentifierExpression(node.name);
        var sb = this.sb;
        if (node.flags & common_1.CommonFlags.DEFINITE_ASSIGNMENT) {
            sb.push("!");
        }
        var type = node.type;
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.visitForStatement = function (node) {
        var sb = this.sb;
        sb.push("for (");
        var initializer = node.initializer;
        if (initializer) {
            this.visitNode(initializer);
        }
        var condition = node.condition;
        if (condition) {
            sb.push("; ");
            this.visitNode(condition);
        }
        else {
            sb.push(";");
        }
        var incrementor = node.incrementor;
        if (incrementor) {
            sb.push("; ");
            this.visitNode(incrementor);
        }
        else {
            sb.push(";");
        }
        sb.push(") ");
        this.visitNode(node.statement);
    };
    ASTBuilder.prototype.visitFunctionDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var sb = this.sb;
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
            this.serializeAccessModifiers(node);
        }
        if (node.name.text.length) {
            sb.push("function ");
        }
        else {
            sb.push("function");
        }
        this.visitFunctionCommon(node);
    };
    ASTBuilder.prototype.visitFunctionCommon = function (node) {
        var sb = this.sb;
        this.visitIdentifierExpression(node.name);
        var signature = node.signature;
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            var numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                this.visitTypeParameter(typeParameters[0]);
                for (var i = 1; i < numTypeParameters; ++i) {
                    sb.push(", ");
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        if (node.arrowKind == 2 /* ARROW_SINGLE */) {
            var parameters = signature.parameters;
            assert(parameters.length == 1);
            assert(!signature.explicitThisType);
            this.serializeParameter(parameters[0]);
        }
        else {
            sb.push("(");
            var parameters = signature.parameters;
            var numParameters = parameters.length;
            var explicitThisType = signature.explicitThisType;
            if (explicitThisType) {
                sb.push("this: ");
                this.visitTypeNode(explicitThisType);
            }
            if (numParameters) {
                if (explicitThisType)
                    sb.push(", ");
                this.serializeParameter(parameters[0]);
                for (var i = 1; i < numParameters; ++i) {
                    sb.push(", ");
                    this.serializeParameter(parameters[i]);
                }
            }
        }
        var body = node.body;
        var returnType = signature.returnType;
        if (node.arrowKind) {
            if (body) {
                if (node.arrowKind == 2 /* ARROW_SINGLE */) {
                    assert(ast_1.isTypeOmitted(returnType));
                }
                else {
                    if (ast_1.isTypeOmitted(returnType)) {
                        sb.push(")");
                    }
                    else {
                        sb.push("): ");
                        this.visitTypeNode(returnType);
                    }
                }
                sb.push(" => ");
                this.visitNode(body);
            }
            else {
                assert(!ast_1.isTypeOmitted(returnType));
                sb.push(" => ");
                this.visitTypeNode(returnType);
            }
        }
        else {
            if (!ast_1.isTypeOmitted(returnType) &&
                !node.isAny(common_1.CommonFlags.CONSTRUCTOR | common_1.CommonFlags.SET)) {
                sb.push("): ");
                this.visitTypeNode(returnType);
            }
            else {
                sb.push(")");
            }
            if (body) {
                sb.push(" ");
                this.visitNode(body);
            }
        }
    };
    ASTBuilder.prototype.visitIfStatement = function (node) {
        var sb = this.sb;
        sb.push("if (");
        this.visitNode(node.condition);
        sb.push(") ");
        var ifTrue = node.ifTrue;
        this.visitNode(ifTrue);
        if (ifTrue.kind != ast_1.NodeKind.BLOCK) {
            sb.push(";\n");
        }
        var ifFalse = node.ifFalse;
        if (ifFalse) {
            if (ifTrue.kind == ast_1.NodeKind.BLOCK) {
                sb.push(" else ");
            }
            else {
                sb.push("else ");
            }
            this.visitNode(ifFalse);
        }
    };
    ASTBuilder.prototype.visitImportDeclaration = function (node) {
        var externalName = node.foreignName;
        var name = node.name;
        this.visitIdentifierExpression(externalName);
        if (externalName.text != name.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(name);
        }
    };
    ASTBuilder.prototype.visitImportStatement = function (node) {
        var sb = this.sb;
        sb.push("import ");
        var declarations = node.declarations;
        var namespaceName = node.namespaceName;
        if (declarations) {
            var numDeclarations = declarations.length;
            if (numDeclarations) {
                sb.push("{\n");
                var indentLevel = ++this.indentLevel;
                util_1.indent(sb, indentLevel);
                this.visitImportDeclaration(declarations[0]);
                for (var i = 1; i < numDeclarations; ++i) {
                    sb.push(",\n");
                    util_1.indent(sb, indentLevel);
                    this.visitImportDeclaration(declarations[i]);
                }
                --this.indentLevel;
                sb.push("\n} from ");
            }
            else {
                sb.push("{} from ");
            }
        }
        else if (namespaceName) {
            sb.push("* as ");
            this.visitIdentifierExpression(namespaceName);
            sb.push(" from ");
        }
        this.visitStringLiteralExpression(node.path);
    };
    ASTBuilder.prototype.visitIndexSignatureDeclaration = function (node) {
        var sb = this.sb;
        sb.push("[key: ");
        this.visitTypeNode(node.keyType);
        sb.push("]: ");
        this.visitTypeNode(node.valueType);
    };
    ASTBuilder.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("interface ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters && typeParameters.length) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (var i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        // must not have implementsTypes
        sb.push(" {\n");
        var indentLevel = ++this.indentLevel;
        var members = node.members;
        for (var i = 0, k = members.length; i < k; ++i) {
            util_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(members[i]);
        }
        --this.indentLevel;
        sb.push("}");
    };
    ASTBuilder.prototype.visitMethodDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        if (node.is(common_1.CommonFlags.GET)) {
            this.sb.push("get ");
        }
        else if (node.is(common_1.CommonFlags.SET)) {
            this.sb.push("set ");
        }
        this.visitFunctionCommon(node);
    };
    ASTBuilder.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("namespace ");
        this.visitIdentifierExpression(node.name);
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0, k = members.length; i < k; ++i) {
                util_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(members[i]);
            }
            util_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitReturnStatement = function (node) {
        var value = node.value;
        if (value) {
            this.sb.push("return ");
            this.visitNode(value);
        }
        else {
            this.sb.push("return");
        }
    };
    ASTBuilder.prototype.visitSwitchCase = function (node) {
        var sb = this.sb;
        var label = node.label;
        if (label) {
            sb.push("case ");
            this.visitNode(label);
            sb.push(":\n");
        }
        else {
            sb.push("default:\n");
        }
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            var indentLevel = ++this.indentLevel;
            util_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[0]);
            for (var i = 1; i < numStatements; ++i) {
                util_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            --this.indentLevel;
        }
    };
    ASTBuilder.prototype.visitSwitchStatement = function (node) {
        var sb = this.sb;
        sb.push("switch (");
        this.visitNode(node.condition);
        sb.push(") {\n");
        var indentLevel = ++this.indentLevel;
        var cases = node.cases;
        for (var i = 0, k = cases.length; i < k; ++i) {
            util_1.indent(sb, indentLevel);
            this.visitSwitchCase(cases[i]);
            sb.push("\n");
        }
        --this.indentLevel;
        sb.push("}");
    };
    ASTBuilder.prototype.visitThrowStatement = function (node) {
        this.sb.push("throw ");
        this.visitNode(node.value);
    };
    ASTBuilder.prototype.visitTryStatement = function (node) {
        var sb = this.sb;
        sb.push("try {\n");
        var indentLevel = ++this.indentLevel;
        var statements = node.statements;
        for (var i = 0, k = statements.length; i < k; ++i) {
            util_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[i]);
        }
        var catchVariable = node.catchVariable;
        if (catchVariable) {
            util_1.indent(sb, indentLevel - 1);
            sb.push("} catch (");
            this.visitIdentifierExpression(catchVariable);
            sb.push(") {\n");
            var catchStatements = node.catchStatements;
            if (catchStatements) {
                for (var i = 0, k = catchStatements.length; i < k; ++i) {
                    util_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(catchStatements[i]);
                }
            }
        }
        var finallyStatements = node.finallyStatements;
        if (finallyStatements) {
            util_1.indent(sb, indentLevel - 1);
            sb.push("} finally {\n");
            for (var i = 0, k = finallyStatements.length; i < k; ++i) {
                util_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(finallyStatements[i]);
            }
        }
        util_1.indent(sb, indentLevel - 1);
        sb.push("}");
    };
    ASTBuilder.prototype.visitTypeDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        this.serializeExternalModifiers(node);
        sb.push("type ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            var numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                for (var i = 0; i < numTypeParameters; ++i) {
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        sb.push(" = ");
        this.visitTypeNode(node.type);
    };
    ASTBuilder.prototype.visitVariableDeclaration = function (node) {
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var sb = this.sb;
        if (node.flags & common_1.CommonFlags.DEFINITE_ASSIGNMENT) {
            sb.push("!");
        }
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.visitVariableStatement = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        var declarations = node.declarations;
        var numDeclarations = assert(declarations.length);
        var firstDeclaration = declarations[0];
        this.serializeExternalModifiers(firstDeclaration);
        sb.push(firstDeclaration.is(common_1.CommonFlags.CONST) ? "const " : firstDeclaration.is(common_1.CommonFlags.LET) ? "let " : "var ");
        this.visitVariableDeclaration(node.declarations[0]);
        for (var i = 1; i < numDeclarations; ++i) {
            sb.push(", ");
            this.visitVariableDeclaration(node.declarations[i]);
        }
    };
    ASTBuilder.prototype.visitWhileStatement = function (node) {
        var sb = this.sb;
        sb.push("while (");
        this.visitNode(node.condition);
        var statement = node.statement;
        if (statement.kind == ast_1.NodeKind.EMPTY) {
            sb.push(")");
        }
        else {
            sb.push(") ");
            this.visitNode(node.statement);
        }
    };
    // other
    ASTBuilder.prototype.serializeDecorator = function (node) {
        var sb = this.sb;
        sb.push("@");
        this.visitNode(node.name);
        var args = node.arguments;
        if (args) {
            sb.push("(");
            var numArgs = args.length;
            if (numArgs) {
                this.visitNode(args[0]);
                for (var i = 1; i < numArgs; ++i) {
                    sb.push(", ");
                    this.visitNode(args[i]);
                }
            }
            sb.push(")\n");
        }
        else {
            sb.push("\n");
        }
        util_1.indent(sb, this.indentLevel);
    };
    ASTBuilder.prototype.serializeParameter = function (node) {
        var sb = this.sb;
        var kind = node.parameterKind;
        var implicitFieldDeclaration = node.implicitFieldDeclaration;
        if (implicitFieldDeclaration) {
            this.serializeAccessModifiers(implicitFieldDeclaration);
        }
        if (kind == ast_1.ParameterKind.REST) {
            sb.push("...");
        }
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var initializer = node.initializer;
        if (type) {
            if (kind == ast_1.ParameterKind.OPTIONAL && !initializer)
                sb.push("?");
            if (!ast_1.isTypeOmitted(type)) {
                sb.push(": ");
                this.visitTypeNode(type);
            }
        }
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.serializeExternalModifiers = function (node) {
        var sb = this.sb;
        if (node.is(common_1.CommonFlags.EXPORT)) {
            sb.push("export ");
        }
        else if (node.is(common_1.CommonFlags.IMPORT)) {
            sb.push("import ");
        }
        else if (node.is(common_1.CommonFlags.DECLARE)) {
            sb.push("declare ");
        }
    };
    ASTBuilder.prototype.serializeAccessModifiers = function (node) {
        var sb = this.sb;
        if (node.is(common_1.CommonFlags.PUBLIC)) {
            sb.push("public ");
        }
        else if (node.is(common_1.CommonFlags.PRIVATE)) {
            sb.push("private ");
        }
        else if (node.is(common_1.CommonFlags.PROTECTED)) {
            sb.push("protected ");
        }
        if (node.is(common_1.CommonFlags.STATIC)) {
            sb.push("static ");
        }
        else if (node.is(common_1.CommonFlags.ABSTRACT)) {
            sb.push("abstract ");
        }
        if (node.is(common_1.CommonFlags.READONLY)) {
            sb.push("readonly ");
        }
    };
    ASTBuilder.prototype.finish = function () {
        var ret = this.sb.join("");
        this.sb = [];
        return ret;
    };
    return ASTBuilder;
}());
exports.ASTBuilder = ASTBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zb3VyY2VCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBMEV1QjtBQUV2QixvQ0FBa0M7QUFDbEMsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUUvQiwyQ0FBK0M7QUFFL0MsdUNBQWtEO0FBRWxELGlEQUE4RDtBQUM5RCxzQkFBc0I7QUFDdEI7SUFBQTtRQVNVLE9BQUUsR0FBYSxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUE2K0MvQixDQUFDO0lBci9DQyw4RUFBOEU7SUFDdkUsZ0JBQUssR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFLRCw4QkFBUyxHQUFULFVBQVUsSUFBVTtRQUNsQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxjQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLGNBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssY0FBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUks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QztTQUN0QjtJQUNILENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF2L0NELElBdS9DQztBQXYvQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgTm9kZSxcbiAgTm9kZUtpbmQsXG4gIFNvdXJjZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZVBhcmFtZXRlck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBBc3NlcnRpb25FeHByZXNzaW9uLFxuICBCaW5hcnlFeHByZXNzaW9uLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgQ2xhc3NFeHByZXNzaW9uLFxuICBDb21tYUV4cHJlc3Npb24sXG4gIEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLFxuICBGdW5jdGlvbkV4cHJlc3Npb24sXG4gIEluc3RhbmNlT2ZFeHByZXNzaW9uLFxuICBMaXRlcmFsRXhwcmVzc2lvbixcbiAgTmV3RXhwcmVzc2lvbixcbiAgUGFyZW50aGVzaXplZEV4cHJlc3Npb24sXG4gIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbixcbiAgVGVybmFyeUV4cHJlc3Npb24sXG4gIFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24sXG4gIFVuYXJ5UHJlZml4RXhwcmVzc2lvbixcbiAgQmxvY2tTdGF0ZW1lbnQsXG4gIEJyZWFrU3RhdGVtZW50LFxuICBDb250aW51ZVN0YXRlbWVudCxcbiAgRG9TdGF0ZW1lbnQsXG4gIEVtcHR5U3RhdGVtZW50LFxuICBFeHBvcnRTdGF0ZW1lbnQsXG4gIEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQsXG4gIEV4cG9ydEltcG9ydFN0YXRlbWVudCxcbiAgRXhwcmVzc2lvblN0YXRlbWVudCxcbiAgRm9yU3RhdGVtZW50LFxuICBJZlN0YXRlbWVudCxcbiAgSW1wb3J0U3RhdGVtZW50LFxuICBSZXR1cm5TdGF0ZW1lbnQsXG4gIFN3aXRjaFN0YXRlbWVudCxcbiAgVGhyb3dTdGF0ZW1lbnQsXG4gIFRyeVN0YXRlbWVudCxcbiAgVmFyaWFibGVTdGF0ZW1lbnQsXG4gIFdoaWxlU3RhdGVtZW50LFxuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBFbnVtRGVjbGFyYXRpb24sXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBJbXBvcnREZWNsYXJhdGlvbixcbiAgSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbixcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxuICBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgVHlwZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxuICBEZWNvcmF0b3JOb2RlLFxuICBFeHBvcnRNZW1iZXIsXG4gIFBhcmFtZXRlck5vZGUsXG4gIFN3aXRjaENhc2UsXG4gIFR5cGVOb2RlLFxuICBUeXBlTmFtZSxcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEFzc2VydGlvbktpbmQsXG4gIExpdGVyYWxLaW5kLFxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxuICBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbixcbiAgVW5hcnlFeHByZXNzaW9uLFxuICBTdGF0ZW1lbnQsXG4gIEFycm93S2luZCxcbiAgaXNUeXBlT21pdHRlZCxcbiAgUGFyYW1ldGVyS2luZFxufSBmcm9tIFwiLi4vLi4vc3JjL2FzdFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9zdGQvcG9ydGFibGUvaW5kZXhcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy9nbHVlL2pzL2Zsb2F0XCI7XG5pbXBvcnQgXCIuLi8uLi9zcmMvZ2x1ZS9qcy9pNjRcIjtcblxuaW1wb3J0IHsgQ29tbW9uRmxhZ3MgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBpbmRlbnQsIENoYXJDb2RlIH0gZnJvbSBcIi4uLy4uL3NyYy91dGlsXCI7XG5cbmltcG9ydCB7ICBvcGVyYXRvclRva2VuVG9TdHJpbmcsIH0gZnJvbSBcIi4uLy4uL3NyYy90b2tlbml6ZXJcIjtcbi8qKiBBbiBBU1QgYnVpbGRlci4gKi9cbmV4cG9ydCBjbGFzcyBBU1RCdWlsZGVyIHtcblxuICAvKiogUmVidWlsZHMgdGhlIHRleHR1YWwgc291cmNlIGZyb20gdGhlIHNwZWNpZmllZCBBU1QsIGFzIGZhciBhcyBwb3NzaWJsZS4gKi9cbiAgc3RhdGljIGJ1aWxkKG5vZGU6IE5vZGUpOiBzdHJpbmcge1xuICAgIHZhciBidWlsZGVyID0gbmV3IEFTVEJ1aWxkZXIoKTtcbiAgICBidWlsZGVyLnZpc2l0Tm9kZShub2RlKTtcbiAgICByZXR1cm4gYnVpbGRlci5maW5pc2goKTtcbiAgfVxuXG4gIHByaXZhdGUgc2I6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5kZW50TGV2ZWw6IGkzMiA9IDA7XG5cbiAgdmlzaXROb2RlKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5TT1VSQ0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdHlwZXNcblxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cHJlc3Npb25zXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XG4gICAgICBjYXNlIE5vZGVLaW5kLlNVUEVSOlxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxuICAgICAgY2FzZSBOb2RlS2luZC5DT05TVFJVQ1RPUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQklOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0FMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09NTUE6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xuICAgICAgICB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XG4gICAgICAgIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oPFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUFJPUEVSVFlBQ0NFU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbig8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CUkVBSzoge1xuICAgICAgICB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OVElOVUU6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XG4gICAgICAgIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTVBUWToge1xuICAgICAgICB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoPEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRJTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudCg8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xuICAgICAgICB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKDxJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKDxJbnRlcmZhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk1FVEhPRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRNZXRob2REZWNsYXJhdGlvbig8TWV0aG9kRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oPE5hbWVzcGFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlRGVjbGFyYXRpb24oPFR5cGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlclxuXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcig8RGVjb3JhdG9yTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVE1FTUJFUjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKDxFeHBvcnRNZW1iZXI+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIoPFBhcmFtZXRlck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKDxTd2l0Y2hDYXNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTb3VyY2Uoc291cmNlOiBTb3VyY2UpOiB2b2lkIHtcbiAgICB2YXIgc3RhdGVtZW50cyA9IHNvdXJjZS5zdGF0ZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gc3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG5cbiAgdmlzaXRUeXBlTm9kZShub2RlOiBUeXBlTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5pZGVudGlmaWVyKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBjdXJyZW50ID0gbm9kZS5uZXh0O1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBzYi5wdXNoKFwiLlwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihjdXJyZW50LmlkZW50aWZpZXIpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gIH1cblxuICB2aXNpdE5hbWVkVHlwZU5vZGUobm9kZTogTmFtZWRUeXBlTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXRUeXBlTmFtZShub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlQXJndW1lbnRzID0gbm9kZS50eXBlQXJndW1lbnRzO1xuICAgIGlmICh0eXBlQXJndW1lbnRzKSB7XG4gICAgICBsZXQgbnVtVHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHMubGVuZ3RoO1xuICAgICAgbGV0IHNiID0gdGhpcy5zYjtcbiAgICAgIGlmIChudW1UeXBlQXJndW1lbnRzKSB7XG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZUFyZ3VtZW50c1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtVHlwZUFyZ3VtZW50czsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmlzTnVsbGFibGUpIHNiLnB1c2goXCIgfCBudWxsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogdm9pZCB7XG4gICAgdmFyIGlzTnVsbGFibGUgPSBub2RlLmlzTnVsbGFibGU7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKGlzTnVsbGFibGUgPyBcIigoXCIgOiBcIihcIik7XG4gICAgdmFyIGV4cGxpY2l0VGhpc1R5cGUgPSBub2RlLmV4cGxpY2l0VGhpc1R5cGU7XG4gICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHtcbiAgICAgIHNiLnB1c2goXCJ0aGlzOiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXhwbGljaXRUaGlzVHlwZSk7XG4gICAgfVxuICAgIHZhciBwYXJhbWV0ZXJzID0gbm9kZS5wYXJhbWV0ZXJzO1xuICAgIHZhciBudW1QYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5sZW5ndGg7XG4gICAgaWYgKG51bVBhcmFtZXRlcnMpIHtcbiAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSBzYi5wdXNoKFwiLCBcIik7XG4gICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXR1cm5UeXBlID0gbm9kZS5yZXR1cm5UeXBlO1xuICAgIGlmIChyZXR1cm5UeXBlKSB7XG4gICAgICBzYi5wdXNoKFwiKSA9PiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIpID0+IHZvaWRcIik7XG4gICAgfVxuICAgIGlmIChpc051bGxhYmxlKSBzYi5wdXNoKFwiKSB8IG51bGxcIik7XG4gIH1cblxuICB2aXNpdFR5cGVQYXJhbWV0ZXIobm9kZTogVHlwZVBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgZXh0ZW5kc1R5cGUgPSBub2RlLmV4dGVuZHNUeXBlO1xuICAgIGlmIChleHRlbmRzVHlwZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgdmFyIGRlZmF1bHRUeXBlID0gbm9kZS5kZWZhdWx0VHlwZTtcbiAgICBpZiAoZGVmYXVsdFR5cGUpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIj1cIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4cHJlc3Npb25zXG5cbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBJZGVudGlmaWVyRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIGlmIChub2RlLmlzUXVvdGVkKSB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbChub2RlLnRleHQpO1xuICAgIGVsc2UgdGhpcy5zYi5wdXNoKG5vZGUudGV4dCk7XG4gIH1cblxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIltcIik7XG4gICAgdmFyIGVsZW1lbnRzID0gbm9kZS5lbGVtZW50RXhwcmVzc2lvbnM7XG4gICAgdmFyIG51bUVsZW1lbnRzID0gZWxlbWVudHMubGVuZ3RoO1xuICAgIGlmIChudW1FbGVtZW50cykge1xuICAgICAgaWYgKGVsZW1lbnRzWzBdKSB0aGlzLnZpc2l0Tm9kZSg8RXhwcmVzc2lvbj5lbGVtZW50c1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUVsZW1lbnRzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0pIHRoaXMudmlzaXROb2RlKDxFeHByZXNzaW9uPmVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2IucHVzaChcIl1cIik7XG4gIH1cblxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgbmFtZXMgPSBub2RlLm5hbWVzO1xuICAgIHZhciB2YWx1ZXMgPSBub2RlLnZhbHVlcztcbiAgICB2YXIgbnVtRWxlbWVudHMgPSBuYW1lcy5sZW5ndGg7XG4gICAgYXNzZXJ0KG51bUVsZW1lbnRzID09IHZhbHVlcy5sZW5ndGgpO1xuICAgIGlmIChudW1FbGVtZW50cykge1xuICAgICAgc2IucHVzaChcIntcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsICsrdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lc1swXSk7XG4gICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZXNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FbGVtZW50czsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgICBsZXQgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmIChuYW1lID09PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlKG5hbWUpO1xuICAgICAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcInt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbihub2RlOiBBc3NlcnRpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzd2l0Y2ggKG5vZGUuYXNzZXJ0aW9uS2luZCkge1xuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLlBSRUZJWDoge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGFzc2VydChub2RlLnRvVHlwZSkpO1xuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEFzc2VydGlvbktpbmQuQVM6IHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgc2IucHVzaChcIiBhcyBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShhc3NlcnQobm9kZS50b1R5cGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEFzc2VydGlvbktpbmQuTk9OTlVMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgICAgICBzYi5wdXNoKFwiIVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmxlZnQpO1xuICAgIHNiLnB1c2goXCIgXCIpO1xuICAgIHNiLnB1c2gob3BlcmF0b3JUb2tlblRvU3RyaW5nKG5vZGUub3BlcmF0b3IpKTtcbiAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdmFyIHR5cGVBcmd1bWVudHMgPSBub2RlLnR5cGVBcmd1bWVudHM7XG4gICAgaWYgKHR5cGVBcmd1bWVudHMpIHtcbiAgICAgIGxldCBudW1UeXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBpZiAobnVtVHlwZUFyZ3VtZW50cykge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVBcmd1bWVudHM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZUFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIj4oXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBub2RlLmFyZ3VtZW50cztcbiAgICB2YXIgbnVtQXJncyA9IGFyZ3MubGVuZ3RoO1xuICAgIGlmIChudW1BcmdzKSB7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtQXJnczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCIpXCIpO1xuICB9XG5cbiAgdmlzaXRDbGFzc0V4cHJlc3Npb24obm9kZTogQ2xhc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY2xhcmF0aW9uID0gbm9kZS5kZWNsYXJhdGlvbjtcbiAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihkZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgZXhwcmVzc2lvbnMgPSBub2RlLmV4cHJlc3Npb25zO1xuICAgIHZhciBudW1FeHByZXNzaW9ucyA9IGFzc2VydChleHByZXNzaW9ucy5sZW5ndGgpO1xuICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zWzBdKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRXhwcmVzc2lvbnM7ICsraSkge1xuICAgICAgc2IucHVzaChcIixcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShleHByZXNzaW9uc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihub2RlOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICBzYi5wdXNoKFwiW1wiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmVsZW1lbnRFeHByZXNzaW9uKTtcbiAgICBzYi5wdXNoKFwiXVwiKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKG5vZGU6IEZ1bmN0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XG4gICAgaWYgKCFkZWNsYXJhdGlvbi5hcnJvd0tpbmQpIHtcbiAgICAgIGlmIChkZWNsYXJhdGlvbi5uYW1lLnRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChcImZ1bmN0aW9uIFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2IucHVzaChcImZ1bmN0aW9uXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnQoZGVjbGFyYXRpb24ubmFtZS50ZXh0Lmxlbmd0aCA9PSAwKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKGRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuRkxPQVQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oPEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5JTlRFR0VSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oPEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xuICAgICAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24oPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuUkVHRVhQOiB7XG4gICAgICAgIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbig8UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5BUlJBWToge1xuICAgICAgICB0aGlzLnZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbig8QXJyYXlMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLk9CSkVDVDoge1xuICAgICAgICB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oPE9iamVjdExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2gobm9kZS52YWx1ZS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgdmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihub2RlOiBJbnN0YW5jZU9mRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy5zYi5wdXNoKFwiIGluc3RhbmNlb2YgXCIpO1xuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLmlzVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2goaTY0X3RvX3N0cmluZyhub2RlLnZhbHVlKSk7XG4gIH1cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgb2ZmID0gMDtcbiAgICB2YXIgcXVvdGUgPSBzaW5nbGVRdW90ZWQgPyBcIidcIiA6IFwiXFxcIlwiO1xuICAgIHNiLnB1c2gocXVvdGUpO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKGxldCBrID0gc3RyLmxlbmd0aDsgaSA8IGs7KSB7XG4gICAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTlVMTDoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBvZmYgPSBpICsgMSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcMFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLU1BBQ0U6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXGJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5UQUI6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXHRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5MSU5FRkVFRDoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcblwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLlZFUlRJQ0FMVEFCOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFx2XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRk9STUZFRUQ6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXGZcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5DQVJSSUFHRVJFVFVSTjoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxyXCIpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkRPVUJMRVFVT1RFOiB7XG4gICAgICAgICAgaWYgKCFzaW5nbGVRdW90ZWQpIHtcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgICBzYi5wdXNoKFwiXFxcXFxcXCJcIik7XG4gICAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5TSU5HTEVRVU9URToge1xuICAgICAgICAgIGlmIChzaW5nbGVRdW90ZWQpIHtcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgICBzYi5wdXNoKFwiXFxcXCdcIik7XG4gICAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLU0xBU0g6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcXFxcXFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgIHNiLnB1c2gocXVvdGUpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIi9cIik7XG4gICAgc2IucHVzaChub2RlLnBhdHRlcm4pO1xuICAgIHNiLnB1c2goXCIvXCIpO1xuICAgIHNiLnB1c2gobm9kZS5wYXR0ZXJuRmxhZ3MpO1xuICB9XG5cbiAgdmlzaXROZXdFeHByZXNzaW9uKG5vZGU6IE5ld0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2goXCJuZXcgXCIpO1xuICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbihub2RlKTtcbiAgfVxuXG4gIHZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24obm9kZTogUGFyZW50aGVzaXplZEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCIoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMuc2IucHVzaChcIi5cIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUucHJvcGVydHkpO1xuICB9XG5cbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHNiLnB1c2goXCIgPyBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5pZlRoZW4pO1xuICAgIHNiLnB1c2goXCIgOiBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5pZkVsc2UpO1xuICB9XG5cbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLm9wZXJhbmQpO1xuICAgIHRoaXMuc2IucHVzaChvcGVyYXRvclRva2VuVG9TdHJpbmcobm9kZS5vcGVyYXRvcikpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQcmVmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIC8vIHN0YXRlbWVudHNcblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50OiBTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShzdGF0ZW1lbnQpO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKFxuICAgICAgIXNiLmxlbmd0aCB8fCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGVhZGluZyBFbXB0eVN0YXRlbWVudFxuICAgICAgc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuVkFSSUFCTEUgfHwgLy8gcG90ZW50aWFsbHkgYXNzaWducyBhIEZ1bmN0aW9uRXhwcmVzc2lvblxuICAgICAgc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRVhQUkVTU0lPTiAgLy8gcG90ZW50aWFsbHkgYXNzaWducyBhIEZ1bmN0aW9uRXhwcmVzc2lvblxuICAgICkge1xuICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBsYXN0ID0gc2Jbc2IubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgbGFzdENoYXJQb3MgPSBsYXN0Lmxlbmd0aCAtIDE7XG4gICAgICBpZiAobGFzdENoYXJQb3MgPj0gMCAmJiAoXG4gICAgICAgIGxhc3QuY2hhckNvZGVBdChsYXN0Q2hhclBvcykgPT0gQ2hhckNvZGUuQ0xPU0VCUkFDRSB8fFxuICAgICAgICBsYXN0LmNoYXJDb2RlQXQobGFzdENoYXJQb3MpID09IENoYXJDb2RlLlNFTUlDT0xPTilcbiAgICAgICkge1xuICAgICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIHN0YXRlbWVudHMgPSBub2RlLnN0YXRlbWVudHM7XG4gICAgdmFyIG51bVN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobnVtU3RhdGVtZW50cykge1xuICAgICAgc2IucHVzaChcIntcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0YXRlbWVudHM7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcInt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0QnJlYWtTdGF0ZW1lbnQobm9kZTogQnJlYWtTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgbGFiZWwgPSBub2RlLmxhYmVsO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiYnJlYWsgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGxhYmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiYnJlYWtcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJjb250aW51ZSBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJjb250aW51ZVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5BQlNUUkFDVCkpIHNiLnB1c2goXCJhYnN0cmFjdCBcIik7XG4gICAgaWYgKG5vZGUubmFtZS50ZXh0Lmxlbmd0aCkge1xuICAgICAgc2IucHVzaChcImNsYXNzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiY2xhc3NcIik7XG4gICAgfVxuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMSwgayA9IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgIH1cbiAgICB2YXIgZXh0ZW5kc1R5cGUgPSBub2RlLmV4dGVuZHNUeXBlO1xuICAgIGlmIChleHRlbmRzVHlwZSkge1xuICAgICAgc2IucHVzaChcIiBleHRlbmRzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHRlbmRzVHlwZSk7XG4gICAgfVxuICAgIHZhciBpbXBsZW1lbnRzVHlwZXMgPSBub2RlLmltcGxlbWVudHNUeXBlcztcbiAgICBpZiAoaW1wbGVtZW50c1R5cGVzKSB7XG4gICAgICBsZXQgbnVtSW1wbGVtZW50c1R5cGVzID0gaW1wbGVtZW50c1R5cGVzLmxlbmd0aDtcbiAgICAgIGlmIChudW1JbXBsZW1lbnRzVHlwZXMpIHtcbiAgICAgICAgc2IucHVzaChcIiBpbXBsZW1lbnRzIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGltcGxlbWVudHNUeXBlc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtSW1wbGVtZW50c1R5cGVzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGltcGxlbWVudHNUeXBlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XG4gICAgdmFyIG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcbiAgICBpZiAobnVtTWVtYmVycykge1xuICAgICAgc2IucHVzaChcIiB7XFxuXCIpO1xuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBsZXQgbWVtYmVyID0gbWVtYmVyc1tpXTtcbiAgICAgICAgaWYgKG1lbWJlci5raW5kICE9IE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT04gfHwgKDxGaWVsZERlY2xhcmF0aW9uPm1lbWJlcikucGFyYW1ldGVySW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIge31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImRvIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgaWYgKG5vZGUuc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgIHNiLnB1c2goXCIgd2hpbGUgKFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIndoaWxlIChcIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiKVwiKTtcbiAgfVxuXG4gIHZpc2l0RW1wdHlTdGF0ZW1lbnQobm9kZTogRW1wdHlTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgfVxuXG4gIHZpc2l0RW51bURlY2xhcmF0aW9uKG5vZGU6IEVudW1EZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkNPTlNUKSkgc2IucHVzaChcImNvbnN0IFwiKTtcbiAgICBzYi5wdXNoKFwiZW51bSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHZhbHVlcyA9IG5vZGUudmFsdWVzO1xuICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZXMubGVuZ3RoO1xuICAgIGlmIChudW1WYWx1ZXMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGUudmFsdWVzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtVmFsdWVzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIixcXG5cIik7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZS52YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiZXhwb3J0IGltcG9ydCBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuZXh0ZXJuYWxOYW1lKTtcbiAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRNZW1iZXIobm9kZTogRXhwb3J0TWVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubG9jYWxOYW1lKTtcbiAgICBpZiAobm9kZS5leHBvcnRlZE5hbWUudGV4dCAhPSBub2RlLmxvY2FsTmFtZS50ZXh0KSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCIgYXMgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuZXhwb3J0ZWROYW1lKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmlzRGVjbGFyZSkge1xuICAgICAgc2IucHVzaChcImRlY2xhcmUgXCIpO1xuICAgIH1cbiAgICB2YXIgbWVtYmVycyA9IG5vZGUubWVtYmVycztcbiAgICBpZiAobWVtYmVycyAmJiBtZW1iZXJzLmxlbmd0aCkge1xuICAgICAgbGV0IG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtTWVtYmVyczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIHNiLnB1c2goXCJcXG59XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IHt9XCIpO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IG5vZGUucGF0aDtcbiAgICBpZiAocGF0aCkge1xuICAgICAgc2IucHVzaChcIiBmcm9tIFwiKTtcbiAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihwYXRoKTtcbiAgICB9XG4gICAgc2IucHVzaChcIjtcIik7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XG4gICAgc3dpdGNoIChkZWNsYXJhdGlvbi5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmZsYWdzICYgQ29tbW9uRmxhZ3MuREVGSU5JVEVfQVNTSUdOTUVOVCkge1xuICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgfVxuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XG4gICAgfVxuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImZvciAoXCIpO1xuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICAgIHZhciBjb25kaXRpb24gPSBub2RlLmNvbmRpdGlvbjtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICBzYi5wdXNoKFwiOyBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShjb25kaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiO1wiKTtcbiAgICB9XG4gICAgdmFyIGluY3JlbWVudG9yID0gbm9kZS5pbmNyZW1lbnRvcjtcbiAgICBpZiAoaW5jcmVtZW50b3IpIHtcbiAgICAgIHNiLnB1c2goXCI7IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluY3JlbWVudG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIjtcIik7XG4gICAgfVxuICAgIHNiLnB1c2goXCIpIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLm5hbWUudGV4dC5sZW5ndGgpIHtcbiAgICAgIHNiLnB1c2goXCJmdW5jdGlvbiBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGUpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNvbW1vbihub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgc2lnbmF0dXJlID0gbm9kZS5zaWduYXR1cmU7XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgIGxldCBudW1UeXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICAgIGlmIChudW1UeXBlUGFyYW1ldGVycykge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVQYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZS5hcnJvd0tpbmQgPT0gQXJyb3dLaW5kLkFSUk9XX1NJTkdMRSkge1xuICAgICAgbGV0IHBhcmFtZXRlcnMgPSBzaWduYXR1cmUucGFyYW1ldGVycztcbiAgICAgIGFzc2VydChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKTtcbiAgICAgIGFzc2VydCghc2lnbmF0dXJlLmV4cGxpY2l0VGhpc1R5cGUpO1xuICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIoXCIpO1xuICAgICAgbGV0IHBhcmFtZXRlcnMgPSBzaWduYXR1cmUucGFyYW1ldGVycztcbiAgICAgIGxldCBudW1QYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICBsZXQgZXhwbGljaXRUaGlzVHlwZSA9IHNpZ25hdHVyZS5leHBsaWNpdFRoaXNUeXBlO1xuICAgICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHtcbiAgICAgICAgc2IucHVzaChcInRoaXM6IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4cGxpY2l0VGhpc1R5cGUpO1xuICAgICAgfVxuICAgICAgaWYgKG51bVBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBib2R5ID0gbm9kZS5ib2R5O1xuICAgIHZhciByZXR1cm5UeXBlID0gc2lnbmF0dXJlLnJldHVyblR5cGU7XG4gICAgaWYgKG5vZGUuYXJyb3dLaW5kKSB7XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBpZiAobm9kZS5hcnJvd0tpbmQgPT0gQXJyb3dLaW5kLkFSUk9XX1NJTkdMRSkge1xuICAgICAgICAgIGFzc2VydChpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSkge1xuICAgICAgICAgICAgc2IucHVzaChcIilcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNiLnB1c2goXCIpOiBcIik7XG4gICAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCIgPT4gXCIpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2VydCghaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSk7XG4gICAgICAgIHNiLnB1c2goXCIgPT4gXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkgJiZcbiAgICAgICAgIW5vZGUuaXNBbnkoQ29tbW9uRmxhZ3MuQ09OU1RSVUNUT1IgfCBDb21tb25GbGFncy5TRVQpXG4gICAgICApIHtcbiAgICAgICAgc2IucHVzaChcIik6IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcIilcIik7XG4gICAgICB9XG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYm9keSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImlmIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHNiLnB1c2goXCIpIFwiKTtcbiAgICB2YXIgaWZUcnVlID0gbm9kZS5pZlRydWU7XG4gICAgdGhpcy52aXNpdE5vZGUoaWZUcnVlKTtcbiAgICBpZiAoaWZUcnVlLmtpbmQgIT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgIHNiLnB1c2goXCI7XFxuXCIpO1xuICAgIH1cbiAgICB2YXIgaWZGYWxzZSA9IG5vZGUuaWZGYWxzZTtcbiAgICBpZiAoaWZGYWxzZSkge1xuICAgICAgaWYgKGlmVHJ1ZS5raW5kID09IE5vZGVLaW5kLkJMT0NLKSB7XG4gICAgICAgIHNiLnB1c2goXCIgZWxzZSBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwiZWxzZSBcIik7XG4gICAgICB9XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpZkZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIGV4dGVybmFsTmFtZSA9IG5vZGUuZm9yZWlnbk5hbWU7XG4gICAgdmFyIG5hbWUgPSBub2RlLm5hbWU7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGV4dGVybmFsTmFtZSk7XG4gICAgaWYgKGV4dGVybmFsTmFtZS50ZXh0ICE9IG5hbWUudGV4dCkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiIGFzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihuYW1lKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJpbXBvcnQgXCIpO1xuICAgIHZhciBkZWNsYXJhdGlvbnMgPSBub2RlLmRlY2xhcmF0aW9ucztcbiAgICB2YXIgbmFtZXNwYWNlTmFtZSA9IG5vZGUubmFtZXNwYWNlTmFtZTtcbiAgICBpZiAoZGVjbGFyYXRpb25zKSB7XG4gICAgICBsZXQgbnVtRGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zLmxlbmd0aDtcbiAgICAgIGlmIChudW1EZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgc2IucHVzaChcIntcXG5cIik7XG4gICAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbihkZWNsYXJhdGlvbnNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bURlY2xhcmF0aW9uczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIixcXG5cIik7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKGRlY2xhcmF0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLS10aGlzLmluZGVudExldmVsO1xuICAgICAgICBzYi5wdXNoKFwiXFxufSBmcm9tIFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNiLnB1c2goXCJ7fSBmcm9tIFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZU5hbWUpIHtcbiAgICAgIHNiLnB1c2goXCIqIGFzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihuYW1lc3BhY2VOYW1lKTtcbiAgICAgIHNiLnB1c2goXCIgZnJvbSBcIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlLnBhdGgpO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKG5vZGU6IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJba2V5OiBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUua2V5VHlwZSk7XG4gICAgc2IucHVzaChcIl06IFwiKTtcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS52YWx1ZVR5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbihub2RlOiBJbnRlcmZhY2VEZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwiaW50ZXJmYWNlIFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgIGlmICh0eXBlUGFyYW1ldGVycyAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDEsIGsgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1tpXSk7XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICB9XG4gICAgdmFyIGV4dGVuZHNUeXBlID0gbm9kZS5leHRlbmRzVHlwZTtcbiAgICBpZiAoZXh0ZW5kc1R5cGUpIHtcbiAgICAgIHNiLnB1c2goXCIgZXh0ZW5kcyBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICAvLyBtdXN0IG5vdCBoYXZlIGltcGxlbWVudHNUeXBlc1xuICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShtZW1iZXJzW2ldKTtcbiAgICB9XG4gICAgLS10aGlzLmluZGVudExldmVsO1xuICAgIHNiLnB1c2goXCJ9XCIpO1xuICB9XG5cbiAgdmlzaXRNZXRob2REZWNsYXJhdGlvbihub2RlOiBNZXRob2REZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5HRVQpKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJnZXQgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5TRVQpKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJzZXQgXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RnVuY3Rpb25Db21tb24obm9kZSk7XG4gIH1cblxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLCBpc0RlZmF1bHQ6IGJvb2wgPSBmYWxzZSk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIHNiLnB1c2goXCJuYW1lc3BhY2UgXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIHZhciBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XG4gICAgaWYgKG51bU1lbWJlcnMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gbWVtYmVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKG1lbWJlcnNbaV0pO1xuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIge31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcInJldHVybiBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2IucHVzaChcInJldHVyblwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHNiLnB1c2goXCJjYXNlIFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGxhYmVsKTtcbiAgICAgIHNiLnB1c2goXCI6XFxuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZGVmYXVsdDpcXG5cIik7XG4gICAgfVxuICAgIHZhciBzdGF0ZW1lbnRzID0gbm9kZS5zdGF0ZW1lbnRzO1xuICAgIHZhciBudW1TdGF0ZW1lbnRzID0gc3RhdGVtZW50cy5sZW5ndGg7XG4gICAgaWYgKG51bVN0YXRlbWVudHMpIHtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVN0YXRlbWVudHM7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwic3dpdGNoIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHNiLnB1c2goXCIpIHtcXG5cIik7XG4gICAgdmFyIGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgIHZhciBjYXNlcyA9IG5vZGUuY2FzZXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBjYXNlcy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoY2FzZXNbaV0pO1xuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICB9XG4gICAgLS10aGlzLmluZGVudExldmVsO1xuICAgIHNiLnB1c2goXCJ9XCIpO1xuICB9XG5cbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChcInRocm93IFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcInRyeSB7XFxuXCIpO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IHN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgIH1cbiAgICB2YXIgY2F0Y2hWYXJpYWJsZSA9IG5vZGUuY2F0Y2hWYXJpYWJsZTtcbiAgICBpZiAoY2F0Y2hWYXJpYWJsZSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCAtIDEpO1xuICAgICAgc2IucHVzaChcIn0gY2F0Y2ggKFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihjYXRjaFZhcmlhYmxlKTtcbiAgICAgIHNiLnB1c2goXCIpIHtcXG5cIik7XG4gICAgICBsZXQgY2F0Y2hTdGF0ZW1lbnRzID0gbm9kZS5jYXRjaFN0YXRlbWVudHM7XG4gICAgICBpZiAoY2F0Y2hTdGF0ZW1lbnRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gY2F0Y2hTdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKGNhdGNoU3RhdGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZpbmFsbHlTdGF0ZW1lbnRzID0gbm9kZS5maW5hbGx5U3RhdGVtZW50cztcbiAgICBpZiAoZmluYWxseVN0YXRlbWVudHMpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcbiAgICAgIHNiLnB1c2goXCJ9IGZpbmFsbHkge1xcblwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZmluYWxseVN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShmaW5hbGx5U3RhdGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcbiAgICBzYi5wdXNoKFwifVwiKTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgc2IucHVzaChcInR5cGUgXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICBsZXQgbnVtVHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICBpZiAobnVtVHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVHlwZVBhcmFtZXRlcnM7ICsraSkge1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS50eXBlKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlOiBWYXJpYWJsZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAobm9kZS5mbGFncyAmIENvbW1vbkZsYWdzLkRFRklOSVRFX0FTU0lHTk1FTlQpIHtcbiAgICAgIHNiLnB1c2goXCIhXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZSkge1xuICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGUpO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xuICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGRlY2xhcmF0aW9ucyA9IG5vZGUuZGVjbGFyYXRpb25zO1xuICAgIHZhciBudW1EZWNsYXJhdGlvbnMgPSBhc3NlcnQoZGVjbGFyYXRpb25zLmxlbmd0aCk7XG4gICAgdmFyIGZpcnN0RGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbnNbMF07XG4gICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhmaXJzdERlY2xhcmF0aW9uKTtcbiAgICBzYi5wdXNoKGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuQ09OU1QpID8gXCJjb25zdCBcIiA6IGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuTEVUKSA/IFwibGV0IFwiIDogXCJ2YXIgXCIpO1xuICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb25zWzBdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bURlY2xhcmF0aW9uczsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIndoaWxlIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHZhciBzdGF0ZW1lbnQgPSBub2RlLnN0YXRlbWVudDtcbiAgICBpZiAoc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRU1QVFkpIHtcbiAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3RoZXJcblxuICBzZXJpYWxpemVEZWNvcmF0b3Iobm9kZTogRGVjb3JhdG9yTm9kZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIkBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5uYW1lKTtcbiAgICB2YXIgYXJncyA9IG5vZGUuYXJndW1lbnRzO1xuICAgIGlmIChhcmdzKSB7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICAgIGxldCBudW1BcmdzID0gYXJncy5sZW5ndGg7XG4gICAgICBpZiAobnVtQXJncykge1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1BcmdzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCIpXFxuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgIH1cbiAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xuICB9XG5cbiAgc2VyaWFsaXplUGFyYW1ldGVyKG5vZGU6IFBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBraW5kID0gbm9kZS5wYXJhbWV0ZXJLaW5kO1xuICAgIHZhciBpbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24gPSBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbjtcbiAgICBpZiAoaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhpbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PSBQYXJhbWV0ZXJLaW5kLlJFU1QpIHtcbiAgICAgIHNiLnB1c2goXCIuLi5cIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlmIChraW5kID09IFBhcmFtZXRlcktpbmQuT1BUSU9OQUwgJiYgIWluaXRpYWxpemVyKSBzYi5wdXNoKFwiP1wiKTtcbiAgICAgIGlmICghaXNUeXBlT21pdHRlZCh0eXBlKSkge1xuICAgICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGU6IERlY2xhcmF0aW9uU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5FWFBPUlQpKSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuSU1QT1JUKSkge1xuICAgICAgc2IucHVzaChcImltcG9ydCBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkRFQ0xBUkUpKSB7XG4gICAgICBzYi5wdXNoKFwiZGVjbGFyZSBcIik7XG4gICAgfVxuICB9XG5cbiAgc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKG5vZGU6IERlY2xhcmF0aW9uU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5QVUJMSUMpKSB7XG4gICAgICBzYi5wdXNoKFwicHVibGljIFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUFJJVkFURSkpIHtcbiAgICAgIHNiLnB1c2goXCJwcml2YXRlIFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUFJPVEVDVEVEKSkge1xuICAgICAgc2IucHVzaChcInByb3RlY3RlZCBcIik7XG4gICAgfVxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlNUQVRJQykpIHtcbiAgICAgIHNiLnB1c2goXCJzdGF0aWMgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5BQlNUUkFDVCkpIHtcbiAgICAgIHNiLnB1c2goXCJhYnN0cmFjdCBcIik7XG4gICAgfVxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlJFQURPTkxZKSkge1xuICAgICAgc2IucHVzaChcInJlYWRvbmx5IFwiKTtcbiAgICB9XG4gIH1cblxuICBmaW5pc2goKTogc3RyaW5nIHtcbiAgICB2YXIgcmV0ID0gdGhpcy5zYi5qb2luKFwiXCIpO1xuICAgIHRoaXMuc2IgPSBbXTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/visitor.ts":
/*!************************!*\
  !*** ./src/visitor.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// export type Collection<T> = NonNullCollection<T>| null;
var isIterable = function (object) {
    //@ts-ignore
    return object != null && typeof object[Symbol.iterator] === "function";
};
var DefaultWriter = /** @class */ (function () {
    function DefaultWriter() {
    }
    DefaultWriter.prototype.writeString = function (s) { };
    DefaultWriter.prototype.writeNode = function (node) { };
    return DefaultWriter;
}());
exports.DefaultWriter = DefaultWriter;
var AbstractVisitor = /** @class */ (function () {
    function AbstractVisitor(writer) {
        if (writer === void 0) { writer = new DefaultWriter(); }
        this.writer = writer;
    }
    AbstractVisitor.prototype.writeString = function (str) {
        return this.writeString(str);
    };
    AbstractVisitor.prototype.writeNode = function (item) {
        this.writer.writeNode(item);
    };
    AbstractVisitor.prototype.visit = function (node) {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (node == null)
            return;
        if (node instanceof Array) {
            node.map(function (node) { _this.visit(node); });
        }
        else if (node instanceof Map) {
            try {
                for (var _c = __values(node.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], _node = _e[1];
                    this.visit(_node);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //@ts-ignore Need a better way to test type
        }
        else if (isIterable(node)) {
            try {
                //TODO: Find better way to test if iterable
                for (var node_1 = __values(node), node_1_1 = node_1.next(); !node_1_1.done; node_1_1 = node_1.next()) {
                    var _node = node_1_1.value;
                    this.visit(_node);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (node_1_1 && !node_1_1.done && (_b = node_1.return)) _b.call(node_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            //@ts-ignore Node is not iterable.
            this._visit(node);
        }
    };
    return AbstractVisitor;
}());
exports.AbstractVisitor = AbstractVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwREFBMEQ7QUFFMUQsSUFBTSxVQUFVLEdBQUcsVUFBQyxNQUFjO0lBQ2hDLFlBQVk7SUFDWixPQUFBLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVU7QUFBL0QsQ0FBK0QsQ0FBQztBQU9sRTtJQUFBO0lBSUEsQ0FBQztJQUhDLG1DQUFXLEdBQVgsVUFBWSxDQUFTLElBQVUsQ0FBQztJQUNoQyxpQ0FBUyxHQUFULFVBQVUsSUFBbUIsSUFBUyxDQUFDO0lBRXpDLG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzQ0FBYTtBQU0xQjtJQUVFLHlCQUFzQixNQUEwQztRQUExQyx1QkFBQSxFQUFBLGFBQXdCLGFBQWEsRUFBSztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztJQUFHLENBQUM7SUFFcEUscUNBQVcsR0FBWCxVQUFZLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsSUFBbUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxJQUEwQjs7UUFBaEMsaUJBa0JDO1FBakJDLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ3pCLElBQUksSUFBSSxZQUFZLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBTyxJQUFhLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDthQUFNLElBQUksSUFBSSxZQUFZLEdBQUcsRUFBRTs7Z0JBQzlCLEtBQXlCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBaEMsSUFBQSx3QkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuQjs7Ozs7Ozs7O1lBQ0QsMkNBQTJDO1NBQzVDO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUN6QiwyQ0FBMkM7Z0JBQzdDLEtBQWtCLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBbkIsSUFBSSxLQUFLLGlCQUFBO29CQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCOzs7Ozs7Ozs7U0FDRjthQUFNO1lBQ0wsa0NBQWtDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBR0gsc0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNxQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHR5cGUgQ29sbGVjdGlvbjxUPiA9IFQgfCBUW10gfCBNYXA8c3RyaW5nLCBUIHwgVFtdIHwgSXRlcmFibGU8VD4+IHwgSXRlcmFibGU8VD47XG4vLyBleHBvcnQgdHlwZSBDb2xsZWN0aW9uPFQ+ID0gTm9uTnVsbENvbGxlY3Rpb248VD58IG51bGw7XG5cbmNvbnN0IGlzSXRlcmFibGUgPSAob2JqZWN0OiBvYmplY3QpOiBib29sZWFuID0+XG4gIC8vQHRzLWlnbm9yZVxuICBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBXcml0ZXI8VD4ge1xuICB3cml0ZVN0cmluZyh4OiBDb2xsZWN0aW9uPFQ+IHwgc3RyaW5nKTogdm9pZDtcbiAgd3JpdGVOb2RlKHg6IENvbGxlY3Rpb248VD4pOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdFdyaXRlcjxUPiBpbXBsZW1lbnRzIFdyaXRlcjxUPiB7XG4gIHdyaXRlU3RyaW5nKHM6IHN0cmluZyk6IHZvaWQgeyB9XG4gIHdyaXRlTm9kZShub2RlOiBDb2xsZWN0aW9uPFQ+KTogdm9pZCB7fVxuXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpc2l0b3I8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3cml0ZXI6IFdyaXRlcjxUPiA9IG5ldyBEZWZhdWx0V3JpdGVyPFQ+KCkpIHt9XG5cbiAgd3JpdGVTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndyaXRlU3RyaW5nKHN0cik7XG4gIH1cblxuICB3cml0ZU5vZGUoaXRlbTogQ29sbGVjdGlvbjxUPiApOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlci53cml0ZU5vZGUoaXRlbSk7XG4gIH1cblxuICB2aXNpdChub2RlOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBub2RlLm1hcCgobm9kZTogVCk6IHZvaWQgPT4geyB0aGlzLnZpc2l0KG5vZGUpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIGZvciAobGV0IFtrZXksIF9ub2RlXSBvZiBub2RlLmVudHJpZXMoKSkge1xuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcbiAgICAgIH1cbiAgICAgIC8vQHRzLWlnbm9yZSBOZWVkIGEgYmV0dGVyIHdheSB0byB0ZXN0IHR5cGVcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcbiAgICAgICAgLy9UT0RPOiBGaW5kIGJldHRlciB3YXkgdG8gdGVzdCBpZiBpdGVyYWJsZVxuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZSkge1xuICAgICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL0B0cy1pZ25vcmUgTm9kZSBpcyBub3QgaXRlcmFibGUuXG4gICAgICB0aGlzLl92aXNpdChub2RlKTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogdm9pZDtcblxufVxuIl19

/***/ })

/******/ });
});
//# sourceMappingURL=transformerBundle.js.map