/**
 * You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].
 * To perform a flood fill:
 * 1. Begin with the starting pixel and change its color to color.
 * 2. Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
 * 3. Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
 * 4. The process stops when there are no more adjacent pixels of the original color to update.
 * Return the modified image after performing the flood fill.
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
  const m = image.length;
  const n = image[0].length;
  const originalColor = image[sr][sc];

  const depthFirstSearch = (i, j) => {
    if (
      i < 0 ||
      i === m ||
      j < 0 ||
      j === n ||
      image[i][j] !== originalColor ||
      image[i][j] === color
    ) {
      return;
    }
    image[i][j] = color;
    depthFirstSearch(i + 1, j);
    depthFirstSearch(i - 1, j);
    depthFirstSearch(i, j + 1);
    depthFirstSearch(i, j - 1);
  };

  depthFirstSearch(sr, sc);
  return image;
};

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1;
let sc = 1;
let color = 2;
image = [
  [0, 0, 0],
  [0, 0, 0],
];
sr = 0;
sc = 0;
color = 0;
console.log(floodFill(image, sr, sc, color));
