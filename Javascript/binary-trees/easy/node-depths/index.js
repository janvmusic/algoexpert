function nodeDepths(root) {
  return nodeDepth(root, 0);
}

function nodeDepth(tree, depth) {
  if (!tree) {
    return 0;
  }

  let leftDepth = nodeDepth(tree.left, depth + 1);
  let rightDepth = nodeDepth(tree.right, depth + 1);

  return depth + leftDepth + rightDepth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
