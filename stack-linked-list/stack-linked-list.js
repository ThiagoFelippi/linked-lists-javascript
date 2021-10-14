const Node = require("./node-doubly-linked-list");

class StackLinkedList {
  #head;
  #count;

  constructor(isEqual) {
    this.#count = 0;
    this.#head = new Node();
    this.isEqual = isEqual ? isEqual : defaultIsEqualFn;
  }

  indexOf(element) {
    let current = this.#head;
    for (let i = 0; i < this.#count; i++) {
      if (this.isEqual(element, current.element)) {
        return i;
      }

      current = current.next;
    }

    console.log(this.#head);
    return -1;
  }

  addEnd(element) {
    const node = new Node(element);
    if (this.#count === 0) this.#head = node;
    else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      node.prev = current;
      current.next = node;
    }

    this.#count++;
  }

  isEmpty() {
    return this.#count === 0;
  }

  size() {
    return this.#count;
  }
}

function defaultIsEqualFn(node1, node2) {
  return node1 === node2;
}

module.exports = StackLinkedList;
