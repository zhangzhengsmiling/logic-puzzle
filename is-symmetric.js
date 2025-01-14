/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const checkNode = (node1, node2) =>  {
  if (node1 === null && node2 === null) return true;
  if (node1?.val !== node2?.val) return false;
  return checkNode(node1.left, node2.right) && checkNode(node1.right, node2.left);
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // if (root.left === null && root.right === null) return true;
  return checkNode(root.left, root.right)
};

