const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const anancıyızbizxyz = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor !")
    .setColor("RANDOM")
    message.channel.send(anancıyızbizxyz)
  }
  
  let kullanıcı = message.mentions.members.first() || message.author
  
  let uyarılar = db.fetch(`warn_${message.guild.id}_${kullanıcı.id}`)
  
  if(uyarılar == null) uyarılar = 0
  
  const uyarılarınişteaq = new Discord.MessageEmbed()
  .setTitle("Uyarılar !")
  .setDescription(`
${kullanıcı} Adlı Kullanıcının Uyarıları; 
**${uyarılar}**`)
  .setColor("RANDOM")
  message.channel.send(uyarılarınişteaq)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "uyarılar"
}; //Ccd Code
