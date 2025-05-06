/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

// O(n) time complexity and O(1) space complexity
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let p = 1;
  let q = 1;
  for (let i = 1; i < n; i++) {
    [p, q] = [q, p + q];
  }
  return q;
};

let n = 2;
n = 3;
console.log(climbStairs(n));
