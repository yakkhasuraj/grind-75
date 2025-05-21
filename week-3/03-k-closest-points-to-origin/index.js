/**
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 * The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
 * You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 */

// O(n * log n) time complexity and O(log n) space complexity
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  points.sort((a, b) => Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1]));
  return points.slice(0, k);
};

let points = [
  [1, 3],
  [-2, 2],
];
let k = 1;
(points = [
  [3, 3],
  [5, -1],
  [-2, 4],
]),
  (k = 2);
console.log(kClosest(points, k));
