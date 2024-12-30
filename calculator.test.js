const { add } = require('./calculator');  // Assuming we'll implement add() in a separate file

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('Single number returns the number itself', () => {
  expect(add('1')).toBe(1);
});

test('Multiple numbers, comma-separated', () => {
  expect(add('1,5')).toBe(6);
});

test('Handles newlines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('Throws error for negative numbers', () => {
  expect(() => add('1,-2,3')).toThrow('negative numbers not allowed -2');
});

test('Throws error for multiple negative numbers', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed -2,-3');
});