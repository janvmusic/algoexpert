// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateExpressionTree(tree) {
  if (!tree) {
    return 0;
  }

  const left = evaluateExpressionTree(tree.left);
  const right = evaluateExpressionTree(tree.right);

  return doOperation(left, right, tree);
}

function doOperation(left, right, node) {
  switch (node.value) {
    case -1:
      return left + right;
    case -2:
      return left - right;
    case -3:
      return Math.trunc(left / right);
    case -4:
      return left * right;
    default:
      return node.value;
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.evaluateExpressionTree = evaluateExpressionTree;
