
const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');
const currentYear = new Date().getFullYear() + '';

test('Year returns current year', () => {
  expect(getFullYear()).toBe(currentYear);
})

test('getFooterCopy works in both cases', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('getLatestNotification works', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})
