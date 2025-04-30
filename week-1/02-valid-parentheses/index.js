/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

// O(n) time complexity and O(n) space complexity
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (const char of s) {
    if (map.has(char)) {
      stack.push(char);
    } else if (stack.length === 0 || map.get(stack.pop()) !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

let s = "()";
s = "()[]{}";
console.log(isValid(s));
