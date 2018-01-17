const week = require('../week4');

describe('week4', () => {
  it('should return 0 valid passphrase', () => {
    expect(week.validPassphrases(['aa bb cc dd aa'])).toBe(0);
  });
  it('should return 1 valid passphrase', () => {
    expect(week.validPassphrases(['aa bb cc dd ee'])).toBe(1);
  });
  it('should return 1 valid passphrase', () => {
    expect(week.validPassphrases(['aa bb cc dd ee', 'aa bb cc dd aa'])).toBe(1);
  });
});
