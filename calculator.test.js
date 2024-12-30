const { add } = require('./calculator');  // Assuming we'll implement add() in a separate file

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('Single number returns the number itself', () => {
  expect(add('1')).toBe(1);
});
