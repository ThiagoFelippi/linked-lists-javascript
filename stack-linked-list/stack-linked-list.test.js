const StackLinkedList = require("./stack-linked-list");

(() => {})();

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
