const { AoiClient } = require("aoi.js");
require("dotenv").config();
const { keepalive } = require("keepalive.js");

const client = new AoiClient({
    prefix: "r?",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
});
client.loadCommands(`./komutlar`)
client.variables({
    uid: "0",
    abone: "1221830901516861460",
    aboneyetkili: "1243606018009600001"
});

const status = require('./status');
status.forEach(s => {
  client.status(s);
})
client.login(process.env.BOT_TOKEN);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(3000, () => {
  console.log("Server is ready.");
});
