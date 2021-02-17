
const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');
const currentYear = new Date().getFullYear() + '';

describe('Test - utils.test.js', () => {
  it('Year returns current year', () => {
    expect(getFullYear()).toBe(currentYear);
  });

  it('getFooterCopy works in both cases', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  it('getLatestNotification works', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});