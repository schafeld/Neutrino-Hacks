import add from '../src/add';

describe('addition', () => {
  it('adds 2 numbers', () => {
    expect(add(3, 5)).toBe(8);
  });
});
