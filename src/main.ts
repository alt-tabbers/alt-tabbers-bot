import dotenv from "dotenv";
import { Client, Intents } from "discord.js";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

dotenv.config();

client.on("ready", () => {
  console.log(`${client?.user?.username} is online`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.startsWith("!") || msg.content.startsWith("AT:")) {
    msg.content = msg.content.replace("!", "");
    msg.content = msg.content.replace("AT", "");
    console.log("command:", msg.content);
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);
