/**
 * 二叉树的高度
 */

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null
      },
      right: null,
    },
    right: null,
  }
}


const getDepth = (root) => {
  if (root === null) return 0;
  return Math.max(
    getDepth(root.left),
    getDepth(root.right)
  ) + 1;
}

const depth = getDepth(tree);

console.log(depth);
