// Step 1: You need an auxiliary class to track height and diameter
// Step 1.1: Build BinaryTreeInfo recursively
// Step 2: Calculate Height = 1 + Math.max(left.height, right.height)
// Step 3: Calculate Diameter = left.height + right.height
// Step 4: Calculate maxDiameter = Math.max(diameter, dLeft.diameter, dRight.diameter)
function binaryTreeDiameter(tree) {
  return getDiameter(tree).diameter;
}

function getDiameter(tree) {
  if (tree === null) {
    return new BinaryTreeInfo(0, 0);
  }

  let dLeft = getDiameter(tree.left);
  let dRight = getDiameter(tree.right);
  let height = 1 + Math.max(dLeft.height, dRight.height);
  let diameter = dLeft.height + dRight.height;
  let maxDiameter = Math.max(diameter, dLeft.diameter, dRight.diameter);

  return new BinaryTreeInfo(height, maxDiameter);
}

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeInfo {
  constructor(height, diameter) {
    this.height = height;
    this.diameter = diameter;
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.binaryTreeDiameter = binaryTreeDiameter;
