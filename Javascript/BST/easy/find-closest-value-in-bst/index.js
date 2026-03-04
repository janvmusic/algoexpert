function findClosestValueInBst(tree, target) {
  if (tree.value === target) {
    return tree.value;
  }

  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, current) {
  if (tree === null) {
    return current;
  }

  // update current at every node, not just leaf nodes.
  if (Math.abs(target - current) > Math.abs(target - tree.value)) {
    current = tree.value;
  }

  if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, current);
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, current);
  }

  return current;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
