const { add } = require("./add.js");

test('<What the test case does>', () => {
    const fnResult = add(5, 3);
    const expectedResult = 8;
    expect(fnResult).toBe(expectedResult);
});






function add(a, b) {
    return a + b;
  }
  

const { add } = require('./mathFunctions');

test('adds 1 + 2 to equal 3', () => {
  
  const result = add(1, 2);
  const expectedResult = 3;
  expect(result).toBe(expectedResult);
});
