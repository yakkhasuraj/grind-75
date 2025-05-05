/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */

// O(m+n) time complexity and O(C) space complexity
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const counter = Array(26).fill(0);

  for (const c of magazine) {
    ++counter[c.charCodeAt(0) - 97];
  }

  for (const c of ransomNote) {
    if (--counter[c.charCodeAt(0) - 97] < 0) {
      return false;
    }
  }

  return true;
};

let ransomNote = "a";
let magazine = "b";
ransomNote = "aa";
magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
