const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// BURAYA KENDI DISCORD ID'NI YAZ
const YOUR_ID = '1237070173031370763';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  // Seni etiketleyince GIF atsın
  if (message.mentions.users.has(YOUR_ID)) {
    message.channel.send('https://media.tenor.com/mYjvKp9n8EAAAAAM/arthur-morgan-red-dead-redemption2.gif');
  }
});

client.login(process.env.TOKEN);
