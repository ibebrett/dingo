const { parseCommand, executeCommand } = require("./roll.js");

test("executeCommand of empty string is null", () => {
  expect(parseCommand("")).toBe(null);
});
