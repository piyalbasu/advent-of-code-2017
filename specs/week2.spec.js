const week = require('../week2');

describe('week2', () => {
  it('should return 18', () => {
    expect(week.checkSum(
      [
        [5, 1, 9, 5],
        [7, 5, 3],
        [2, 4, 6, 8]
      ]
    )).toBe(18);
  });
});
