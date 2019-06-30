const { RTMClient } = require("@slack/rtm-api");

const { parseCommand, executeCommand } = require("./roll.js");

const token = process.env.SLACK_BOT_TOKEN;
const rtm = new RTMClient(token);

rtm.on("message", event => {
  const command = parseCommand(event.text);
  if (command !== null) {
    const text = executeCommand(command);
    if (text !== null) {
      rtm.sendMessage(text, event.channel);
    }
  }
});

(async () => {
  // Connect to Slack
  await rtm.start();
})();
