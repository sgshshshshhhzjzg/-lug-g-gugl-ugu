const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const anancımısınamq = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor !")
    .setColor("RANDOM")
    message.channel.send(anancımısınamq)
  }
  
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "uyarı-sıfırla"
}; //Ccd Code
