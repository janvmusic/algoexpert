// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }

    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    this.remove(nodeToInsert);

    let tmp = node.prev;
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;

    if (tmp === null) {
      this.head = nodeToInsert;
    } else {
      tmp.next = nodeToInsert;
    }

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    this.remove(nodeToInsert);

    let tmp = node.next;
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (tmp === null) {
      this.tail = nodeToInsert;
    } else {
      tmp.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    let counter = 1;
    let node = this.head;

    if (node === null) {
      this.setHead(nodeToInsert);
      return;
    }

    while (node && counter <= position) {
      if (counter === position) {
        this.insertBefore(node, nodeToInsert);
        break;
      }

      node = node.next;
      counter++;
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        let tmp = node.next;
        this.remove(node);
        node = tmp;
      } else {
        node = node.next;
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }

      node = node.next;
    }

    return false;
  }

  removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.next = null;
    node.prev = null;
  }
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
