import { calculatingProgress } from './calculatingProgress';

describe('calculatingProgress', () => {
  it('Первое число меньше второго', () => {
    expect(calculatingProgress(20, 100)).toBe(20);
  });
  it('Первое число больше второго', () => {
    expect(calculatingProgress(125, 100)).toBe(125);
  });
  it('Оба числа одинаковые', () => {
    expect(calculatingProgress(60, 60)).toBe(100);
  });
  it('Первое число 0', () => {
    expect(calculatingProgress(0, 60)).toBe(0);
  });
});
