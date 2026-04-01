// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// Space: o(n)
// Time: o(n)
function findSuccessorV1(tree, node) {
  const inOrder = [];
  inOrderTraversal(tree, inOrder);

  const idx = inOrder.indexOf(node);
  return idx > -1 ? inOrder[idx + 1] : null;
}

function inOrderTraversal(node, inOrder) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left, inOrder);
  inOrder.push(node);
  inOrderTraversal(node.right, inOrder);
}

// Step 1: Use the node they are looking
// Step 2: if the node has a right child, then look for the next left child
// Step 2.1: Furthest left node from node.right
// Step 3: if the node lacks right child, then look for the parent
// Step 3.1: Figure out which node came from (node.left)
// Time: o(n)
// Space: o(1)
function findSuccessorV2(tree, node) {
  if (node.right != null) {
    return leftSuccessor(node.right);
  }

  return rightSuccessor(node);
}

function rightSuccessor(node) {
  let successor = node;
  while (successor.parent && successor.parent.right === successor) {
    successor = successor.parent;
  }

  return successor.parent;
}

function leftSuccessor(node) {
  let successor = node;
  while (successor.left) {
    successor = successor.left;
  }

  return successor;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessorV1 = findSuccessorV1;
exports.findSuccessorV2 = findSuccessorV2;
