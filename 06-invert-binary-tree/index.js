/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// O(n) time complexity and O(n) space complexity
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) return null;

  const left = invertTree(root.right);
  const right = invertTree(root.left);

  root.left = left;
  root.right = right;
  return root;
};

let root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
root = null;
console.log(invertTree(root));
