const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('messageCreate', message => {
  if (message.mentions.has(client.user)) {
    message.channel.send(https://tenor.com/view/uchiha-itachi-uchiha-itachi-naruto-naruto-shippuden-gif-22397519);
  }
});

client.login(process.env.TOKEN);
