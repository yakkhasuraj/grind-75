/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome.
 */

// O(n+|Σ|) time complexity and O(|Σ|) space complexity
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const counter = {};
  for (const c of s) {
    counter[c] = (counter[c] || 0) + 1;
  }

  let ans = Object.values(counter).reduce(
    (acc, v) => acc + Math.floor(v / 2) * 2,
    0
  );
  ans += ans < s.length ? 1 : 0;
  return ans;
};

let s = "abccccdd";
s = "a";
console.log(longestPalindrome(s));
