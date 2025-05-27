/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

// O(n ^ 2) time complexity and O(log n) space complexity
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < n - 2 && nums[i] <= 0; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const x = nums[i] + nums[j] + nums[k];
      if (x < 0) {
        ++j;
      } else if (x > 0) {
        --k;
      } else {
        ans.push([nums[i], nums[j++], nums[k--]]);
        while (j < k && nums[j] === nums[j - 1]) {
          ++j;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          --k;
        }
      }
    }
  }
  return ans;
};

let nums = [-1, 0, 1, 2, -1, -4];
nums = [0, 1, 1];
console.log(threeSum(nums));
