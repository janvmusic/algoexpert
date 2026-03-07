// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  const size = getSize(head);
  const position = size - k - 1;
  let node = head;
  let idx = 0;

  if (position < 0) {
    head.value = head.next.value;
    head.next = head.next.next;

    return;
  }

  while (idx < position) {
    node = node.next;
    idx++;
  }

  let tmp = node.next;
  node.next = tmp.next;
  tmp.next = null;
}

function getSize(head) {
  let size = 0;
  let node = head;

  while (node) {
    size++;
    node = node.next;
  }

  return size;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
