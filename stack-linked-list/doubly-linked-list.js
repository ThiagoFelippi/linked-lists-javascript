const Node = require("./node-doubly-linked-list");

class DoublyLinkedList {
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

    return -1;
  }

  getElementAt(index) {
    if (index < 0 || index > this.#count) return undefined;

    let node = this.#head;
    for (let i = 0; i < index && node; i++) {
      node = node.next;
    }
    return node;
  }

  addAfter(element, elementToAdd) {
    const index = this.indexOf(element);
    let elementToAddAfter = this.getElementAt(index);

    let next = elementToAddAfter.next;

    const node = new Node(elementToAdd);
    node.prev = elementToAddAfter;
    node.next = next;
    elementToAddAfter.next = node;
    next.prev = node;

    this.#count++;
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

module.exports = DoublyLinkedList;
