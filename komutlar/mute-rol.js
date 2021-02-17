const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setDescription("").setColor("RANDOM"))
}