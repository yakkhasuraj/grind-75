/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two cells sharing a common edge is 1.
 */

// O(m * n) time complexity and O(m * n) space complexity
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const [m, n] = [mat.length, mat[0].length];
  const ans = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => -1)
  );
  const q = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 0) {
        q.push([i, j]);
        ans[i][j] = 0;
      }
    }
  }

  const dirs = [-1, 0, 1, 0, -1];
  for (const [i, j] of q) {
    for (let k = 0; k < 4; ++k) {
      const [x, y] = [i + dirs[k], j + dirs[k + 1]];
      if (x >= 0 && x < m && y >= 0 && y < n && ans[x][y] === -1) {
        ans[x][y] = ans[i][j] + 1;
        q.push([x, y]);
      }
    }
  }

  return ans;
};

let mat = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(mat));
