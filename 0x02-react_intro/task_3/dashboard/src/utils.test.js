
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
const currentYear = new Date().getFullYear() + '';

describe('Test - utils.test.js', () => {
  it('Year returns current year', () => {
    expect(getFullYear()).toBe(currentYear);
  });

  it('getFooterCopy case 1', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it('getFooterCopy case 2', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  it('getLatestNotification works', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});