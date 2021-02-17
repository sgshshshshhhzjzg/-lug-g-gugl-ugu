const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const anancımısınamq = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor !")
    .setColor("RANDOM")
    message.channel.send(anancımısınamq)
  }
  
  let kullanıcı = message.mentions.members.first()
  
  let log = db.fetch(`warnlog_${message.guild.id}`)
  
  if(!kullanıcı) {
    const qwesj31osbirsjçkokomkiığağağağağ = new Discord.MessageEmbed()
    .setDescription("Bir Kullanıcı Etiketlemen Gerekli !")
    .setColor("RANDOM")
    message.chnanel.send(qwesj31osbirsjçkokomkiığağağağağ)
  }
  
  db.delete(`warn_${message.guild.id}_${kullanıcı.id}`)
  const guhrıkgmpewrgşöergğewrglwerğşgöwergqergçerügqergqrögpqüergöqergöqrügöqergş = new Discord.MessageEmbed()
  .setDescription(`Başarıyla ${kullanıcı} Adlı Kullanıcının Uyarılarını Sıfırladım !`)
  .setColor("RANDOM")
  message.channel.send(guhrıkgmpewrgşöergğewrglwerğşgöwergqergçerügqergqrögpqüergöqergöqrügöqergş)
  
  const logmesajıxdhepinizisikçemamqpuştları = new Discord.MessageEmbed()
  .setDescription(`${kullanıcı} Adlı Kullanıcının Uyarıları ${message.author} Tarafından Sıfırlandı !`)
  .setColor("RANDOM")
  client.channels.cache.get(log).send(logmesajıxdhepinizisikçemamqpuştları)
  
  
  
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
