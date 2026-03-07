// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const sizeA = getListSize(linkedListOne);
  const sizeB = getListSize(linkedListTwo);
  let offsetA = sizeA - sizeB > 0 ? sizeA - sizeB : 0;
  let offsetB = sizeB - sizeA > 0 ? sizeB - sizeA : 0;
  let nodeA = linkedListOne;
  let nodeB = linkedListTwo;

  while (offsetA > 0) {
    nodeA = nodeA.next;
    offsetA--;
  }

  while (offsetB > 0) {
    nodeB = nodeB.next;
    offsetB--;
  }

  while (nodeA && nodeB) {
    if (nodeA === nodeB) {
      return nodeA;
    }

    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  return null;
}

function getListSize(linkedList) {
  let size = 1;
  let node = linkedList;

  while (node.next !== null) {
    size++;
    node = node.next;
  }

  return size;
}

// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
