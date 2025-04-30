/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

// O(n) time complexity and O(c) space complexity
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const frequency = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    frequency[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    frequency[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return frequency.every((c) => c === 0);
};

let s = "anagram";
let t = "nagaram";
s = "rat";
t = "car";

console.log(isAnagram(s, t));
