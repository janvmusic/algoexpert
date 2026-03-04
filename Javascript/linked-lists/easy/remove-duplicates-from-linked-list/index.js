// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  if (!linkedList || !linkedList.next) {
    return linkedList;
  }

  const nv = linkedList.next.value;
  const cv = linkedList.value;

  if (nv === cv) {
    linkedList.next = linkedList.next.next;
    removeDuplicatesFromLinkedList(linkedList);
  } else {
    removeDuplicatesFromLinkedList(linkedList.next);
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
