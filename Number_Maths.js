// Number in JavaScript

// JavaScript has a single Number type for all numeric values, including integers and floating-point numbers, represented as 64-bit floating-point numbers (IEEE 754 standard). This type allows JavaScript to handle a wide range of values, though it does come with some limitations (e.g., floating-point precision).
// Common Number Properties

//     Integer Range:
//         Maximum safe integer: Number.MAX_SAFE_INTEGER (2^53 - 1).
//         Minimum safe integer: Number.MIN_SAFE_INTEGER (-(2^53 - 1)).

//     Special Values:
//         Infinity and -Infinity: Represent positive and negative infinity.
//         NaN (Not-a-Number): Represents an invalid number (e.g., result of 0/0 or "hello" * 2).
//         Number.isNaN(value): Checks if a value is NaN.

//     Number Methods:
//         .toFixed(digits): Formats a number with a fixed number of decimal places.
//         .toPrecision(digits): Formats a number to a specified precision.
//         Number.parseInt(string): Converts a string to an integer.
//         Number.parseFloat(string): Converts a string to a floating-point number.

// Examples

// javascript

// let num = 123.456;
// console.log(num.toFixed(2)); // Output: "123.46"
// console.log(Number.isNaN(NaN)); // Output: true
// console.log(Number.parseInt("123.45")); // Output: 123
// console.log(Number.parseFloat("123.45")); // Output: 123.45

// Math in JavaScript

// JavaScript provides a Math object with various mathematical constants and functions for performing calculations.
// Math Constants

//     Math.PI: Approximation of π (3.14159).
//     Math.E: Euler's number (2.718).
//     Math.SQRT2: Square root of 2.
//     Math.LN10, Math.LN2: Natural logarithm of 10 and 2.

// Math Functions

//     Rounding and Absolute Values:
//         Math.round(x): Rounds to the nearest integer.
//         Math.floor(x): Rounds down to the nearest integer.
//         Math.ceil(x): Rounds up to the nearest integer.
//         Math.abs(x): Returns the absolute value.

//     Power and Roots:
//         Math.pow(base, exponent): Raises base to the power of exponent.
//         Math.sqrt(x): Square root of x.
//         Math.cbrt(x): Cube root of x.

//     Trigonometric Functions:
//         Math.sin(x), Math.cos(x), Math.tan(x): Sine, cosine, and tangent.
//         Math.asin(x), Math.acos(x), Math.atan(x): Inverse trigonometric functions.

//     Exponential and Logarithmic Functions:
//         Math.exp(x): Exponential of x (e^x).
//         Math.log(x): Natural logarithm of x.
//         Math.log10(x): Base-10 logarithm of x.

//     Random Numbers:
//         Math.random(): Generates a pseudo-random number between 0 (inclusive) and 1 (exclusive).
//         To generate a random integer within a specific range, you can combine Math.floor() with Math.random():

//         javascript

//         function getRandomInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//         }

// Examples

// javascript

// console.log(Math.PI); // Output: 3.141592653589793
// console.log(Math.sqrt(16)); // Output: 4
// console.log(Math.pow(2, 3)); // Output: 8
// console.log(Math.round(2.5)); // Output: 3
// console.log(getRandomInt(1, 10)); // Output: A random integer between 1 and 10

// BigInt for Large Integers

// For numbers beyond the safe integer limit of Number.MAX_SAFE_INTEGER, JavaScript provides BigInt:

// javascript

// let largeNumber = BigInt("9007199254740991") + 1n;
// console.log(largeNumber); // Output: 9007199254740992n


// ++++++++++++++++ Example +++++++++++++++++++ 

// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.988776
// console.log(otherNumber.toPrecision(3));
// const otherNumber = 123.988776
// console.log(otherNumber.toPrecision(3));
// const otherNumber = 1123.988776
// console.log(otherNumber.toPrecision(3));


// const hundreds = 100000

// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++  


console.log(Math);  // Object
// console.log(Math.abs(-4));
// console.log(Math.round(6, 7));
// console.log(Math.ceil(2, 7));
// console.log(Math.floor(6, 7));
// console.log(Math.min(2,3,4,5,6,7,8));
// console.log(Math.max(2,3,4,5,6,7,8));
// console.log(Math.random());
// console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// const userValue = Number( prompt("Enter No Between 10 Or 20"))
// const min = 10
// const max = 20

// const randomValue = (Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(randomValue);










