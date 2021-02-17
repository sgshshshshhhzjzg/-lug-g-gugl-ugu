const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const logişte = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin !")
    .setColor("RANDOM")
    message.channel.send(logişte)
  }
  
  let log = message.mentions.channels.first()
  
  if(args[0] === "ayarla") {
    db.set(`warnlog_${message.guild.id}`, log.id)
    const ayarlandı = new Discord.MessageEmbed()
    .setDescription(`Uyarı Log Kanalı Başarıyla ${log} Olarak Ayarlandı !`)
    .setColor("RANDOM")
    message.channel.send(ayarlandı)
  }
  
  if(args[0] === "sıfırla") {
    db.delete(`warnlog_${message.guild.id}`)
    const sıfırlandı = new Discord.MessageEmbed()
    .setDescription(`Uyarı Log Kanalı Başarıyla Sıfırlandı !`)
    .setColor("RANDOM")
    message.channel.send(sıfırlandı)
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "uyarı-log"
}; //Ccd Code
