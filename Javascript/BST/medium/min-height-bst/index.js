function minHeightBst(array) {
  if (array.length === 0) {
    return null;
  }

  let middle = Math.floor((array.length - 1) / 2);
  let value = array[middle];
  let node = new BST(value);

  let leftArray = array.slice(0, middle);
  let left = minHeightBst(leftArray);
  node.left = left;

  let rightArray = array.slice(middle + 1);
  let right = minHeightBst(rightArray);
  node.right = right;

  return node;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
