const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const Discord = require('discord.js');

module.exports = async message => {
  let client = message.client;
  let prefix;
  
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.fetch(`prefix_${message.guild.id}`)
  }
    
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  } 
}