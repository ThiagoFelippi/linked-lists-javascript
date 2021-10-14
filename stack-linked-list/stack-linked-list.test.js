const StackLinkedList = require("./stack-linked-list");

let counter = 0;
(() => {
  test("Should create an instance of StackLinkedList", () => {
    const stackLinkedList = new StackLinkedList();

    if (!(stackLinkedList instanceof StackLinkedList)) {
      logInfo({ stackLinkedList });
      throw new Error("!(stackLinkedList instanceof StackLinkedList)");
    }
  });

  test("Should addBack an element in stack linked list", () => {
    const stackLinkedList = new StackLinkedList();

    stackLinkedList.addEnd(10);
  });

  test("Should test indexOf function in stack linked list", () => {
    const stackLinkedList = new StackLinkedList();

    const elementInserted = 10;
    stackLinkedList.addEnd(elementInserted);

    const element = stackLinkedList.indexOf(elementInserted);

    if (element !== 0) {
      logInfo({ element, elementInserted });
      throw new Error("element !== 0");
    }
  });

  test("Should test getElementAt function in stack linked list", () => {
    const stackLinkedList = new StackLinkedList();

    const elementInserted = 10;
    stackLinkedList.addEnd(elementInserted);

    const { element } = stackLinkedList.getElementAt(0);

    if (element !== elementInserted) {
      logInfo({ element, elementInserted });
      throw new Error("element !== elementInserted");
    }
  });

  console.log(`\n > ${counter} tests passed <`);
})();

function test(testName, fn) {
  fn();
  console.log(`OK > ${testName}`);
  ++counter;
}

function logInfo(objects) {
  console.log(objects);
}
