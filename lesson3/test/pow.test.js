
const pow = require('./pow');

test('2 во 2 степени = 4', () => {
  expect(pow(2, 2)).toBe(4);
});

test('2 в 0 степени = 1', () => {
  expect(pow(2, 0)).toBe(1);
});
test('99 в 2 степени = 9801', () => {
  expect(pow(99, 2)).toBe(9801);
});