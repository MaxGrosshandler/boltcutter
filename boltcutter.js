let express = require("express");
let app = express();
const Eris = require("eris");
let bot = new Eris.CommandClient(
  "YOURTOKENHERE", //replace with your bot's token
  {},
  {
    description: "A test bot made in Eris following the Boltcutter ideals",
    owner: "somebody",
    prefix: "!"
  }
);

bot.on("ready", () => {
  console.log("Ready!");
});

bot.registerCommand("ping", async msg => {
  await msg.channel.createMessage("Pong!").then(m => {
    let time = m.timestamp - msg.timestamp;
    return m.edit(`Pong! **${time}**ms`);
  }),
    {
      description: "Pong!",
      fullDescription: "This command gives the bot's latency!"
    };
});
bot.registerCommand(
  "echo",
  (msg, args) => {
    if (args.length === 0) {
      return "Invalid input";
    }
    let text = args.join(" ");
    return text;
  },
  {
    description: "Make the bot say something",
    fullDescription: "The bot will echo whatever is after the command label.",
    usage: "<text>"
  }
);

app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT || 4000);

bot.connect();
