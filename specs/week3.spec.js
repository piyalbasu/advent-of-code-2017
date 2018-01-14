const week = require('../week3');

describe('week3', () => {
  it('should return steps for 0', () => {
    expect(week.stepGen(1)).toEqual(0);
  });
  it('should return steps for 2', () => {
    expect(week.stepGen(2)).toEqual(1);
  });
  it('should return steps for 23', () => {
    expect(week.stepGen(23)).toEqual(2);
  });
  it('should return steps for 1024', () => {
    expect(week.stepGen(1024)).toEqual(31);
  });
});
