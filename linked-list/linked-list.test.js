const LinkedList = require("./linked-list");

(() => {
  test("Should create an instance of LinkedList", () => {
    const linkedList = new LinkedList();

    if (!(linkedList instanceof LinkedList)) {
      logInfo({ linkedList });
      throw new Error("!(linkedList instanceof LinkedList)");
    }
  });

  test("Should push an element in linked list", () => {
    const linkedList = new LinkedList();

    linkedList.push(10);
  });

  test("Should delete an element in specific index at linked list", () => {
    const linkedList = new LinkedList();

    linkedList.removeAt(0);
  });

  test("Should get an element in specific index at linked list", () => {
    const linkedList = new LinkedList();
    const element = 20;

    linkedList.push(element);

    const elementFound = linkedList.getElementAt(0);

    if (elementFound.element !== element) {
      logInfo({ element, elementFound });
      throw new Error("elementFound !== element");
    }
  });
})();

function test(testName, fn) {
  fn();
  console.log(`OK > ${testName}`);
}

function logInfo(objects) {
  const keys = Object.keys(objects);
  const values = Object.values(objects);

  keys.forEach((key) => {
    values.forEach((value) => {
      if (key && value) console.log(JSON.stringify({ [key]: value }));
    });
  });
}
