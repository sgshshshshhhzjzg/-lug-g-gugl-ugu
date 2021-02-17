const Discord = require('discord.js')
const ayarlar = ("../ayarlar.json")

exports.run = async(client, message, args) => {
  
  let prefix = ayarlar.prefix
  
  const yardım = new Discord.MessageEmbed()
  .setTitle(`${client.username} Yardım Menüsü`)
  .setDescription(``)
  message.channel.send(yardım)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permlvl: 0
}

exports.help = {
  name: "yardım"
}