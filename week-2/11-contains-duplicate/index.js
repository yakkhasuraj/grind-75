/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

// O(n) time complexity and O(n) space complexity
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

let nums = [1, 2, 3, 1];
nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
