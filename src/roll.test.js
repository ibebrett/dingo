/* eslint-env jest */

const { parseCommand } = require("./roll.js");

test("parseCommand of empty string is null", () => {
  expect(parseCommand("")).toBe(null);
});
test("parseCommand roll d20", () => {
  expect(parseCommand("roll d20")).toEqual({
    name: 'rollDice',
    sides: 20,
    count: 1
  });
});
test('parseCommand roll d12', () => {
  expect(parseCommand('roll d12')).toEqual({
    name: 'rollDice',
    sides: 12,
    count: 1
  });
});
test('parseCommand roll d10', () => {
  expect(parseCommand('roll d 10')).toEqual({
    name: 'rollDice',
    sides: 10,
    count: 1
  });
});
test('parseCommand not roll d(number)', () => {
  expect(parseCommand('roll dlol')).toMatchObject({
    name: 'error'
  });
});