// matches
test('test obj', () => {
  const data = { name: 'nicolas' };
  data.lastName = 'molina';
  expect(data).toEqual({ name: 'nicolas', lastName: 'molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});
test('array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
