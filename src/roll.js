const parseCommand = commandString => {
  if (commandString.startsWith("roll d")) {
    const die = {
      name: "rollDice",
      sides: 0,
      count: 1
    };
    die.sides = parseInt(commandString.slice("roll d".length));
    if (isNaN(die.sides)) {
      return {
        name: "error",
        description: 'Must use a number after "roll d" '
      };
    }

    return die;
  }
  return null;
};

const executeCommand = command => {
  if (executeCommand === null) {
    return null;
  }

  if (command.name === "rollDice") {
    const roll = Math.floor(Math.random() * command.sides) + 1;
    return `rolled ${roll}`;
  }

  if (command.name === "error") {
    return command.description;
  }
};

module.exports = { parseCommand, executeCommand };
