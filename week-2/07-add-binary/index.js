/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

// O(max(m,n)) time complexity and O(1) space complexity
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);

let a = "11";
let b = "1";
a = "1010";
b = "1011";
console.log(addBinary(a, b));
