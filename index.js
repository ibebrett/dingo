const { RTMClient } = require("@slack/rtm-api");

const token = process.env.SLACK_BOT_TOKEN;

const rtm = new RTMClient(token);

rtm.on("message", event => {
  console.log('got message', event);
  if (event.text === "d20") {
    const roll = Math.floor(Math.random() * 20 + 1);
    rtm.sendMessage(`${roll}`, event.channel);
  }
});

(async () => {
  // Connect to Slack
  const { self, team } = await rtm.start();
})();
