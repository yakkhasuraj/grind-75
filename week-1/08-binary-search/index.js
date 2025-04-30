/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */

// O(log n) time complexity and O(1) space complexity
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left] === target ? left : -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
nums = [-1, 0, 3, 5, 9, 12];
target = 2;
console.log(search(nums, target));
