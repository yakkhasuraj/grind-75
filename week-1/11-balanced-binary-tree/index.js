/**
 * Given a binary tree, determine if it is height-balanced.
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const depthFirstSearch = (root) => {
  if (!root) {
    return 0;
  }
  const left = depthFirstSearch(root.left);
  const right = depthFirstSearch(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return 1 + Math.max(left, right);
};

// O(n) time complexity and O(n) space complexity
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
  return depthFirstSearch(root) >= 0;
};

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(4), new TreeNode(4)),
    new TreeNode(3)
  ),
  new TreeNode(2)
);
console.log(isBalanced(root));
