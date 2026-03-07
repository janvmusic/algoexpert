// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let total = null;
  let left = linkedListOne;
  let right = linkedListTwo;
  let carryOver = false;
  let head = null;

  while (left || right) {
    const leftVal = left ? left.value : 0;
    const rightVal = right ? right.value : 0;
    const carry = carryOver ? 1 : 0;
    carryOver = false;

    let curr = leftVal + rightVal + carry;
    if (curr > 9) {
      carryOver = true;
      curr = curr % 10;
    }

    if (total === null) {
      total = new LinkedList(curr);
      head = total;
    } else {
      const result = new LinkedList(curr);
      total.next = result;
      total = total.next;
    }

    left = left ? left.next : null;
    right = right ? right.next : null;
  }

  if (carryOver) {
    total.next = new LinkedList(1);
  }

  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
