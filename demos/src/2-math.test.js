const { sum, divide, multiply } = require('./2-math');

describe('test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe('test for multiply', () => {
    test('adds 1 x 1 to equal 1', () => {
      expect(multiply(1, 1)).toBe(1);
    });
  });
  describe('test for divide', () => {
    test('adds 2 / 2 to equal 1', () => {
      expect(divide(2, 2)).toBe(1);
    });
    test('adds 2 / 0 to equal Null', () => {
      expect(divide(2, 0)).toBe(null);
    });
  });
});
