/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
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
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const dfs = (root) => {
    if (!root) {
      return 0;
    }
    const [left, right] = [dfs(root.left), dfs(root.right)];
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  };

  dfs(root);
  return diameter;
};

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
root = new TreeNode(1, new TreeNode(2));
console.log(diameterOfBinaryTree(root));
