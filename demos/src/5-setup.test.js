describe('Set-1', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  afterAll(() => {
    console.log('afterAll');
  });
  test('Set-1-case-1', () => {
    expect(1 + 1).toBe(2);
    console.log('case1');
  });
  test('Set-1-case-2', () => {
    expect(1 + 2).toBe(3);
    console.log('case2');
  });

  describe('subSet-2', () => {
    test('set-2-case-1', () => {
      expect(1 + 1).toBe(2);
      console.log('case1');
    });
    test('set-2-case-2', () => {
      expect(2 + 1).toBe(3);
      console.log('case2');
    });
  });
});
