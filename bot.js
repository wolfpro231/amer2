var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '!'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "536126359966187530") return; 
  
if (message.content.startsWith(prefix + 'wolf')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('Lst' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)

});


client.login(process.env.BOT_TOKEN);