const week = require('../week1');

describe('week1', () => {
  it('should return 3', () => {
    expect(week.calcCaptcha('1122')).toBe(3);
  });
  it('should return 4', () => {
    expect(week.calcCaptcha('1111')).toBe(4);
  });
  it('should return 0', () => {
    expect(week.calcCaptcha('1234')).toBe(0);
  });
  it('should return 9', () => {
    expect(week.calcCaptcha('91212129')).toBe(9);
  });
});
