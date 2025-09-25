const sum = require('./sum');

test('sum(2, 3) should return 5', () => {
  expect(sum(2, 3)).toBe(5);
});
