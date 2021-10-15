const Node = require("./node-linked-list");

class LinkedList {
  #count;
  #head;

  constructor(isEqualFn) {
    this.#count = 0;
    this.#head = new Node();
    this.isEqual = isEqualFn ? isEqualFn : defaultEqualFn;
  }

  getElementAt(index) {
    if (index < 0 || index > this.#count) return undefined;

    let node = this.#head;
    for (let i = 0; i < index && node; i++) {
      node = node.next;
    }
    return node;
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

  push(element) {
    const node = new Node(element);

    const isFirstNode = this.#head;
    if (isFirstNode) this.#head = node;
    else {
      let currentNode = this.#head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node; // Setting node to next pointer in the last node of the linked-list
    }

    this.#count++;
  }

  insert(element, index) {
    if (index > this.#count || index < 0) return false;

    const node = new Node(element);
    if (index === 0) {
      node.next = this.#head;
      this.#head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.next = current;
    }

    this.#count++;
    return true;
  }

  remove(element) {
    const index = this.indexOf(element);
    this.removeAt(index);
  }

  removeAt(index) {
    let current = this.#head;

    if (index === 0) {
      this.#head = this.#head.next;
    } else {
      let previous = this.getElementAt(index);
      current = previous.next;
      previous.next = current.next;
    }

    this.#count--;
    return current.element;
  }
}

function defaultEqualFn(node1, node2) {
  return node1 === node2;
}

module.exports = LinkedList;
