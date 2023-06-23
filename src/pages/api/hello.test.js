function sum(a, b) {
  return a + b;
}

describe('sum', () => {
  it('should add', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
