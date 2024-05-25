const { AoiClient } = require("aoi.js");
require("dotenv").config();
require("@akarui/aoi.music");
const { keep_alive } = require("keepalive.js");

const client = new AoiClient({
    token: process.env.BOT_TOKEN || "",
    prefix: "r?", // Botunuzun komut ön eki
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"], // Botunuzun izinleri
    events: ["onMessage", "onInteractionCreate"], // Botunuzun olaylar
});
client.loadCommands(`./komutlar`) // Komutların bulunduğu klasör
client.variables({
    uid: "0",
    abone: "1221830901516861460",
    aboneyetkili: "1243606018009600001"
});

const status = require('./status');
status.forEach(s => {
  client.status(s);
})
client.login(); // Botu başlat
