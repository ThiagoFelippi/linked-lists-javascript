const StackLinkedList = require("./stack-linked-list");

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
})();

function test(testName, fn) {
  fn();
  console.log(`OK > ${testName}`);
}

function logInfo(objects) {
  console.log(objects);
}
