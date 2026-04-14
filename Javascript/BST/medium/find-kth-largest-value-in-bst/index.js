// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  let res = reverseInOrderTraverse(tree, k);
  return res.pop();
}

function reverseInOrderTraverse(node, k, result = []) {
  if (!node) {
    return result;
  }

  reverseInOrderTraverse(node.right, k, result);

  if (result.length < k) {
    result.push(node.value);
  }

  reverseInOrderTraverse(node.left, k, result);

  return result;
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
