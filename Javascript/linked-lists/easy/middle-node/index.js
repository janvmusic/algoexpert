// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNodeV1(linkedList) {
  const size = getLength(linkedList);
  const middle = Math.floor(size / 2);
  let middleNode = linkedList;

  for (let i = 0; i < middle; i++) {
    middleNode = middleNode.next;
  }

  return middleNode;
}

function getLength(linkedList) {
  let length = 1;
  let node = linkedList;

  while (node.next != null) {
    node = node.next;
    length++;
  }

  return length;
}

function middleNodeV2(linkedList) {
  let slow = linkedList;
  let fast = linkedList;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Do not edit the line below.
exports.LinkedList = LinkedList;
exports.middleNodeV1 = middleNodeV1;
exports.middleNodeV2 = middleNodeV2;
