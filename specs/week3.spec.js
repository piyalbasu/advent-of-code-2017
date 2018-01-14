const week = require('../week3');

describe('week3', () => {
  it('should return coordinates of 0', () => {
    expect(week.stepGen(1)).toEqual([0, 0]);
  });
  it('should return coordinates of 2', () => {
    expect(week.stepGen(2)).toEqual([1, 0]);
  });
  it('should return coordinates of 3', () => {
    expect(week.stepGen(3)).toEqual([1, 1]);
  });
  it('should return coordinates of 6', () => {
    expect(week.stepGen(6)).toEqual([-1, 0]);
  });
  fit('should return coordinates of 23', () => {
    expect(week.stepGen(23)).toEqual([0, -2]);
  });
  fit('should return coordinates of 1024', () => {
    expect(week.stepGen(1024)).toEqual([-15, 16]);
  });
});
