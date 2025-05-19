/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 * Note that you don't need to modify intervals in-place. You can make a new array and return it.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  let [start, end] = newInterval;
  const ans = [];
  let insert = false;

  for (const [s, e] of intervals) {
    if (end < s) {
      if (!insert) {
        ans.push([start, end]);
        insert = true;
      }
      ans.push([s, e]);
    } else if (e < start) {
      ans.push([s, e]);
    } else {
      start = Math.min(start, s);
      end = Math.max(end, e);
    }
  }

  if (!insert) {
    ans.push([start, end]);
  }
  return ans;
};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];
intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
newInterval = [4, 8];
console.log(insert(intervals, newInterval));
