// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const result = [];
  sumBranch(root, 0, result);

  return result;
}

function sumBranch(tree, total, result) {
  if (tree === null) {
    return;
  }

  total += tree.value;
  if (tree.left === null && tree.right === null) {
    result.push(total);
    return;
  }

  sumBranch(tree.left, total, result);
  sumBranch(tree.right, total, result);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
