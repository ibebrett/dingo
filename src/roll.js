const parseCommand = commandString => {
  if (commandString === "roll d20") {
    return {
      name: "rollDice",
      sides: 20,
      count: 1
    };
  }
  return null;
};

const executeCommand = command => {
  if (executeCommand === null) {
    return null;
  }

  if (command.name == "rollDice") {
    const roll = Math.floor(Math.random() * command.sides) + 1;
    return `rolled ${roll}`;
  }
};

module.exports = { parseCommand, executeCommand };
