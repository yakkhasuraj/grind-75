/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

// O(n) time complexity and O(1) space complexity
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let counter = 0;
  let m = 0;
  for (const x of nums) {
    if (counter === 0) {
      m = x;
      counter = 1;
    } else {
      counter += m === x ? 1 : -1;
    }
  }
  return m;
};

let nums = [3, 2, 3];
nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
