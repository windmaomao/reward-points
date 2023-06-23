import { point } from './point';

describe('point', () => {
  it('should not reward under 50', () => {
    expect(point(-1)).toBe(0);
    expect(point(0)).toBe(0);
    expect(point(10)).toBe(0);
    expect(point(20)).toBe(0);
    expect(point(25)).toBe(0);
    expect(point(50)).toBe(0);
  });

  it('should reward between 50 and 100', () => {
    expect(point(51)).toBe(1);
    expect(point(55)).toBe(5);
    expect(point(75)).toBe(25);
    expect(point(100)).toBe(50);
  });

  it('should reward above 100', () => {
    expect(point(101)).toBe(52);
    expect(point(105)).toBe(60);
    expect(point(120)).toBe(90);
  });
});
