/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 */

// O(n) time complexity and O(1) space complexity
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let [answer, max] = [nums[0], nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    max = Math.max(max, 0) + nums[i];
    answer = Math.max(answer, max);
  }
  return answer;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
nums = [1];
console.log(maxSubArray(nums));
